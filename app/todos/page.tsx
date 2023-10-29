"use client";
import Todo from "@/components/Todo";
import { ITodo } from "@/types/todo";
import Header from "@/components/Header";
import Counter from "@/components/Counter";
import { useState } from "react";


export default function Page() {
    const [input, setInput] = useState("");
    
    const todos:ITodo[] = [
        {
            "id": "1",
            "title": "Buy groceries",
            "completed": false
        },
        {
            "id": "2",
            "title": "Finish work project",
            "completed": false
        },
        {
            "id": "3",
            "title": "Go for a run",
            "completed": true
        }
    ]
    

    // Add Todo
    const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    // Complete Todo
    const toggleComplete = async (todo: ITodo) => {
    };

    // Delete Todo
    const deleteTodo = async (id: string) => {

    };

  

    return (
        <div className="container">
            <Header />
            <div className="md:w-1/2 w-3/4 mx-auto pt-20">
                <Counter todos={todos} />
                <form className="flex flex-row py-4" onSubmit={addTodo}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-gray p-2 w-full rounded-lg mr-2 border border-solid border-light"
                        placeholder="write your next task"
                    />
                    <button
                        type="submit"
                        className="bg-primary w-10 h-10 rounded-full font-bold text-lg text-dark"
                        >
                        +
                    </button>
                </form>

                <div className="flex flex-col gap-3">
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                        />
                        ))}
                </div>
            </div>
        </div>
        );
}
