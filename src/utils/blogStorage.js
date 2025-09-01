const BLOGS_KEY = 'blog_dashboard_blogs';
const STATS_KEY = 'blog_dashboard_stats';

// Sample blog data
const sampleBlogs = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    content: '<h2>Introduction</h2><p>React and TypeScript make a powerful combination for building robust web applications. In this comprehensive guide, we\'ll explore how to set up and work with both technologies.</p><h3>Why TypeScript?</h3><p>TypeScript provides static type checking, better IDE support, and improved code maintainability. When combined with React, it helps catch errors early and provides excellent developer experience.</p><h3>Setting Up Your Project</h3><p>First, create a new React project with TypeScript support using Vite:</p><pre><code>npm create vite@latest my-app -- --template react-ts</code></pre><p>This will set up a project with all the necessary TypeScript configurations.</p>',
    excerpt: 'Learn how to combine React with TypeScript for better development experience and type safety.',
    metaDescription: 'Complete guide to setting up and working with React and TypeScript for modern web development.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    thumbnailAlt: 'Code on computer screen showing React and TypeScript development',
    status: 'published',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    author: 'John Doe',
    tags: ['React', 'TypeScript', 'Web Development'],
    views: 125
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for Better UI Design',
    slug: 'modern-css-techniques-ui-design',
    content: '<h2>Modern CSS is Powerful</h2><p>CSS has evolved tremendously over the years. Today\'s CSS includes powerful features like Grid, Flexbox, Custom Properties, and much more.</p><h3>CSS Grid Layout</h3><p>Grid is perfect for two-dimensional layouts. Here\'s a simple example:</p><pre><code>.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}</code></pre><h3>CSS Custom Properties</h3><p>Custom properties (CSS variables) allow for dynamic theming and better maintainability:</p><pre><code>:root {\n  --primary-color: #3b82f6;\n  --secondary-color: #64748b;\n}</code></pre>',
    excerpt: 'Explore modern CSS features that will elevate your UI design and development workflow.',
    metaDescription: 'Discover modern CSS techniques including Grid, Flexbox, and Custom Properties for better UI design.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    thumbnailAlt: 'CSS code displayed on computer monitor with colorful syntax highlighting',
    status: 'published',
    createdAt: '2024-01-10T14:20:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
    author: 'Jane Smith',
    tags: ['CSS', 'UI Design', 'Frontend'],
    views: 87
  },
  {
    id: '3',
    title: 'Building Scalable Applications with Node.js',
    slug: 'building-scalable-applications-nodejs',
    content: '<h2>Scalability in Node.js</h2><p>Node.js is excellent for building scalable applications, but it requires proper architecture and best practices.</p><h3>Event Loop Understanding</h3><p>The event loop is the heart of Node.js. Understanding how it works is crucial for building performant applications.</p>',
    excerpt: 'Learn the best practices for building scalable and maintainable Node.js applications.',
    metaDescription: 'Complete guide to building scalable Node.js applications with proper architecture and best practices.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
    thumbnailAlt: 'Node.js logo and server architecture diagram illustration',
    status: 'draft',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    author: 'Mike Johnson',
    tags: ['Node.js', 'Backend', 'Scalability'],
    views: 45
  }
];

// Initialize with sample data if empty
const initializeBlogData = () => {
  const existingBlogs = localStorage.getItem(BLOGS_KEY);
  if (!existingBlogs) {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(sampleBlogs));
  }
  
  const existingStats = localStorage.getItem(STATS_KEY);
  if (!existingStats) {
    const stats = {
      totalBlogs: sampleBlogs.length,
      publishedBlogs: sampleBlogs.filter(b => b.status === 'published').length,
      draftBlogs: sampleBlogs.filter(b => b.status === 'draft').length,
      totalViews: sampleBlogs.reduce((sum, blog) => sum + blog.views, 0)
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }
};

export const blogStorage = {
  // Initialize data
  init: initializeBlogData,

  // Get all blogs
  getAll: () => {
    const blogs = localStorage.getItem(BLOGS_KEY);
    return blogs ? JSON.parse(blogs) : [];
  },

  // Get blog by ID
  getById: (id) => {
    const blogs = blogStorage.getAll();
    return blogs.find(blog => blog.id === id) || null;
  },

  // Get blog by slug
  getBySlug: (slug) => {
    const blogs = blogStorage.getAll();
    return blogs.find(blog => blog.slug === slug) || null;
  },

  // Save blog (create or update)
  save: (blog) => {
    const blogs = blogStorage.getAll();
    const now = new Date().toISOString();
    
    // Generate slug from title if not provided
    const slug = blog.slug || blog.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const newBlog = {
      ...blog,
      id: Date.now().toString(),
      slug,
      createdAt: now,
      updatedAt: now
    };
    
    blogs.push(newBlog);
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
    blogStorage.updateStats();
    return newBlog;
  },

  // Update existing blog
  update: (id, updates) => {
    const blogs = blogStorage.getAll();
    const index = blogs.findIndex(blog => blog.id === id);
    
    if (index === -1) return null;
    
    const updatedBlog = {
      ...blogs[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    blogs[index] = updatedBlog;
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
    blogStorage.updateStats();
    return updatedBlog;
  },

  // Delete blog
  delete: (id) => {
    const blogs = blogStorage.getAll();
    const filteredBlogs = blogs.filter(blog => blog.id !== id);
    
    if (filteredBlogs.length === blogs.length) return false;
    
    localStorage.setItem(BLOGS_KEY, JSON.stringify(filteredBlogs));
    blogStorage.updateStats();
    return true;
  },

  // Get stats
  getStats: () => {
    const stats = localStorage.getItem(STATS_KEY);
    return stats ? JSON.parse(stats) : {
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
      totalViews: 0
    };
  },

  // Update stats
  updateStats: () => {
    const blogs = blogStorage.getAll();
    const stats = {
      totalBlogs: blogs.length,
      publishedBlogs: blogs.filter(b => b.status === 'published').length,
      draftBlogs: blogs.filter(b => b.status === 'draft').length,
      totalViews: blogStorage.getStats().totalViews // Keep existing views
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  },

  // Search blogs
  search: (query) => {
    const blogs = blogStorage.getAll();
    const lowercaseQuery = query.toLowerCase();
    
    return blogs.filter(blog =>
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.content.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
};