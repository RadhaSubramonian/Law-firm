import SuccessCard from '../SuccessCard'
import './feedback.css'
import CardSucc from '../CardSucc'

import FeedbackCard from '../FeedbackCard';

export default () =>{
    return (
        <div style={{width:'933px',margin:'auto',marginTop:'100px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <h1 style={{color:'white',marginTop:'40px'}}>What says</h1>
                    <h1 style={{color:'white',marginBottom:'40px',}}> our happy clients</h1>
                </div>
                <img style={{height:'60px',width:'60px',position:'relative',top:'55px'}} src="Arrow.png"/>
            </div>
            <div className='card-cont'> 
                 <FeedbackCard imgsrc="face1.png" name="Jane Cooper"/>
                 <FeedbackCard imgsrc="face2.png" name="Devon Lane"/>
                 <FeedbackCard imgsrc="face3.png" name="Robert Fox"/>
            </div>
        </div>
    )
}