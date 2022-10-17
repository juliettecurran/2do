import { Link } from "react-router-dom";
import { useNotes } from "../../../services/notes";
import React from "react";

const Navigation = () => {
	const { data } = useNotes();

	return (
		<nav className='m-5 flex '>
			<div className='font-bold text-white rounded-full bg-purple-600 flex items-center justify-center font-mono h-11 w-11 text-2xl'>
				{data?.count}
			</div>
			<p className='text-xl align-middle text-white mx-2'>tasks 2do</p>
		</nav>
	);
};

export default Navigation;
