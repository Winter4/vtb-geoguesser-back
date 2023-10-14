/*
  Warnings:

  - Added the required column `metroStation` to the `ATM` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('PENDING', 'FINISHED');

-- AlterTable
ALTER TABLE "ATM" ADD COLUMN     "metroStation" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Queue" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "ticket" TEXT NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'PENDING',
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Queue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
