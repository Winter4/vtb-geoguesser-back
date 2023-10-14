/*
  Warnings:

  - The primary key for the `ATMInclusion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ATMInclusion` table. All the data in the column will be lost.
  - The primary key for the `ATMService` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ATMService` table. All the data in the column will be lost.
  - The primary key for the `OfficeInclusion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `OfficeInclusion` table. All the data in the column will be lost.
  - The primary key for the `OfficeService` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `OfficeService` table. All the data in the column will be lost.
  - You are about to drop the `Queue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_serviceId_fkey";

-- AlterTable
ALTER TABLE "ATMInclusion" DROP CONSTRAINT "ATMInclusion_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ATMInclusion_pkey" PRIMARY KEY ("atmId", "inclusionId");

-- AlterTable
ALTER TABLE "ATMService" DROP CONSTRAINT "ATMService_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ATMService_pkey" PRIMARY KEY ("atmId", "serviceId");

-- AlterTable
ALTER TABLE "OfficeInclusion" DROP CONSTRAINT "OfficeInclusion_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "OfficeInclusion_pkey" PRIMARY KEY ("officeId", "inclusionId");

-- AlterTable
ALTER TABLE "OfficeService" DROP CONSTRAINT "OfficeService_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "OfficeService_pkey" PRIMARY KEY ("officeId", "serviceId");

-- DropTable
DROP TABLE "Queue";

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "ticket" TEXT NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'PENDING',
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
