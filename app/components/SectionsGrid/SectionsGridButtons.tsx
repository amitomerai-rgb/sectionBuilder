import { useLoaderData, useLocation, useSearchParams } from "react-router";
import NewSectionModal from "../NewSectionModal";
import SectionsFilterAndSort from "./SectionsFilterAndSort";
import { handleCardsViewLoader } from "app/serverActions";

const SectionsGridButtons = () => {
  const { amountOfItems } = useLoaderData<typeof handleCardsViewLoader>();
  const [params, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  const currPage = Number(params.get("page") || 1);

  const isDrafts = pathname.includes("/drafts");

  const isNextDisabled = amountOfItems - currPage * 9 < 1;

  const onPrevious = () => {
    if (currPage > 1) {
      params.set("page", `${currPage - 1}`);
      setSearchParams(params);
    }
  };

  const onNext = () => {
    params.set("page", `${currPage + 1}`);
    setSearchParams(params);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto" }}>
      {isDrafts ? (
        <>
          <NewSectionModal />
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              display: "flex",
            }}
          >
            <s-clickable
              border="small-400 strong auto"
              borderWidth="base"
              borderRadius="base"
              padding="small-400"
              commandFor="create-section-modal"
              command="--show"
            >
              <s-icon size="base" type="plus" />
            </s-clickable>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", flex: "1" }} />
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          <s-button disabled={currPage <= 1} onClick={onPrevious}>
            previous
          </s-button>
          <s-button>{currPage}</s-button>
          <s-button disabled={isNextDisabled} onClick={onNext}>
            next
          </s-button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <SectionsFilterAndSort />
      </div>
    </div>
  );
};

export default SectionsGridButtons;
