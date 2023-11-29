
import TeamCard from "../TeamCard"

export default () => {
    return (
        <div style={{width:'933px',margin:'auto'}}>
            <h1 style={{color:'white',textAlign:'center',marginBottom:'20px',marginTop:'100px'}}>Our Team</h1>
            <div style={{display:'flex', flexDirection:'row',flexWrap:"wrap",width:'933px'}}>
            <TeamCard imgsrc="I1.png" cname="Daniel Def" cases="301 cases"/>
            <TeamCard imgsrc="I2.png" cname="Sanfole" cases="301 cases"/>
            <TeamCard imgsrc="I3.png" cname="Cesforile" cases="301 cases"/>
            <TeamCard imgsrc="I4.png" cname="Collean" cases="451 cases"/>
            <TeamCard imgsrc="I5.png" cname="Haldone" cases="561 cases"/>
            <TeamCard imgsrc="I6.png" cname="Nik Jeo" cases="156 cases"/>
            </div>
        </div>

    )
}