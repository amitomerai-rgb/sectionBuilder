import { HTMLAttributes } from "react";

export const SectionsGridContainer = (
  props: HTMLAttributes<HTMLDivElement>,
) => (
  <div
    style={{
      height: "600px",
      overflowY: "scroll",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridRowGap: "30px",
        padding: "7px 0 5px 0",
      }}
    >
      {props.children}
    </div>
  </div>
);
