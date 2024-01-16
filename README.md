# Inventory Management System

## Problem

### Background

An inventory system meant to assist in the day-to-day operations at the workplace.

### The Problem

- I am currently facing challenges in keeping track of the most requested services, making it difficult to analyze and project data accurately.
- This lack of insight is hindering the ability to make informed decisions regarding investments in machinery and equipment.
- The discrepancy between the materials acquired for lamination services and the actual revenue generated is causing financial losses.
- It is challenging to assess the individual profitability of each service, leading to inefficiencies and operational difficulties.

### Our Approach

The approach is geared towards achieving efficiency in collecting data and implementing logic to organize everything into a state of tranquility.

## Goals & Success

- Build a system that is efficient in collecting data, easy to scale, and highly reliable.
- The initial success will be demonstrated by seeing the system functioning seamlessly, with subsequent upgrades and improvements.

## Solution

### Features

- **Service Tracking:** Keep track of the frequency and popularity of each service offered.
- **Revenue Analysis:** Provide insights into revenue generation for each service.
- **Material Usage:** Track the consumption of materials for lamination services.
- **Profitability Metrics:** Assess the profitability of each service individually.
- **Data Visualization:** Present data in a visually appealing manner for easy analysis.

### User Flows & Mocks

#### Wireframe
[![Wireframe](https://app.eraser.io/workspace/Uztjrd48szYHi6uvqNkc/preview?elements=BzskM2Zy_P-gQNUWJcqHSQ&type=embed)](https://app.eraser.io/workspace/Uztjrd48szYHi6uvqNkc?elements=BzskM2Zy_P-gQNUWJcqHSQ)

#### Low-fidelity Sketches
[![Low-fidelity sketches of the UI](https://app.eraser.io/workspace/Uztjrd48szYHi6uvqNkc/preview?elements=dJ6VcVi6XDxvIJUxwipzEA&type=embed)](https://app.eraser.io/workspace/Uztjrd48szYHi6uvqNkc?elements=dJ6VcVi6XDxvIJUxwipzEA)

### Technical Architecture

#### Data Model

- **Service Model:** 
  - Fields: Service Name, Frequency, Revenue, Material Usage, Profitability Metrics.

#### System Architecture

- **Frontend:** Built with Django templates and Tailwind CSS for a responsive and visually appealing user interface.
- **Backend:** Django framework for handling business logic, data storage, and retrieval.
- **Database:** Utilizing Django's built-in ORM with SQLite for simplicity in the initial phase.
- **Data Visualization:** Integration with charting libraries for effective presentation of analytics.

### Open and Closed Questions

#### Open Questions

- What specific functionalities would be crucial for day-to-day operations?
- Are there any specific data points or metrics that should be prioritized for analysis?
- What are the scalability requirements as the system grows?

#### Closed Questions

- We have decided on using Django for the backend. Is this acceptable?
- The initial database choice is SQLite. Is this suitable for the current scale of operations?

This document provides an overview of the problem, our approach, goals, proposed solution features, user flows, technical architecture, and the current status of discussions. Further details and refinements will be added as the project progresses.