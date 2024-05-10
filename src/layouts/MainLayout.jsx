import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';


const MainLayout = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout