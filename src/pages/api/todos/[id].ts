import type { APIRoute } from "astro";
import { db, eq, Todo } from "astro:db";

export const DELETE: APIRoute = async (ctx) => {
	const id = Number(ctx.params.id);

	await db.delete(Todo).where(eq(Todo.id, id));

	return new Response(null, { status: 204 });
};

export const GET: APIRoute = async (ctx) => {
	const id = Number(ctx.params.id);
	await db.select().from(Todo).where(eq(Todo.id, id));

	return new Response(null, { status: 204 });
};
