import React from "react";
import { useCreateNote, useNotes } from "../../services/notes";
import Note from "./Note";

const NotesGrid = () => {
	const { data: notes } = useNotes();
	const { mutate } = useCreateNote();
	return (
		<div className='py-5 col-span-4 lg:col-span-3'>
			<ul className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{notes?.notes.map((note) => (
					<Note title={note.title} body={note.body} />
				))}
			</ul>
		</div>
	);
};

export default NotesGrid;
