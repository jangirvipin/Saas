/*
  Warnings:

  - You are about to drop the column `contributionTypeId` on the `Contribution` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `Contribution` table. All the data in the column will be lost.
  - You are about to drop the `ContributionType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContributionSkills` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ContributionType` to the `Contribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Skill` to the `Contribution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_contributionTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_skillId_fkey";

-- DropForeignKey
ALTER TABLE "_ContributionSkills" DROP CONSTRAINT "_ContributionSkills_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContributionSkills" DROP CONSTRAINT "_ContributionSkills_B_fkey";

-- AlterTable
ALTER TABLE "Contribution" DROP COLUMN "contributionTypeId",
DROP COLUMN "skillId",
ADD COLUMN     "ContributionType" TEXT NOT NULL,
ADD COLUMN     "Skill" TEXT NOT NULL;

-- DropTable
DROP TABLE "ContributionType";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "_ContributionSkills";
