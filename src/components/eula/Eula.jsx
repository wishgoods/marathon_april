import './Eula.css';
import CloseImg from '../../assets/close.png';

const Eula=(props)=>{

    function close_eula(){
        props.close_eula_func();
    }

    return <div className='eula_popup_cont'>
        <img className='close_eula' src={CloseImg} alt="close_img" onClick={close_eula}/>
        <div className='eula_popup_text'>dsfsagfasjlkgl</div>
    </div>
}
export default Eula;