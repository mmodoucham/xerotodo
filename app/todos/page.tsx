"use client";
import Todo from "@/components/Todo";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import {
  query,
  collection,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { ITodo } from "@/types/todo";
import Header from "@/components/Header";
import Counter from "@/components/Counter";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function Page() {
  const router = useRouter();
  const { isLoggedIn, user } = useAuth();

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const q = query(collection(db, "todos"));
    let todosArray: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      todosArray.push({ ...doc.data(), id: doc.id });
    });
    setTodos(todosArray);
  };

  // Add Todo
  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      title: input,
      completed: false,
    });
    setInput("");
    fetchTodos();
  };

  // Complete Todo
  const toggleComplete = async (todo: ITodo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
    fetchTodos();
  };

  // Delete Todo
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
    fetchTodos();
  };

  // Load Todos
  useEffect(() => {
    fetchTodos();
  }, []);

  if (!isLoggedIn) {
    return "You dont have access to this page";
  }

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
