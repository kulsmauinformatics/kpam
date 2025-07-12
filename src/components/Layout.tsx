/**
 * Layout component providing consistent header, navigation, and footer
 * Used across all pages for maintaining design consistency
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-green-700 hover:text-green-900 font-medium">Home</Link>
              <Link to="/focus-area" className="text-green-700 hover:text-green-900">Focus Areas</Link>
              <Link to="/projects" className="text-green-700 hover:text-green-900">Projects</Link>
              <Link to="/team" className="text-green-700 hover:text-green-900">Our Team</Link>
              <Link to="/news" className="text-green-700 hover:text-green-900">News</Link>
              <Link to="/contact" className="text-green-700 hover:text-green-900">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/get-involved">
                <Button className="bg-green-600 hover:bg-green-700 hidden md:inline-flex">
                  Get Involved
                </Button>
              </Link>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/" className="text-green-700 hover:text-green-900 font-medium py-2">Home</Link>
                <Link to="/focus-area" className="text-green-700 hover:text-green-900 py-2">Focus Areas</Link>
                <Link to="/projects" className="text-green-700 hover:text-green-900 py-2">Projects</Link>
                <Link to="/team" className="text-green-700 hover:text-green-900 py-2">Our Team</Link>
                <Link to="/news" className="text-green-700 hover:text-green-900 py-2">News</Link>
                <Link to="/contact" className="text-green-700 hover:text-green-900 py-2">Contact</Link>
                <Link to="/get-involved" className="mt-4">
                  <Button className="bg-green-600 hover:bg-green-700 w-full">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 mt-auto">
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

export default Layout;