export const useToggleAllMembersBtn = () => {
	const displayBtn = (ref) => {
		ref.value.style.display = "flex";
	};
	const hideBtn = (ref) => {
		ref.value.style.display = "none";
	};
	return { displayBtn, hideBtn };
};
