"use client"
import { useState,useEffect } from "react";
import Display from "@/components/display";

const tasks = [
  "do something",
  "do something else",
  "try to do something",
  "try to do something else"
]
export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    getTasks();
  },[])
  async function getTasks() {
    const res = await fetch('/api/todos');
    const todos = await res.json();
    setTasks(todos);
    console.log(todos);  
  }
  async function addTask() {
    if(task !== "") {
      setTasks([...tasks, task]);
      await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
      });
      getTasks();
    }
    setTask("");
  }
  const handleDelete =  async (index: number) => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: index }),
    })
    getTasks();
  };
  return (
    <div className="flex justify-center flex-col items-center mt-4 p-4 gap-4">
      <h1 className="text-4xl font-bold">Drizzle Todo App</h1>
      <div>
        <div className="flex gap-3 flex-col mt-4">
          <input className="w-96 h-10 shadow-md rounded-md p-2 border mt-2 text-sm" type="text" name="task" id="task" placeholder="Add Your Task" value={task} onChange={(e) => setTask(e.target.value)} />
          <button className="p-1 shadow-md rounded-md w-96 h-10 font-semibold text-sm hover:bg-slate-400 bg-black text-white" onClick={addTask}>Add</button>
        </div>

      </div>
      <Display tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}
