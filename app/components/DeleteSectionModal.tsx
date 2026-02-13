const DeleteSectionModal = ({
  id,
  name,
  onDelete,
}: {
  id: string;
  name: string;
  onDelete: () => void;
}) => {
  return (
    <s-modal
      size="small"
      id={`delete-section-modal-${id}`}
      heading="Delete Section"
    >
      <s-text type="strong">
        Are you sure you want to delete section &apos;{name}&apos;?
      </s-text>
      <s-stack direction="inline" justifyContent="center" gap="base">
        <input type="hidden" name="intent" value="delete" />
        <input type="hidden" name="id" value={id} />
        <s-button
          onClick={onDelete}
          tone="critical"
          commandFor={`delete-section-modal-${id}`}
          command="--hide"
        >
          DELETE
        </s-button>
        <s-button commandFor={`delete-section-modal-${id}`} command="--hide">
          CANCEL
        </s-button>
      </s-stack>
    </s-modal>
  );
};

export default DeleteSectionModal;
