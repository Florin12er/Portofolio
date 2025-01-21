# Sebastian's Portfolio

A modern, sleek portfolio website built with Next.js, showcasing my skills, projects, and blog posts.

## Features

- **About Me**: A comprehensive section detailing my background, skills, and professional journey.
- **Projects Showcase**: 
  - Display of my completed projects with descriptions and links
  - Search functionality to easily find specific projects
- **Blog**: 
  - Collection of my written articles and thoughts
  - Markdown rendering for rich content display
- **Contact Form**: 
  - Direct communication channel for visitors
  - Backend integration for email sending
- **Responsive Design**: Sleek UI that adapts to various screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing

## Tech Stack

- **Frontend**: Next.js for server-side rendering and optimal performance
- **UI Framework**: shadcn/ui for a consistent and modern look
- **Database**: Prisma ORM for efficient data management
- **Styling**: Tailwind CSS for responsive and customizable designs
- **Content Rendering**: Markdown support for blog posts

## Key Components

1. **Navbar**: Easy navigation with links to Home, Projects, Blogs, and Contact pages
2. **Projects Page**: Curated list of projects with descriptions, links, and search functionality
3. **Blog Page**: List of blog posts with markdown rendering for content
4. **Contact Page**: Form with backend integration for sending emails (rate-limited to 5 requests per hour)
5. **Mode Toggle**: Switch between dark and light modes

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables for Prisma and email functionality
  - `DATABASE_URL=<your_database_url>`  for your postgresSQL database (tip you can use any databse as long you modify the /prisma/schema.prisma file look here [Prisma Docs](https://www.prisma.io/docs)!)
  - `EMAIL_USER=<your_email_address>` put your Google email address
  - `EMAIL_PASS=<your_email_password>` put your Google password
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This portfolio is designed to be easily deployable on platforms like Vercel or Netlify.

here is and example deployment link: [portofolio-sebastian1.vercel.app](https://portofolio-sebastian1.vercel.app)

## Project Structure

- `/app`: Contains the main application pages and components
- `/components`: Reusable UI components
- `/lib`: Utility functions and configurations
- `/prisma`: Database schema and migrations
- `/public`: Static assets
- `/data` : Data of the projects and technologies used
- `/_posts`: Blog posts

## Adding Projects

To add a new project to the showcase:
1. Update the project data in the designated file (e.g., `/data/projects.ts`)
2. Include project id, name, description, technologies used, and relevant links

## Writing Blog Posts

Blog posts are written in Markdown format:
1. Create a new `.md` file in the designated blog posts : **_posts** directory
2. Include front matter for metadata (title, date, tags, image) you can see an example in: **_posts/example.md**
3. Write your blog content using Markdown syntax if you don't markdown take a look here : [Markdown Docs](https://www.markdownguide.org/cheat-sheet/) or the example provided

Feel free to reach out through the contact form for any questions or collaborations!
