import { loader } from "app/routes/app.studio.editor";
import { useLoaderData } from "react-router";

const CodeEditor = () => {
  const section = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      code {section.name}
    </div>
  );
};

export default CodeEditor
