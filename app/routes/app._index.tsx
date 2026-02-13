import { redirect } from "react-router";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  return redirect(`/app/studio/drafts${url.search}`);
};
