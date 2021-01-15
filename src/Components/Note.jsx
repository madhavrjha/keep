import React from 'react';
import '../Note.css';

function Note(props) {
	const { id, title, content } = props;
	return (
		<div className='note'>
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
}

export default Note;
