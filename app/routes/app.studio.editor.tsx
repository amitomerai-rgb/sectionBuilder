import { authenticate } from "app/shopify.server";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useRouteError,
} from "react-router";
import ChatArea from "app/components/ChatArea";
import CodeEditor from "app/components/CodeEditor";
import { getSectionById } from "app/serverActions/db";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  const url = new URL(request.url);

  const sectionId = url.searchParams.get("sectionId");

  if (!sectionId) {
    throw Error("No Section Id Provided");
  }

  const res = await getSectionById(sectionId);

  if (res instanceof Error) {
    throw Error(`No Such Section Exists. See Full Error:\n${res.message}`);
  }

  return res;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  //const formData = await request.formData();
  await authenticate.admin(request);

  //const res = await handleDraftsAction(formData, session.shop);
  return null;
};

export function HydrateFallback() {
  return <s-spinner size="large-100" />
}

export default function StudioDrafts() {
  return (
    <s-page inlineSize="large">
      <s-section padding="none">
        <s-box padding="small-200">
          <div
            style={{
              height: "700px",
              display: "grid",
              gridTemplateColumns: "2fr auto 1fr",
            }}
          >
            <CodeEditor />
            <s-divider color="strong" direction="block" />
            <ChatArea />
          </div>
        </s-box>
      </s-section>
    </s-page>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {error instanceof Error ? error.message : "Unknown Error"}
    </div>
  );
}
