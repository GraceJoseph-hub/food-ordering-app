import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
}


const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}




const Modal = (props) => {
  const portalElement = document.getElementById('overlays')
  return (
    <>
      {/* Note that createPortal takes two arguments, what to portal and where to portal. */}
      {/* In our case, it is portaling <Backdrop /> and it'll portal it in a div with an id of overlays inside the index.html file. */}
      {/* For the sake of this project, we'll reference the id and put it in a variable then call it portalElement. */}
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal