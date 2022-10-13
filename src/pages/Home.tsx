import Navigation from "../components/Navigation";
import React from "react";
import { useCreateNote, useNotes } from "../services/notes";
import CreateNoteForm from "../components/CreateNoteForm";

const Home = () => {
	const { data: notes } = useNotes();
	const { mutate } = useCreateNote();

	return (
		<div className='text-indigo-600 font-bold grid grid-cols-1 justify-items-center bg-black p-6'>
			<Navigation />
			<div className='bg-white'>
				<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center my-15'>
					{notes?.notes.map((note) => (
						<li
							key={note.id}
							className='border-4 border-blue-100 border-opacity-100 p-4 rounded-md'
						>
							<h2>{note.title}</h2>
							<p>{note.body}</p>
						</li>
					))}
				</ul>
				<CreateNoteForm />
			</div>
		</div>
	);
};
export default Home;
