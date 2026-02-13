import { ActionResult, createDuplicateFromExistingSection, createNewSection, deleteExistingSection, ServerActions } from "./db";

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

export const handlePublishedAction = async (formData: FormData) => {
  const formId = String(formData.get("id"));
  const intent = String(formData.get("intent"));

  let res;

  if (intent === "duplicate") {
    res = await createDuplicateFromExistingSection(formId);
  }

  if (!res || res instanceof Error) {
    return {
      ok: false,
      toast: { content: res?.message || "Unknown Error Or Action" },
    };
  }
  return {
    ok: true,
    action: intent,
    toast: { content: `Section ${res.name} Duplicated Successfully!` },
  };
};
