import React from 'react';
import { 
  Beaker, 
  BookOpen, 
  Brain, 
  FileQuestion, 
  BarChart3, 
  Layers, 
  GraduationCap, 
  Video, 
  Table2, 
  Smartphone, 
  Users, 
  ChevronRight
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import VirtualLabSection from './components/VirtualLabSection';
import VirtualLabPage from './pages/VirtualLabPage';
import StudentsPage from './pages/StudentsPage';
import EducatorsPage from './pages/EducatorsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LearningModulesPage from './pages/LearningModulesPage';
import QuestionBankPage from './pages/QuestionBankPage';
import AIPracticePage from './pages/AIPracticePage';
import LMSIntegrationPage from './pages/LMSIntegrationPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import PeriodicTablePage from './pages/PeriodicTablePage';
import MobileAppPage from './pages/MobileAppPage';
import VideoTutorialsPage from './pages/VideoTutorialsPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/virtual-lab" element={<VirtualLabPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/educators" element={<EducatorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/learning-modules" element={<LearningModulesPage />} />
          <Route path="/question-bank" element={<QuestionBankPage />} />
          <Route path="/ai-practice" element={<AIPracticePage />} />
          <Route path="/lms-integration" element={<LMSIntegrationPage />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
          <Route path="/periodic-table" element={<PeriodicTablePage />} />
          <Route path="/mobile-app" element={<MobileAppPage />} />
          <Route path="/video-tutorials" element={<VideoTutorialsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Features Overview */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Comprehensive Learning Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-10 h-10 text-blue-500" />}
              title="Interactive Learning Modules"
              description="Multimedia-rich content covering basic to advanced chemistry topics with engaging animations and simulations."
              link="/learning-modules"
            />
            
            <FeatureCard 
              icon={<Beaker className="w-10 h-10 text-blue-500" />}
              title="Virtual Lab Simulations"
              description="Realistic, interactive chemistry experiments with safety guidelines and pre-lab preparation tools."
              link="/virtual-lab"
            />
            
            <FeatureCard 
              icon={<Brain className="w-10 h-10 text-blue-500" />}
              title="AI-Guided Practice System"
              description="Adaptive learning algorithms for personalized feedback with progress tracking and study recommendations."
              link="/ai-practice"
            />
            
            <FeatureCard 
              icon={<FileQuestion className="w-10 h-10 text-blue-500" />}
              title="Comprehensive Question Bank"
              description="Vast collection of chemistry problems with algorithmic variations for endless practice opportunities."
              link="/question-bank"
            />
            
            <FeatureCard 
              icon={<BarChart3 className="w-10 h-10 text-blue-500" />}
              title="Real-time Analytics Dashboard"
              description="Detailed performance tracking for students and educators with insights on learning patterns."
              link="/analytics-dashboard"
            />
            
            <FeatureCard 
              icon={<Layers className="w-10 h-10 text-blue-500" />}
              title="LMS Integration"
              description="Seamless connection with popular Learning Management Systems for easy grade syncing and course management."
              link="/lms-integration"
            />
            
            <FeatureCard 
              icon={<GraduationCap className="w-10 h-10 text-blue-500" />}
              title="Diverse Course Offerings"
              description="Curriculum covering general, organic, and biochemistry with expert-created content aligned with standards."
              link="/courses"
            />
            
            <FeatureCard 
              icon={<Video className="w-10 h-10 text-blue-500" />}
              title="Video Tutorial Library"
              description="High-quality video lectures and demonstrations, searchable by topic and difficulty level."
              link="/video-tutorials"
            />
            
            <FeatureCard 
              icon={<Table2 className="w-10 h-10 text-blue-500" />}
              title="Interactive Periodic Table"
              description="Comprehensive information on all elements with visual representations of atomic structure and properties."
              link="/periodic-table"
            />
            
            <FeatureCard 
              icon={<Smartphone className="w-10 h-10 text-blue-500" />}
              title="Mobile-Friendly Design"
              description="Responsive website with dedicated mobile app and offline access to key features."
              link="/mobile-app"
            />
            
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-blue-500" />}
              title="Educator Tools"
              description="Customizable assignment creator, question authoring system, and digital attendance tracking."
              link="/educators"
            />
          </div>
        </div>
      </section>
      
      {/* Detailed Feature Sections */}
      <FeatureSection 
        title="Interactive Learning Modules"
        description="Our interactive learning modules transform complex chemistry concepts into engaging, digestible content that adapts to your learning style."
        image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Student using interactive chemistry learning module"
        features={[
          "Multimedia-rich content covering basic to advanced topics",
          "Engaging animations that visualize molecular interactions",
          "Interactive simulations for complex concepts",
          "Step-by-step guided learning paths",
          "Adaptive difficulty based on performance"
        ]}
        reversed={false}
        link="/learning-modules"
      />
      
      
      <FeatureSection 
        title="AI-Guided Practice System"
        description="Our advanced AI system analyzes your performance to provide personalized guidance, identifying knowledge gaps and recommending targeted practice."
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        imageAlt="AI-guided learning system interface"
        features={[
          "Adaptive learning algorithms for personalized feedback",
          "Progress tracking across all chemistry topics",
          "Smart study recommendations based on performance",
          "Identification of knowledge gaps and misconceptions",
          "Customized practice sessions targeting weak areas"
        ]}
        reversed={false}
        link="/ai-practice"
      />
      
      <FeatureSection 
        title="Real-time Analytics Dashboard"
        description="Gain valuable insights into learning patterns with comprehensive analytics that help both students and educators track progress and identify areas for improvement."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Analytics dashboard showing student progress"
        features={[
          "Detailed performance tracking across all modules",
          "Visual representation of learning patterns",
          "Time spent on different topics and activities",
          "Comparison with class averages (for students)",
          "Class-wide performance analysis (for educators)"
        ]}
        reversed={true}
        link="/analytics-dashboard"
      />
      
      <FeatureSection 
        title="Video Tutorial Library"
        description="Access our extensive collection of high-quality video tutorials covering everything from basic concepts to advanced topics in chemistry."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Students watching chemistry video tutorials"
        features={[
          "Expert-led video lectures and demonstrations",
          "Searchable by topic, difficulty level, and keywords",
          "Closed captioning and transcripts for accessibility",
          "Downloadable for offline viewing",
          "Regularly updated with new content"
        ]}
        reversed={true}
        link="/video-tutorials"
      />
      
      <FeatureSection 
        title="Educator Tools"
        description="Empower your teaching with our comprehensive suite of tools designed specifically for chemistry educators at all levels."
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Chemistry teacher using educator tools"
        features={[
          "Customizable assignment creator with question bank access",
          "Automated grading and performance analytics",
          "Digital attendance tracking and participation monitoring",
          "Custom course creation with curriculum alignment",
          "Collaboration tools for teaching teams"
        ]}
        reversed={false}
        link="/educators"
      />
      
      <section id="testimonials">
        <TestimonialSection />
      </section>
      
      <section id="pricing">
        <PricingSection />
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description, link }) {
  const content = (
    <>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        {link ? (
          <Link to={link} className="inline-flex items-center text-blue-500 hover:text-blue-700">
            Learn more <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        ) : (
          <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700">
            Learn more <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </>
  );

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {content}
    </div>
  );
}

export default App;