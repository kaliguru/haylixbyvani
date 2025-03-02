import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just navigate to dashboard on any submission
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col lg:flex-row">
      {/* Left Side - Content with Background Image */}
      <div 
        className="lg:flex-1 p-6 md:p-8 lg:p-12 text-white relative min-h-[300px] lg:min-h-screen"
        style={{
          backgroundImage: 'url(/login-bg-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10">
          <div className="mb-8 lg:mb-20">
            <img 
              src="/Heylix_AI_white.png" 
              alt="Heylix AI" 
              className="h-10 lg:h-12 object-contain" 
            />
          </div>
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-3 lg:mb-4">Welcome to Heylix AI!</h1>
            <h2 className="text-xl lg:text-2xl mb-3 lg:mb-4">Login to Your Account</h2>
            <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
              Welcome to the Admin Dashboard. Please log in to securely manage your administrative tools and
              oversee platform activities while maintaining system integrity and functionality.
            </p>
          </div>
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="bg-black/30 backdrop-blur-xl p-6 md:p-8 rounded-2xl w-full max-w-[400px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Sign In</h2>
            <p className="text-gray-300">Welcome back Henry !</p>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full bg-google-btn/50 backdrop-blur-sm text-white py-2.5 lg:py-3 px-4 rounded-lg mb-6 flex items-center justify-center gap-2 text-sm lg:text-base hover:bg-google-btn/60 transition-all">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>

          <div className="text-center text-gray-400 mb-6">OR</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-input-dark/50 backdrop-blur-sm text-white px-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                placeholder="User Name"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-300 text-sm mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-input-dark/50 backdrop-blur-sm text-white px-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                placeholder="Password"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-300 hover:text-white"
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#ff4193]">
                  Forget password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4150f7] to-[#ff4193] text-white py-2.5 lg:py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm lg:text-base"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-gray-300">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#ff4193] hover:text-[#ff4193]/90">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
