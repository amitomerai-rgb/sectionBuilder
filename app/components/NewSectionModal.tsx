import { CallbackEvent } from "@shopify/polaris-types";
import { useState } from "react";
import { useFetcher } from "react-router";
import { ActionResult } from "app/serverActions";
import { useToastFetcher } from "app/hooks/toast";

const NewSectionModal = () => {
  const [nameInput, setNameInput] = useState("");

  const fetcher = useFetcher<ActionResult>();

  useToastFetcher(fetcher);

  const onInput = (e: CallbackEvent<"s-text-field">) =>
    setNameInput(e.currentTarget.value ?? "");
  const onChange = (e: CallbackEvent<"s-text-field">) =>
    setNameInput(e.currentTarget.value ?? "");

  const isSaveDisabled = nameInput.trim().length === 0;

  return (
    <s-modal size="small" id="create-section-modal" heading="Create Section">
      <fetcher.Form method="post">
        <s-stack alignItems="center" gap="base">
          <s-text-field
            label="section name"
            placeholder="Enter New Section Name"
            name="name"
            onInput={onInput}
            onChange={onChange}
            value={nameInput}
          />
          <input type="hidden" name="intent" value="create" />
          <s-button
            disabled={isSaveDisabled}
            type="submit"
            variant="primary"
            commandFor="create-section-modal"
            command="--hide"
          >
            SUBMIT
          </s-button>
        </s-stack>
      </fetcher.Form>
    </s-modal>
  );
};

export default NewSectionModal;
