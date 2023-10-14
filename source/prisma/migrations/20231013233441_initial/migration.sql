-- CreateTable
CREATE TABLE "OpenTime" (
    "officeId" TEXT NOT NULL,
    "weekDay" INTEGER NOT NULL,
    "fromHour" INTEGER NOT NULL,
    "fromMins" INTEGER NOT NULL,
    "tillHour" INTEGER NOT NULL,
    "tillMins" INTEGER NOT NULL,
    "aTMId" TEXT,

    CONSTRAINT "OpenTime_pkey" PRIMARY KEY ("officeId","weekDay")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfficesServices" (
    "id" TEXT NOT NULL,
    "officeId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "OfficesServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ATMServices" (
    "id" TEXT NOT NULL,
    "atmId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ATMServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Office" (
    "id" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "metroStation" TEXT NOT NULL,

    CONSTRAINT "Office_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ATM" (
    "id" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "ATM_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OpenTime" ADD CONSTRAINT "OpenTime_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenTime" ADD CONSTRAINT "OpenTime_aTMId_fkey" FOREIGN KEY ("aTMId") REFERENCES "ATM"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficesServices" ADD CONSTRAINT "OfficesServices_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficesServices" ADD CONSTRAINT "OfficesServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMServices" ADD CONSTRAINT "ATMServices_atmId_fkey" FOREIGN KEY ("atmId") REFERENCES "ATM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMServices" ADD CONSTRAINT "ATMServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
