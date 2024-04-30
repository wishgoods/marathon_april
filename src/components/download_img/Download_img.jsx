import './Download_img.css';
import new_img from '../../assets/new.png';
import check from '../../assets/check.png';

const Download_img=(props)=>{
    function show_download_popup(){
        props.show_download_popup_func();
    }
    return (
    <div className={'download_img_cont'+ (props.top==='false'? ' download_img_cont_border':'')}>
        <div className={'download_img_title '+(props.top==='true'?'padding_top_title':'')}>{props.title}</div>
        {props.top==='false'?<img className='download_img_new ' src={new_img} alt="download_img_new"/>:<div></div>}
        <div className='download_img_subtitle'>{props.subtitle}</div>
        <button className='download_btn' onClick={show_download_popup}>{props.btn_text}</button>
        <img className='check_img' src={check} alt="check_img"></img>
        <div className='last_title'>{props.last_title}</div>
    </div>
    )
}
export default Download_img;