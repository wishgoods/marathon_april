import './Download_popup.css'
import CloseImg from '../../assets/close.png'
import NotRobot from '../../assets/not_robot.png'

const Download_popup=(props)=>{

    const close_popup_func=()=>{
        props.close_popup_func();
    }
    return <div className='download_popup_cont'>
            <div className='top_div'></div>
            <img src={CloseImg} className='close_img' onClick={close_popup_func} alt="close_img"/>
            <div className='download_title'>אישור להורדת תמונה</div>
            <div className='download_subtitle'>האם להוריד את התמונה ?</div>
            <div className='checkbox_cont'>
                <input type="checkbox"/>
                <div>אני לא רובוט</div>
                <img src={NotRobot} className='not_robot_img' alt="not_robot"/>
            </div>
            <div className='download_btn_cont'>
                <button className='cancel_btn' onClick={close_popup_func}>ביטול</button>
                <button className='approve_btn'>אישור</button>
            </div>
    </div>
}

export default Download_popup;