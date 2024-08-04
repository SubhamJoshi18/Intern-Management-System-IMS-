Intern Management System
Overview
The Intern Management System is a comprehensive web application designed to streamline the management of intern assignments, track their progress, and facilitate communication between interns and supervisors. The system provides features for managing intern profiles, tracking tasks and performance, and generating reports.

Features
Intern Profiles: Create and manage detailed profiles for each intern, including contact information, skills, and project assignments.
Task Management: Assign tasks to interns, set deadlines, and track progress.
Performance Tracking: Evaluate intern performance through feedback and performance reviews.
Reporting: Generate reports on intern activities, task completion, and overall performance.
Communication: Facilitate communication between interns and supervisors through built-in messaging.
Technologies Used
Frontend: React with Vite and Tailwind CSS
Backend: ExpressJs with Mongodb for database interactions
Database: Mongodb
Authentication: JWT-based authentication
Email: Nodemailer for email notifications
Getting Started
Prerequisites
Node.js (>= 14.x)
MongoDb
A code editor (e.g., VSCode)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/intern-management-system.git
Navigate to the project directory:

bash
Copy code
cd intern-management-system
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file in the root directory and add the following variables:

makefile
Copy code
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
SMTP_USER=your_email_user
SMTP_PASS=your_email_password
CLIENT_PORT=port
SERVER_PORT=port
Run the application:

bash
Copy code
npm run start:dev
Run database migrations:

bash
Copy code
npm run typeorm migration:run
Access the application:

Open your browser and navigate to http://localhost:3000.

Usage
Register Interns: Use the admin interface to add new intern profiles.
Assign Tasks: Create and assign tasks to interns from the task management dashboard.
Track Performance: View intern performance reports and provide feedback.
Generate Reports: Use the reporting feature to generate performance and activity reports.
Contributing
Fork the repository on GitHub.
Create a new branch: git checkout -b feature/your-feature
Commit your changes: git commit -am 'Add new feature'
Push to the branch: git push origin feature/your-feature
Create a new Pull Request on GitHub.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
ExpressJs for its powerful and modular architecture.
Mognodb for easy integration with Mongoose.
React for a smooth and interactive frontend experience.
