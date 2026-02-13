import { Prisma } from "@prisma/client";
import { z } from "zod";
import {
  InputJsonValueSchema,
  NullableJsonNullValueInputSchema,
  SectionStatusSchema,
} from "./utils";
import { SectionProjectSelectSchema } from "./filters";

export const SectionProjectCreateInputSchema: z.ZodType<Prisma.SectionProjectCreateInput> =
  z.strictObject({
    id: z.uuid().optional(),
    shop: z.string(),
    name: z.string(),
    status: z.lazy(() => SectionStatusSchema).optional(),
    liquidCode: z.string().optional().nullable(),
    schemaCode: z.string().optional().nullable(),
    chatHistory: z
      .union([
        z.lazy(() => NullableJsonNullValueInputSchema),
        InputJsonValueSchema,
      ])
      .optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export const SectionProjectUncheckedCreateInputSchema: z.ZodType<Prisma.SectionProjectUncheckedCreateInput> =
  z.strictObject({
    id: z.uuid().optional(),
    shop: z.string(),
    name: z.string(),
    status: z.lazy(() => SectionStatusSchema).optional(),
    liquidCode: z.string().optional().nullable(),
    schemaCode: z.string().optional().nullable(),
    chatHistory: z
      .union([
        z.lazy(() => NullableJsonNullValueInputSchema),
        InputJsonValueSchema,
      ])
      .optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export const SectionProjectCreateArgsSchema: z.ZodType<Prisma.SectionProjectCreateArgs> =
  z
    .object({
      select: SectionProjectSelectSchema.optional(),
      data: z.union([
        SectionProjectCreateInputSchema,
        SectionProjectUncheckedCreateInputSchema,
      ]),
    })
    .strict();
