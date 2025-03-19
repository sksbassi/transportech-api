/*
  Warnings:

  - You are about to drop the column `Document` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `user` table. All the data in the column will be lost.
  - Added the required column `document` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "Document",
DROP COLUMN "Email",
DROP COLUMN "Name",
DROP COLUMN "Password",
DROP COLUMN "Phone",
DROP COLUMN "Status",
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
