# Armorock Polymer Concrete Website

A modern, responsive website for Armorock polymer concrete products built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- Responsive design optimized for all devices
- Animated UI components with Framer Motion
- Form validation with React Hook Form and Zod
- Server-side rendering with Next.js
- PostgreSQL database integration with Prisma ORM
- API routes for form submissions

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/armorock-website.git
cd armorock-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Copy the `.env.example` file to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Update the `DATABASE_URL` in `.env.local` with your PostgreSQL connection string.

4. Initialize the database:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Database Schema

The project includes the following data models:

- **Project**: Portfolio projects showcasing Armorock installations
- **CaseStudy**: Detailed case studies of successful implementations
- **Contact**: Contact form submissions
- **Quote**: Quote request submissions

## Deployment

The site is configured for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables for Production

Configure the following environment variables in your Vercel project settings:

- `DATABASE_URL`: Your production PostgreSQL connection string
- `NEXT_PUBLIC_BASE_URL`: Your production URL

## License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.
