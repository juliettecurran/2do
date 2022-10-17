import { useCreateNote } from "../../services/notes";
import Button from "../Common/Buttons/Button";

const CreateNoteForm = () => {
	const { mutate } = useCreateNote();
	return (
		<form
			className='bg-white bg-opacity-40 rounded-2xl w-full p-5 hidden lg:inline flex-col'
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
			<div>
				<input
					className='py-2 px-4 rounded my-2 w-full border-none'
					required
					type='text'
					name='title'
					placeholder='Task'
				/>
			</div>
			<div>
				<textarea
					required
					name='body'
					placeholder='Details'
					className=' my-2 w-full rounded border-none'
				/>
			</div>
			{/* <Button type='submit' /> */}
			{/* <button type='submit'>Create note</button> */}
			{/* <Button>Add</Button> */}
			<button className='font-bold text-white rounded-full bg-purple-600 flex items-center justify-center font-mono h-11 w-11 text-2xl'>
				+
			</button>
		</form>
	);
};

export default CreateNoteForm;
