import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Shield,
  Users,
  Building2,
  Calendar,
  MessageSquare,
  Lock,
  TrendingUp,
  BookOpen,
  Award,
  Clock,
  Star,
  CheckCircle2,
  Heart,
  Activity,
} from "lucide-react"
import { subscriptionPlans, therapists, workshops, resources, stats } from "@/lib/mock-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                <Heart className="w-3 h-3 mr-1" />
                Your Mental Wellness Partner
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Seamless Journey to
                <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Mental Wellness
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Connect with licensed therapists, access personalized resources, and take control of your mental health
                journey in a safe, confidential space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  >
                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                  alt="Mental wellness"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Individual Registration</CardTitle>
                <CardDescription>Begin your personal wellness journey today</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2" />
                    Secure & confidential
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2" />
                    Personalized care
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-100 hover:border-cyan-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Professional Partnership</CardTitle>
                <CardDescription>Join our network of licensed therapists</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2" />
                    Payment management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Institutional Partnership</CardTitle>
                <CardDescription>Employee wellness programs made easy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                    Analytics dashboard
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                    Custom solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dual Onboarding Experience */}
      <section id="features" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Dual Onboarding Experience</h2>
            <p className="text-xl text-slate-600">Choose your path and start your mental wellness journey</p>
          </div>

          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger
                value="individual"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
              >
                <Users className="w-4 h-4 mr-2" />
                Individual
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Award className="w-4 h-4 mr-2" />
                Professional
              </TabsTrigger>
            </TabsList>

            <TabsContent value="individual" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-teal-600 mb-4" />
                    <CardTitle>Individual Registration</CardTitle>
                    <CardDescription>Quick and secure account setup</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Create profile with basic information</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Complete confidential assessment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Get matched with therapists</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Heart className="w-12 h-12 text-cyan-600 mb-4" />
                    <CardTitle>Personalized Care Plan</CardTitle>
                    <CardDescription>Tailored to your unique needs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">AI-powered therapist matching</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Custom session scheduling</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Progress tracking dashboard</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="professional" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Award className="w-12 h-12 text-cyan-600 mb-4" />
                    <CardTitle>Professional Partnership</CardTitle>
                    <CardDescription>Join our licensed therapist network</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Verify credentials & licenses</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Set your availability & rates</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Build your professional profile</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle>Practice Management</CardTitle>
                    <CardDescription>Everything you need in one place</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Integrated scheduling system</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Automated payment processing</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-slate-600">Client progress tracking</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Confidential Communication */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Confidential Communication</h2>
            <p className="text-xl text-slate-600">Your privacy and security are our top priorities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle>End-to-End Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  All communications are encrypted and secure, ensuring complete confidentiality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle>Multiple Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Video calls, messaging, and voice sessions - choose what works for you.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>HIPAA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Fully compliant with healthcare privacy regulations and standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sessions & Workshop Booking */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sessions & Workshop Booking</h2>
            <p className="text-xl text-slate-600">Book one-on-one sessions or join group workshops</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Therapists</h3>
              <div className="space-y-4">
                {therapists.map((therapist) => (
                  <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={therapist.image || "/placeholder.svg"}
                            alt={therapist.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-slate-900">{therapist.name}</h4>
                            <p className="text-sm text-slate-600">{therapist.specialty}</p>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm text-slate-600 ml-1">{therapist.rating}</span>
                              <span className="text-sm text-slate-400 mx-2">•</span>
                              <span className="text-sm text-slate-600">{therapist.experience}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-700 mb-2">{therapist.availability}</Badge>
                          <Button size="sm" className="bg-gradient-to-r from-teal-600 to-cyan-600">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Workshops</h3>
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{workshop.title}</CardTitle>
                          <CardDescription className="mt-2">
                            <div className="flex items-center text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {workshop.date}
                            </div>
                            <div className="flex items-center text-sm mt-1">
                              <Clock className="w-4 h-4 mr-2" />
                              {workshop.time}
                            </div>
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{workshop.spots} spots left</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Instructor: {workshop.instructor}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                        >
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription & Payment Management */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Subscription & Payment Management</h2>
            <p className="text-xl text-slate-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative hover:shadow-2xl transition-all ${plan.popular ? "border-2 border-teal-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}>Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Center */}
      <section id="resources" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Resources Center</h2>
            <p className="text-xl text-slate-600">Curated mental wellness guides and resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="group hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900">{resource.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{resource.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{resource.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Institutional Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Institutional Dashboard</h2>
            <p className="text-xl text-slate-600">Comprehensive analytics for enterprise wellness programs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-slate-900">87</CardTitle>
                <CardDescription>Active Employees</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Activity className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-slate-900">65%</CardTitle>
                <CardDescription>Utilization Rate</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-slate-900">156</CardTitle>
                <CardDescription>Monthly Sessions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-slate-900">92%</CardTitle>
                <CardDescription>Satisfaction Score</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to transform your workplace wellness?</h3>
                <p className="text-slate-600 mb-6">
                  Join leading organizations providing mental health support to their teams
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                >
                  Schedule Enterprise Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Mental Wellness Journey Today</h2>
          <p className="text-xl mb-8 text-teal-50">
            Join thousands who have transformed their mental health with Soul Space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100">
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
