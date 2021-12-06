import React from 'react';
import { useState } from 'react';
import useStorage from './useStorage';

const Upload = () => {
	const [file, setFile] = useState(null);

	const fileType = ['image/png', 'image/jpeg'];

	const fileHandler = (e) => {
		let fileSelected = e.target.files[0];
		if (fileSelected && fileType.includes(fileSelected.type)) {
			setFile(fileSelected);
		} else {
			alert('Please select a valid image file');
			e.target.value = '';
			setFile(null);
		}
	};

	const storage = useStorage(file);

	return (
		<div>
			<input type="file" onChange={fileHandler} />
			{file && storage}
			<br></br>
			{file ? (
				<img
					style={{ width: '10rem', height: '10rem' }}
					src={URL.createObjectURL(file)}
					alt={file.name}
				/>
			) : (
				<p>Please choose your file</p>
			)}
		</div>
	);
};

export default Upload;
