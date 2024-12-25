# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# ServiceSphere

## Project Overview
The **ServiceSphere** is a full-stack application that enables users to add, manage, and review services. This project showcases user authentication, CRUD operations, database security, responsive design, and advanced features such as JWT authentication and search functionality.

## Live URL
[Visit Live Website](https://service-sphere-21793.web.app/)

## Key Features
### User Capabilities
- **Add/Update/Delete Services**: Logged-in users can manage services they've created.
- **View Service Details**: Explore available services and read reviews.
- **Add/Edit/Delete Reviews**: Post, update, and delete reviews with ratings and textual feedback.
- **Manage My Reviews**: View and manage all reviews submitted by the logged-in user.

### Core Features
- **Responsive Design**: Fully functional across mobile, tablet, and desktop devices.
- **Dynamic Title**: Webpage title changes based on the route.
- **404 Page**: Custom "Not Found" page.
- **Search Functionality**: Search services by keywords such as title, category, or company name.
- **Filter Functionality**: Filter services by categories.
- **Countup Statistics**: Display statistics about total users, reviews, and services using react-countup.
- **JWT Authentication**: Secure user sessions and protect API routes.

## Deployment Guidelines
- **Client Deployment**: [https://service-sphere-21793.web.app/]
- **Server Deployment**: Hosted on [[Vercel](https://service-sphere-server.vercel.app/)]

## Technologies Used
- **Frontend**: React, React Router, Firebase Authentication, Tailwind CSS, Framer Motion.
- **Backend**: Node.js, Express.js, MongoDB.
- **Additional Libraries**:
  - sweetalert2
  - dotenv
  - react-countup

## Pages and Functionalities
### Navbar
- **Before Login**: Logo, Home, Services, Login, Register.
- **After Login**: Logo, Home, Services, Add Service, My Reviews, My Services, User Avatar, Logout.

### Home Page
- **Banner Section**: Image slider with text highlights using react slick slider.
- **Featured Services Section**: Displays 6 services with details and a "See Details" button.
- **Meet Our Partners**: Highlights collaborators with logos and descriptions.
- **Extra Sections**: Two additional sections a Testimonials section and a Call to Action section.

### Authentication Pages
- **Login**: Email/Password and Google login. Redirect link to register page.
- **Register**: User details validation with password requirements. Redirect link to login page.

### Service Management
- **Add Service**: Allows users to add service details securely.
- **Service Page**: Displays all services with a "See Details" button.
- **Service Details Page**: Showcases detailed information about a service and allows users to add reviews.
- **My Services Page**: Lists services created by the user with search, update, and delete options.

### Review Management
- **Add Review**: Post a review with text, rating, and user details.
- **My Reviews Page**: Lists user reviews with update and delete options.

### Additional Features
- **Spinner**: Displays during loading states.
- **Sweet Alert Notifications**: For all CRUD operations.

## Security Measures
- **Environment Variables**: Secure Firebase and MongoDB credentials.
- **JWT Authentication**: Protect sensitive API routes.





