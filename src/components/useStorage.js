import { useEffect, useState } from 'react';
import { storage } from './firebase/config';
import useDatabase from './useDatabase.js';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [url, setUrl] = useState(null);

	useDatabase(url, file);

	useEffect(() => {
		setProgress(0);
	}, [file]);

	const upload = () => {
		const fileRef = ref(storage, 'images/' + file.name);

		const uploadTask = uploadBytesResumable(fileRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				let progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100,
				);
				setProgress(progress);
			},
			(error) => {
				console.log(error);
			},
			async () => {
				const downloadURL = await getDownloadURL(fileRef);
				setUrl(downloadURL);
			},
		);
	};

	return (
		<div>
			<button
				onClick={() => {
					upload();
				}}
			>
				Upload
			</button>
			<br></br>

			<p>
				<progress value={progress} max="100" />
				{progress}% <br></br>
				{progress === 100 && 'Uploaded!'}
			</p>
		</div>
	);
};

export default useStorage;
