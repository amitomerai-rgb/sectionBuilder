import { $Enums } from "@prisma/client";
import { getCardsViewSections } from "./db";

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

  const cardsViewArgs = await getCardsViewSections({
    shop,
    status,
    currPage: pageParam,
    name: nameParam,
    dir: dirParam,
    sortBy: sortByParam,
  });

  if (cardsViewArgs instanceof Error) {
    throw cardsViewArgs;
  }

  return cardsViewArgs;
};