import { Prisma } from "@prisma/client";
import { z } from "zod";
import { SectionProjectOrderByWithRelationInputSchema, SectionProjectSelectSchema, SectionProjectWhereInputSchema, SectionProjectWhereUniqueInputSchema } from "./filters";
import { SectionProjectScalarFieldEnumSchema } from "./utils";

export const SectionProjectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SectionProjectFindFirstOrThrowArgs> = z.object({
    select: SectionProjectSelectSchema.optional(),
    where: SectionProjectWhereInputSchema.optional(), 
    orderBy: z.union([ SectionProjectOrderByWithRelationInputSchema.array(), SectionProjectOrderByWithRelationInputSchema ]).optional(),
    cursor: SectionProjectWhereUniqueInputSchema.optional(), 
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([ SectionProjectScalarFieldEnumSchema, SectionProjectScalarFieldEnumSchema.array() ]).optional(),
  }).strict();

  export const SectionProjectFindUniqueArgsSchema: z.ZodType<Prisma.SectionProjectFindUniqueArgs> = z.object({
    select: SectionProjectSelectSchema.optional(),
    where: SectionProjectWhereUniqueInputSchema, 
  }).strict();
  
  export const SectionProjectFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SectionProjectFindUniqueOrThrowArgs> = z.object({
    select: SectionProjectSelectSchema.optional(),
    where: SectionProjectWhereUniqueInputSchema, 
  }).strict();