import { authenticate } from "app/shopify.server";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useLoaderData,
  useRouteError,
} from "react-router";
import SectionsGrid from "app/components/SectionsGrid/index";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useEffect, useState } from "react";
import { handleCardsViewLoader } from "app/serverActions/loaders";
import { handleDraftsAction } from "app/serverActions/actions";

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

export function HydrateFallback() {
  return <s-spinner size="large-100" />
}

export default function StudioDrafts() {
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

export function ErrorBoundary() {
  const error = useRouteError();

  const [mounted, setMounted] = useState(false);

  const shopify = useAppBridge();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!(error instanceof Error)) return;

    const msg = error.message;
    if (!msg) return;

    shopify.toast?.show(msg, { isError: true });
  }, [error, mounted, shopify]);

  return null;
}
