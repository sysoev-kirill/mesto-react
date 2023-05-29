function PopupWithForm({name, isOpen, onClose, buttonText, children, title, onSubmit}) {
   return (
      <div className={`popup popup_${name} ${isOpen ? "popup_opened" : " "}`}>
         <div className="popup__container">
            <button type="button" className="popup__close-btn" onClick={onClose} ></button>
            <h2 className="popup__head">{title}</h2>
            <form name={name} className={`popup__form popup__form_${name}`} onSubmit = {onSubmit} >
               {children}
               <button type="submit" className="popup__send-btn" aria-label="Сохранить">{buttonText}</button>
            </form>
         </div>
      </div>


   );


   }

export default PopupWithForm;