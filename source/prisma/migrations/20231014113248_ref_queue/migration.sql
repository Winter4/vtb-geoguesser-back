/*
  Warnings:

  - The primary key for the `Queue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Queue` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Queue_pkey" PRIMARY KEY ("id");
