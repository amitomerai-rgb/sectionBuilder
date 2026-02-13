import { SectionProject } from "@prisma/client";
import {
  CardContainer,
  SectionCardContentContainer,
  SectionCardHeader,
} from "./styled";
import ButtonsRow from "./ButtonsRow";
import { useNavigate } from "react-router";

const SectionCard = ({
  section,
  onDelete,
  onDuplicate,
}: {
  section: SectionProject;
  onDuplicate: () => void;
  onDelete: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      onDoubleClick={() => navigate(`/app/studio/editor?sectionId=${section.id}`)}
    >
      <SectionCardHeader>{section.name}</SectionCardHeader>
      <SectionCardContentContainer>
        {section.liquidCode ? <></> : "Nothing To Show Yet"}
      </SectionCardContentContainer>
      <ButtonsRow
        id={section.id}
        name={section.name}
        onDelete={onDelete}
        onDuplicate={onDuplicate}
      />
    </CardContainer>
  );
};

export default SectionCard;
