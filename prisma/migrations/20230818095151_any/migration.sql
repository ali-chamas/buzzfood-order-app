-- AlterTable
ALTER TABLE "Managers" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Managers_pkey" PRIMARY KEY ("id");
