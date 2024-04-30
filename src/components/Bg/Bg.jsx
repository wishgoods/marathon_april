import './Bg.css'
import close_x from '../../assets/close.png'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.png'
import DownloadImg from '../download_img/Download_img'
import { useState } from 'react'
import NoBg from '../no_bg/No_bg'
import DownloadPopup from '../download_popup/Download_popup'
import Eula from '../eula/Eula'

const Bg=()=>{
    const  [selected_tab,setselected_tab] = useState(true);
    const  [show_download_popup,setdownload_popup] = useState(false);
    const  [show_eula_popup,setshow_eula_popup] = useState(false);
    
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
    return<> <div className='bg_general'>
        <img src={close_x} className='close_img' alt="close_img"></img>
        <div className='title'> העלאת תמונה כדי להסיר את הרקע</div>
        <button className='upload_btn'>העלאת תמונה</button>
        <div className='upload_text'>פורמטים נתמכים png,jpeg</div>
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
                    {selected_tab?<NoBg title="no_bg"></NoBg>:<NoBg title="original"></NoBg>}
                    
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
        <DownloadPopup close_popup_func={close_download_popup_func}></DownloadPopup>
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