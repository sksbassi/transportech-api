-- CreateTable
CREATE TABLE "user" (
    "idUser" TEXT NOT NULL,
    "Document" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Status" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("idUser")
);
