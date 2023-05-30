import { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

	const avatarInput = useRef();


	function handleSubmit(e) {
		e.preventDefault();
		onUpdateAvatar({
			avatar: avatarInput.current.value,
		});
	}

	useEffect(() => {
		avatarInput.current.value = " "
	}, [isOpen])

	return (
		<PopupWithForm
			name='edit-avatar'
			isOpen={isOpen}
			onClose={onClose}
			title={`Обновить аватар`}
			buttonText={`Сохранить`}
			onSubmit={handleSubmit}

		>
			<input
				id="avatar__photo"
				placeholder="Ссылка на аватар"
				name="link"
				type="url"
				className="popup__profile popup__profile_add_photo"
				ref={avatarInput}
				required
			/>
			<span className="popup__error" id="profile_photo_error"></span>

		</PopupWithForm>


	)


}

export default EditAvatarPopup;