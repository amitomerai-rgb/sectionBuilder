import { $Enums, Prisma, SectionProject } from "@prisma/client";
import prisma from "app/db.server";
import { identifyError } from "app/utils";
import { SectionProjectCreateInputSchema } from "app/validations/createSection";
import { SectionProjectFindManyArgsSchema, SectionProjectWhereInputSchema, SectionProjectWhereUniqueInputSchema } from "app/validations/filters";

export type ServerActions = "create" | "delete" | "duplicate";

export type ActionResult =
  | { ok: true; action: ServerActions; toast: { content: string } }
  | { ok: false; toast: { content: string } };

const handleCatch = (error: unknown) => {
  const { message, status } = identifyError(error);
  const returnedError = Object.assign(new Error(message), {
    status,
  });

  return returnedError as Error;
};

export const getSectionById = async (id: string) => {
  try {
    const where = SectionProjectWhereInputSchema.parse({ id });
    const section = await prisma.sectionProject.findFirstOrThrow({
      where,
    });

    return section;
  } catch (error) {
    return handleCatch(error);
  }
};

export const createNewSection = async (name: string, shop: string) => {
  try {
    const data = SectionProjectCreateInputSchema.parse({ name, shop });
    const newSection = await prisma.sectionProject.create({
      data,
    });

    return newSection;
  } catch (error) {
    return handleCatch(error);
  }
};

export const deleteExistingSection = async (id: string) => {
  try {
    const where = SectionProjectWhereUniqueInputSchema.parse({ id });
    const deletedSection = await prisma.sectionProject.delete({
      where,
    });
    return deletedSection;
  } catch (error) {
    return handleCatch(error);
  }
};

export const createDuplicateFromExistingSection = async (id: string) => {
  try {
    const where = SectionProjectWhereUniqueInputSchema.parse({ id });
    const sectionToCopy = await prisma.sectionProject.findFirstOrThrow({
      where,
    });

    const data = SectionProjectCreateInputSchema.parse({
      name: sectionToCopy.name,
      shop: sectionToCopy.shop,
      liquidCode: sectionToCopy.liquidCode,
      schemaCode: sectionToCopy.schemaCode,
      status: "DRAFT",
    });

    const returnedDuplicate = await prisma.sectionProject.create({
      data,
    });

    return returnedDuplicate;
  } catch (error) {
    return handleCatch(error);
  }
};

export const getCardsViewSections = async ({
  shop,
  status,
  currPage,
  name,
  dir,
  sortBy,
}: {
  shop: string;
  status: $Enums.SectionStatus;
  name: string | null;
  currPage: string | null;
  sortBy: string | null;
  dir: string | null;
}) => {
  try {
    const unvalidatedPrismaWhere: Prisma.SectionProjectWhereInput = {
      status,
      shop,
      ...(name && { name: { contains: name } }),
    };

    const where = SectionProjectWhereInputSchema.parse(unvalidatedPrismaWhere);

    const amountOfItems = await prisma.sectionProject.count({
      where,
    });

    const findManyFilter = SectionProjectFindManyArgsSchema.parse({
      skip: ((Number(currPage) || 1) - 1) * 9,
      take: 9,
      where: where,
      orderBy: { [sortBy || "createdAt"]: dir || "desc" },
      select: {
        id: true,
        createdAt: true,
        name: true,
        shop: true,
        updatedAt: true,
      },
    });

    const returnedItems = await prisma.sectionProject.findMany(findManyFilter);

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
  } catch (error) {
    return handleCatch(error);
  }
};