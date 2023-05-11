-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "schedule1" TEXT NOT NULL,
    "schedule2" TEXT NOT NULL,
    "schedule3" TEXT NOT NULL,
    "schedule4" TEXT NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dashboard" ADD CONSTRAINT "Dashboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
