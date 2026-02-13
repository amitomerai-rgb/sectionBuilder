import StudioNavbar from "app/components/StudioNavbar";
import { authenticate } from "app/shopify.server";
import { LoaderFunctionArgs, Outlet, useNavigation } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};
export const action = () => {};

export default function Studio() {
  const navigation = useNavigation();
  const isNavigating = navigation.state !== "idle";
  return (
    <s-page inlineSize="large">
      <s-stack gap="base">
        <StudioNavbar />
        {isNavigating ? (
          <div
            style={{
              width: "100%",
              height: "650px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <s-spinner size="large-100" />
          </div>
        ) : (
          <Outlet />
        )}
      </s-stack>
    </s-page>
  );
}
