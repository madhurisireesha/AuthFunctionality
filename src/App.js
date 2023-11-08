import { BrowserRouter,Route,Switch } from "react-router-dom"
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Notfound from './components/Notfound'
import ProtectedRoute from "./components/ProtectedRoute"
import './App.css'
const App=()=>{
    return(
        <div className="entirecontainer">
        <BrowserRouter>
            <Switch>
                
                <ProtectedRoute exact path='/home' component={Home}/>
                <Route exact path='/' component={Login}/>
                <ProtectedRoute exact path='/about' component={About}/>
                <Notfound/>
            </Switch>
        </BrowserRouter>
        </div>
    )
}
export default App