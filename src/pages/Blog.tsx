import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Development',
    },
    {
      id: 2,
      title: 'Building Accessible Websites: A Complete Guide',
      excerpt: 'Learn how to create websites that are accessible to all users, including best practices and common pitfalls to avoid.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Optimizing React Performance: Tips and Tricks',
      excerpt: 'Discover advanced techniques to boost your React application performance and provide better user experiences.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Development',
    },
    {
      id: 4,
      title: 'The Psychology of Color in Web Design',
      excerpt: 'Understanding how color choices affect user behavior and how to use them effectively in your designs.',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
    },
    {
      id: 5,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Explore the importance of mobile-first design approach and how it can improve your website performance.',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Strategy',
    },
    {
      id: 6,
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Learn the latest SEO strategies that will help your website rank higher in search engine results.',
      author: 'Emily Rodriguez',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Strategy',
    },
  ];

  const categories = ['All', 'Development', 'Design', 'Strategy'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts[0];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and trends from the world of web development and design.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Featured Article
            </h2>
            <Card hover className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden p-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="md:p-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button icon={ArrowRight} iconPosition="right">
                  Read Full Article
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                hover 
                className="overflow-hidden p-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="md:p-6 py-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;