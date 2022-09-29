/*
  Warnings:

  - You are about to drop the column `authorId` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteCount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `replyCount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `replyTargetId` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `retweetCount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `retweetTargetId` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isAvtivated` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `favorite_count` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reply_count` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reply_target_id` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retweet_count` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retweet_target_id` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_activated` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_replyTargetId_fkey";

-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_retweetTargetId_fkey";

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "authorId",
DROP COLUMN "favoriteCount",
DROP COLUMN "replyCount",
DROP COLUMN "replyTargetId",
DROP COLUMN "retweetCount",
DROP COLUMN "retweetTargetId",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "favorite_count" INTEGER NOT NULL,
ADD COLUMN     "reply_count" INTEGER NOT NULL,
ADD COLUMN     "reply_target_id" TEXT NOT NULL,
ADD COLUMN     "retweet_count" INTEGER NOT NULL,
ADD COLUMN     "retweet_target_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "isAvtivated",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_activated" BOOLEAN NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_retweet_target_id_fkey" FOREIGN KEY ("retweet_target_id") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_reply_target_id_fkey" FOREIGN KEY ("reply_target_id") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
