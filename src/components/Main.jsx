import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import pencil from '../images/Pencil.svg';
import Card from "./Card.jsx";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete }) {

   const currentUser = React.useContext(CurrentUserContext);

   return (

      <main className='main'>
         <section className="profile">
            <div className="profile__image-container"  >
               <img className="profile__image" alt="Аватар" src={currentUser.avatar} onClick={onEditAvatar} />
               <img className="profile__image-edit" src={pencil} alt="Редактировать"
               />
            </div>
            <div className="profile__profile-info">
               <h1 className="profile__name">{currentUser.name}</h1>
               <button className="profile__edit-bnt" type="button" onClick={onEditProfile}>
               </button>
               <p className="profile__description">{currentUser.about}</p>
            </div>
            <button className="profile__add-btn" type="button" onClick={onAddPlace}>
            </button>
         </section>
         <section className="elements">

            {cards.map((card) => (
               <Card
                  key={card._id}
                  card={card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}

               />
            ))}

         </section>
      </main>

   )
}

export default Main;