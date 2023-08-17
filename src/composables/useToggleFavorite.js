import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.js";
import { ref } from "vue";

export const useToggleFavorite = () => {
	const toggleFavorite = async (userRef) => {
		let user = await getDoc(userRef);
		let isFavorite = ref(user.data().favorite);
		await updateDoc(userRef, { favorite: !isFavorite.value });
		user = await getDoc(userRef);
		isFavorite.value = user.data().favorite;
		return isFavorite.value;
	};

	return { toggleFavorite };
};
