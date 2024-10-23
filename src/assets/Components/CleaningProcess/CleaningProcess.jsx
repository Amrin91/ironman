
import { FaBoxOpen, FaTshirt, FaTruck, FaCreditCard } from 'react-icons/fa';

const CleaningProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Your Order',
      description: "We'll bring a bag - you don't need to do anything.",
      icon: <FaBoxOpen className="h-10 w-10 text-gray-600" />,
    },
    {
      id: 2,
      title: 'Laundry/Dry Cleaning',
      description: 'We take great care when handling and treating your items and always quality check.',
      icon: <FaTshirt className="h-10 w-10 text-gray-600" />,
    },
    {
      id: 3,
      title: 'We Deliver',
      description: 'Hanger, folded clothes.',
      icon: <FaTruck className="h-10 w-10 text-gray-600" />,
    },
    {
      id: 4,
      title: 'Easy Payment',
      description: 'We accept cash & cashless payment.',
      icon: <FaCreditCard className="h-10 w-10 text-gray-600" />,
    },
  ];

  return (
    <div className="flex flex-col h-[400px] items-center pt-10">
      <h2 className="text-[2rem] font-semibold mb-8">Our Cleaning Process</h2>
      <div className="flex justify-around items-center  w-full max-w-4xl space-x-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="relative flex justify-center items-center h-[120px] w-[120px] rounded-full border-2 border-gray-300  hover:bg-yellow-300">
              <span className="absolute top-[-10px] left-[-10px] h-6 w-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.id}
              </span>
              <div className="group-hover:scale-110  transition-transform duration-300">
                {step.icon}
              </div>
            </div>
            <h3 className="font-semibold mt-4 text-black">{step.title}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningProcess;
