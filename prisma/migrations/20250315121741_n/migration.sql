/*
  Warnings:

  - You are about to drop the column `ContributionType` on the `Contribution` table. All the data in the column will be lost.
  - You are about to drop the column `Skill` on the `Contribution` table. All the data in the column will be lost.
  - Added the required column `contributionType` to the `Contribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill` to the `Contribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contribution" DROP COLUMN "ContributionType",
DROP COLUMN "Skill",
ADD COLUMN     "contributionType" TEXT NOT NULL,
ADD COLUMN     "skill" TEXT NOT NULL;
