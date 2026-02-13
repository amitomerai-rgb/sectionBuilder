import { authenticate } from "app/shopify.server";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import { handleDraftsAction, handleCardsViewLoader } from "app/serverActions";
import SectionsGrid from "app/components/SectionsGrid/index";
import { useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);

  const res = await handleCardsViewLoader(request.url, session.shop, "DRAFT");
  return res;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { session } = await authenticate.admin(request);

  const res = await handleDraftsAction(formData, session.shop);
  return res;
};

export default function StudioDrafts() {
  const { loadedSections } = useLoaderData<typeof loader>();
  const [mounted, setMounted] = useState(false);
    const actionRes = useActionData<typeof action>();
    const shopify = useAppBridge();
  
    useEffect(() => setMounted(true), []);
  
    useEffect(() => {
      if (!mounted) return;
      if (actionRes && actionRes.ok && actionRes.action === "delete") {
        shopify.toast?.show("Section Deleted Successfully!");
      }
    }, [actionRes, mounted, shopify]);

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
