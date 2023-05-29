function ImagePopup({card, onClose}) {

return (

	<div className={`popup popup_mod-dark ${card.isOpen ? "popup_opened" : " "}`}> 
	<div className="increase-img">
	  <button type="button" className="popup__close-btn" onClick = {onClose} ></button>
	  <img className="increase-img__photo-view" alt={card.name} src={card.link}/>
	  <h2 className="increase-img__name-view">{card.name}</h2>
	</div>
 </div>

	)


}

export default ImagePopup;