"use client";
import React from "react";
import Image from "next/image";
import { ITodo } from "@/types/todo";

interface TodoProps {
  todo: ITodo;
  toggleComplete: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
}

const Todo = ({ todo, toggleComplete, deleteTodo }: TodoProps) => {
  return (
    <div
      key={todo.id}
      className="border border-solid bg-gray p-4 rounded-lg flex flex-row items-center justify-between"
    >
      <div className="flex flex-row items-center">
        <button
          onClick={() => toggleComplete(todo)}
          className={`w-5 h-5 rounded-full border  mr-2  ${
            todo.completed ? "bg-green border-green" : "border-primary"
          }`}
        ></button>
        <h2
          className={`text-lg font-semibold ${
            todo.completed ? "line-through text-green" : "text-light"
          }`}
        >
          {todo.title}
        </h2>
      </div>
      <div className="flex flex-row items-center gap-1 ">
        {/* <Image src="/icons/edit.svg" alt="profile" width={30} height={30} onClick={()=>()}/> */}
        <Image
          src="/icons/delete.svg"
          alt="profile"
          width={30}
          height={30}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
