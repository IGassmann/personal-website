---
title: Building a Web App From the Ground Up
date: 2017-06-22
template: post
draft: false
slug: /posts/web-app-from-the-ground
category: Project
tags:
  - project
  - web
description: The final project of my Swiss apprenticeship.
---

During the last year of a Swiss developer apprenticeship, the apprentice has to develop a project in 3 weeks to demonstrate that he is capable of handling a project by himself.

At the end of the last month, as an apprentice, I was assigned to develop a web application for the university where I work. This application would be used by university’s employees to view and manage work place assignments. Frequently, some employees, like professors, need to hire someone for a project. In order to do so, they have to know where there is a place available for this new employee.

![Web app’s common usage](/media/omwa-common-usage.png)

The web app would display rooms and the work place assignments relative to those rooms. After visualizing that, the user could request a new work place assignment for his new employee.

Like any project, I had to analyze the project requirements to define what to develop for the web app. During that phase, I defined who were exactly the people who would use the app, the differents roles (users and administrators), the type of data that it would handle and finally, how the application would work for the users.

Those decisions that I’ve made during the analyzis phase were essential to design the interfaces and the architecture of the application during the next phase: the design phase.

The web interface has basically two pages. One for visualizing and managing work place assignments and another for requesting a new one. The request page exists essentially for the user role since only administrators can directly manage the work place assignments.

![Work place assignment page](/media/omwa-thumbnail-gestion-attributions.png)

For designing the architecture, I had to define the database’s schema and evaluate different design patterns to decide the logical structure for the application. For example, I decided to implement the JSP Model 2 for structuring the back-end. I've written more about that on my [Exploring Design Patterns with Java EE](/posts/design-patterns-java-ee) post.

To develop the application I used mainly programming languages and technologies that I already had some experience with: Java EE and Vanilla JavaScript. I estimated that I hadn’t the time to experiment with a new one during the span of the project.

![Technologies](/media/omwa-technologies.png)

Still, I realized after finalizing part of the project that choosing plain JavaScript over using a library like JQuery was time expensive. In part because of that choice, I spent most of my time correcting some bugs on the front-end code.

Another mistake that I’ve done during the project was being too much picky with some part of the project. In particular, when I was designing the database schema. I spent too much time during that phase researching about not essential aspects of relational databases. Just because I wanted that perfect database schema. That did cost me 300% of the time that I had planned to design it.

In the end, during those 3 weeks, I was able to develop the most important features but I haven’t been able to develop all that I hoped to.

Now that the project as officially ended. I’m spending my time improving the already built features to afterward develop what I was hoping to do initially.
