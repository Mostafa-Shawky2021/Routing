
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import NavBar from "./component/header/NavBar";
import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" elemnt={<Home /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
