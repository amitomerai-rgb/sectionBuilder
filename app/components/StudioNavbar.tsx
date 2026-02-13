import { useLocation } from "react-router";

const StudioNavbar = () => {
  const { pathname } = useLocation();

  const isDrafts = pathname.includes("/drafts");

  return (
    <s-stack direction="inline" gap="small">
      <s-link href="/app/studio/drafts">
        <s-stack
          direction="inline"
          borderColor="strong"
          borderWidth="base"
          borderStyle="solid"
          borderRadius="small"
          padding="small-400"
          gap="small-400"
        >
          <span style={{ ...(isDrafts && { fontWeight: 'bold' }) }}>My Drafts</span>
          <s-icon type="folder" />
        </s-stack>
      </s-link>
      <s-link href="/app/studio/published">
        <s-stack
          direction="inline"
          borderColor="strong"
          borderWidth="base"
          borderStyle="solid"
          borderRadius="small"
          padding="small-400"
          gap="small-400"
        >
          <span style={{ ...(!isDrafts && { fontWeight: 'bold' }) }}>Published Sections</span>
          <s-icon type="check-circle" tone="success" />
        </s-stack>
      </s-link>
    </s-stack>
  );
};

export default StudioNavbar;
