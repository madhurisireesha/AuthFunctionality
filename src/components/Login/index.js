import {Component} from 'react'
import Cookies from 'js-cookie'
class Login extends Component{
    state={
        showError:false,
        errormsg:''
    }
    submitForm=async(event)=>{
        event.preventDefault()
        console.log("rendered")
        const username="rahul"
        const password="rahul@2021"
        const userdetails={username,password}
        const url="https://apis.ccbp.in/login"
        const  options={
            method:'POST',
            body:JSON.stringify(userdetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        if(response.ok===true)
        {
            this.onSubmitSuccess(data.jwt_token)
        }
        else{
            this.onSubmitFailure(data.error_msg)
        }
    }
    onSubmitSuccess=(token)=>{
        const{history}=this.props
        Cookies.set('jwttoken',token,{expires:30})
        history.replace('/home')
    }
    onSubmitFailure=(errmsg)=>{
        this.setState({
            showError:true,
            errormsg:errmsg
        })

    }
    render(){
          const{showError,errormsg}=this.state
        return(
            <>
               <form className='formcontainer' onSubmit={this.submitForm}>
                    <h1>Please Login</h1>
                    <button type="submit" style={{backgroundColor:"blue", border:"none",outline:"none",padding:"3px",color:"white",borderRadius:"5px"}}>Login with sample credentials</button>
                    {showError&&<p>*{errormsg}</p>}
               </form>
            </>
        )
    }
}
export default Login