import { analyze } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json(); // we need what the user has typed so far from the request
  const user = await getUserByClerkId(); // we need to get user id from the user info
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
    include: {
      analysis: true,
    },
  });

  const analysis = await analyze(updatedEntry.content);

  const updated = await prisma.analysis.upsert({
    // upsert means to update if found, otherwise to create a new one
    // Adding analysis to db
    where: {
      entryId: updatedEntry.id,
    },
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
    update: analysis,
  });

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } });
};
