import { NextResponse } from "next/server";
import { MongoDB } from "../../../lib/config/db";
import TodoModel from "../models/todo-models";

const LoadDB = async () => {
  await MongoDB();
};
LoadDB();

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { name, description } = await request.json();
  await TodoModel.create({
    name,
    description,
  });
  return NextResponse.json({ msg: "Todo task add successfully" });
}

export async function DELETE(request) {
  const taskId = await request.nextUrl.searchParams.get("taskId");
  await TodoModel.findByIdAndDelete(taskId);
  return NextResponse.json({ msg: "Todo task delete successfully" });
}

export async function PUT(request) {
  const taskId = await request.nextUrl.searchParams.get("taskId");
  await TodoModel.findByIdAndUpdate(taskId, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "Todo task completed" });
}
