-- CreateTable
CREATE TABLE "SectionProject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "liquidCode" TEXT,
    "schemaCode" TEXT,
    "chatHistory" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "SectionProject_shop_idx" ON "SectionProject"("shop");

-- CreateIndex
CREATE INDEX "SectionProject_shop_status_idx" ON "SectionProject"("shop", "status");
