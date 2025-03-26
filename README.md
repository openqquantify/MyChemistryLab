# MyChemistryLab

## Overview

MyChemistryLab is an interactive learning platform designed to enhance chemistry education for students and educators. It offers a comprehensive suite of tools and resources, including interactive learning modules, virtual lab simulations, an AI-guided practice system, and real-time analytics.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

*   **Interactive Learning Modules:** Engaging multimedia content covering basic to advanced chemistry topics.
*   **Virtual Lab Simulations:** Realistic, interactive chemistry experiments in a safe virtual environment.
*   **AI-Guided Practice System:** Personalized feedback and adaptive learning algorithms to identify knowledge gaps.
*   **Comprehensive Question Bank:** A vast collection of chemistry problems with algorithmic variations.
*   **Real-time Analytics Dashboard:** Detailed performance tracking for students and educators.
*   **LMS Integration:** Seamless connection with popular Learning Management Systems.
*   **Diverse Course Offerings:** Curriculum covering general, organic, and biochemistry.
*   **Video Tutorial Library:** High-quality video lectures and demonstrations.
*   **Interactive Periodic Table:** Comprehensive information on all elements.
*   **Mobile-Friendly Design:** Responsive website and dedicated mobile app.
*   **Educator Tools:** Customizable assignment creation, question authoring, and attendance tracking.
*   **Search:** Allows the user to find the content the want using a variety of search capabilities.


## Screenshots

| Home | Features | Virtual Labs | Testimonials | Pricing |
|---------|---------|---------|---------|---------|
| ![Screenshot 2025-03-26 144558](https://github.com/user-attachments/assets/57bbf166-5e4e-4efe-981c-60d64adfb427) | ![Screenshot 2025-03-26 144618](https://github.com/user-attachments/assets/17804caa-1fad-43ef-87a0-1107d2157a92) | ![Screenshot 2025-03-26 144635](https://github.com/user-attachments/assets/0c1a072d-1115-4dcf-8174-c338bd85e5fb) | ![Screenshot 2025-03-26 144657](https://github.com/user-attachments/assets/d658e469-d7d0-4d86-9afe-a87c3a4fd623) | ![Screenshot 2025-03-26 144720](https://github.com/user-attachments/assets/6d26aa97-bf6c-46f1-9247-134d8c620850) |

| Mobile | Courses | Tools | Virtual Labs | Periodic Table |
|---------|---------|---------|---------|---------|
| ![Screenshot 2025-03-26 144842](https://github.com/user-attachments/assets/81824bfc-fb83-4acb-84b4-18c1f92d3b22) | ![Screenshot 2025-03-26 144913](https://github.com/user-attachments/assets/a6d21d6f-b7ee-42bb-b377-c60572d94364)| ![Screenshot 2025-03-26 144930](https://github.com/user-attachments/assets/d573f91b-501d-41d0-af33-93155605baf5) | ![Screenshot 2025-03-26 145004](https://github.com/user-attachments/assets/d3ccdad9-0627-4797-8c8c-53ab61bc53cd) | ![Screenshot 2025-03-26 145048](https://github.com/user-attachments/assets/ba1e20e9-7e69-4087-af7a-3038439cc6f0) |


## Installation

1.  Clone the repository:

    ```
    git clone https://github.com/openqquantify/MyChemistryLab.git
    ```

2.  Navigate to the project directory:

    ```
    cd ChemistryLabs
    ```

3.  Install dependencies:

    ```
    npm install
    ```

4.  Start the development server:

    ```
    npm run dev
    ```

## Usage

### Virtual Lab
- Choose from a variety of experiments
- Follow safety guidelines and pre-lab preparation
- Conduct experiments and record observations
- Analyze results and submit lab reports


### Learning Modules
- Select a chemistry topic
- Engage with interactive content and animations
- Complete practice problems
- Track your progress and identify areas for improvement


### Analytics Dashboard
- View performance metrics
- Analyze learning patterns
- Set goals and track improvements

### Authentication

- **Register**: Create a new account as a student or educator
- **Sign In**: Access your saved data and personalized dashboard

## Technologies Used

*   React
*   React Router DOM
*   lucide-react
*   Tailwind CSS
*   react-helmet-async
*   TypeScript

## Project Structure
```text
my-chemistry-lab/
├── src/
│ ├── components/ # Reusable React components
│ │ ├── Header.tsx # The header component.
│ │ ├── Footer.tsx # The footer component.
│ │ ├── Hero.tsx # The hero component.
│ │ ├── PeriodicTableSection.tsx # The periodic table component.
│ │ ├── PricingSection.tsx # The pricing table component.
│ │ ├── TestimonialSection.tsx # The testimonial section component.
│ │ ├── VirtualLabSection.tsx # The virtaul lab component.
│ ├── pages/ # Different pages of the application
│ │ ├── AIPracticePage.tsx # AI Practice page
│ │ ├── LoginPage.tsx # Login page
│ │ ├── SignUpPage.tsx # Sign-up page
│ │ ├── AnalyticsDashboardPage.tsx # Analytics page
│ │ ├── ContactPage.tsx # Contact page
│ │ ├── CoursesPage.tsx # Courses page
│ │ ├── EducatorsPage.tsx # Educators Informational page
│ │ ├── LearningModulesPage.tsx # Learning Modules page
│ │ ├── LMSIntegrationPage.tsx # LMS Integration page
│ │ ├── MobileAppPage.tsx # Mobile apps page
│ │ ├── PeriodicTablePage.tsx # Periodic Table page
│ │ ├── QuestionBankPage.tsx # Question bank page
│ │ ├── SearchPage.tsx # Search page
│ │ ├── StudentsPage.tsx # Student Informational page
│ │ ├── VideoTutorialsPage.tsx # Video Tutorials page
│ │ └──  VirtualLabPage.tsx # Virtual Lab page
│ ├── App.tsx # Main application component
│ ├── index.tsx # Entry point of the application
│ ├── main.tsx # Entry point of the application
│ └── vite-env.d.ts # Type definitions for Vite's environment variables and client-specific features

├── eslint.config.js # Code styling
├── index.html # Main HTML file
├── package.json # Project metadata and dependencies
├── package-lock.json # Consistent dependency versions
├── postcss.config.js # Code styling
├── tailwind.config.js # Project dependencies and scripts
├── tsconfig.app.json # Project documentation
├── tsconfig.json # TypeScript configuration file
├── tsconfig.node.json  # TypeScript configuration file
├── README.md # TypeScript configuration file
└── vite.config.ts # Vite configuration file.
```



## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact Tanya Thomas at contact@TanyaDThomas.com.
