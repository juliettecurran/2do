import { rest } from "msw";

const notes = [
	{
		id: 1,
		title: "First note",
		body: "This is the first note"
	},
	{
		id: 2,
		title: "Second note",
		body: "This is the second note"
	},
	{
		id: 3,
		title: "Third note",
		body: "This is the third note"
	},
	{ id: 4, title: "Fourth note", body: "This is the fourth note" },
	{ id: 5, title: "Fifth note", body: "This is the fifth note" },
	{
		id: 6,

		title: "Sixth note",
		body: "This is the sixth note"
	},

	{ id: 7, title: "Seventh note", body: "This is the seventh note" }
];

export const handlers = [
	// Handles a GET request
	rest.get("/notes", (req, res, ctx) => {
		if (Math.random() < 0.1) {
			return res(ctx.status(500));
		}
		return res(
			ctx.delay(),
			ctx.status(200),
			ctx.json({
				count: notes.length,
				notes
			})
		);
	}),

	// Handles a POST request
	rest.post("/notes", async (req, res, ctx) => {
		const { title, body } = (await req.json()) as {
			title: string;
			body: string;
		};

		if (!title || !body) {
			return res(
				ctx.status(400),
				ctx.json({
					errors: {
						title: !title ? "Title is required" : undefined,
						body: !body ? "Body is required" : undefined
					}
				})
			);
		}

		const note = {
			id: notes.length + 1,
			title,
			body
		};

		notes.push(note);

		return res(ctx.delay(), ctx.status(201), ctx.json(note));
	})
];
