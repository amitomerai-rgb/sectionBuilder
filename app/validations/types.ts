import { z } from "zod";
import { InputJsonValueSchema, SectionStatusSchema } from "./utils";

export type SectionStatusType = `${z.infer<typeof SectionStatusSchema>}`;

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;

