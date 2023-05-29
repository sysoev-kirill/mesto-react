import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
	const [nameCard, setNameCard] = useState('');
	const [link, setLink] = useState('');

	function handleChangeNameCard(evt) {
		setNameCard(evt.target.value)
	}

	function handleChangeLink(evt) {
		setLink(evt.target.value)
	}

	useEffect(() => {
		setNameCard('')
		setLink('')

	}, [isOpen])

	function handleSubmit(e) {
		e.preventDefault();
		onAddPlace({
			name: nameCard,
			link: link
		})
	}

	return (
		<PopupWithForm
			name='open-photo'
			isOpen={isOpen}
			onClose={onClose}
			title={`Новое место`}
			buttonText={`Создать`}
			onSubmit={handleSubmit}

		>
			<input
				id="name__photo"
				name="name"
				type="text"
				minLength="2"
				maxLength="30"
				className="popup__profile popup__profile_add_description"
				placeholder="Название"
				value={nameCard}
				onChange={handleChangeNameCard}
				required
			/>
			<span className="popup__error" id="profile_photo_name-error"></span>
			<input
				id="description__photo"
				name="link"
				type="url"
				className="popup__profile popup__profile_add_photo"
				placeholder="Ссылка на картинку"
				value={link}
				onChange={handleChangeLink}
				required
			/>
			<span className="popup__error" id="profile_photo_about-error"></span>
		</PopupWithForm>


	)


}

export default AddPlacePopup;