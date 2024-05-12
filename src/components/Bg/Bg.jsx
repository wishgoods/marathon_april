import './Bg.css'
import close_x from '../../assets/close.png'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.png'
import DownloadImg from '../download_img/Download_img'
import { useRef, useState } from 'react'
import NoBg from '../no_bg/No_bg'
import DownloadPopup from '../download_popup/Download_popup'
import Eula from '../eula/Eula'
import axios from 'axios'

const Bg=()=>{
    const  [selected_tab,setselected_tab] = useState(true);
    const  [show_download_popup,setdownload_popup] = useState(false);
    const  [show_eula_popup,setshow_eula_popup] = useState(false);
    const  [show_error_msg,setshow_error_msg] = useState(false);
    const  [show_error_msg_size,setshow_error_msg_size] = useState(false);
    const  [image_name,setimage_name]= useState("");
    const  [bg_color,setbg_color]= useState("");

    const inputElement = useRef();
    const choose_tab=()=>
    {
        setselected_tab(!selected_tab);

    }

    const show_download_popup_func=()=>{
        setdownload_popup(true)
    }
    const close_download_popup_func=()=>{
        setdownload_popup(false)
    }
    const show_eula=()=>{
        setshow_eula_popup(true)
    }
    const close_eula_func=()=>{
        setshow_eula_popup(false)

    }
    const openFileInput=()=>{
        inputElement.current.click();
    }

    function save_color_func(color){
        setbg_color(color);
    }
    const uploaded_file=(e)=>{
        let file_info = e.target.files[0];
        if(file_info.size<=1000000000){

        
            if(file_info.type === 'image/png' || file_info.type === 'image/jpeg'|| file_info.type === 'image/jpg')
            {
                
                let url = `http://localhost:5000/upload_file`;
                let formData = new FormData();
                formData.append('file',file_info);
                formData.append('color',bg_color);

                const config={headers:{'content-type':'multipart/form-data'}};
                axios.post(url,formData,config).then(response=>{

                    setimage_name(response.data);

            }).catch(err=>{
                console.log(err);
            });
            }
            else{
                setshow_error_msg(true);
            }
        }
        else{
            setshow_error_msg_size(true);
        }
        
    }

    return<> <div className='bg_general'>
        <img src={close_x} className='close_img' alt="close_img"></img>
        <div className='title'> העלאת תמונה כדי להסיר את הרקע</div>
        <button onClick={openFileInput} className='upload_btn'>העלאת תמונה</button>
        <input type="file" ref={inputElement} className='input_file' onChange={uploaded_file}/>
        <div className='upload_text'>פורמטים נתמכים png,jpeg</div>
        {show_error_msg ? <div className='error_msg'>הקובץ לא נתמך</div>:<></>}
        {show_error_msg_size ? <div className='error_msg'>הקובץ גדול מדי </div>:<></>}
        <div className='middle_div'>
            <div className='right_div'>
                <div className='right_div_inner'>
                    <DownloadImg show_download_popup_func={show_download_popup_func} title="תמונה חינם" subtitle="תצוגה מקדימה של תמונה " top='true' btn_text="הורד" last_title="איכות טובה עד 0.25 מגה פיקסל"></DownloadImg>
                    <DownloadImg show_download_popup_func={show_download_popup_func} title="pro" subtitle="תמונה מלאה" top='false' btn_text="הורד HD" last_title="האיכות הטובה ביותר עד 25 מגה פיקסל"></DownloadImg>
                </div>
            </div>
            <div className='left_div'>
                <div className='tabs_cont'>
                    <div className={'tab '+(selected_tab? 'selected_tab':'')} onClick={choose_tab}>הוסר רקע</div>
                    <div className={'tab '+(!selected_tab? 'selected_tab':'')} onClick={choose_tab}>מקורי</div>
                </div>
                <div className='left_div_inner'>
                    {selected_tab?
                    <NoBg save_color_func={save_color_func} img_name={image_name} title="no_bg"></NoBg>
                    :
                    <NoBg img_name={image_name} title="original"></NoBg>}
                    
                </div>
                <div className='left_div_footer'>
                    <button className='takanon_btn' onClick={show_eula}>תקנון החברה</button>
                    <div className='takanon_text'>על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן על ידי וחלים מדיניות ופרטיות</div>
                </div>
            </div>
        </div>
        <div className='footer_cont'>
            <img className='footer_logo' src={logo} alt="footer_logo"/>
            <img className='footer_banner' src={banner} alt="footer_banner"/>
        </div>
    </div>
    {
    show_download_popup
    ?<>
        <div className='layout'></div>
        <DownloadPopup img_name ={image_name} close_popup_func={close_download_popup_func}></DownloadPopup>
    </>
    :<></>
    }
    {
    show_eula_popup
    ?<>
        <div className='layout'></div>
        <Eula close_eula_func={close_eula_func}></Eula>
    </>
    :<></>
    }
    </>
}

export default Bg;