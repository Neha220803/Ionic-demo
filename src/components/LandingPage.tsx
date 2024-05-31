import logo from '../assets/logo.png';
import { FaArrowRight } from "react-icons/fa";
import './LandingPageArea.css';
import { useHistory } from 'react-router-dom';

const LandingPageArea = () => {
    const history = useHistory();

    const handleGoToLoginPage = () => {
        history.push('/login');
    };


    return (
        <section className="h-screen grid grid-cols-1 md:grid-cols-2 bg-primary text-white">
            <div className="flex justify-center items-center p-4 gap-2">
                <img src={logo} alt="Logo" />
                <h1 className="text-4xl font-bold">Print&Go</h1>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <div className="white-circle p-5 flex items-center justify-center">
                    <div className="text-primary text-center cursor-pointer flex gap-2 items-center hover:underline " onClick={handleGoToLoginPage}>
                        Start Printing  <FaArrowRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPageArea;
