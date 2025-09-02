import type { Project } from '../types';

export const projects: Project[] = [
  // Major Projects
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN e-commerce application with user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'Stripe API'],
    category: 'fullstack'
  },
  {
    id: 'todo-app',
    title: 'Advanced Todo Application',
    description: 'Feature-rich task management app with categories, due dates, priority levels, drag-and-drop functionality, and local storage persistence.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Local Storage', ],
    category: 'frontend'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with real-time data, 7-day forecasts, location-based weather information, and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'Weather API', 'CSS3', 'Geolocation API'],
    category: 'frontend'
  },
  {
    id: 'product-listing',
    title: 'Product Catalog',
    description: 'Dynamic product listing application with advanced search, filtering, pagination, sorting, and responsive design using fake store API.',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'Fake Store API', 'Bootstrap', 'Axios'],
    category: 'frontend'
  },
  
  // Games & Interactive Projects
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Game',
    description: 'Interactive tic-tac-toe game with AI opponent, score tracking, game history, and smooth animations for an engaging user experience.',
    image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Game Logic', ],
    category: 'frontend'
  },
  {
    id: 'flip-card-game',
    title: 'Memory Flip Card Game',
    description: 'Engaging memory game with card flipping animations, difficulty levels, timer, score system, and beautiful card designs.',
    image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'CSS Animations', 'Game State Management'],
    category: 'frontend'
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'Classic rock-paper-scissors game with computer AI, score tracking, animated choices, and multiple game modes for endless fun.',
    image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'CSS3', ],
    category: 'frontend'
  },
  
  // Design Projects
  
];