import { useState, useEffect } from "react";
import { DocumentData } from "@firebase/firestore/dist/lite";

import { COLLECTIONS } from "./useAddToCollection";

import { collection, query, db, onSnapshot, orderBy } from "../firebase/config";

const useGetCollection = (col: COLLECTIONS) => {
  const [error, setError] = useState("");
  const [documents, setDocuments] = useState<DocumentData[]>([]);

 useEffect(() => {
    const q = query(collection(db, col), orderBy("createdAt"));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const messages: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(messages);
        setError("");
      },
      (err: any) => {
        console.log(err.message);
        setError("an error occurred");
      }
    );

    return () => {
        unsubscribe();
    }
 }, [col])


  return { error, documents };
};

export default useGetCollection;
