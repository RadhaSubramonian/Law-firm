import './Hero.css'

export default () => {
    return (
        <div style={{display:'flex',flexDirection:'row',color:'white',justifyContent:'space-between',alignItems:'flex-end'}}>
            <div style={{position:'relative',top:'-100px'}}>
                <h1 style={{fontWeight:500,fontSize:'66px'}}>You dont have to </h1>
                <h1 style={{fontWeight:700,fontSize:'66px'}}>Fight them Alone.</h1>
                <p style={{fontWeight:500,fontSize:'18px',color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do</p>
                <p style={{fontWeight:500,fontSize:'18px',color:'gray'}}>sed do eiusmod tempor incididunt ut labore et dolore magsed do</p>
                <p style={{fontWeight:500,fontSize:'18px',color:'gray'}}>aliqua. Ut enim ad minim veniam, quis nostrud exercitatised do</p>
                <div className="boxInput" >
                    <input 
                        placeholder='Enter your email address' className='inputhero'/>
                    <button style={{width:'137px',height:'62px', borderRadius: '43px',backgroundColor:'#E3B748',fontWeight:600}}>Let's Talk</button>
                </div>
            </div>
            <img src="Hero.png"/>
        </div>
    )
}