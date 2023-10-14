-- CreateTable
CREATE TABLE "Inclusion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Inclusion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfficesInclusions" (
    "id" TEXT NOT NULL,
    "officeId" TEXT NOT NULL,
    "inclusionId" TEXT NOT NULL,

    CONSTRAINT "OfficesInclusions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ATMInclusions" (
    "id" TEXT NOT NULL,
    "atmId" TEXT NOT NULL,
    "inclusionId" TEXT NOT NULL,

    CONSTRAINT "ATMInclusions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OfficesInclusions" ADD CONSTRAINT "OfficesInclusions_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficesInclusions" ADD CONSTRAINT "OfficesInclusions_inclusionId_fkey" FOREIGN KEY ("inclusionId") REFERENCES "Inclusion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMInclusions" ADD CONSTRAINT "ATMInclusions_atmId_fkey" FOREIGN KEY ("atmId") REFERENCES "ATM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATMInclusions" ADD CONSTRAINT "ATMInclusions_inclusionId_fkey" FOREIGN KEY ("inclusionId") REFERENCES "Inclusion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
