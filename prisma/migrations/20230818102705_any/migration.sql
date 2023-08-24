-- CreateTable
CREATE TABLE "Category2" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Category2ToManagers" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category2_slug_key" ON "Category2"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_Category2ToManagers_AB_unique" ON "_Category2ToManagers"("A", "B");

-- CreateIndex
CREATE INDEX "_Category2ToManagers_B_index" ON "_Category2ToManagers"("B");

-- AddForeignKey
ALTER TABLE "_Category2ToManagers" ADD CONSTRAINT "_Category2ToManagers_A_fkey" FOREIGN KEY ("A") REFERENCES "Category2"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Category2ToManagers" ADD CONSTRAINT "_Category2ToManagers_B_fkey" FOREIGN KEY ("B") REFERENCES "Managers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
