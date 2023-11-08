import Header from '../Header'
import Cookies from 'js-cookie'
const Home=(props)=>{
    console.log(props)
        const{history}=props
        const onClickLogOut=()=>{
            Cookies.remove('jwt_token')
            history.replace('/')
        }
    return(
        <>
            <Header/>
            <h1>Home Route</h1>
            <button onClick={onClickLogOut} style={{backgroundColor:"blue", border:"none",outline:"none",padding:"3px"}}>Logout</button>
        </>
    )
}
export default Home