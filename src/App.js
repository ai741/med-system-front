import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Header } from "./components/Header/Header";
import {useEffect} from "react"
import {selectIsAuth, fetchAuthMe} from "./redux/slices/auth"
import {useDispatch, useSelector} from "react-redux"
import { Cabinet } from "./pages/Cabinet";
import { Appointment } from "./pages/Appointment";

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
   
  useEffect(()=>{
    dispatch(fetchAuthMe())  
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/cabinet" element={<Cabinet />} />
      </Routes>
    </div>
  );
}

export default App;
