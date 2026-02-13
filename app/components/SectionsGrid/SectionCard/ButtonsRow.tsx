import { useLocation } from "react-router";
import DeleteSectionModal from "../../DeleteSectionModal";

const ButtonsRow = ({
  id,
  name,
  onDelete,
  onDuplicate,
}: {
  id: string;
  name: string;
  onDuplicate: () => void;
  onDelete: () => void;
}) => {
  const { pathname } = useLocation();

  const isDrafts = pathname.includes("/drafts");

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {isDrafts && (
        <>
          <DeleteSectionModal id={id} name={name} onDelete={onDelete} />
          <s-button
            commandFor={`delete-section-modal-${id}`}
            command="--show"
            tone="critical"
          >
            DELETE
          </s-button>
          <s-button>EDIT</s-button>
        </>
      )}
      <input type="hidden" name="intent" value="duplicate" />
      <input type="hidden" name="id" value={id} />
      <s-button onClick={onDuplicate}>DUPLICATE</s-button>
    </div>
  );
};

export default ButtonsRow;
