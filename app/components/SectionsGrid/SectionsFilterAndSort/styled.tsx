import { HTMLAttributes } from "react";

export const SortBySelect = (props: HTMLAttributes<HTMLSelectElement>) => (
  <select
    style={{
      width: "130px",
      borderRadius: "8px",
      borderColor: "rgb(187, 185, 185)",
    }}
    {...props}
  >
    {props.children}
  </select>
);
