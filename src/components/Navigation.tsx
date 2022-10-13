import { Link } from "react-router-dom";
import { useNotes } from "../services/notes";
import React from "react";

const Navigation = () => {
	const { data } = useNotes();

	return (
		<nav>
			<ul>
				<li>
					<Link className='text-2xl' to='/'>
						Notes ({data?.count})
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
