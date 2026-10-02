import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export default function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = description.trim();
    if (!value) return;
    dispatch(addTask(value));
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nouvelle tâche..."
        className="flex-1 rounded-lg border border-blue-200 bg-white px-4 py-2 text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
      >
        Ajouter
      </button>
    </form>
  );
}
  