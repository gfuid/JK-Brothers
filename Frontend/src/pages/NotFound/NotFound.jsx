import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="py-24 text-center min-h-[70vh] flex flex-col justify-center items-center px-4 bg-[#fcfbf9]">
      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent text-4xl mb-6 animate-pulse">
        <FiAlertTriangle />
      </div>
      <h1 className="font-serif text-6xl md:text-8xl font-black text-primary mb-2">404</h1>
      <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-widest mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-xs md:text-sm font-semibold max-w-sm mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/"
        className="bg-primary hover:bg-blue-950 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-sm hover:shadow-md"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
