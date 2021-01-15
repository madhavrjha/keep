import React from 'react';
import Note from './Note.jsx';
import '../NoteList.css';

function NoteList(props) {
	const { note } = props;
	return (
		<div className='noteContainer'>
			{note.map(value => (
				<Note
					key={value.id}
					id={value.id}
					title={value.title}
					content={value.content}
				/>
			))}
		</div>
	);
}

export default NoteList;
