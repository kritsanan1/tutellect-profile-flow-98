
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Star, User, BookOpen, Briefcase, FileText, ScrollText, Smile, Activity, CheckCircle } from "lucide-react";

const profileCompletionData = [
  { section: "Personal Info", percentage: 100 },
  { section: "Contact Info", percentage: 100 },
  { section: "Education", percentage: 85 },
  { section: "Experience", percentage: 90 },
  { section: "Projects", percentage: 65 },
  { section: "Certifications", percentage: 70 },
  { section: "Skills", percentage: 100 },
  { section: "Languages", percentage: 60 },
  { section: "Interests", percentage: 100 },
];

const profileStrengthHistory = [
  { month: "Jan", strength: 45 },
  { month: "Feb", strength: 52 },
  { month: "Mar", strength: 60 },
  { month: "Apr", strength: 65 },
  { month: "May", strength: 75 },
  { month: "Jun", strength: 82 },
];

const recommendationsData = [
  {
    id: 1,
    title: "Add more projects",
    description: "Project details help demonstrate your practical skills",
    icon: FileText,
    severity: "high",
  },
  {
    id: 2,
    title: "Complete your languages section",
    description: "Add at least one more language to showcase your versatility",
    icon: BookOpen,
    severity: "medium",
  },
  {
    id: 3,
    title: "Update your certifications",
    description: "Add more certifications or update existing ones",
    icon: Award,
    severity: "medium",
  },
];

export default function Dashboard() {
  const [profileCompleteness, setProfileCompleteness] = useState(85);
  const [profileStrength, setProfileStrength] = useState(82);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "border-red-500/20 dark:border-red-500/20 bg-red-500/10";
      case "medium": return "border-amber-500/20 dark:border-amber-500/20 bg-amber-500/10";
      case "low": return "border-green-500/20 dark:border-green-500/20 bg-green-500/10";
      default: return "border-muted";
    }
  };
  
  const getSeverityIconColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-500";
      case "medium": return "text-amber-500";
      case "low": return "text-green-500";
      default: return "text-muted-foreground";
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2">
          Profile <span className="accent-text-gradient animate-text-gradient">Dashboard</span>
        </h1>
        <p className="text-muted-foreground md:text-lg">
          Monitor and improve your profile's completeness and impact
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Completeness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="relative h-16 w-16">
                <svg className="h-full w-full" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-muted stroke-[0.3rem]"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    strokeDasharray="100"
                    strokeDashoffset={100 - profileCompleteness}
                    className="stroke-primary stroke-[0.3rem] origin-center -rotate-90"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-xl font-bold">{profileCompleteness}%</span>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold">Excellent</p>
                <p className="text-muted-foreground">Keep going!</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Strength</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">{profileStrength}</span>
                <span className="text-xl">/100</span>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold">Strong</p>
                <div className="flex items-center text-green-500">
                  <TrendingUp size={16} className="mr-1" />
                  <span>+7 this month</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="flex items-end">
                <span className="text-3xl font-bold">124</span>
                <span className="text-muted-foreground ml-2 mb-1">last 30 days</span>
              </div>
              
              <div className="text-right">
                <div className="flex items-center text-green-500">
                  <TrendingUp size={16} className="mr-1" />
                  <span>+18%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Section Completion</CardTitle>
            <CardDescription>Progress by profile section</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {profileCompletionData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{item.section}</span>
                    <span className="text-sm font-medium">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className={getProgressColor(item.percentage)} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Strength History</CardTitle>
            <CardDescription>Profile strength over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profileStrengthHistory} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="strength" 
                  stroke="url(#gradientLine)" 
                  strokeWidth={3} 
                  dot={{ strokeWidth: 2, r: 4, strokeLinecap: 'round' }} 
                />
                <defs>
                  <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--tutellect-primary-from)" />
                    <stop offset="100%" stopColor="var(--tutellect-primary-to)" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Ways to improve your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendationsData.map((recommendation) => (
                <div 
                  key={recommendation.id} 
                  className={`p-4 rounded-lg border ${getSeverityColor(recommendation.severity)} flex items-start gap-4`}
                >
                  <div className={`mt-1 ${getSeverityIconColor(recommendation.severity)}`}>
                    <recommendation.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{recommendation.title}</h4>
                    <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile Highlights</CardTitle>
            <CardDescription>Your strongest sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                <div className="mt-1 text-primary">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Your diverse and well-categorized skills make your profile stand out
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                <div className="mt-1 text-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Your detailed work history provides a clear picture of your professional journey
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                <div className="mt-1 text-primary">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Personal Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Your profile contains all essential personal details
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Profile Distribution</CardTitle>
            <CardDescription>Breakdown of your profile sections</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={profileCompletionData}
                margin={{ top: 20, right: 20, bottom: 60, left: 10 }}
              >
                <XAxis 
                  dataKey="section" 
                  angle={-45} 
                  textAnchor="end" 
                  tick={{ fontSize: 12 }} 
                  height={60} 
                  stroke="var(--foreground)"
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Bar dataKey="percentage" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--tutellect-accent-from)" />
                    <stop offset="100%" stopColor="var(--tutellect-accent-to)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
