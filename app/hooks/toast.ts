import { useAppBridge } from "@shopify/app-bridge-react";
import { ActionResult } from "app/serverActions";
import { useEffect, useState } from "react";
import { FetcherWithComponents } from "react-router";

export const useToastFetcher = (fetcher: FetcherWithComponents<ActionResult>) => {
  const [mounted, setMounted] = useState(false);

  const shopify = useAppBridge();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (fetcher.state !== "idle") return;

    const msg = fetcher.data?.toast?.content;
    if (!msg) return;

    shopify.toast?.show(msg, { isError: !fetcher.data?.ok });
  }, [fetcher.data, fetcher.state, mounted, shopify]);

  return null
};
