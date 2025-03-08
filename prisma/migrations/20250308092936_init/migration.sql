/*
  Warnings:

  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_postId_fkey`;

-- DropIndex
DROP INDEX `Post_postId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` MODIFY `postId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `dob` DATETIME(3) NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
