import { Prisma } from "@prisma/client";
import { z } from "zod";

export const SectionStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const NullsOrderSchema = z.enum(["first", "last"]);

export const SectionProjectScalarFieldEnumSchema = z.enum([
  "id",
  "shop",
  "name",
  "status",
  "liquidCode",
  "schemaCode",
  "chatHistory",
  "createdAt",
  "updatedAt",
]);

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional(),
  });

export const EnumSectionStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSectionStatusFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.lazy(() => SectionStatusSchema).optional(),
  });

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional().nullable(),
  });

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.coerce.date().optional(),
  });

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> =
  z.strictObject({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
  });

export const NestedEnumSectionStatusFilterSchema: z.ZodType<Prisma.NestedEnumSectionStatusFilter> =
  z.strictObject({
    equals: z.lazy(() => SectionStatusSchema).optional(),
    in: z
      .lazy(() => SectionStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => SectionStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => SectionStatusSchema),
        z.lazy(() => NestedEnumSectionStatusFilterSchema),
      ])
      .optional(),
  });

export const EnumSectionStatusFilterSchema: z.ZodType<Prisma.EnumSectionStatusFilter> =
  z.strictObject({
    equals: z.lazy(() => SectionStatusSchema).optional(),
    in: z
      .lazy(() => SectionStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => SectionStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => SectionStatusSchema),
        z.lazy(() => NestedEnumSectionStatusFilterSchema),
      ])
      .optional(),
  });

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  });

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  });

export const NullableJsonNullValueInputSchema: z.ZodType<Prisma.NullableJsonNullValueInput> =
  z
    .enum(["DbNull", "JsonNull"])
    .transform((value) =>
      value === "JsonNull"
        ? Prisma.JsonNull
        : value === "DbNull"
          ? Prisma.DbNull
          : value,
    );

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(
  () =>
    z.union([
      z.string(),
      z.number(),
      z.boolean(),
      z.object({ toJSON: z.any() }),
      z.record(
        z.string(),
        z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)])),
      ),
      z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    ]),
);

export const JsonNullableFilterSchema: z.ZodType<Prisma.JsonNullableFilter> =
  z.strictObject({
    equals: InputJsonValueSchema.optional(),
    path: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    string_contains: z.string().optional(),
    string_starts_with: z.string().optional(),
    string_ends_with: z.string().optional(),
    array_starts_with: InputJsonValueSchema.optional().nullable(),
    array_ends_with: InputJsonValueSchema.optional().nullable(),
    not: InputJsonValueSchema.optional(),
  });
