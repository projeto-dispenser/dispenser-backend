/*
  Warnings:

  - You are about to drop the column `data` on the `DataArduino` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `DataArduino` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DataArduino" DROP COLUMN "data",
DROP COLUMN "hora";
