import { format } from "date-fns";
import Toggle from "../components/Toggle";
import { createSignal } from "solid-js";

type TodoType = {
	id: string;
	title: string;
	description?: string;
	created: Date;
	updated: Date;
	due: Date;
	status: "complete" | "in-progress" | "new" | "ready";
};

interface TodoProps {
	todo: TodoType;
	locked?: boolean; // Wether or not the todo is interactable
}

const dateFormat = "yyyy / MM / dd - hh:mm:ss";

const Todo = ({ todo }: TodoProps) => {
	const [checked, setChecked] = createSignal(todo.status === "complete");

	return (
		<article class="flex min-h-screen flex-col gap-8 bg-slate-200 p-8">
			<header class="flex flex-col gap-2 border border-slate-500 p-4">
				<h1 class="text-4xl">{todo.title}</h1>
				<aside class="flex flex-col gap-0.5 text-sm text-slate-500">
					<span>Created: {format(new Date(todo.created), dateFormat)}</span>
					<span>Updated: {format(new Date(todo.updated), dateFormat)}</span>
					<span>Due: {format(new Date(todo.due), dateFormat)}</span>
				</aside>
			</header>
			<section>
				<h2 class="text-lg font-bold">Description</h2>
				<p>{todo.description}</p>
			</section>
			<Toggle
				checked={checked()}
				onChange={setChecked}
			>
				<span>{todo.status}</span>
			</Toggle>
		</article>
	);
};

export default Todo;
