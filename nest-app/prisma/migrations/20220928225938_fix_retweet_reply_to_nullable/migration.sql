-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_reply_target_id_fkey";

-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_retweet_target_id_fkey";

-- AlterTable
ALTER TABLE "Tweet" ALTER COLUMN "reply_target_id" DROP NOT NULL,
ALTER COLUMN "retweet_target_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_retweet_target_id_fkey" FOREIGN KEY ("retweet_target_id") REFERENCES "Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_reply_target_id_fkey" FOREIGN KEY ("reply_target_id") REFERENCES "Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
