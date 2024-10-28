
import { getTasks,addTask,deleteTask } from "@/drizzle/data";
import { NextResponse } from 'next/server';

export async function GET(request:Request){
    const todos = await getTasks();
    return NextResponse.json(todos);
}

export async function POST(request:Request){
    const { task } = await request.json();
    await addTask(task);
    return NextResponse.json(task+'added');
}

export async function DELETE(request:Request){
    const { id } = await request.json();
    await deleteTask(id);
    return NextResponse.json(' task deleted');

}