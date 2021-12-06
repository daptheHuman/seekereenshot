import { useState, useEffect } from 'react';
import { db } from './firebase/config';
import { collection, query, getDocs, onSnapshot } from 'firebase/firestore';

const ImageGrid = () => {
	const [image, setImage] = useState([]);

	// read data from firestore
	const colRef = collection(db, 'images');
	const imageCol = [];
	if (colRef) {
		onSnapshot(colRef, (snapshot) => {
			snapshot.forEach((doc) => {
				imageCol.push(doc.data());
				console.log(doc.data());
			});
			setImage(imageCol);
		});
		console.log(image);
	}

	return (
		<div className="image-grid">
			{image &&
				image.map((item) => (
					<div className="image-grid__item" key={item.id}>
						<img src={item.url} alt={item.title} />
					</div>
				))}
		</div>
	);
};

export default ImageGrid;
