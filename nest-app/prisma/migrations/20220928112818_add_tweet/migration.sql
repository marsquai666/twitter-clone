/*
  Warnings:

  - Added the required column `isAvtivated` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isAvtivated" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Tweet" (
    "id" TEXT NOT NULL,
    "text" VARCHAR(256) NOT NULL,
    "favoriteCount" INTEGER NOT NULL,
    "replyCount" INTEGER NOT NULL,
    "retweetCount" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "authorId" TEXT NOT NULL,
    "retweetTargetId" TEXT NOT NULL,
    "replyTargetId" TEXT NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_retweetTargetId_fkey" FOREIGN KEY ("retweetTargetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_replyTargetId_fkey" FOREIGN KEY ("replyTargetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
