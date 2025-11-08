# BIBEK SABAT

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion featuring a stunning dark mode with animated stars background.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Using This Template](#using-this-template)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Overview

This portfolio website showcases my projects, experience, and skills with a focus on modern web development and innovative UI/UX. The site features smooth animations, a unique dark mode experience with Three.js stars animation, and a responsive design that works across all devices.

## Features

- **Modern UI/UX**: Clean, minimal design with custom animations
- **Responsive**: Fully responsive across mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with a beautiful starry background in dark mode
- **Command Palette (⌘K)**: Keyboard-driven navigation inspired by power user tools
- **Interactive Components**:
  - Floating glassmorphic navbar
  - Animated project cards
  - Timeline-based experience section
  - Achievement showcase
  - Testimonials/recommendations
- **Performance Optimized**: Fast load times and smooth animations
- **Accessibility**: ARIA-compliant components and keyboard navigation
- **SEO Friendly**: Proper metadata and semantic HTML

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: 
  - Framer Motion
  - Three.js (for starry background)
- **UI Components**: shadcn/ui
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Fonts**: Inter (variable) and custom fonts

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                       # Next.js app directory
│   ├── (routes)/              # Page routes
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── experience/
│   │   └── projects/
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/                # React components
│   ├── home/                  # Homepage components
│   ├── layout/                # Layout components (navbar, footer)
│   ├── projects/              # Project related components
│   ├── shared/                # Shared components
│   ├── ui/                    # UI components (shadcn)
│   ├── 3d-card.tsx           # 3D hover effect card
│   ├── black-hole-video.tsx   # Black hole video component
│   └── star-background.tsx    # Star background component
├── data/                      # Static data files
│   ├── projects.ts            # Projects data
│   ├── experience.ts          # Experience data
│   ├── skills.ts              # Skills data
│   └── social.ts              # Social links data
├── lib/                       # Utility functions
│   └── utils.ts               # Helper functions
├── public/                    # Static assets
│   ├── fonts/                 # Custom fonts
│   ├── images/                # Images
│   └── blackhole.webm         # Black hole video for dark mode
└── package.json               # Project dependencies



