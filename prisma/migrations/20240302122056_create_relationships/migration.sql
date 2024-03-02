/*
  Warnings:

  - You are about to drop the column `password` on the `logins` table. All the data in the column will be lost.
  - Added the required column `password_hash` to the `logins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `logins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "logins" DROP COLUMN "password",
ADD COLUMN     "password_hash" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "login_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "logins" ADD CONSTRAINT "logins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_login_id_fkey" FOREIGN KEY ("login_id") REFERENCES "logins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
