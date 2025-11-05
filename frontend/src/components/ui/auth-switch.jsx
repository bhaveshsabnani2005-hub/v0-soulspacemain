import { cn } from '../../lib/utils';
import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Users, Award, Building2 } from 'lucide-react';

export const AuthSwitch = ({ defaultTab = 'signin', onAuthAction, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [userType, setUserType] = useState('individual');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Mock sign in logic
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    console.log('Sign in attempt:', { email, type: userType });
    if (onAuthAction) {
      onAuthAction('signin', { email, userType });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Mock sign up logic
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    
    console.log('Sign up attempt:', { name, email, type: userType });
    if (onAuthAction) {
      onAuthAction('signup', { name, email, userType });
    }
  };

  return (
    <div className={cn('w-full max-w-md mx-auto', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to Soul Space</CardTitle>
          <CardDescription className="text-center">
            Your mental wellness journey starts here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="space-y-4">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input 
                    id="signin-email" 
                    name="email"
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input 
                    id="signin-password" 
                    name="password"
                    type="password" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      type="button"
                      variant={userType === 'individual' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setUserType('individual')}
                      className="flex flex-col h-auto py-3"
                    >
                      <Users className="w-4 h-4 mb-1" />
                      <span className="text-xs">Individual</span>
                    </Button>
                    <Button
                      type="button"
                      variant={userType === 'professional' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setUserType('professional')}
                      className="flex flex-col h-auto py-3"
                    >
                      <Award className="w-4 h-4 mb-1" />
                      <span className="text-xs">Professional</span>
                    </Button>
                    <Button
                      type="button"
                      variant={userType === 'institution' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setUserType('institution')}
                      className="flex flex-col h-auto py-3"
                    >
                      <Building2 className="w-4 h-4 mb-1" />
                      <span className="text-xs">Institution</span>
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                  Sign In
                </Button>

                <div className="text-center">
                  <button type="button" className="text-sm text-teal-600 hover:underline">
                    Forgot password?
                  </button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input 
                    id="signup-name" 
                    name="name"
                    type="text" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input 
                    id="signup-email" 
                    name="email"
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input 
                    id="signup-password" 
                    name="password"
                    type="password" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      type="button"
                      variant={userType === 'individual' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setUserType('individual')}
                      className="flex flex-col h-auto py-3"
                    >
                      <Users className="w-4 h-4 mb-1" />
                      <span className="text-xs">Individual</span>
                    </Button>
                    <Button
                      type="button"
                      variant={userType === 'professional' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setUserType('professional')}
                      className="flex flex-col h-auto py-3"
                    >
                      <Award className="w-4 h-4 mb-1" />
                      <span className="text-xs">Professional</span>
                    </Button>
                    <Button
                      type="button"
                      variant={userType === 'institution' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setUserType('institution')}
                      className="flex flex-col h-auto py-3"
                    >
                      <Building2 className="w-4 h-4 mb-1" />
                      <span className="text-xs">Institution</span>
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                  Sign Up
                </Button>

                <p className="text-xs text-center text-slate-500">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthSwitch;
