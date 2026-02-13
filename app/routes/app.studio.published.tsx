import SectionsGrid from "app/components/SectionsGrid/index";
import { createDuplicateFromExistingSection, handleCardsViewLoader } from "app/serverActions";
import { authenticate } from "app/shopify.server";
import { LoaderFunctionArgs, useLoaderData, ActionFunctionArgs } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);

  const res = await handleCardsViewLoader(
    request.url,
    session.shop,
    "PUBLISHED",
  );
  return res;
};
export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticate.admin(request);
  const formData = await request.formData();

  const formId = String(formData.get("id"));
  const intent = String(formData.get("intent"));

  let res

  if (intent === 'duplicate') {
    res = await createDuplicateFromExistingSection(formId)
  }

  if (!res || res instanceof Error) {
    return { ok: false, toast: { content: res?.message || "Unknown Error Or Action" } };
  }
  return { ok: true, action: intent, toast: { content: `Section ${res.name} Duplicated Successfully!` } };
};

export default function StudioPublished() {
  const { loadedSections } = useLoaderData<typeof loader>();

  return (
    <s-page inlineSize="large">
      <s-section padding="none">
        <s-box padding="small-200">
          <SectionsGrid sections={loadedSections} />
        </s-box>
      </s-section>
    </s-page>
  );
}
