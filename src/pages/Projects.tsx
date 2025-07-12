/**
 * Projects page component showcasing ongoing and completed initiatives
 * Displays project portfolio with detailed information and achievements
 */

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TreePine, 
  Users, 
  MapPin, 
  Calendar,
  Award,
  Target,
  Sprout,
  Home,
  GraduationCap,
  Droplets,
  Camera,
  FileText,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'completed' | 'ongoing' | 'planned';
  year: string;
  location: string;
  beneficiaries: number;
  budget?: string;
  partners: string[];
  outcomes: string[];
  image: string;
  details: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Forest Boundary GPS Mapping',
      description: 'Comprehensive mapping of traditional forest boundaries using modern GPS technology to establish baseline data for conservation planning.',
      category: 'Conservation',
      status: 'completed',
      year: '2020-2022',
      location: 'Kakondo Protected Area',
      beneficiaries: 18000,
      partners: ['Local Youth Groups', 'Seven Tribal Groups'],
      outcomes: [
        'Mapped 50% of Kakondo\'s remaining intact forests',
        'Established digital boundary database',
        'Trained local youth in GPS technology',
        'Created foundation for future conservation planning'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/9c966519-cb12-4d53-984a-c10084383f50.jpeg',
      details: 'The Community conducted a traditional land (forest) boundary survey using modern land survey technologies. A team comprised of youths from the seven council wards and representatives of each seven tribal groups. The team was led by Mr. Mogia Kumuno, a Bachelor of Lands graduate from PNG University of Technology.'
    },
    {
      id: '2',
      title: 'Irish Potato Farm Management Training',
      description: 'Intensive agricultural training program focusing on sustainable potato farming and agribusiness development for lead farmers.',
      category: 'Agriculture',
      status: 'completed',
      year: '2021',
      location: 'Dumun Village',
      beneficiaries: 45,
      partners: ['PNG NARI', 'Sinesine Yongomugl Farmers Association'],
      outcomes: [
        'Trained 45 lead farmers in sustainable practices',
        'Improved potato yield by 30%',
        'Established farmer groups network',
        'Enhanced food security in the region'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/81031537-01c9-495d-8f67-ded4b7f4c122.jpeg',
      details: 'Potato Farm Management and Agribusiness training conducted with Potato Lead Farmers of Kakondo area. Training was led by Okrupa Mauro, a graduate from the PNG University of Natural Resources & Environment and current NARI scientist specializing in Climate Resilience Agriculture Systems.'
    },
    {
      id: '3',
      title: 'Climate Resilient Model Farms',
      description: 'Establishment of demonstration farms showcasing climate-smart agriculture practices and sustainable food production systems.',
      category: 'Agriculture',
      status: 'ongoing',
      year: '2024-2025',
      location: 'Ward 14 Tabare LLG, Ward 6 Chuave LLG',
      beneficiaries: 120,
      budget: 'PGK 4,000',
      partners: ['Simbu Provincial Department of Agriculture', 'Tabare LLG'],
      outcomes: [
        'Established 6 model climate-resilient farms',
        'Demonstrated sustainable farming techniques',
        'Provided hands-on training to farmers',
        'Improved crop diversity and nutrition'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/fdd8d3d0-c365-412a-b576-d6955497a985.jpg',
      details: 'The executives of KPAM Inc established 6 climate resilient and income security model farms. Bulb onion and purple cabbage production on-farm training was conducted by Dom Kaupa, an Agricultural Graduate specializing in crop agronomy and value chain development.'
    },
    {
      id: '4',
      title: 'Eco-Lodge Construction & Trail Development',
      description: 'Building sustainable tourism infrastructure including eco-lodges and rehabilitating ancestral forest pathways to promote responsible ecotourism.',
      category: 'Tourism',
      status: 'ongoing',
      year: '2022-2025',
      location: 'Kakondo Forest Area',
      beneficiaries: 200,
      partners: ['Seven Tribal Youth Groups', 'Traditional Leaders'],
      outcomes: [
        'Constructed 2 eco-lodges with local materials',
        'Rehabilitated 15km of ancestral footpaths',
        'Created employment for local youth',
        'Enhanced cultural heritage preservation'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/8655594d-f989-40f0-afda-7f58b2960c0e.jpg',
      details: 'Construction of Eco-lodge and upgrading traditional ancestral tracks in the forest to promote ecotourism. The work was done with the help and collaborations of all the youths representing the seven tribes in Kakondo area.'
    },
    {
      id: '5',
      title: 'Community Beautification Program',
      description: 'Village-level initiatives to improve community hygiene, health, and environmental aesthetics through collective action.',
      category: 'Community Development',
      status: 'completed',
      year: '2023',
      location: 'Kaubasis Village',
      beneficiaries: 85,
      partners: ['Local Mothers Groups', 'Youth Volunteers'],
      outcomes: [
        'Cleaned and beautified Kaubasis village',
        'Established waste management systems',
        'Promoted community health and hygiene',
        'Strengthened community cooperation'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/ba25aa53-49cf-4231-a87d-0e58d59b2a34.jpeg',
      details: 'Mother and youth volunteers cleaned up their own village under the community health, hygiene and beautification program, demonstrating local ownership and pride in environmental stewardship.'
    },
    {
      id: '6',
      title: 'Water Supply System Maintenance',
      description: 'Infrastructure maintenance and improvement project ensuring reliable access to clean water for community health and wellbeing.',
      category: 'Infrastructure',
      status: 'completed',
      year: '2023',
      location: 'Dumun Village',
      beneficiaries: 300,
      partners: ['Village Council', 'Technical Volunteers'],
      outcomes: [
        'Restored water supply system functionality',
        'Improved water quality and access',
        'Trained local technicians',
        'Enhanced community health outcomes'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/78967b89-8d0b-4b04-bb2e-c32cb68a2d08.jpg',
      details: 'Helped maintain the water supply system in Dumun, ensuring reliable access to clean water and supporting community health and development initiatives.'
    },
    {
      id: '7',
      title: 'Organizational Constitution & Roadmap',
      description: 'Development and official launch of KPAM\'s governance framework and strategic development roadmap for sustainable organizational growth.',
      category: 'Governance',
      status: 'completed',
      year: '2023',
      location: 'Kakondo Area',
      beneficiaries: 18000,
      budget: 'PGK 7,000 (Community Fundraised)',
      partners: ['Community Leaders', 'Traditional Chiefs'],
      outcomes: [
        'Launched comprehensive constitution',
        'Established governance framework',
        'Defined strategic development roadmap',
        'Strengthened organizational legitimacy'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/84966069-fbc2-4e91-8109-baaff58d158b.jpg',
      details: 'Official launching of the association constitution and roadmap in 2023, with local leaders raising PGK 7,000 for the event and community members contributing food, cash, and cultural performances.'
    },
    {
      id: '8',
      title: 'Protected Area Network Participation',
      description: 'Active engagement in national and regional protected area initiatives to build partnerships and share best practices.',
      category: 'Partnership',
      status: 'ongoing',
      year: '2024-2025',
      location: 'PNG National Level',
      beneficiaries: 50000,
      partners: ['CEPA', 'UNDP', 'Mt Wilhelm Protected Area'],
      outcomes: [
        'Participated in PNG Protected Area Forum',
        'Completed financial management training',
        'Built national partnerships',
        'Positioned for PA deed signing'
      ],
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/eced0bca-9636-4e81-97da-dc2ce702b4b1.jpeg',
      details: 'Attended the PNG Protected Area Forum in Port Moresby and participated in executive financial management training through the CEPA/UNDP-GEF6 program. Made public declaration as potential next site for PA deed signing.'
    }
  ];

  const categories = ['all', 'Conservation', 'Agriculture', 'Tourism', 'Community Development', 'Infrastructure', 'Governance', 'Partnership'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'ongoing': return <Clock className="h-4 w-4" />;
      case 'planned': return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    totalBeneficiaries: projects.reduce((sum, p) => sum + p.beneficiaries, 0)
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the ongoing and completed initiatives that aim to preserve Kakondo's biodiversity and empower its communities through sustainable development.
            </p>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-green-700">{projectStats.total}</div>
                <CardTitle className="text-green-800">Total Projects</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-blue-700">{projectStats.ongoing}</div>
                <CardTitle className="text-green-800">Ongoing</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-green-700">{projectStats.completed}</div>
                <CardTitle className="text-green-800">Completed</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-orange-700">{projectStats.totalBeneficiaries.toLocaleString()}</div>
                <CardTitle className="text-green-800">Beneficiaries</CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map(project => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="p-0">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getStatusColor(project.status)}>
                      <span className="flex items-center">
                        {getStatusIcon(project.status)}
                        <span className="ml-1 capitalize">{project.status}</span>
                      </span>
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="mb-2 text-green-800">{project.title}</CardTitle>
                  <CardDescription className="mb-4 flex-1">{project.description}</CardDescription>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {project.beneficiaries.toLocaleString()} beneficiaries
                    </div>
                    {project.budget && (
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Budget: {project.budget}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Key Outcomes:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="mt-auto text-green-600 border-green-600 hover:bg-green-50">
                    <FileText className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Featured Projects</h2>
            
            <Tabs defaultValue="conservation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="conservation">Forest Restoration</TabsTrigger>
                <TabsTrigger value="development">Community Empowerment</TabsTrigger>
                <TabsTrigger value="tourism">Eco-Tourism</TabsTrigger>
              </TabsList>
              
              <TabsContent value="conservation" className="mt-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <TreePine className="h-12 w-12 text-green-600" />
                      <div>
                        <CardTitle className="text-green-800">Forest Restoration Initiative</CardTitle>
                        <CardDescription>Restoring degraded forest areas to improve habitat quality and promote biodiversity</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/dde2118f-8576-4d35-af35-b1f3ef0be926.jpeg"
                          alt="Forest Restoration"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Project Highlights:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Sprout className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                            Over 10,000 native trees planted
                          </li>
                          <li className="flex items-start">
                            <Award className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                            50+ community members trained in restoration techniques
                          </li>
                          <li className="flex items-start">
                            <Target className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                            200 hectares of degraded land restored
                          </li>
                        </ul>
                        <Button className="mt-4 bg-green-600 hover:bg-green-700">
                          Learn More
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="development" className="mt-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <GraduationCap className="h-12 w-12 text-blue-600" />
                      <div>
                        <CardTitle className="text-green-800">Community Empowerment Program</CardTitle>
                        <CardDescription>Training and supporting local communities to sustainably manage natural resources</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/022a13f2-4964-4d96-a177-5a988e38afd7.jpg"
                          alt="Community Training"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Program Achievements:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Users className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                            150+ community members trained
                          </li>
                          <li className="flex items-start">
                            <Home className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                            5 community resource centers established
                          </li>
                          <li className="flex items-start">
                            <Droplets className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                            Water and sanitation projects implemented
                          </li>
                        </ul>
                        <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                          Learn More
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tourism" className="mt-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Camera className="h-12 w-12 text-orange-600" />
                      <div>
                        <CardTitle className="text-green-800">Sustainable Eco-Tourism Development</CardTitle>
                        <CardDescription>Creating authentic tourism experiences that benefit local communities and conservation</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src="https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/64b990c6-a12a-403c-a8fd-67e3494a3541.jpg"
                          alt="Eco-Tourism"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Tourism Initiatives:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Home className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                            2 eco-lodges constructed with local materials
                          </li>
                          <li className="flex items-start">
                            <MapPin className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                            15km of cultural trails developed
                          </li>
                          <li className="flex items-start">
                            <Users className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                            Local guides trained and certified
                          </li>
                        </ul>
                        <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
                          Learn More
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Call to Action */}
          <section className="bg-green-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Support Our Projects</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Your support helps us expand the reach and impact of these projects. 
              Together, we can create a sustainable future for Kakondo and its communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Users className="h-4 w-4 mr-2" />
                Partner With Us
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600">
                <FileText className="h-4 w-4 mr-2" />
                Get Project Updates
              </Button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;