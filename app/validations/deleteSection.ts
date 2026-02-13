import { Prisma } from "@prisma/client";
import { z } from "zod";
import {
  SectionProjectSelectSchema,
  SectionProjectWhereUniqueInputSchema,
} from "./filters";

export const SectionProjectDeleteArgsSchema: z.ZodType<Prisma.SectionProjectDeleteArgs> =
  z
    .object({
      select: SectionProjectSelectSchema.optional(),
      where: SectionProjectWhereUniqueInputSchema,
    })
    .strict();
