import { type SectionProject } from "@prisma/client";
import SectionsGridButtons from "./SectionsGridButtons";
import SectionCard from "./SectionCard";
import { SectionsGridContainer } from "./styled";
import { useFetcher } from "react-router";
import { ActionResult } from "app/serverActions";
import { useToastFetcher } from "app/hooks/toast";

const SectionsGrid = ({ sections }: { sections: SectionProject[] }) => {
  const actionFetcher = useFetcher<ActionResult>();

  useToastFetcher(actionFetcher);

  const submit = (data: Record<string, string>) => {
    const fd = new FormData();
    for (const [k, v] of Object.entries(data)) fd.append(k, v);
    actionFetcher.submit(fd, { method: "post" });
  };

  return (
    <s-stack rowGap="base">
      <SectionsGridButtons />
      <SectionsGridContainer>
        {sections.map((section) => (
          <SectionCard
            section={section}
            key={section.id}
            onDuplicate={() => submit({ intent: "duplicate", id: section.id })}
            onDelete={() => submit({ intent: "delete", id: section.id })}
          />
        ))}
      </SectionsGridContainer>
    </s-stack>
  );
};
export default SectionsGrid;
