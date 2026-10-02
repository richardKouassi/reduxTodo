import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTasks, selectFilter, setFilter } from "../features/tasks/taskSlice";
import Task from "./Task";

const FILTERS = [
    {value : "all", label: "Toutes"},
    {value : "done", label: "Complétées"},
    {value : "todo", label: "A faire"},
]

export default function ListTask() {
    const tasks = useSelector(selectVisibleTasks);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

      return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => dispatch(setFilter(f.value))}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === f.value
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {tasks.length === 0 ? (
        <p className="rounded-lg border border-dashed border-blue-200 py-8 text-center text-slate-400">
          Aucune tâche à afficher.
        </p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}