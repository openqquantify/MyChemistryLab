import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  // search results
  const searchResults = [
    { title: 'Interactive Learning Modules', description: 'Explore our engaging learning modules.', link: '/learning-modules', keywords: ['modules', 'learning', 'interactive', 'chemistry'] },
    { title: 'Virtual Lab Simulations', description: 'Perform experiments in a safe virtual environment.', link: '/virtual-lab', keywords: ['virtual', 'lab', 'simulations', 'experiments'] },
    { title: 'Mobile App', description: 'Access MyChemistryLab on the go with our mobile app.', link: '/mobile-app', keywords: ['mobile', 'app', 'chemistry', 'learning'] },
    { title: 'Features Overview', description: 'Learn about the key features of MyChemistryLab.', link: '/', keywords: ['features', 'overview', 'chemistry', 'tools'] },
    { title: 'Question Bank', description: 'Practice with a vast collection of chemistry questions.', link: '/question-bank', keywords: ['question', 'bank', 'practice', 'chemistry'] },
    { title: 'AI-Guided Practice System', description: 'Experience a revolutionary approach to chemistry learning with our advanced AI system that adapts to your unique learning style and pace.', link: '/ai-practice', keywords: ['ai', '', 'ai guided', 'advanced ai'] },
    { title: 'Real-time Analytics Dashboard', description: 'Gain valuable insights into learning patterns with comprehensive analytics that help both students and educators track progress and identify areas for improvement.', link: '/analytics-dashboard', keywords: ['real-time', 'lab', 'analytics', 'dashboard'] },
    { title: 'Contact', description: 'Get in touch with us.', link: '/mobile-app', keywords: ['contact', 'email', 'call', 'message'] },
    { title: 'Comprehensive Chemistry Courses', description: 'Expert-created courses covering general, organic, and biochemistry. Aligned with academic standards and designed for student success..', link: '/courses', keywords: ['general', 'biochemistry', 'courses', 'organic chemistry', 'chemistry'] },
    { title: 'LMS Integration', description: 'eamlessly connect MyChemistryLab with your existing Learning Management System for streamlined course management and grade synchronization.', link: '/lms-integration', keywords: ['learning management system', 'lms', 'streamlined course management', 'grade synchronization'] },
    { title: 'Video Tutorial Library', description: 'Access our extensive collection of high-quality video tutorials covering everything from basic concepts to advanced topics in chemistry.', link: '/video-tutorials', keywords: ['video', 'tutorials', 'library'] },
    { title: 'Interactive Periodic Table', description: 'Explore the elements and discover their properties, structures, and applications in our comprehensive interactive periodic table designed for chemistry students and enthusiasts.', link: '/periodic-table', keywords: ['periodic table', 'table', 'interactive', 'chemistry'] },
    { title: 'Educator Tools', description: 'Empower your teaching with our comprehensive suite of tools designed specifically for chemistry educators at all levels, from high school to university.', link: '/educators', keywords: ['educators', 'teachers', 'professors', 'teach'] },
    { title: 'Student Tools', description: 'Access interactive learning tools, virtual labs, and personalized practice sessions designed to help you understand and excel in chemistry.', link: '/students', keywords: ['students', 'class', 'learning'] },

    // Add more results as needed
  ];

  // Filter search results based on query
  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Search Results | MyChemistryLab</title>
        <meta name="description" content={`Search results for "${query}" on MyChemistryLab.`} />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Search Results for "{query}"</h1>
        {filteredResults.length > 0 ? (
          <ul>
            {filteredResults.map((result, index) => (
              <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800"><Link to={result.link} className="hover:text-blue-600">{result.title}</Link></h2>
                <p className="text-gray-600">{result.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
