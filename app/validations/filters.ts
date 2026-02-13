import { Prisma } from "@prisma/client";
import { z } from "zod";
import {
  DateTimeFieldUpdateOperationsInputSchema,
  DateTimeFilterSchema,
  EnumSectionStatusFieldUpdateOperationsInputSchema,
  EnumSectionStatusFilterSchema,
  InputJsonValueSchema,
  JsonNullableFilterSchema,
  NullableJsonNullValueInputSchema,
  NullableStringFieldUpdateOperationsInputSchema,
  SectionProjectScalarFieldEnumSchema,
  SectionStatusSchema,
  SortOrderInputSchema,
  SortOrderSchema,
  StringFieldUpdateOperationsInputSchema,
  StringFilterSchema,
  StringNullableFilterSchema,
} from "./utils";

export const SectionProjectWhereInputSchema: z.ZodType<Prisma.SectionProjectWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => SectionProjectWhereInputSchema),
        z.lazy(() => SectionProjectWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SectionProjectWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SectionProjectWhereInputSchema),
        z.lazy(() => SectionProjectWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    shop: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    status: z
      .union([
        z.lazy(() => EnumSectionStatusFilterSchema),
        z.lazy(() => SectionStatusSchema),
      ])
      .optional(),
    liquidCode: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    schemaCode: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    chatHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
  });

export const SectionProjectWhereUniqueInputSchema: z.ZodType<Prisma.SectionProjectWhereUniqueInput> =
  z
    .object({
      id: z.uuid(),
    })
    .and(
      z.strictObject({
        id: z.uuid().optional(),
        AND: z
          .union([
            z.lazy(() => SectionProjectWhereInputSchema),
            z.lazy(() => SectionProjectWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => SectionProjectWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => SectionProjectWhereInputSchema),
            z.lazy(() => SectionProjectWhereInputSchema).array(),
          ])
          .optional(),
        shop: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        name: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        status: z
          .union([
            z.lazy(() => EnumSectionStatusFilterSchema),
            z.lazy(() => SectionStatusSchema),
          ])
          .optional(),
        liquidCode: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        schemaCode: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        chatHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
      }),
    );

export const SectionProjectSelectSchema: z.ZodType<Prisma.SectionProjectSelect> =
  z
    .object({
      id: z.boolean().optional(),
      shop: z.boolean().optional(),
      name: z.boolean().optional(),
      status: z.boolean().optional(),
      liquidCode: z.boolean().optional(),
      schemaCode: z.boolean().optional(),
      chatHistory: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
    })
    .strict();

export const SectionProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.SectionProjectOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    shop: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    liquidCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    schemaCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    chatHistory: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  });

export const SectionProjectUncheckedUpdateInputSchema: z.ZodType<Prisma.SectionProjectUncheckedUpdateInput> =
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

  export const SectionProjectFindManyArgsSchema: z.ZodType<Prisma.SectionProjectFindManyArgs> = z.object({
    select: SectionProjectSelectSchema.optional(),
    where: SectionProjectWhereInputSchema.optional(), 
    orderBy: z.union([ SectionProjectOrderByWithRelationInputSchema.array(), SectionProjectOrderByWithRelationInputSchema ]).optional(),
    cursor: SectionProjectWhereUniqueInputSchema.optional(), 
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([ SectionProjectScalarFieldEnumSchema, SectionProjectScalarFieldEnumSchema.array() ]).optional(),
  }).strict();
