import { TextField } from "@mui/material"
import './sub.css'

export default () => {
    return (
        <div style={{width:'933px',height: '300px',margin:'auto',color:'white',marginTop:'100px'}} className="subscribe">
            <h1 style={{marginBottom:'40px',paddingTop:'50px',textAlign:'center'}}>Subscribe Our Newsletter</h1>
            <div style={{textAlign:'center'}}>      
                <input style={{backgroundColor:'white',height:'43px'}} placeholder="Name"/>
                <input style={{backgroundColor:'white',height:'43px'}} placeholder="Enter your email"/>
                <button style={{backgroundColor:'#E3B748',padding:'6px',paddingRight:'20px',paddingLeft:'20px',borderTopRightRadius:'5px',borderBottomRightRadius:'5px',borderBlockColor:'purple'}}>send</button>
            </div>
        </div>
    )
}