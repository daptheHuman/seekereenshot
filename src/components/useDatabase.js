import { db } from './firebase/config';
import { doc, setDoc, collection } from 'firebase/firestore';
import { useEffect } from 'react';

const useDatabase = (url, name) => {
	//upload url into firestore

	useEffect(() => {
		if (url) {
			const docDb = async () =>
				setDoc(doc(db, 'images', name.name), {
					url: url,
					createdAt: new Date(),
				});
			docDb();
		}
	}, [name, url]);
};
export default useDatabase;
