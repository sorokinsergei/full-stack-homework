-- CreateEnum
CREATE TYPE "grade_type_enum" AS ENUM ('math', 'science', 'history');

-- CreateTable
CREATE TABLE "grades" (
    "id" SERIAL NOT NULL,
    "class" "grade_type_enum" NOT NULL,
    "grade" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "grades" ADD CONSTRAINT grade_check CHECK ("grade" >= 0 AND "grade" <= 100);


-- CreateTable
CREATE TABLE "numbers" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "numbers_pkey" PRIMARY KEY ("id")
);

