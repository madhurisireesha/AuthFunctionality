import Header from '../Header'
import Cookies from 'js-cookie'
const About=(props)=>{
    const{history}=props
    const onClickLogOut=()=>{
        Cookies.remove('jwt_token')
        history.replace('/')
    }
    return(
        <>
            <Header/>
            <h1>About Route</h1>
            <button onClick={onClickLogOut} style={{backgroundColor:"blue", border:"none",outline:"none",padding:"3px",color:"white"}}>Logout</button>
        </>
    )
}
export default About