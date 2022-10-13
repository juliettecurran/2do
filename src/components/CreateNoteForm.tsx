import { useCreateNote, useNotes } from "../services/notes";
import React from "react";

const CreateNoteForm = () => {
	const { mutate } = useCreateNote();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const target = e.target as HTMLFormElement;
				const formData = new FormData(target);
				const title = formData.get("title") as string;
				const body = formData.get("body") as string;

				mutate({
					title,
					body
				});
			}}
		>
			<label className='block'>
				<span className='block'>Title</span>
				<input
					required
					type='text'
					name='title'
					placeholder='Title...'
				/>
			</label>
			<label className='block'>
				<span className='block'>Body</span>
				<textarea required name='body' placeholder='Body...' />
			</label>
			<button type='submit'>Create note</button>
		</form>
	);
};

export default CreateNoteForm;
