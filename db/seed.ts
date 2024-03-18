import { db, Todo } from "astro:db";
import { addDays, subDays } from "date-fns";

// https://astro.build/db/seed
export default async function seed() {
	const stamp = new Date();

	await db.insert(Todo).values([
		{
			id: 1,
			title: "Wash dishes",
			description: "Go ahead and do the dishes!",
			created: subDays(stamp, 4),
			updated: stamp,
			due: addDays(stamp, 2),
			status: "complete",
		},
		{
			id: 2,
			title: "Buy flowers",
			description: "Buy flowers at corner store!",
			created: subDays(stamp, 4),
			updated: stamp,
			due: addDays(stamp, 2),
			status: "in-progress",
		},
	]);
}
