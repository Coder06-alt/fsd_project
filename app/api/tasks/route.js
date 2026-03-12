import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find();
    return Response.json(tasks);
  } catch (error) {
    console.error(error);
    return Response.json([]);
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const task = await Task.create({
      title: body.title,
    });

    return Response.json(task);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create task" });
  }
}