import './Modal.scss'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({title, children, handleClose}) => {
    return(
        <div className='modal-container'>
            <div className="modal-custom">
                <CloseIcon onClick={handleClose}/>
                <h2>{title}</h2>
                {children}
            </div>
        </div>    
    )   
}

export default Modal