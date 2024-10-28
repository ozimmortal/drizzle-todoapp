"use client";

import { useState } from "react";
import { Task } from "@/drizzle/type";

function RenderTasks({ tasks, onDelete }: { tasks: Task[], onDelete: (index: number) => void }) {
  if (tasks.length === 0) {
    return <p className="text-center">No tasks yet!</p>;
  }

  return (
    <div className="flex flex-col m-2 p-3 gap-3">
      {tasks.map((task: Task, index: number) => (
        <div
          key={index}
          className="flex shadow-sm h-12 border w-96 justify-between pl-2 pr-2 items-center rounded-md"
        >
          <p>{task.task}</p>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 shadow-md rounded-md w-7 h-8 hover:bg-slate-400"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Display({ tasks, handleDelete}: { tasks: string[], handleDelete: (index: number) => void }) {
 
  

  return (
    <div className="w-fit shadow-md">
      <RenderTasks tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}
