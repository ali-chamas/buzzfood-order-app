/*
  Warnings:

  - The primary key for the `Managers` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Managers" DROP CONSTRAINT "Managers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Managers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Managers_id_seq";
