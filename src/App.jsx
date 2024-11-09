import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const {authUser} = useAuthContext()
  console.log(authUser)
  return (
    <>
      <div className=" p-4 flex justify-center items-center h-screen w-full ">
        <Routes>
          <Route path="/" element={ authUser ? <Home /> : <Navigate to="/sign-in" />} />
          <Route path="/sign-in" element={ authUser ? <Navigate to="/" /> : <SignIn />} />
          <Route path="/sign-up" element={authUser ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
        <Toaster/>
      </div> 
    </>
  );
}

export default App;
