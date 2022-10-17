import React from "react";

const Note = (note: any) => {
	const { id, title, body } = note;
	console.log(note);
	return (
		<li className=' bg-white border-opacity-100 m-2 rounded-2xl p-6'>
			<p className='text-cente text-xl'>{note.title}</p>{" "}
			<hr className='h-2 border-black w-1/3 my-2' />
			{/* Start task checkbox */}
			<input
				id='purple-checkbox'
				type='checkbox'
				value=''
				className='w-7 h-7 text-purple-600 ring-2 ring-purple-600 bg-gray-100 rounded-full border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
			/>
			{/* End task checkbox */}
			<p className='font-monarcha'>{note.body}</p>
			<div>
				<hr className='h-2 border-black w-1/3 my-2' />

				{/* Start tag chip  */}
				<span className='px-2 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease'>
					#tag
					<button className='bg-transparent hover focus:outline-none'>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='times'
							className='w-3 ml-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 352 512'
						>
							<path
								fill='currentColor'
								d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
							></path>
						</svg>
					</button>
				</span>
				{/* End tag chip  */}
				<div className='flex items-center mr-4'></div>
			</div>
		</li>
	);
};

export default Note;
