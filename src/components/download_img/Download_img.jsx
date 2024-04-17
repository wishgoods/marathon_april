import './Download_img.css'
import new_img from '../../assets/new.png'
const Download_img=(props)=>{
    return (
    <div className='download_img_cont'>
        <div className={'download_img_title '+(props.top=='true'?'padding_top_title':'')}>{props.title}</div>
        {props.top=='false'?<img className='download_img_new ' src={new_img}/>:<div></div>}
        <div className='download_img_subtitle'>{props.subtitle}</div>
    </div>
    )
}
export default Download_img;