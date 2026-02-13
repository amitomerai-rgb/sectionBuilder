import StudioNavbar from "app/components/StudioNavbar";
import { authenticate } from "app/shopify.server";
import { LoaderFunctionArgs, Outlet } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};
export const action = () => {};

export default function Studio() {
  return (
    <s-page inlineSize="large">
      <s-stack gap="base">
        <StudioNavbar />
        <Outlet />
      </s-stack>
    </s-page>
  );
}
