import React from 'react';
import { addDoc, db, collection} from '../firebase/config';

export type COLLECTIONS = "messages" | "users"

const  useAddToCollection = (col: COLLECTIONS) => {
    const [error, setError] = React.useState('')

    const addDocument = async (document: Record<string, any>) => {
        try {
            await addDoc(collection(db, col), document)
        } catch (err:any) {
            console.log(err)
            setError( "an error occurred")
        }
    }

    return { error, addDocument}

}

export default useAddToCollection
