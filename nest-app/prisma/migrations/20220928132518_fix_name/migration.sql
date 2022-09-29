/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `is_deleted` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "isDeleted",
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL;
