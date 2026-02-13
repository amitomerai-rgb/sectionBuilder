import { HTMLAttributes } from "react";

export const CardContainer = (props: HTMLAttributes<HTMLDivElement>) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderWidth: "1px",
        borderColor: "transparent",
        borderRightColor: "grey",
        borderBottomColor: "grey",
        borderRadius: "10px",
        padding: "5px",
        minHeight: "300px",
        minWidth: "300px",
        borderStyle: "solid",
        boxShadow: "-1px -1px 5px 1px grey",
        backgroundColor: "#f1f1f1",
        cursor: "pointer",
      }}
      {...props}
    >
      {props.children}
    </div>
  </div>
);

export const SectionCardHeader = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px 0px",
      borderRadius: "inherit",
      borderBottom: "0.25px solid #b5b7ba",
      fontSize: "20px",
      color: "#5c5c5c",
      backgroundColor: "white",
    }}
    {...props}
  >
    {props.children}
  </div>
);

export const SectionCardContentContainer = (
  props: HTMLAttributes<HTMLDivElement>,
) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
    {...props}
  >
    {props.children}
  </div>
);
