/*
  Warnings:

  - You are about to drop the `OpenTime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OpenTime" DROP CONSTRAINT "OpenTime_atmId_fkey";

-- DropForeignKey
ALTER TABLE "OpenTime" DROP CONSTRAINT "OpenTime_officeId_fkey";

-- DropTable
DROP TABLE "OpenTime";

-- CreateTable
CREATE TABLE "WorkTime" (
    "weekDay" INTEGER NOT NULL,
    "fromHour" INTEGER NOT NULL,
    "fromMins" INTEGER NOT NULL,
    "tillHour" INTEGER NOT NULL,
    "tillMins" INTEGER NOT NULL,
    "officeId" TEXT NOT NULL,
    "atmId" TEXT NOT NULL,

    CONSTRAINT "WorkTime_pkey" PRIMARY KEY ("officeId","atmId","weekDay")
);

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_atmId_fkey" FOREIGN KEY ("atmId") REFERENCES "ATM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
