# Spring Boot Project

## Overview
[//]: # (Todo:)
## Prerequisites

Make sure you have the following installed:

- **Java 17 or higher**
- A **Database** (Mysql)
- **Git** (optional, if cloning the repository)

## Technologies Used

- Java
- Spring Boot
- Mysql
- React

## Getting Started

### Clone the repository

```bash
git clone https://github.com/alokkr016/ProjectTutorialApplication.git
cd ProjectTutorialApplication/tutorial-backend
```

### Build and Package the Application

For **Maven**:

```bash
mvn clean install
```

### Configuration

If your project requires environment-specific configuration (like database connection, API keys), set up
the `application.properties` or `application.yml` in the `src/main/resources` folder:

```properties
spring:
datasource:
url:jdbc:mysql://localhost:3306/tutorial
username:{yourusername}
password:{yourpassword}
```

### Running the Application

You can run the Spring Boot application using:

```bash
mvn spring-boot:run
```

### API Documentation (if applicable)

The API endpoints are available at:

- `/api/register`
- `/api/login`
- `/api/users`
