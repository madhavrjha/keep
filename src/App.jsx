import React, { useState } from 'react';
import NoteList from './Components/NoteList';
import { uuid } from 'uuidv4';
import './App.css';

function App(props) {
	const [noteTitle, setNoteTitle] = useState('');
	const [noteContent, setNoteContent] = useState('');
	const [noteList, setNoteList] = useState([]);

	function addNoteToList() {
		setNoteList(prevList => {
			return [
				...prevList,
				{
					id: uuid(),
					title: noteTitle,
					content: noteContent,
				},
			];
		});
	}

	return (
		<div className='App'>
			<div className='inputKeep'>
				<input
					type='text'
					placeholder='Your Title goes here...'
					name='title'
					value={noteTitle}
					onChange={e => setNoteTitle(e.target.value)}
				/>
				<textarea
					placeholder='Your Notes goes here...'
					name='content'
					value={noteContent}
					onChange={e => setNoteContent(e.target.value)}
				></textarea>
				<button onClick={addNoteToList}>Add Notes</button>
			</div>
			<NoteList note={noteList} />
		</div>
	);
}

export default App;
