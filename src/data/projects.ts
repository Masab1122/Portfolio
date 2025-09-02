import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN e-commerce application with user authentication, product management, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
    category: 'fullstack'
  },
  {
    id: 'todo-app',
    title: 'Advanced Todo Application',
    description: 'Feature-rich task management app with categories, due dates, priority levels, and local storage persistence.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    category: 'frontend'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with real-time data, 7-day forecasts, and location-based weather information.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'Weather API', 'CSS3'],
    category: 'frontend'
  },
  {
    id: 'product-listing',
    title: 'Product Catalog',
    description: 'Dynamic product listing application with search, filtering, pagination, and responsive design using fake store API.',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'Fake Store API', 'Bootstrap'],
    category: 'frontend'
  },
//   {
//     id: 'figma-designs',
//     title: 'UI/UX Design Projects',
//     description: 'Collection of modern web designs created in Figma, focusing on user experience and contemporary design principles.',
//     image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
//     category: 'design'
//   }
];