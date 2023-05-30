import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const currentUser = useContext(CurrentUserContext);

	function handleChangeName(evt) {
		setName(evt.target.value)
	}
	function handleChangeDescription(evt) {
		setDescription(evt.target.value)
	}

	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser, isOpen]);


	function handleSubmit(e) {
		e.preventDefault();
		onUpdateUser({
			name: name,
			about: description,
		});
	}
	return (
		<PopupWithForm
			name='open-profile'
			title='Редактировать профиль'
			buttonText={`Сохранить`}
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>

			<input
				id="name"
				name="name"
				className="popup__profile popup__profile_edit_name"
				placeholder="Имя"
				minLength="2"
				maxLength="40"
				required
				value={name || ""}
				onChange={handleChangeName}
			/>
			<span className="popup__error" id="profile_name-error"></span>
			<input
				id="description"
				name="description"
				type="text"
				placeholder="Статус"
				className="popup__profile popup__profile_edit_description"
				required
				minLength="2"
				maxLength="200"
				value={description || ""}
				onChange={handleChangeDescription}
			/>
			<span className="popup__error" id="profile_about-error"></span>

		</PopupWithForm>
	)
}


export default EditProfilePopup;