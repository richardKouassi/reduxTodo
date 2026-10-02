import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask, deleteTask } from "../features/tasks/taskSlice";


export default function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(task.description);
    const dispatch = useDispatch();

    const save = () => {
        const value = draft.trim();
        if (!value) return;
        dispatch(editTask({ id: task.id, description: value }));
        setIsEditing(false);

    };

    const cancel = () => {
        setDraft(task.description);
        setIsEditing(false);
    };

    return (

    <li className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white px-4 py-3">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        className="h-5 w-5 accent-blue-600"
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={draft}
            autoFocus
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
            className="flex-1 rounded-md border border-blue-300 px-2 py-1 text-slate-700 outline-none focus:ring-2 focus:ring-blue-100"
          />
          <button
            onClick={save}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Enregistrer
          </button>
          <button
            onClick={cancel}
            className="text-sm text-slate-500 hover:underline"
          >
            Annuler
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 ${
              task.isDone ? "text-slate-400 line-through" : "text-slate-700"
            }`}
          >
            {task.description}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Modifier
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-sm text-slate-400 hover:text-red-500"
          >
            Supprimer
          </button>
        </>
      )}
    </li>
  );
}