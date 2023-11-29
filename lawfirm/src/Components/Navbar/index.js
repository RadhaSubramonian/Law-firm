
import './Navbar.css'

export default ({Contactvisible,copyright}) => {
    return (
      <>
      <div className='Nav-container'>
        <img className="Nav-img" src="logo.png"/>
            <ul style={{display:'flex',flexDirection:'row',color:'white',width:'431px',justifyContent:'space-between',alignItems:'center',fontSize:'14px'}}>
                <li>Home</li>
                <li>Attorney</li>
                <li>Practice Areas</li>
                <li>About Us</li>
            </ul>   
         <button className='Nav-button'>
            {Contactvisible ? <span style={{color:'white',fontSize:'14px',border:'1px solid white',padding:'10px'}}>Contact Now</span>:
             <div style={{width:'187px',display:'flex',justifyContent:'space-between'}}>
                <img src="Insta.png"/>
                <img src="facebk.png"/>
                <img src="Twi.png"/>
                <img src="Pin.png"/>
              </div>}
        </button>
        
      </div>
    
       {copyright && (<div style={{color:'white',width:'375px',height:'20px',display:'flex',justifyContent:'space-between',position:'relative',top:'50px',margin:'auto',fontSize:'12px',marginTop:'30px'}}>
       <div>@2020 Acme.All right reserved</div> 
       <div>Privacy Policy</div>
       <div>Terms of Service</div></div>)}
       </>
    )

}