import { $Enums, Prisma, SectionProject } from "@prisma/client";
import prisma from "./db.server";

type ServerActions = 'create' | 'delete' | 'duplicate'

export type ActionResult =
  | { ok: true; action: ServerActions; toast: { content: string } }
  | { ok: false; toast: { content: string } };

export const createNewSection = async (name: string, shop: string) => {
  try {
    const newSection = await prisma.sectionProject.create({
      data: { name, shop },
    });

    return newSection;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Error(error.message);
    }
  }
};

export const deleteExistingSection = async (id: string) => {
  try {
    const deletedSection = await prisma.sectionProject.delete({
      where: { id },
    });
    return deletedSection;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Error(error.message);
    }
  }
};

export const createDuplicateFromExistingSection = async (id: string) => {
  try {
    const sectionToCopy = await prisma.sectionProject.findFirstOrThrow({
      where: { id },
    });

    const returnedDuplicate = await prisma.sectionProject.create({
      data: {
        name: sectionToCopy.name,
        shop: sectionToCopy.shop,
        liquidCode: sectionToCopy.liquidCode,
        schemaCode: sectionToCopy.schemaCode,
        status: "DRAFT",
      },
    });

    return returnedDuplicate;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Error(error.message);
    }
  }
};

export const handleCardsViewLoader = async (
  reqUrl: string,
  shop: string,
  status: $Enums.SectionStatus,
) => {
  const url = new URL(reqUrl);
  const pageParam = url.searchParams.get("page");
  const sortByParam = url.searchParams.get("sortBy");
  const dirParam = url.searchParams.get("dir");
  const nameParam = url.searchParams.get("name");
  const currPage = pageParam || 1;

  const prismaWhere: Prisma.SectionProjectWhereInput = {
    status,
    shop,
    ...(nameParam && { name: { contains: nameParam } }),
  };

  const amountOfItems = await prisma.sectionProject.count({
    where: prismaWhere,
  });

  const returnedItems = await prisma.sectionProject.findMany({
    skip: (Number(currPage) - 1) * 9,
    take: 9,
    where: prismaWhere,
    orderBy: { [sortByParam || "createdAt"]: dirParam || "desc" },
    select: {
      id: true,
      createdAt: true,
      name: true,
      shop: true,
      updatedAt: true,
    },
  });

  const loadedSections = returnedItems.map<SectionProject>((item) => {
    const newSectionProject: SectionProject = {
      ...item,
      status,
      liquidCode: null,
      schemaCode: null,
      chatHistory: null,
    };

    return newSectionProject;
  });
  return { loadedSections, amountOfItems };
};

export const handleDraftsAction = async (
  formData: FormData,
  shop: string,
): Promise<ActionResult> => {
  const formName = String(formData.get("name"));
  const formId = String(formData.get("id"));
  const intent = String(formData.get("intent")) as ServerActions;

  let res;
  let message;

  switch (intent) {
    case "create": {
      res = await createNewSection(formName, shop);
      message = `${formName} Section Created Successfully!`;
      break;
    }
    case "delete": {
      res = await deleteExistingSection(formId);
      message = `Section ${res?.name} Deleted Successfully!`;
      break;
    }
    case "duplicate": {
      res = await createDuplicateFromExistingSection(formId);
      message = `Section ${res?.name} Duplicated Successfully!`;
      break;
    }
    default:
      message = "Unknown Action";
      break;
  }

  if (!res || res instanceof Error) {
    return { ok: false, toast: { content: res?.message || "Unknown Error" } };
  }
  return { ok: true, action: intent, toast: { content: message } };
};
