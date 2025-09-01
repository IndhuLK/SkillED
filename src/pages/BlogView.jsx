import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogStorage } from '../utils/blogStorage';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock,
  Share2,
  Eye
} from 'lucide-react';

export default function BlogView() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      blogStorage.init();
      const foundBlog = blogStorage.getBySlug(slug);
      setBlog(foundBlog);
      setIsLoading(false);

      // Update page title and meta description for SEO
      if (foundBlog) {
        document.title = `${foundBlog.title} - BlogCMS`;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', foundBlog.metaDescription || foundBlog.excerpt);
        }
      }
    }
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-surface flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-surface flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-muted/30 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Eye className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or may have been removed.
          </p>
          <Link to="/">
            <Button className="btn-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/all-blogs">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to All Blogs
              </Button>
            </Link>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.thumbnail && (
        <div className="relative h-96 overflow-hidden">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title and Meta */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge 
              className={blog.status === 'published' 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-warning/10 text-warning border-warning/20'
              }
            >
              {blog.status === 'published' ? 'Published' : 'Draft'}
            </Badge>
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>By {blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Published on {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            {blog.updatedAt !== blog.createdAt && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Updated {new Date(blog.updatedAt).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          {blog.excerpt && (
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </header>

        {/* Blog Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-foreground 
            prose-p:text-foreground 
            prose-p:leading-relaxed
            prose-strong:text-foreground
            prose-em:text-foreground
            prose-blockquote:text-muted-foreground
            prose-blockquote:border-l-primary
            prose-code:text-primary
            prose-code:bg-primary/10
            prose-code:px-2
            prose-code:py-1
            prose-code:rounded
            prose-pre:bg-muted
            prose-pre:border
            prose-a:text-primary
            prose-a:no-underline
            hover:prose-a:underline
            prose-ul:text-foreground
            prose-ol:text-foreground
            prose-li:text-foreground
            prose-img:rounded-lg
            prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Written by <span className="font-medium text-foreground">{blog.author}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Last updated on {new Date(blog.updatedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <Link to={`/edit-blog/${blog.id}`}>
                <Button variant="outline">
                  Edit Post
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}