import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
import Login from '../component/Login';

function Navbar() {
    return (
        <>
            <div className="container">
                <Routes>
                <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default Navbar;
