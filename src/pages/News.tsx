/**
 * News and Publications page component
 * Displays recent news articles, press releases, and publications
 * Includes filtering options and search functionality
 */

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Tag, FileText, Download } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  type: 'news' | 'publication' | 'press-release';
  downloadUrl?: string;
}

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Sample news data
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Protected Area Deed Signing Progress',
      description: 'KPAM Inc. continues to work with CEPA and UNDP to finalize legal recognition as a regional protected area managed by indigenous communities.',
      category: 'Conservation',
      date: '2025-03-15',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/0bb4b75e-fcbe-46e6-995d-830afac1c1e7.jpeg',
      type: 'news'
    },
    {
      id: '2',
      title: 'Climate Resilience Model Farms Established',
      description: 'New model farms in Ward 6 of Chuave demonstrate climate-smart agriculture practices with initial PGK 3,500 grant from Simbu Provincial Department.',
      category: 'Agriculture',
      date: '2025-03-10',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/8c60080a-568c-4859-921e-36e79fccc6db.jpg',
      type: 'news'
    },
    {
      id: '3',
      title: 'KPAM Inc. Organizational Profile 2025',
      description: 'Comprehensive organizational profile detailing our history, mission, team, and strategic focus areas for sustainable development.',
      category: 'Organization',
      date: '2025-03-01',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/e845fe06-0536-4a95-b5e7-a7f23da3a2a4.jpeg',
      type: 'publication',
      downloadUrl: '#'
    },
    {
      id: '4',
      title: 'NGO Registration Successfully Completed',
      description: 'KPAM Inc. officially registered as NGO under Investment Promotion Authority, marking a major milestone in organizational development.',
      category: 'Organization',
      date: '2025-02-17',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/307ed65a-66c2-4362-9bb6-3352d5b96b2e.jpg',
      type: 'press-release'
    },
    {
      id: '5',
      title: 'Community-Based Conservation Training Program',
      description: 'Training and capacity building programs launched to enhance skills of local communities in sustainable practices and natural resource management.',
      category: 'Training',
      date: '2025-02-01',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/9866cecf-f116-4564-9a78-3b7427a6e765.jpeg',
      type: 'news'
    },
    {
      id: '6',
      title: 'Ecosystem-Based Adaptation Research Publication',
      description: 'Contribution to Nature-Based Solutions handbook published by Springer, showcasing our climate adaptation strategies.',
      category: 'Research',
      date: '2024-12-15',
      image: 'https://pub-cdn.sider.ai/u/U01AH8X8EKX/web-coder/6863bb0f235f86442e3a1440/resource/45b45a6c-2824-4f6a-a246-4967439922b4.jpg',
      type: 'publication',
      downloadUrl: '#'
    }
  ];

  const categories = ['all', 'Conservation', 'Agriculture', 'Organization', 'Training', 'Research'];
  const types = ['all', 'news', 'publication', 'press-release'];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'news': return 'bg-blue-100 text-blue-800';
      case 'publication': return 'bg-green-100 text-green-800';
      case 'press-release': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 mb-4">News & Publications</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, publications, and press releases from Kakondo Protected Area Management Inc.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}>
                Clear Filters
              </Button>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getTypeColor(item.type)}>
                      {item.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  
                  <CardTitle className="mb-2 text-green-800">{item.title}</CardTitle>
                  <CardDescription className="mb-4">{item.description}</CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-1" />
                      {item.category}
                    </div>
                    {item.downloadUrl && (
                      <Button size="sm" variant="outline" className="text-green-600 border-green-600">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="bg-green-50 p-8 rounded-lg mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Stay Informed</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive the latest updates on conservation efforts and community development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;