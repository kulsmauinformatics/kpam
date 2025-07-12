/**
 * Admin Dashboard component for managing CBOs, affiliates, and content
 * Provides administrative interface for organization management
 */

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  FileText, 
  BarChart3, 
  MapPin, 
  Phone, 
  Mail,
  Shield,
  UserPlus,
  Building2
} from 'lucide-react';

interface CBO {
  id: string;
  name: string;
  location: string;
  ward: string;
  members: number;
  contact: string;
  status: 'active' | 'inactive';
  established: string;
  activities: string[];
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  ward: string;
  status: 'active' | 'volunteer';
}

const Dashboard: React.FC = () => {
  const [isAddCBOOpen, setIsAddCBOOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  // Sample CBO data
  const [cbos, setCbos] = useState<CBO[]>([
    {
      id: '1',
      name: 'Gaten Nature Park',
      location: 'Dumun Village',
      ward: 'Ward 11',
      members: 45,
      contact: '+675 7123 4567',
      status: 'active',
      established: '2020',
      activities: ['Forest Conservation', 'Ecotourism', 'Community Development']
    },
    {
      id: '2',
      name: 'Mailbobo Wildlife and Nature Conservation',
      location: 'Mailbobo',
      ward: 'Ward 9',
      members: 38,
      contact: '+675 7234 5678',
      status: 'active',
      established: '2020',
      activities: ['Wildlife Protection', 'Habitat Restoration']
    },
    {
      id: '3',
      name: 'Whoty Nature Conservation',
      location: 'Whoty',
      ward: 'Ward 10',
      members: 32,
      contact: '+675 7345 6789',
      status: 'active',
      established: '2021',
      activities: ['Forest Conservation', 'Community Training']
    },
    {
      id: '4',
      name: 'Eveneku Natural Resource Management',
      location: 'Eveneku',
      ward: 'Ward 12',
      members: 28,
      contact: '+675 7456 7890',
      status: 'active',
      established: '2021',
      activities: ['Resource Management', 'Sustainable Development']
    },
    {
      id: '5',
      name: 'Keto Irafa Wildlife and Nature Conservation',
      location: 'Keto Irafa',
      ward: 'Ward 14',
      members: 35,
      contact: '+675 7567 8901',
      status: 'active',
      established: '2020',
      activities: ['Wildlife Conservation', 'Ecotourism Development']
    }
  ]);

  // Sample team member data
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Mauro Okrupa',
      position: 'Chairman & Executive Director',
      email: 'mauro.okrupa@nari.gov.pg',
      phone: '+675 7182 9634',
      ward: 'Ward 11',
      status: 'active'
    },
    {
      id: '2',
      name: 'Karl Kama',
      position: 'Strategic Advisor',
      email: 'karl.kama@nari.gov.pg',
      phone: '+675 8170 0969',
      ward: 'Ward 11',
      status: 'active'
    },
    {
      id: '3',
      name: 'Paul Rudolph',
      position: 'Sustainable Development Program Manager',
      email: 'paul.rudolph@pumaenergy.com',
      phone: '+675 7318 3614',
      ward: 'Ward 14',
      status: 'volunteer'
    }
  ]);

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const totalMembers = cbos.reduce((sum, cbo) => sum + cbo.members, 0);
  const activeCBOs = cbos.filter(cbo => cbo.status === 'active').length;

  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-green-900">Dashboard</h1>
              <p className="text-gray-600">Manage CBOs, team members, and organizational data</p>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <Shield className="h-4 w-4 mr-1" />
              Admin Access
            </Badge>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total CBOs</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{cbos.length}</div>
                <p className="text-xs text-muted-foreground">
                  {activeCBOs} active organizations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalMembers}</div>
                <p className="text-xs text-muted-foreground">
                  Across all CBOs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teamMembers.length}</div>
                <p className="text-xs text-muted-foreground">
                  Active staff and volunteers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Coverage Area</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  Council wards
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="cbos" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cbos">CBOs Management</TabsTrigger>
              <TabsTrigger value="team">Team Management</TabsTrigger>
              <TabsTrigger value="content">Content Management</TabsTrigger>
            </TabsList>

            {/* CBOs Management Tab */}
            <TabsContent value="cbos">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Community-Based Organizations</CardTitle>
                      <CardDescription>
                        Manage affiliated CBOs and their member details
                      </CardDescription>
                    </div>
                    <Dialog open={isAddCBOOpen} onOpenChange={setIsAddCBOOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Plus className="h-4 w-4 mr-2" />
                          Add CBO
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Add New CBO</DialogTitle>
                          <DialogDescription>
                            Add a new Community-Based Organization to the network
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="cbo-name">Organization Name</Label>
                            <Input id="cbo-name" placeholder="Enter CBO name" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cbo-location">Location</Label>
                            <Input id="cbo-location" placeholder="Village/Location" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cbo-ward">Ward</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select ward" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ward-9">Ward 9</SelectItem>
                                <SelectItem value="ward-10">Ward 10</SelectItem>
                                <SelectItem value="ward-11">Ward 11</SelectItem>
                                <SelectItem value="ward-12">Ward 12</SelectItem>
                                <SelectItem value="ward-14">Ward 14</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cbo-contact">Contact</Label>
                            <Input id="cbo-contact" placeholder="Phone number" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="bg-green-600 hover:bg-green-700">
                            Add CBO
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cbos.map(cbo => (
                      <div key={cbo.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-green-800">{cbo.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              {cbo.location}, {cbo.ward}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(cbo.status)}>
                              {cbo.status}
                            </Badge>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Members:</span> {cbo.members}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {cbo.contact}
                          </div>
                          <div>
                            <span className="font-medium">Est.:</span> {cbo.established}
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <span className="font-medium text-sm">Activities:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {cbo.activities.map((activity, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Team Management Tab */}
            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Team Members</CardTitle>
                      <CardDescription>
                        Manage executive team and volunteer staff
                      </CardDescription>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Member
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map(member => (
                      <div key={member.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-green-800">{member.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{member.position}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 text-sm">
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-1" />
                                {member.email}
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-1" />
                                {member.phone}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {member.ward}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(member.status)}>
                              {member.status}
                            </Badge>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Management Tab */}
            <TabsContent value="content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>News & Publications</CardTitle>
                    <CardDescription>
                      Manage website content and publications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Add News Article
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Upload Publication
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Manage Content
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analytics & Reports</CardTitle>
                    <CardDescription>
                      Website traffic and engagement metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Member Statistics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;