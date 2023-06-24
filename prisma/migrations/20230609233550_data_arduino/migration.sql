-- CreateTable
CREATE TABLE "DataArduino" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "temperatura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DataArduino_pkey" PRIMARY KEY ("id")
);
