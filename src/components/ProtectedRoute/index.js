import Cookies from 'js-cookie'
import{Route,Redirect} from 'react-router-dom'
const ProtectedRoute=(props)=>{
   const token= Cookies.get('jwttoken')
    if(token===undefined)
    {
        return <Redirect to='/'/>
    }
    return(
        <Route {...props}/>
    )
}
export default ProtectedRoute