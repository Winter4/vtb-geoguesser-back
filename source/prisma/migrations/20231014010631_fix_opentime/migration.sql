/*
  Warnings:

  - The primary key for the `OpenTime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `aTMId` on the `OpenTime` table. All the data in the column will be lost.
  - Added the required column `atmId` to the `OpenTime` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OpenTime" DROP CONSTRAINT "OpenTime_aTMId_fkey";

-- AlterTable
ALTER TABLE "OpenTime" DROP CONSTRAINT "OpenTime_pkey",
DROP COLUMN "aTMId",
ADD COLUMN     "atmId" TEXT NOT NULL,
ADD CONSTRAINT "OpenTime_pkey" PRIMARY KEY ("officeId", "atmId", "weekDay");

-- AddForeignKey
ALTER TABLE "OpenTime" ADD CONSTRAINT "OpenTime_atmId_fkey" FOREIGN KEY ("atmId") REFERENCES "ATM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
