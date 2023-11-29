
import Question from "../Question"

export default () => {
    return  (
       <div style={{color:'white',width:'933px',margin:'auto',display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'100px'}}>
            <div>
                <h1>
                    FAQ
                </h1>
                <p style={{color:'gray'}}>Ament minim mollit non deserurnt ullimaco est</p>
                <p style={{color:'gray'}}>non deserurnt ullimaco est</p> 

            </div>
            <div style={{width:'450px'}}>
                <h3>Do I need a personal injury report?</h3>
                <p style={{marginBottom:'30px'}}>Lorem</p>
                <hr />
                <Question question="How much is my case worth" />
                <hr />
                <Question question="What should I do right after car accident"/>
                <hr />
                <Question question="How much is my case worth"/>
            </div>
       </div>
    )
}