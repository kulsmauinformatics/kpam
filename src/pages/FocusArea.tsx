/**
 * Focus Area page component showcasing strategic focus areas
 * Details the four main areas of work: Conservation, Eco-Tourism, Community Development, and Leadership
 */

import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TreePine, 
  Globe, 
  Users, 
  Shield,
  Leaf,
  Camera,
  BookOpen,
  Heart,
  ArrowRight,
  Target,
  CheckCircle
} from 'lucide-react';

const FocusArea: React.FC = () => {
  const focusAreas = [
    {
      id: 'conservation',
      title: 'Community-Based Conservation and Environmental Stewardship',
      subtitle: 'Forest Conservation',
      description: 'KPAM works to protect Kakondo\'s forests, watershed, and wildlife through community-led conservation efforts, including habitat restoration and biodiversity monitoring. We blend traditional knowledge with modern practices to safeguard natural resources.',
      icon: TreePine,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/dada7a7d-82e0-48b2-8a63-0e681f51aaed.jpg',
      goals: [
        'Protect and restore 7,000+ hectares of tropical montane rainforest',
        'Monitor and preserve endemic flora and fauna species',
        'Implement community-led reforestation programs',
        'Establish sustainable forest management practices'
      ],
      activities: [
        'GPS mapping of forest boundaries',
        'Biodiversity monitoring and inventory',
        'Habitat restoration projects',
        'Community conservation training'
      ]
    },
    {
      id: 'agriculture',
      title: 'Sustainable Livelihoods and Climate-Smart Agriculture',
      subtitle: 'Eco-Tourism',
      description: 'KPAM supports sustainable agriculture, eco-tourism, and small businesses to create resilient, community-driven economies. By promoting climate-smart practices, we help communities adapt to climate change while improving food security and economic well-being.',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/b81893ec-22f3-405f-a6e2-4d591073c4ae.jpg',
      goals: [
        'Develop authentic eco-tourism experiences',
        'Create sustainable income opportunities',
        'Preserve cultural heritage and traditions',
        'Promote responsible travel practices'
      ],
      activities: [
        'Eco-lodge construction and management',
        'Traditional footpath rehabilitation',
        'Cultural site preservation',
        'Tourism guide training programs'
      ]
    },
    {
      id: 'development',
      title: 'Capacity Building for Climate-Smart Agriculture and Conservation',
      subtitle: 'Community Development & Training',
      description: 'We provide training in climate-smart agriculture, nature-based solutions, sustainable land use and conservation for men, women, youth, and children, equipping them with the skills to improve food security, build resilience to climate change, and protect the environment.',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/b051396a-789c-4ebb-ac62-28022df5d8f5.jpg',
      goals: [
        'Build local capacity in sustainable practices',
        'Empower women, youth, and farmers',
        'Improve food security and nutrition',
        'Strengthen climate adaptation skills'
      ],
      activities: [
        'Climate-smart agriculture training',
        'Model farm establishment',
        'Skills development workshops',
        'Knowledge transfer programs'
      ]
    },
    {
      id: 'governance',
      title: 'Leadership and Governance, including Law and Order',
      subtitle: 'Leadership & Governance',
      description: 'KPAM strengthens leadership and governance by training local leaders, youth, and community members. We focus on enhancing decision-making, fostering transparency, and prioritizing law and order to ensure traditional social order systems are strengthened and local authorities carry out effective and peaceful governance.',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/edcf5c95-2c96-42d1-91c7-c87fdaa8e639.jpg',
      goals: [
        'Strengthen local governance structures',
        'Enhance leadership capacity',
        'Promote transparency and accountability',
        'Maintain law and order'
      ],
      activities: [
        'Leadership training programs',
        'Governance workshops',
        'Policy development support',
        'Conflict resolution training'
      ]
    }
  ];

  const achievements = [
    { number: '5', label: 'Conservation CBOs', description: 'Community-based organizations actively involved' },
    { number: '50%', label: 'Forest Mapped', description: 'Of Kakondo\'s remaining intact forests GPS mapped' },
    { number: '7,000+', label: 'Hectares Protected', description: 'Tropical montane rainforest under community management' },
    { number: '18,000', label: 'Landowners', description: 'Indigenous landowners across 8 council wards' }
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Strategic Focus Areas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Our Integrated Approach to
              <span className="text-green-600"> Conservation & Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Kakondo Protected Area Management Inc., we work across four interconnected strategic areas 
              to achieve lasting impact for both people and nature through community-driven initiatives.
            </p>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl font-bold text-green-700 mb-2">{achievement.number}</div>
                  <CardTitle className="text-lg text-green-800">{achievement.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Focus Areas */}
          <div className="space-y-16">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={area.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Content */}
                  <div className="flex-1">
                    <Card className={`${area.borderColor} border-2 h-full`}>
                      <CardHeader className={area.bgColor}>
                        <div className="flex items-center space-x-4 mb-4">
                          <IconComponent className={`h-12 w-12 ${area.color}`} />
                          <div>
                            <Badge className={`mb-2 ${area.bgColor} ${area.color} border-current`}>
                              {area.subtitle}
                            </Badge>
                            <CardTitle className="text-2xl text-green-800 leading-tight">
                              {area.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <CardDescription className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {area.description}
                        </CardDescription>

                        {/* Goals */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                            <Target className="h-5 w-5 mr-2" />
                            Key Goals
                          </h4>
                          <ul className="space-y-2">
                            {area.goals.map((goal, goalIndex) => (
                              <li key={goalIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Activities */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2" />
                            Current Activities
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {area.activities.map((activity, activityIndex) => (
                              <Badge key={activityIndex} variant="outline" className="text-xs justify-start">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="bg-green-600 hover:bg-green-700">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative">
                      <img 
                        src={area.image}
                        alt={area.subtitle}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partnership Section */}
          <section className="mt-20 bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Partner with Us</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join hands with us to expand the reach and impact of these projects. 
                Together, we can create a sustainable future that benefits both people and the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  <Heart className="h-5 w-5 mr-2" />
                  Become a Partner
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600">
                  <Camera className="h-5 w-5 mr-2" />
                  Visit Our Projects
                </Button>
              </div>
            </div>
          </section>

          {/* Implementation Approach */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Our Implementation Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Community-Led</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All initiatives are driven by local communities with traditional knowledge 
                    at the center of our conservation and development strategies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Science-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our programs integrate modern scientific methods with traditional practices 
                    to ensure effective and sustainable outcomes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Culturally Grounded</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We respect and strengthen traditional governance systems while building 
                    capacity for modern conservation and development challenges.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default FocusArea;