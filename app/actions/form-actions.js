"use server"
import { db } from "@/firebase/firebase";
import { setDoc, doc, updateDoc, increment, getDocs, collection } from "firebase/firestore";


// Cette fonction permet de soumettre le formulaire à Firestore
export async function handleFormSubmission(formData, consent) {
    try {
        // On incrémente le counter de la page d'accueil
        const counterRef = doc(db, "counters", "general");
        await updateDoc(counterRef, { userCount: increment(1) });
    } catch (error) {
        console.error("Error incrementing counter: ", error);
    }

    if (consent === 'true') {
        // console.log("submitting form to firestore at id : ", formData.id)
        try {
            const docRef = await setDoc(doc(db, "users", formData.id), {
                data: formData,
            });

            // console.log("Document written with ID: ", formData.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

// Cette fonction permet de récupérer tous les documents de la collection "users"
export default async function getAllDocuments() {
    console.log("Getting all documents...")
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const documents = querySnapshot.docs.map((doc) => doc.data().data);
        return documents;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
    }
}

// Cette fonction s'occupe de la soumission des informations depuis la page de résultats
export async function handleGameAskerSubmission(index, id, item, played, liked, wouldLiked) {
    const titleKey = "proposed_game_" + index
    const everPlayedKey = "proposed_game_" + index + "_ever_played"
    const likedKey = "proposed_game_" + index + "_liked"
    const wouldLikedKey = "proposed_game_" + index + "_would_liked"

    const docRef = doc(db, "users", id);
    try {
        await updateDoc(docRef, {
            [`data.${titleKey}`]: item,
            [`data.${everPlayedKey}`]: played,
            [`data.${likedKey}`]: liked,
            [`data.${wouldLikedKey}`]: wouldLiked,
        });
        // console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

