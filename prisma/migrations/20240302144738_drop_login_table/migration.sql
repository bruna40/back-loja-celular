/*
  Warnings:

  - You are about to drop the column `login_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `logins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "logins" DROP CONSTRAINT "logins_user_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_login_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "login_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "logins";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
