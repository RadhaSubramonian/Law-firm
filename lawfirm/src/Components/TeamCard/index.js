


export default ({cname,cases,imgsrc}) => {
    return  (
        <div style={{display:'flex',width:'176px',height:'68px',margin:'60px'}}>
            <img src={imgsrc}/>
            <div style={{color:'white', marginLeft:'15px'}}>
                <h3 >{cname}</h3>
                <h6>{cases}</h6>
            </div>
        </div>
    )
}