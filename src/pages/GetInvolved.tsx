/**
 * Get Involved page component for volunteer registration and community engagement
 * Includes forms for different types of involvement and contribution opportunities
 */

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Heart, 
  Users, 
  Leaf, 
  BookOpen, 
  DollarSign, 
  Camera,
  Handshake,
  TreePine,
  Globe,
  Award,
  Send,
  FileText
} from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [selectedInvolvement, setSelectedInvolvement] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    involvementType: '',
    skills: '',
    availability: '',
    experience: '',
    motivation: '',
    interests: [] as string[],
    agreedToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const involvementTypes = [
    {
      id: 'volunteer',
      title: 'Become a Volunteer',
      description: 'Join our hands-on conservation efforts and community programs',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'research',
      title: 'Research Collaboration',
      description: 'Contribute to scientific research and environmental studies',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'partner',
      title: 'Institutional Partnership',
      description: 'Partner with us as an organization or institution',
      icon: Handshake,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'donate',
      title: 'Support Our Cause',
      description: 'Make a financial contribution to our conservation efforts',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Forest Conservation',
      description: 'Help with reforestation, habitat restoration, and biodiversity monitoring',
      icon: TreePine,
      requirements: 'Physical fitness, outdoor enthusiasm'
    },
    {
      title: 'Community Training',
      description: 'Assist in capacity building and educational programs for local communities',
      icon: Users,
      requirements: 'Teaching experience, communication skills'
    },
    {
      title: 'Eco-Tourism Development',
      description: 'Support sustainable tourism initiatives and cultural preservation',
      icon: Globe,
      requirements: 'Tourism experience, cultural sensitivity'
    },
    {
      title: 'Documentation & Media',
      description: 'Help document our activities and create promotional materials',
      icon: Camera,
      requirements: 'Photography/videography skills, creative abilities'
    }
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your interest! We will contact you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        involvementType: '',
        skills: '',
        availability: '',
        experience: '',
        motivation: '',
        interests: [],
        agreedToTerms: false
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 mb-4">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in protecting Kakondo's unique ecosystems and empowering local communities. 
              There are many ways to contribute to our conservation mission.
            </p>
          </div>

          {/* Ways to Get Involved */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {involvementTypes.map(type => {
              const IconComponent = type.icon;
              return (
                <Card 
                  key={type.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedInvolvement === type.id ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setSelectedInvolvement(type.id)}
                >
                  <CardHeader className={`text-center ${type.bgColor}`}>
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${type.color}`} />
                    <CardTitle className="text-green-800">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Volunteer Opportunities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <IconComponent className="h-8 w-8 text-green-600" />
                        <CardTitle className="text-green-800">{opportunity.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {opportunity.description}
                      </CardDescription>
                      <div className="text-sm text-gray-600">
                        <strong>Requirements:</strong> {opportunity.requirements}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Application Form */}
          <section className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-green-800 text-center">Application Form</CardTitle>
                <CardDescription className="text-center">
                  Fill out this form to express your interest in getting involved with Kakondo Protected Area Management Inc.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="City, Province/State, Country"
                      />
                    </div>
                  </div>

                  {/* Involvement Type */}
                  <div>
                    <Label>How would you like to get involved? *</Label>
                    <RadioGroup 
                      value={formData.involvementType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, involvementType: value }))}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="volunteer" id="volunteer" />
                        <Label htmlFor="volunteer">Volunteer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="research" id="research" />
                        <Label htmlFor="research">Research Collaboration</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partner" id="partner" />
                        <Label htmlFor="partner">Institutional Partnership</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="donate" id="donate" />
                        <Label htmlFor="donate">Financial Support</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {[
                        'Forest Conservation',
                        'Wildlife Protection',
                        'Community Development',
                        'Eco-Tourism',
                        'Climate Change',
                        'Education & Training',
                        'Research & Documentation',
                        'Agriculture',
                        'Water & Sanitation',
                        'Youth Programs',
                        'Women Empowerment',
                        'Traditional Culture'
                      ].map(interest => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          />
                          <Label htmlFor={interest} className="text-sm">{interest}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills and Experience */}
                  <div>
                    <Label htmlFor="skills">Relevant Skills & Qualifications</Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                      placeholder="Describe your relevant skills, qualifications, and expertise..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="Tell us about any previous experience in conservation, community work, or related fields..."
                      rows={3}
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={formData.availability} onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time commitment</SelectItem>
                        <SelectItem value="part-time">Part-time (weekends/evenings)</SelectItem>
                        <SelectItem value="seasonal">Seasonal availability</SelectItem>
                        <SelectItem value="project-based">Project-based work</SelectItem>
                        <SelectItem value="remote">Remote work only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Motivation */}
                  <div>
                    <Label htmlFor="motivation">Why do you want to get involved? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                      placeholder="Tell us what motivates you to join our conservation efforts..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreedToTerms: checked as boolean }))}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and understand that this is a volunteer application *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={!formData.name || !formData.email || !formData.motivation || !formData.agreedToTerms || isSubmitting}
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Submit Application
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Impact Section */}
          <section className="bg-green-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Your Impact Matters</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every contribution, whether time, skills, or resources, helps us protect over 7,000 hectares 
                of pristine forest and empower 18,000 indigenous landowners across 8 council wards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-green-800 mb-2">Conservation Impact</h4>
                <p className="text-sm text-gray-600">
                  Help protect endangered species and restore degraded habitats in the Bismarck Forest Corridor
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-green-800 mb-2">Community Development</h4>
                <p className="text-sm text-gray-600">
                  Support capacity building programs that empower local communities with sustainable practices
                </p>
              </div>
              <div className="text-center">
                <Leaf className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-green-800 mb-2">Climate Action</h4>
                <p className="text-sm text-gray-600">
                  Contribute to climate-smart agriculture and nature-based solutions for climate adaptation
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;