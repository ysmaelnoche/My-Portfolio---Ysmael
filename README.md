# Portfolio Website - Ysmael Noche

A professional, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

-  **Modern Design**: Clean, professional design with a blue and white color scheme
-  **Interactive Animations**: Smooth transitions and engaging hover effects using Framer Motion
-  **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
-  **Performance Optimized**: Built with Next.js for fast loading and SEO
-  **Contact Form**: Integrated contact form for easy communication
-  **Certificates & Achievements**: Dedicated section to showcase credentials

## Sections

1. **Hero/Landing**: Eye-catching introduction with animated background
2. **About**: Professional bio, skills, and technologies
3. **Projects**: Portfolio showcase with project cards and links
4. **Certificates & Achievements**: Display of certifications and accomplishments
5. **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Installation

\\\ash
npm install
\\\

### Development

\\\ash
npm run dev
\\\

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

\\\ash
npm run build
npm start
\\\

## Customization Guide

### Update Personal Information

1. **Hero Section** (\components/Hero.tsx\):
   - Update name and tagline
   - Change social media links

2. **About Section** (\components/About.tsx\):
   - Add your bio and description
   - Update skills and technologies
   - Replace profile image placeholder

3. **Projects Section** (\components/Projects.tsx\):
   - Update the \projects\ array with your actual projects
   - Add project images/videos in the \public\ folder
   - Update live URLs and GitHub links

4. **Certificates Section** (\components/Certificates.tsx\):
   - Update \certificates\ array with your certifications
   - Update \chievements\ array with your accomplishments
   - Add certificate images

5. **Contact Section** (\components/Contact.tsx\):
   - Update email, phone, and location
   - Update social media links
   - Configure form submission (connect to backend/service)

### Adding Images

1. Place images in the \public\ folder
2. Reference them in components like: \/image-name.jpg\

### Color Customization

The color scheme uses blue as primary. To change:
- Edit \pp/globals.css\ for CSS variables
- Update Tailwind classes (e.g., \g-blue-600\ to \g-purple-600\)

## Project Structure

\\\
portfolio-website/
 app/
    layout.tsx       # Root layout with navigation
    page.tsx         # Home page (main entry)
    globals.css      # Global styles
 components/
    Navigation.tsx   # Navigation bar
    Hero.tsx         # Landing section
    About.tsx        # About section
    Projects.tsx     # Projects section
    Certificates.tsx # Certificates section
    Contact.tsx      # Contact section
 public/              # Static assets (images, videos)
 package.json
\\\

## Next Steps

1.  Review the base website
2.  Update all personal information
3.  Add your images and project screenshots
4.  Add project videos if desired
5.  Update all links (GitHub, LinkedIn, etc.)
6.  Configure contact form backend
7.  Deploy to Vercel/Netlify

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

- Netlify
- AWS Amplify
- Railway

## License

 2024 Ysmael Noche. All rights reserved.
