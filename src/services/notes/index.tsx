import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// response from the server
const NoteResponseSchema = z.object({
	id: z.number(),
	title: z.string(),
	body: z.string().max(240)
});

// response from the server
const NotesResponseSchema = z.object({
	count: z.number(),
	notes: z.array(NoteResponseSchema)
});

// Omit & Pick
// type Note = Omit<z.infer<typeof NoteResponseSchema>, "id" | "">;

const NoteRequestSchema = NoteResponseSchema.omit({ id: true });
type NoteRequest = z.infer<typeof NoteRequestSchema>;

// getNotes API request
export const getNotes = () => {
	return fetch("/notes")
		.then((res) => res.json())
		.then(NotesResponseSchema.parse);
};

// getNotes custom react hook
export const useNotes = () => {
	return useQuery(["notes"], getNotes);
};

// createNotes API request
export const createNote = (note: NoteRequest) => {
	const validatedNote = NoteRequestSchema.parse(note);
	return fetch("/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(validatedNote)
	})
		.then((res) => res.json())
		.then(NoteResponseSchema.parse);
};

// createNotes custom react hook
export const useCreateNote = () => {
	const queryClient = useQueryClient();
	return useMutation((note: NoteRequest) => createNote(note), {
		onSuccess: () => {
			// invalidate the notes query
			queryClient.invalidateQueries(["notes"]);
		}
	});
};

// TODO - querykey factory
// Testing
