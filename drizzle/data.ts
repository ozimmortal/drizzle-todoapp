import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { taskTable } from '@/drizzle/schema';
  
const db = drizzle(process.env.DATABASE_URL!);


export async function getTasks() {
  const tasks =  await db
    .select()
    .from(taskTable)
    return tasks;
}

export async function addTask(task: string) {
  await db
    .insert(taskTable)
    .values({ task })
    console.log("task added");
    
}

export async function deleteTask(id: number) {
  await db
    .delete(taskTable)
    .where(eq(taskTable.id, id))
    console.log("task deleted");
}