import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Outlet } from 'react-router-dom';

const Common = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Common;