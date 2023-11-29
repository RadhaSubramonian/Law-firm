


export default ({question}) => {
    return (
        <div style={{marginTop:'30px',marginBottom:'30px',display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <h3>{question}</h3>
            <button style={{width:'28px',height:'28px',backgroundColor:'#E3B748',borderRadius:'20px'}}>+</button>
        </div>
    )
}