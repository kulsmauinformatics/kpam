/**
 * Home page component for Kakondo Protected Area Management Inc.
 * Main landing page showcasing the organization's mission, values, and key information
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TreePine, Users, Leaf, Heart, ArrowRight, Globe, Shield, Award } from 'lucide-react';
import { Link } from 'react-router';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/469ffeb5-f37f-46b2-8181-0ec4ed286287.png" 
                alt="Kakondo Protected Area Management Inc. Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-green-800">KAKONDO PROTECTED AREA</h1>
                <p className="text-sm text-green-600">MANAGEMENT INC.</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-green-700 hover:text-green-900 font-medium">Home</Link>
              <Link to="/focus-area" className="text-green-700 hover:text-green-900">Focus Areas</Link>
              <Link to="/projects" className="text-green-700 hover:text-green-900">Projects</Link>
              <Link to="/team" className="text-green-700 hover:text-green-900">Our Team</Link>
              <Link to="/news" className="text-green-700 hover:text-green-900">News</Link>
              <Link to="/contact" className="text-green-700 hover:text-green-900">Contact</Link>
            </nav>
            <Link to="/get-involved">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            Est. 2020 • Registered NGO 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
            Protecting Nature,
            <span className="text-green-600"> Empowering Communities</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A thriving Kakondo landscape where people and wildlife coexist in harmony—sustaining resilient livelihoods, 
            preserving cultural heritage, and protecting biodiversity for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/focus-area">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Learn About Our Mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Support Our Cause
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">7,000+</div>
              <div className="text-gray-600">Hectares Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">18,000</div>
              <div className="text-gray-600">Indigenous Landowners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">8</div>
              <div className="text-gray-600">Council Wards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">5</div>
              <div className="text-gray-600">Conservation CBOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Our Strategic Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work across four interconnected areas to achieve lasting impact for both people and nature
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Forest Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Protecting biodiversity, restoring degraded habitats, and promoting sustainable environmental interactions through community-led initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-green-800">Eco-Tourism</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Promoting sustainable travel that supports conservation and local culture while preserving cultural sites and traditional practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-green-800">Community Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Empowering communities through training programs, sustainable practices, and economic development opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-green-800">Leadership & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strengthening local leadership, promoting transparency, and ensuring effective governance for sustainable development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-green-900">Latest News & Updates</h2>
            <Link to="/news">
              <Button variant="outline" className="border-green-600 text-green-600">
                View All News
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img 
                  src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/a85ade97-0c09-40f0-a1fb-9feb273680dd.jpg" 
                  alt="Forest Conservation"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <Badge className="mb-2 bg-green-100 text-green-800">Conservation</Badge>
                <CardTitle className="mb-2">Protected Area Deed Signing Progress</CardTitle>
                <CardDescription>
                  KPAM Inc. continues to work with CEPA and UNDP to finalize legal recognition as a regional protected area.
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500">March 2025</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img 
                  src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/6cf2d61b-eebf-45fa-9752-746959f86b4b.jpg" 
                  alt="Agriculture Training"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <Badge className="mb-2 bg-blue-100 text-blue-800">Training</Badge>
                <CardTitle className="mb-2">Climate Resilience Model Farms</CardTitle>
                <CardDescription>
                  New model farms established in Ward 6 of Chuave to demonstrate climate-smart agriculture practices.
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500">February 2025</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img 
                  src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/6d63c9a0-c3ce-4365-a29b-eeaacb1f1f11.jpg" 
                  alt="Community Development"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <Badge className="mb-2 bg-orange-100 text-orange-800">Community</Badge>
                <CardTitle className="mb-2">NGO Registration Complete</CardTitle>
                <CardDescription>
                  KPAM Inc. officially registered as NGO and obtained IPA certificate, marking a major milestone.
                </CardDescription>
                <div className="mt-4 text-sm text-gray-500">February 2025</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Protecting Kakondo
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you're interested in volunteering, partnering with us, or supporting our mission, 
            there are many ways to get involved in our conservation efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Become a Volunteer
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Kakondo Protected Area Management Inc.</h3>
              <p className="text-green-200 text-sm">
                Preserving nature while empowering communities through sustainable conservation practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/focus-area" className="text-green-200 hover:text-white">Focus Areas</Link></li>
                <li><Link to="/projects" className="text-green-200 hover:text-white">Projects</Link></li>
                <li><Link to="/team" className="text-green-200 hover:text-white">Our Team</Link></li>
                <li><Link to="/news" className="text-green-200 hover:text-white">News</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>Dumun Village, Tabare LLG</li>
                <li>PO Box 384, Kundiawa</li>
                <li>Simbu Province, PNG</li>
                <li>+675 7182 9634</li>
                <li>maurookrupa41@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-green-200 hover:text-white">
                  Facebook
                </Button>
                <Button size="sm" variant="ghost" className="text-green-200 hover:text-white">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-200">
            <p>&copy; 2025 Kakondo Protected Area Management Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;