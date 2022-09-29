/*
  Warnings:

  - A unique constraint covering the columns `[id,is_active,is_activated]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_id_is_active_is_activated_key" ON "User"("id", "is_active", "is_activated");
