export interface IPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
}

export const posts: IPost[] = [
  {
    title: "Python 3.12: New Features and Performance Boosts",
    slug: "python-3-12-new-features-and-performance-boosts",
    author: "Santhosh Raj",
    date: "2024-03-10",
    category: "Python",
    thumbnail: "/images/thumbnails/python-312.jpg",
  },
  {
    title: "Building Scalable Web Apps with Django and Next.js",
    slug: "building-scalable-web-apps-with-django-and-nextjs",
    author: "Santhosh Raj",
    date: "2024-02-25",
    category: "Django",
    thumbnail: "/images/thumbnails/django-nextjs.png",
  },
  {
    title: "Advanced React Patterns: Elevate Your Frontend Development",
    slug: "advanced-react-patterns-elevate-your-frontend-development",
    author: "Santhosh Raj",
    date: "2024-04-01",
    category: "React",
    thumbnail: "/images/thumbnails/react-advanced.jpg",
  },
  {
    title: "Tailwind CSS v4: What's New and How to Upgrade",
    slug: "tailwind-css-v4-whats-new-and-how-to-upgrade",
    author: "Santhosh Raj",
    date: "2024-03-20",
    category: "Tailwind CSS",
    thumbnail: "/images/thumbnails/tailwind-v4.png",
  },
  {
    title: "Django Performance Optimization: Tips & Tricks",
    slug: "django-performance-optimization-tips-and-tricks",
    author: "Santhosh Raj",
    date: "2024-02-28",
    category: "Django",
    thumbnail: "/images/thumbnails/django-performance.webp",
  },
  {
    title: "AI-Powered Web Apps with Python and TensorFlow.js",
    slug: "ai-powered-web-apps-with-python-and-tensorflow-js",
    author: "Santhosh Raj",
    date: "2024-03-30",
    category: "AI/ML",
    thumbnail: "/images/thumbnails/python-ai.webp",
  },
  {
    title: "State Management in React: Redux vs. Zustand vs. Context API",
    slug: "state-management-in-react-redux-vs-zustand-vs-context-api",
    author: "Santhosh Raj",
    date: "2024-04-10",
    category: "React",
    thumbnail: "/images/thumbnails/react-state-management.webp",
  },
  {
    title: "Deploying Django Apps with Docker and Kubernetes",
    slug: "deploying-django-apps-with-docker-and-kubernetes",
    author: "Santhosh Raj",
    date: "2024-02-15",
    category: "DevOps",
    thumbnail: "/images/thumbnails/django-docker.png",
  },
  {
    title: "Python Async Programming: Mastering asyncio",
    slug: "python-async-programming-mastering-asyncio",
    author: "Santhosh Raj",
    date: "2024-04-05",
    category: "Python",
    thumbnail: "/images/thumbnails/python-async.webp",
  },
  {
    title: "Django vs. Flask: Which One Should You Use in 2024?",
    slug: "django-vs-flask-which-one-should-you-use-in-2024",
    author: "Santhosh Raj",
    date: "2024-01-30",
    category: "Web Development",
    thumbnail: "/images/thumbnails/django_vs_flask.jpeg",
  },
  {
    title: "TypeScript for Python Developers: A Beginner’s Guide",
    slug: "typescript-for-python-developers-a-beginners-guide",
    author: "Santhosh Raj",
    date: "2024-01-18",
    category: "TypeScript",
    thumbnail: "/images/thumbnails/typescript-python.webp",
  },
  {
    title: "Mastering Python’s Pattern Matching: The Power of `match-case`",
    slug: "mastering-python-pattern-matching",
    author: "Santhosh Raj",
    date: "2025-03-13",
    category: "Python",
    thumbnail: "/images/thumbnails/python-match-case.webp"
  }
  
];
