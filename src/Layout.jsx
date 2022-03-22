import { Outlet, Link } from "react-router-dom";
import SideBar from "./component/SideBar/SideBar";
import TopBar from "./component/TopBar/TopBar";
import "./App.css";
import UserList from "./Pages/UserList/UserList";
import Home from "./Pages/Home/Home";


const Layout = () => {
  return (
    <>
      
      <TopBar />
      <div className="container">
        <div>
          <SideBar />
        </div>
        <Home/>
       {/* <Link to="/"> <Home/></Link> */}
      </div>
      <UserList />
      {/* <Link to="/">home</Link>
      <Link to="/user"></Link> */}
      <Outlet />
    </>
  );
};

export default Layout;
