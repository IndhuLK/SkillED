import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogStorage } from '../utils/blogStorage';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  FileText, 
  Eye, 
  PlusCircle, 
  Clock,
  CheckCircle,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { CardFooter } from '../components/ui/card';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    blogStorage.init();
    setStats(blogStorage.getStats());
    
    // Get recent blogs (last 5)
    const allBlogs = blogStorage.getAll();
    const recent = allBlogs
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5);
    setRecentBlogs(recent);
  }, []);

  if (!stats) return null;

  const statCards = [
    {
      title: 'Total Blogs',
      value: stats.totalBlogs,
      icon: FileText,
      description: 'All blog posts',
      color: 'text-primary'
    },
    {
      title: 'Published',
      value: stats.publishedBlogs,
      icon: CheckCircle,
      description: 'Live on website',
      color: 'text-accent'
    },
    {
      title: 'Drafts',
      value: stats.draftBlogs,
      icon: Clock,
      description: 'Work in progress',
      color: 'text-warning'
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      icon: TrendingUp,
      description: 'All time views',
      color: 'text-primary'
    }
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's an overview of your blog.
            </p>
          </div>
          <Link to="/add-blog">
            <Button className="btn-primary">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Blog Post
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          
          <Card key={stat.title} className="card-elevated animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {stat.value.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Blogs */}
      <Card className="card-elevated animate-slide-up">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Recent Blog Posts
            </CardTitle>
            <Link to="/all-blogs">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {recentBlogs.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No blog posts yet</p>
              <Link to="/add-blog">
                <Button className="btn-primary">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Your First Blog Post
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-foreground">
                        {blog.title}
                      </h3>
                      <Badge
                        variant={blog.status === 'published' ? 'default' : 'secondary'}
                        className={blog.status === 'published' ? 'bg-accent text-accent-foreground' : ''}
                      >
                        {blog.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{new Date(blog.updatedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{blog.tags.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link to={`/edit-blog/${blog.id}`}>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                    {blog.status === 'published' && (
                      <Link to={`/blog/${blog.slug}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}