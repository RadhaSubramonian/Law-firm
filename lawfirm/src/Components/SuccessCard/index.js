import './SuccessCard.css'

import CardSucc from '../CardSucc';

export default ({title}) => {
    return  (
        <div style={{width:'933px',height:'451px',margin:'auto'}}>
            <h1 style={{color:'white',textAlign:'center',marginBottom:'40px',fontSize:'54px'}}>{title}</h1>
            <div className='card-cont'>
                <CardSucc successRate="98% Success Rate" imgsrc="Cardimg.png" />
                <CardSucc successRate="100% Success Rate" imgsrc="Cardimg.png"/>
                <CardSucc successRate="100% Success Rate" imgsrc="Cardimg.png"/>
            </div>
        </div>)
}