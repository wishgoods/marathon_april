import './Bg.css'
import close_x from '../../assets/close.png'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.png'
import Download_img from '../../components/download_img/Download_img'

const Bg=()=>{
    return <div className='bg_general'>
        <img src={close_x} className='close_img'></img>
        <div className='title'> העלאת תמונה כדי להסיר את הרקע</div>
        <button className='upload_btn'>העלאת תמונה</button>
        <div className='upload_text'>פורמטים נתמכים png,jpeg</div>
        <div className='middle_div'>
            <div className='right_div'>
                <div className='right_div_inner'>
                    <Download_img title="תמונה חינם" subtitle="תצוגה מקדימה של תמונה " top='true'></Download_img>
                    <Download_img title="pro" subtitle="תמונה מלאה" top='false'></Download_img>
                </div>
            </div>
            <div className='left_div'>
                <div className='left_div_inner'>

                </div>
                <div className='left_div_footer'>
                    <button className='takanon_btn'>תקנון החברה</button>
                    <div className='takanon_text'>על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן על ידי וחלים מדיניות ופרטיות</div>
                </div>
            </div>
        </div>
        <div className='footer_cont'>
            <img className='footer_logo' src={logo}/>
            <img className='footer_banner' src={banner}/>
        </div>
    </div>
}

export default Bg;