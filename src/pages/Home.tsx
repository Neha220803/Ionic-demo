import { IonContent, IonPage, IonText } from '@ionic/react';
import logo from '../assets/logo.png';
import { FaArrowRight, FaLinkedinIn, FaInstagram, FaEnvelope, } from "react-icons/fa";

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <section className="h-screen grid grid-cols-1 md:grid-cols-2 bg-primary text-white">
          <div className="flex justify-center items-center p-4">
            <img src={logo} alt="Logo" className="h-12 mb-2" />
            <h1 className="text-4xl font-bold mb-4">Print&Go</h1>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <div className='white-circle p-5 flex items-center justify-center'>
              <IonText>
                <div className='text-primary text-center'>
                  <FaArrowRight />
                  Start Printing
                </div>
              </IonText>
            </div>
          </div>
        </section>
        {/* footer */}
        <div className=" bg-primary text-white py-4 px-5">
          <div className="grid grid-cols-10 gap-4">
            <div className='col-span-5'>
              <div className="space-y-4">
                <div className="font-bold text-2xl">About Us</div>
                <div>
                  Print&Go is a start-up that provides easy access to high-quality and super reliable printing services.
                </div>
                <div>
                  We proudly serve the city of Abu Dhabi along with its surrounding communities, drawing on the talents of dedicated and experienced printers at well-established printing shops that have served the area for years. Our service streamlines the processes necessary for your custom printing jobs that have been too complicated for too long.
                </div>
              </div>
            </div>
            <div>

            </div>
            <div className="space-y-4 col-span-4">
              <div >
                <div className="font-bold text-2xl mb-4">Contact Us</div>
                <div className='flex justify-start items-center gap-2'><FaEnvelope /> info@printandgo.ae</div>
                <div className='flex justify-start items-center gap-2'><FaInstagram /> @rintandgo.ae</div>
                <div className='flex justify-start items-center gap-2'><FaLinkedinIn /> Print&Go UAE</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-16">
            <div className="space-y-0">
              <div>Print&Go <br></br>© 2023<br></br>Privacy Policy</div>
            </div>
            <div className="space-y-0">
              <div>Print&GO for suppliers<br></br>Print&Go for admins</div>
            </div>
            <div className="space-y-0 text-end">
              10 Al Dihiy St, Al Zahiyah, Abu Dhabi, UAE<br></br>
              info@printandgo.ae<br></br>
              @printandgo.ae<br></br>
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;