import { Prisma } from "@prisma/client";
import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema, EnumSectionStatusFieldUpdateOperationsInputSchema, InputJsonValueSchema, NullableJsonNullValueInputSchema, NullableStringFieldUpdateOperationsInputSchema, SectionStatusSchema, StringFieldUpdateOperationsInputSchema } from "./utils";
import { SectionProjectSelectSchema, SectionProjectUncheckedUpdateInputSchema, SectionProjectWhereUniqueInputSchema } from "./filters";

export const SectionProjectUpdateInputSchema: z.ZodType<Prisma.SectionProjectUpdateInput> =
  z.strictObject({
    id: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    shop: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    status: z
      .union([
        z.lazy(() => SectionStatusSchema),
        z.lazy(() => EnumSectionStatusFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    liquidCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    schemaCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    chatHistory: z
      .union([
        z.lazy(() => NullableJsonNullValueInputSchema),
        InputJsonValueSchema,
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  });

  export const SectionProjectUpdateArgsSchema: z.ZodType<Prisma.SectionProjectUpdateArgs> = z.object({
    select: SectionProjectSelectSchema.optional(),
    data: z.union([ SectionProjectUpdateInputSchema, SectionProjectUncheckedUpdateInputSchema ]),
    where: SectionProjectWhereUniqueInputSchema, 
  }).strict();