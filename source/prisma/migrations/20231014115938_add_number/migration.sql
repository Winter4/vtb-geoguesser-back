/*
  Warnings:

  - The primary key for the `Queue` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_pkey",
ADD COLUMN     "number" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Queue_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Queue_id_seq";
