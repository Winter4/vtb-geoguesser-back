/*
  Warnings:

  - Added the required column `officeId` to the `Queue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Queue` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketOwner" AS ENUM ('MINE', 'OTHER');

-- AlterTable
ALTER TABLE "Queue" ADD COLUMN     "officeId" TEXT NOT NULL,
ADD COLUMN     "owner" "TicketOwner" NOT NULL;

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
