/*
  Warnings:

  - You are about to drop the `Category2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categoryy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Category2ToManagers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Category2ToManagers" DROP CONSTRAINT "_Category2ToManagers_A_fkey";

-- DropForeignKey
ALTER TABLE "_Category2ToManagers" DROP CONSTRAINT "_Category2ToManagers_B_fkey";

-- DropTable
DROP TABLE "Category2";

-- DropTable
DROP TABLE "Categoryy";

-- DropTable
DROP TABLE "_Category2ToManagers";
