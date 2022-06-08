/*
  Warnings:

  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_deptId_fkey`;

-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `student_deptId_fkey`;

-- DropTable
DROP TABLE `course`;

-- DropTable
DROP TABLE `department`;

-- DropTable
DROP TABLE `student`;

-- DropTable
DROP TABLE `teacher`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(255) NULL,
    `password` VARCHAR(100) NULL,
    `gender` VARCHAR(100) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phonenumber` VARCHAR(100) NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
