import { z } from "zod";
import { Prisma } from "@prisma/client";

export const identifyError = (error: unknown) => {
  let status = 500;
  let message = "Internal Server Error";
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2025":
        // Record not found
        status = 404;
        message = "Resource not found";
        break;

      case "P2002":
        status = 409;
        message = "Unique constraint violation";
        break;

      case "P2003":
        status = 409;
        message = "Foreign key violation";
        break;
    }
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    status = 400;
    message = "Bad Input. Arguments Invalid";
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    status = 503;
    message = "Prisma Can’t Initialize/Connect";
  } else if (error instanceof Prisma.PrismaClientRustPanicError) {
    message = "Critical Error. Engine Blew up";
  } else if (error instanceof z.ZodError) {
    status = 400;
    message = error.issues[0]?.message ?? "Invalid input";
  }

  return { status, message }
};
