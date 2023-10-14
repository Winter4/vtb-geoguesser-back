/*
  Warnings:

  - You are about to drop the `ATMInclusions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ATMServices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OfficesInclusions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OfficesServices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ATMInclusions" DROP CONSTRAINT "ATMInclusions_atmId_fkey";

-- DropForeignKey
ALTER TABLE "ATMInclusions" DROP CONSTRAINT "ATMInclusions_inclusionId_fkey";

-- DropForeignKey
ALTER TABLE "ATMServices" DROP CONSTRAINT "ATMServices_atmId_fkey";

-- DropForeignKey
ALTER TABLE "ATMServices" DROP CONSTRAINT "ATMServices_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "OfficesInclusions" DROP CONSTRAINT "OfficesInclusions_inclusionId_fkey";

-- DropForeignKey
ALTER TABLE "OfficesInclusions" DROP CONSTRAINT "OfficesInclusions_officeId_fkey";

-- DropForeignKey
ALTER TABLE "OfficesServices" DROP CONSTRAINT "OfficesServices_officeId_fkey";

-- DropForeignKey
ALTER TABLE "OfficesServices" DROP CONSTRAINT "OfficesServices_serviceId_fkey";

-- DropTable
DROP TABLE "ATMInclusions";

-- DropTable
DROP TABLE "ATMServices";

-- DropTable
DROP TABLE "OfficesInclusions";

-- DropTable
DROP TABLE "OfficesServices";

-- CreateTable
CREATE TABLE "OfficeInclusion" (
    "id" TEXT NOT NULL,
    "officeId" TEXT NOT NULL,
    "inclusionId" TEXT NOT NULL,

    CONSTRAINT "OfficeInclusion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ATMInclusion" (
    "id" TEXT NOT NULL,
    "atmId" TEXT NOT NULL,
    "inclusionId" TEXT NOT NULL,

    CONSTRAINT "ATMInclusion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfficeService" (
    "id" TEXT NOT NULL,
    "officeId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "OfficeService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ATMService" (
    "id" TEXT NOT NULL,
    "atmId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ATMService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OfficeInclusion" ADD CONSTRAINT "OfficeInclusion_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficeInclusion" ADD CONSTRAINT "OfficeInclusion_inclusionId_fkey" FOREIGN KEY ("inclusionId") REFERENCES "Inclusion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMInclusion" ADD CONSTRAINT "ATMInclusion_atmId_fkey" FOREIGN KEY ("atmId") REFERENCES "ATM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMInclusion" ADD CONSTRAINT "ATMInclusion_inclusionId_fkey" FOREIGN KEY ("inclusionId") REFERENCES "Inclusion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficeService" ADD CONSTRAINT "OfficeService_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficeService" ADD CONSTRAINT "OfficeService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMService" ADD CONSTRAINT "ATMService_atmId_fkey" FOREIGN KEY ("atmId") REFERENCES "ATM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMService" ADD CONSTRAINT "ATMService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
