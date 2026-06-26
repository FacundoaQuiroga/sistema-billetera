# Digital Wallet System
Full-stack digital wallet application built with Spring Boot, React, PostgreSQL and Docker.
<img width="1728" height="911" alt="Screenshot 2026-06-25 at 21 45 23" src="https://github.com/user-attachments/assets/2665f85e-b351-43b6-b52f-fc0b92ed03f0" />

## About

This project is a simple digital wallet system for managing users, balances and wallet transactions.

The backend is built with Spring Boot and exposes a REST API. The frontend is built with React and consumes the API using authenticated requests.

I added user registration, login with JWT, protected wallet routes, deposits, transfers, transaction history, request validation and service tests for the main wallet rules.

## Stack

Java 21, Spring Boot, Spring Security, JWT, PostgreSQL, React, Vite, Docker, JUnit and Mockito.

[![Java](https://img.shields.io/badge/Java-21-ED8B00?style=flat&logo=openjdk&logoColor=white)](https://www.java.com)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4-6DB33F?style=flat&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-JWT-6DB33F?style=flat&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com)
[![JUnit](https://img.shields.io/badge/JUnit-5-25A162?style=flat&logo=junit5&logoColor=white)](https://junit.org/junit5)
[![Mockito](https://img.shields.io/badge/Mockito-Tests-78A641?style=flat&logo=mockito&logoColor=white)](https://site.mockito.org)

## Main Features

User registration, login, JWT authentication, protected wallet routes, personal wallet balance, deposits, transfers between wallets, transaction history, request validation, centralized error handling and Swagger documentation.

## Project Structure

backend: Spring Boot REST API  
frontend: React app  
docker-compose.yml: Local services  
README.md: Project documentation  

## API Endpoints

Auth:

```text
POST /api/auth/register
POST /api/auth/login
