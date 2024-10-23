const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 px-[50px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
          {/* Branding Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Your Brand</h1>
            <p className="mt-2">Your tagline or brief description goes here.</p>
          </div>
  
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row">
            <div className="md:mr-10">
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul>
                <li className="mb-1"><a href="#" className="hover:text-gray-400">Home</a></li>
                <li className="mb-1"><a href="#" className="hover:text-gray-400">About</a></li>
                <li className="mb-1"><a href="#" className="hover:text-gray-400">Services</a></li>
                <li className="mb-1"><a href="#" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  