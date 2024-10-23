import pImage from '../images/p.jpg';
const Iron= () => {
    return (
    <div className="bg-white">

      
            <div className="bg-blue-900">
                <h2 className="text-center text-white text-3xl p-9">Our Services</h2>
            </div>

            <div className='flex'>
            <div className="ml-[200px]">
                    <img src={pImage} alt="Service" className='h-[400px] w-[800px] ml-5 mt-9' />
                </div>
              <div className="flex flex-col ml-[200px] mt-9 border-blue-950">
    <button className="bg-blue-950 text-white text-3xl py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 mb-4">
        Laundry Service
    </button>
    <button className="bg-blue-950 text-white text-3xl py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 mb-4">
        Dry Cleaning
    </button>
    <button className="bg-blue-950 text-white text-3xl py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
        Ironing
    </button>
              </div>
    
            </div>
            <div className="w-[800px] ml-[220px] text-black">
            <ul>
    <li><strong>Definition</strong>: Lorem Ipsum is a dummy text used in the printing and typesetting industry.</li>
    <li><strong>Origin</strong>: It has roots dating back to a work by Cicero, specifically "De Finibus Bonorum et Malorum" written in 45 BC.</li>
    <li><strong>Usage</strong>: Designers and developers use it to fill in text in layouts and templates, allowing them to focus on design rather than content.</li>
    <li><strong>Appearance</strong>: Lorem Ipsum has a more or less normal distribution of letters, making it look like readable English text, which helps to visualize the final product.</li>
    <li><strong>Standard Text</strong>: The most common version of Lorem Ipsum begins with "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</li>
    <li><strong>Adaptability</strong>: Lorem Ipsum can be adjusted to any length, making it suitable for various design needs.</li>
    <li><strong>Non-distracting</strong>: Its nonsensical nature prevents readers from getting distracted by the content, allowing them to focus on the layout.</li>
    <li><strong>Popularity</strong>: It's widely used in graphic design, web design, and publishing, making it a staple in creative industries.</li>
    <li><strong>Alternatives</strong>: While Lorem Ipsum is the most recognized placeholder text, other options like "Hipster Ipsum" or "Corporate Ipsum" exist to suit different themes.</li>
    <li><strong>Digital Tools</strong>: Various online generators and plugins are available to create Lorem Ipsum text quickly and easily, enhancing workflow efficiency for designers and developers.</li>
            </ul>
            </div>
           
        </div>
        
   
        
    );
};

export default Iron;