import { defineDb, defineTable, column, Todo } from "astro:db";

export const Todo = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text({ optional: true }),
		due: column.date(),
		created: column.date(),
		updated: column.date(),
		status: column.text(),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: { Todo },
});
