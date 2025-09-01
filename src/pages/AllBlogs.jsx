import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogStorage } from '../utils/blogStorage';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { toast } from '../components/ui/use-toast';
import { 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  PlusCircle,
  Calendar,
  User,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    setIsLoading(true);
    blogStorage.init();
    const allBlogs = blogStorage.getAll();
    setBlogs(allBlogs);
    setIsLoading(false);
  };

  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by search query
    if (searchQuery) {
      filtered = blogStorage.search(searchQuery);
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog => blog.status === statusFilter);
    }

    // Sort by updated date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }, [blogs, searchQuery, statusFilter]);

  const handleDelete = async (blogId, blogTitle) => {
    if (window.confirm(`Are you sure you want to delete "${blogTitle}"?`)) {
      const success = blogStorage.delete(blogId);
      if (success) {
        setBlogs(prev => prev.filter(blog => blog.id !== blogId));
        toast({
          title: "Success",
          description: "Blog post deleted successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive"
        });
      }
    }
  };

  const getStatusIcon = (status) => {
    return status === 'published' ? CheckCircle : Clock;
  };

  const getStatusColor = (status) => {
    return status === 'published' 
      ? 'bg-accent text-accent-foreground' 
      : 'bg-warning/10 text-warning border-warning/20';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-surface flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">All Blog Posts</h1>
            <p className="text-muted-foreground mt-1">
              Manage and organize your blog content
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

      {/* Filters */}
      <Card className="card-elevated mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search blogs by title, content, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredBlogs.length} of {blogs.length} blog posts
        </p>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length === 0 ? (
        <Card className="card-elevated">
          <CardContent className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="bg-muted/30 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {searchQuery || statusFilter !== 'all' ? 'No blogs found' : 'No blog posts yet'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filters to find what you\'re looking for.'
                  : 'Get started by creating your first blog post.'
                }
              </p>
              {!searchQuery && statusFilter === 'all' && (
                <Link to="/add-blog">
                  <Button className="btn-primary">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create Your First Blog Post
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => {
            const StatusIcon = getStatusIcon(blog.status);
            return (
              <Card key={blog.id} className="card-elevated group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  {blog.thumbnail && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={getStatusColor(blog.status)}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {blog.status}
                        </Badge>
                      </div>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  {blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{blog.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.updatedAt).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Link to={`/edit-blog/${blog.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </Link>
                      {blog.status === 'published' && (
                        <Link to={`/blog/${blog.slug}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </Link>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(blog.id, blog.title)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}