import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import projetImage1 from "../assets/anon.jpg";
import projetImage2 from "../assets/construction.jpg";
import projetImage3 from "../assets/It.png";



const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Marketplace Platform',
      description: 'This e-commerce solution, built with Spring Boot and Angular 16, features user management, product and order handling, a shopping cart,Coupon Code, promotions, notifications, chat, analytics, secure payments, and category management. The marketplace supports multiple sellers and buyers, providing a dynamic and interactive platform for all participants.',
      image: projetImage1,
      technologies: ['Spring Boot', 'Angular 16', 'PostgreSQL', 'Cloudinary', 'WebSocket'],
      category: 'fullstack',
      demo: 'https://youtu.be/ZOs15jRarxc',
      github: 'https://github.com/TogashiCoder/anon_Marketplace_Application'
    },
    {
      title: 'Microservice-ConstructionXS',
      description: 'A microservices-based platform for managing construction projects, including task allocation, resource planning.',
      image: projetImage2,
      technologies: ['Spring Boot','PostgreSQL', 'Docker', 'MicroService','Angular 16'],
      category: 'fullstack',
      demo: 'https://github.com/TogashiCoder/Microservice-ConstructionXS-',
      github: 'https://github.com/TogashiCoder/Microservice-ConstructionXS-'
    }
    ,
    {
      title: 'IT support App: Système de Gestion des Ressources Informatiques',
      description: "L'objectif de ce système est de faciliter la gestion des équipements informatiques au sein d'une organisation, ainsi que de fournir un suivi efficace des pannes et des tickets de support. Le système doit permettre la génération de rapports et de statistiques pour évaluer les performances et l'état des équipements.",
      image: projetImage3,
      technologies: ['Spring Boot', 'Docker','Angular 16',],
      category: 'fullstack',
      demo: 'https://github.com/TogashiCoder/IT_Support_Full-Stack_Application',
      github: 'https://github.com/TogashiCoder/IT_Support_Full-Stack_Application'
    },
   
    // {
    //   title: 'Unity 2D Game Platform',
    //   description: 'A 2D platformer game built with Unity, featuring procedural level generation.',
    //   image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    //   technologies: ['Unity', 'C#', 'Blender'],
    //   category: 'game',
    //   demo: 'https://github.com/TogashiCoder',
    //   github: 'https://github.com/TogashiCoder'
    // }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {['all', 'fullstack', 'game'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } border border-gray-200 dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;