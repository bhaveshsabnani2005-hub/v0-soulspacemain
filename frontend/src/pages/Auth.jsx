import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthSwitch from '../components/ui/auth-switch';
import { Heart } from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();

  const handleAuthAction = (action, data) => {
    console.log(`${action} action:`, data);
    
    // Mock authentication - in a real app, this would call an API
    if (action === 'signin') {
      // Store mock user data in localStorage
      localStorage.setItem('soulspace_user', JSON.stringify({
        email: data.email,
        userType: data.userType,
        isAuthenticated: true
      }));
      alert(`Welcome back! Signed in as ${data.userType}`);
      navigate('/');
    } else if (action === 'signup') {
      // Store mock user data in localStorage
      localStorage.setItem('soulspace_user', JSON.stringify({
        name: data.name,
        email: data.email,
        userType: data.userType,
        isAuthenticated: true
      }));
      alert(`Account created! Welcome to Soul Space as a ${data.userType}`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:block space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Soul Space
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Your Journey to
            <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Mental Wellness
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Join thousands who have transformed their mental health with Soul Space. 
            Connect with licensed therapists, access personalized resources, and take 
            control of your wellness journey.
          </p>

          <div className="space-y-4 pt-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Licensed Professionals</h3>
                <p className="text-slate-600">Connect with 500+ verified therapists</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Secure & Confidential</h3>
                <p className="text-slate-600">HIPAA compliant end-to-end encryption</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Flexible Sessions</h3>
                <p className="text-slate-600">Video, voice, or messaging options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth Component */}
        <div className="flex items-center justify-center">
          <AuthSwitch onAuthAction={handleAuthAction} />
        </div>

        {/* Mobile branding */}
        <div className="lg:hidden text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Soul Space
            </span>
          </div>
          <p className="text-slate-600">
            Your journey to mental wellness starts here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
