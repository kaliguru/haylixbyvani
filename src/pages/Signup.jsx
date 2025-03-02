import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Side - Content with Background Image */}
      <div className="lg:flex-1 p-6 md:p-8 lg:p-12 text-white relative min-h-[300px] lg:min-h-screen"
        style={{
          backgroundImage: 'url(/login-bg-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="relative z-10">
          <div className="mb-8 lg:mb-20">
            <img src="/Heylix_AI_white.png" alt="Heylix AI" className="h-8 lg:h-10" />
          </div>
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-3 lg:mb-4">Welcome to Heylix AI!</h1>
            <h2 className="text-xl lg:text-2xl mb-3 lg:mb-4">Create Your Account</h2>
            <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
              Join our platform to access powerful administrative tools and manage your business efficiently.
            </p>
          </div>
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8 relative z-10">
        <div className="relative bg-black/30 backdrop-blur-xl p-6 md:p-8 rounded-2xl w-full max-w-[500px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Sign Up</h2>
            <p className="text-gray-300">Create your account to get started</p>
          </div>

          {/* Google Sign Up Button */}
          <button className="w-full bg-google-btn/50 backdrop-blur-sm text-white py-2.5 lg:py-3 px-4 rounded-lg mb-6 flex items-center justify-center gap-2 text-sm lg:text-base hover:bg-google-btn/60 transition-all">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button>

          <div className="text-center text-gray-400 mb-6">OR</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-input-dark/50 backdrop-blur-sm text-white px-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-input-dark/50 backdrop-blur-sm text-white px-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-input-dark/50 backdrop-blur-sm text-white px-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">+91</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-input-dark/50 backdrop-blur-sm text-white pl-12 pr-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                  placeholder="Enter phone number"
                />
              </div>
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
            </div>

            <div className="relative">
              <label className="block text-gray-300 text-sm mb-2">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-input-dark/50 backdrop-blur-sm text-white px-4 py-2.5 lg:py-3 rounded-lg border border-white/10 focus:outline-none focus:border-primary-blue text-sm lg:text-base"
                placeholder="Confirm Password"
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[38px] text-gray-300 hover:text-white"
              >
                {showConfirmPassword ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 rounded border-white/10 bg-input-dark/50 text-primary-blue focus:ring-primary-blue focus:ring-offset-0"
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the <a href="#" className="text-primary-blue hover:text-primary-blue/90">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4150f7] to-[#ff4193] text-white py-2.5 lg:py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm lg:text-base"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-300">
              Already have an account?{' '}
              <Link to="/" className="text-[#ff4193] hover:text-[#ff4193]/90">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
