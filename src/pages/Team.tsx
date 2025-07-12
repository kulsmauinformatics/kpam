/**
 * Team page component displaying organizational structure and team members
 * Shows executive team, board members, and volunteers with detailed profiles
 */

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, Phone, MapPin, User, Building2, Award, BookOpen } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  age: number;
  gender: string;
  qualification: string;
  specialization: string;
  email: string;
  phone: string;
  background: string;
  type: 'executive' | 'board' | 'volunteer' | 'program';
  image?: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Mr. Mauro Okrupa',
      position: 'Chairman & Executive Director',
      age: 38,
      gender: 'Male',
      qualification: 'Bachelor of Tropical Agriculture, PNG UNRE',
      specialization: 'Scientist - Agronomy and Climate Resilience Systems, PNG National Agriculture Research Institute',
      email: 'mauro.okrupa@nari.gov.pg',
      phone: '+675 7182 9634',
      background: 'Mr. Mauro Okrupa is a seasoned agronomist, research leader, and conservation advocate with over nine years of progressive experience in agricultural research and development. As the lead scientist for the ACIAR Climate Smart Agriculture (CSA) project, he has pioneered the digital seasonal climate farm advisory service—a first of its kind in the Pacific.',
      type: 'executive',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/3005b45a-4340-470e-aa4c-192e44cfa947.jpg'
    },
    {
      id: '2',
      name: 'Mr. Karl Kama',
      position: 'Strategic Advisor and Program Director',
      age: 36,
      gender: 'Male',
      qualification: 'Bachelor\'s Degree in Social Science, Divine Word University',
      specialization: 'Strategic Planning and MEAL Specialist – PNG National Agricultural Research Institute',
      email: 'karl.kama@nari.gov.pg',
      phone: '+675 8170 0969',
      background: 'Mr. Karl Kama is a seasoned development professional with over seven years of experience in Program Management, Monitoring, Evaluation, Accountability, and Learning (MEAL). He was awarded the Academic and Research Excellence Award for his academic distinction and research leadership.',
      type: 'executive',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/a5005380-a7ea-4740-a6ec-cf88da4d1ed7.jpg'
    },
    {
      id: '3',
      name: 'Mr. Paul Dinaropaa Rudolph',
      position: 'Sustainable Development Program Manager',
      age: 48,
      gender: 'Male',
      qualification: 'Advanced Diploma in Sales Management and Marketing, Cambridge University',
      specialization: 'Regional Operational Manager – Puma Energy',
      email: 'paul.rudolph@pumaenergy.com',
      phone: '+675 7318 3614',
      background: 'Paul Rudolph brings over three decades of private sector leadership and international business experience. With 34 years of experience in the Oil and Gas industry, his understanding of commercial systems, compliance, and sustainable business practices is unmatched.',
      type: 'volunteer',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/5adfe122-e50e-4d44-a4f1-53eae2945cf9.jpg'
    },
    {
      id: '4',
      name: 'Mr. Nick Kola',
      position: 'Legal & Policy Advisor',
      age: 33,
      gender: 'Male',
      qualification: 'Diploma in Middle Management, Somare Institute of Leadership and Governance',
      specialization: 'Community Policing and Policy Enforcement',
      email: 'kolanick60@gmail.com',
      phone: '+675 7854 3629',
      background: 'Nick Kola brings experience in law enforcement and public administration. He currently serves as a High-Level Crime Investigator with the Royal Papua New Guinea Constabulary and is pursuing postgraduate studies in Law at the University of Papua New Guinea.',
      type: 'volunteer',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/0fc61aee-ae54-4776-8eb9-a1e07233c182.jpg'
    },
    {
      id: '5',
      name: 'Ms. Gaibee Bal',
      position: 'Tourism and Hospitality Officer',
      age: 22,
      gender: 'Female',
      qualification: 'Diploma in Tourism and Hospitality Management, Poly Tech',
      specialization: 'Tourism and Hospitality',
      email: 'gaibee.bal@kakondo.org',
      phone: '+675 7123 4567',
      background: 'Ms. Gaibee Bal is an emerging professional in tourism and hospitality, recently graduating in 2024. She brings fresh perspective and youthful energy to conservation-linked tourism development at Kakondo.',
      type: 'program',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/acd7de20-f7eb-44da-9061-04abb599cc5b.jpg'
    },
    {
      id: '6',
      name: 'Mr. Dom Kaupa',
      position: 'Agriculture Program Coordinator',
      age: 36,
      gender: 'Male',
      qualification: 'Diploma in Tropical Agriculture, PNG University of Natural Resources and Environment',
      specialization: 'Agronomy and Agricultural Value Chain Development',
      email: 'domson.kaupa@gmail.com',
      phone: '+675 7129 9327',
      background: 'Mr. Dom Kaupa is a dedicated Agronomist with over seven years of experience supporting smallholder farmers in Papua New Guinea. He served with the Fresh Produce Development Agency (FPDA) from 2013 to 2020, championing farmer training and climate-resilient horticulture.',
      type: 'program',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/3005b45a-4340-470e-aa4c-192e44cfa947.jpg'
    },
    {
      id: '7',
      name: 'Ms. More Gerel',
      position: 'Water, Health and Sanitation Program Coordinator',
      age: 24,
      gender: 'Female',
      qualification: 'Diploma in Nursing, Simbu (Kundiawa) Nursing College',
      specialization: 'Health Sciences',
      email: 'more.gerel@kakondo.org',
      phone: '+675 7264 8779',
      background: 'Ms. More Gerel is a passionate health professional who recently graduated with a Diploma in Nursing in 2024. She brings basic health education, hygiene promotion, and preventative care expertise to the community.',
      type: 'program',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/d86371f3-63cf-4e4f-b63e-63a436754222.jpg'
    },
    {
      id: '8',
      name: 'Mr. Peter Mire',
      position: 'ICT Manager',
      age: 24,
      gender: 'Male',
      qualification: 'Diploma in ICT, Poly Tech',
      specialization: 'Information and Communication Technology',
      email: 'peter.mire@kakondo.org',
      phone: '+675 8129 3737',
      background: 'Peter Mire is a recent ICT graduate and enthusiastic self-learner with a passion for digital innovation. He has designed and developed the official webpage for Kakondo Protected Area and manages the organization\'s digital presence.',
      type: 'volunteer',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/694aa2ab-ab81-4e05-ba36-1969b24680db.jpg'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'executive': return 'bg-green-100 text-green-800';
      case 'board': return 'bg-blue-100 text-blue-800';
      case 'volunteer': return 'bg-purple-100 text-purple-800';
      case 'program': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'executive': return 'Executive Team';
      case 'board': return 'Board Member';
      case 'volunteer': return 'Volunteer';
      case 'program': return 'Program Staff';
      default: return type;
    }
  };

  const executiveTeam = teamMembers.filter(member => member.type === 'executive');
  const programStaff = teamMembers.filter(member => member.type === 'program');
  const volunteers = teamMembers.filter(member => member.type === 'volunteer');

  const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-green-600" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-green-800">{member.name}</CardTitle>
            <CardDescription className="text-sm">{member.position}</CardDescription>
            <Badge className={`mt-2 ${getTypeColor(member.type)}`}>
              {getTypeLabel(member.type)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            {member.email}
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            {member.phone}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-2" />
            {member.qualification}
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Full Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-green-800">{member.name}</DialogTitle>
              <DialogDescription className="text-lg font-medium">
                {member.position}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Age:</span> {member.age}
                </div>
                <div>
                  <span className="font-medium">Gender:</span> {member.gender}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Qualification:</h4>
                <p className="text-sm text-gray-600">{member.qualification}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Specialization:</h4>
                <p className="text-sm text-gray-600">{member.specialization}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contact:</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {member.phone}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Background:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{member.background}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of executives, program coordinators, and volunteers who lead Kakondo Protected Area Management Inc. towards conservation success.
            </p>
          </div>

          {/* Team Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-700">{executiveTeam.length}</CardTitle>
                <CardDescription>Executive Team</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-700">{programStaff.length}</CardTitle>
                <CardDescription>Program Staff</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <User className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-700">{volunteers.length}</CardTitle>
                <CardDescription>Volunteers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-700">8</CardTitle>
                <CardDescription>Wards Covered</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Executive Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">Executive Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {executiveTeam.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>

          {/* Program Staff */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">Program Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programStaff.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>

          {/* Volunteers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8">Volunteer Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteers.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>

          {/* Board Structure */}
          <section>
            <h2 className="text-3xl font-bold text-green-900 mb-8">Board of Directors</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Governance Structure</CardTitle>
                <CardDescription>
                  Our Board of Directors represents the seven major tribes of the Kakondo-speaking people
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Board Composition (8 Members):</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Chairperson</strong> - Kapma Gaten Representative</li>
                      <li>• <strong>Vice-Chairperson</strong> - Bolku Representative</li>
                      <li>• <strong>Treasurer</strong> - Kapma Gaten Representative</li>
                      <li>• <strong>Secretary</strong> - Manuku Representative</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Tribal Representatives:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Board Member</strong> - Kuiawa Representative</li>
                      <li>• <strong>Board Member</strong> - Woma Representative</li>
                      <li>• <strong>Board Member</strong> - Kimbaku Representative</li>
                      <li>• <strong>Board Member</strong> - Kapma Mak Representative</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Join Our Team */}
          <section className="mt-16 bg-green-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate individuals to join our conservation efforts. 
                Whether you're interested in volunteering or professional opportunities, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  Volunteer Opportunities
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600">
                  Career Opportunities
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Team;