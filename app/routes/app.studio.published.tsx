import { useAppBridge } from "@shopify/app-bridge-react";
import SectionsGrid from "app/components/SectionsGrid/index";
import { handlePublishedAction } from "app/serverActions/actions";
import { handleCardsViewLoader } from "app/serverActions/loaders";
import { authenticate } from "app/shopify.server";
import { useEffect, useState } from "react";
import {
  LoaderFunctionArgs,
  useLoaderData,
  ActionFunctionArgs,
  useRouteError,
} from "react-router";

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

  const res = await handlePublishedAction(formData);
  return res;
};

export function HydrateFallback() {
  return <s-spinner size="large-100" />
}

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
