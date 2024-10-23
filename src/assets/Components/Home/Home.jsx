
import vid from '../images/vid.mp4';

import { GiWashingMachine } from "react-icons/gi";
import { MdDryCleaning } from "react-icons/md";
import { GiFloorPolisher } from "react-icons/gi";
import { GiWindow } from "react-icons/gi";
import { TfiShine } from "react-icons/tfi";
import { TbIroning1 } from "react-icons/tb";
import CleaningProcess from '../CleaningProcess/CleaningProcess';



const Home = () => {
  
  const videos = [vid];

  return (
    <>
      <div className="overflow-x-hidden w-full min-h-screen bg-gray-100">
        {/* Video Section */}
        <div className="h-[700px] overflow-hidden relative">
          {videos.map((src, index) => (
            <div key={index} className="absolute inset-0">
              <video 
                src={src} 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
        
        {/* Thumbnail Image Section */}
        <div className='grid grid-rows-[1.5fr,3fr]'>

          <div>
             <h1 className='text-center text-[2rem]'>Our Service</h1>
          </div>
         




        <div className='flex justify-around ml-[200px] mr-[200px] h-[200px]'>
          <div className='h-[100px] w-[100px]'>
             <div>
                <GiWashingMachine
                className='h-[100px] w-[100px] text-blue-950'
                />
             </div>
             <div>
                <h5 className='text-center text-blue-950'>Washing</h5>
             </div>
          </div>
          <div className='h-[100px] w-[100px]'>
             <div>
                <MdDryCleaning
                className='h-[100px] w-[100px] text-blue-950'
                />
             </div>
             <div>
                <h5 className='text-center text-blue-950'> Dry Cleaning</h5>
             </div>
          </div>
          <div className='h-[100px] w-[100px]'>
             <div>
                <GiFloorPolisher
                className='h-[100px] w-[100px] text-blue-950'
                />
             </div>
             <div>
                <h5 className='text-center text-blue-950'>Floor cleaning</h5>
             </div>
          </div>
          <div className='h-[100px] w-[100px]'>
             <div>
                <GiWindow
                className='h-[100px] w-[100px] text-blue-950'
                />
             </div>
             <div>
                <h5 className='text-center text-blue-950'>Window cleaning</h5>
             </div>
          </div>
          <div className='h-[100px] w-[100px]'>
             <div>
                <TfiShine
                className='h-[100px] w-[100px] text-blue-950'
                />
             </div>
             <div>
                <h5 className='text-center text-blue-950'>Extra shiny</h5>
             </div>
          </div>
          <div className='h-[100px] w-[100px]'>
             <div>
                <TbIroning1
                className='h-[100px] w-[100px] text-blue-950'
                />
             </div>
             <div>
                <h5 className='text-center text-blue-950'>Cloth ironing</h5>
             </div>
          </div>
        </div >
         <div className='bg-green-200'>
           <CleaningProcess />
         </div>

       

          
        </div>
      
     

        {/* Text Section */}
        <div className='flex flex-col justify-start bg-sky-500 pl-24 h-[400px]'>
          <div className="pl-20">
            <h2 className="text-white text-4xl">fihsyugdsfhugfxhughugbhsfdhu
              <span className="text-yellow-200">fdhsyugsauidhuihasduifhuihudf</span>
            </h2>
          </div>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <h3 className="text-yellow-300 text-3xl mx-10">jdiuhdfushu</h3>
                <h6 className="text-white mx-10">figyfdsyug</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
