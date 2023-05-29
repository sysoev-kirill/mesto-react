import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}){
const currentUser = React.useContext(CurrentUserContext);
const isOwn = card.owner._id === currentUser._id;
const isLiked = card.likes.some(i => i._id === currentUser._id);
const cardLikeButtonClassName = ( 
	`element__heart ${isLiked && 'element__heart_active'}` 
 );


function handleCardClick() {
   onCardClick(card);
}  
function handleCardLike() {
   onCardLike(card);
}  
function handleDeleteClick(){
	onCardDelete(card)
}
return(
	<div className="element">
	{isOwn && <button type="button" className="element__trash" onClick = {handleDeleteClick} />}
	<img className="element__photo" src = {card.link} alt = {card.name} onClick = {handleCardClick}/>
	<h2 className="element__city">{card.name}</h2>
	<div className="element__heart-container">
	  <button type="button" className={cardLikeButtonClassName} onClick = {handleCardLike}></button>
	  <span className="element__like-count" >{card.likes.length}</span>
	</div>
	
 </div>
	
	
	)


}

export default Card;