import { ITodo } from "@/types/todo";
import React from "react";

const Counter = ({ todos }: { todos: ITodo[] }) => {
    return (
        <div>
            <div className="border border-solid rounded-[30px] p-10 flex flex-row justify-between">
                <div className="flex flex-col text-left  justify-center">
                    <h2 className="text-2xl font-bold">To-do Done</h2>
                    <p className="font-light">Keep it Up</p>
                </div>
                <div className="w-[100px] h-[100px] text-3xl text-dark font-bold rounded-full bg-primary flex items-center justify-center">
                    {todos.filter((todo: ITodo) => todo.completed === true).length}/
                    {todos.length}
                </div>
            </div>
        </div>
        );
};

export default Counter;
