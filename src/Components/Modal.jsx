import style from "./Modal.module.css";

function Modal({children, onClose}) {
  return (
    <>
      <div className={style.backdrop} onClick={onClose}/>
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
