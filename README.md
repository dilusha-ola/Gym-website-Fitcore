# FitCore Gym Website

A modern, responsive gym website built with cutting-edge web technologies. FitCore is dedicated to helping individuals of all fitness levels reach their full potential with state-of-the-art facilities, expert trainers, and diverse class offerings.

## 📋 About This Website

**FitCore Gym** is a professional gym website that serves as a digital platform for fitness enthusiasts to:
- Explore available fitness services and training options
- Browse and select suitable membership plans
- Meet qualified trainers and learn about their expertise
- Contact the gym for inquiries and support
- Experience a modern, dark/light theme-enabled interface

The website showcases the gym's services, membership options, trainer profiles, and enables users to get in touch through an integrated contact form.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.7** - React framework for production with server-side rendering and static generation
- **React 19.2.3** - JavaScript library for building user interfaces
- **TypeScript 5** - Typed superset of JavaScript for better code quality
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **ESLint 9** - Code quality and style enforcement

### Backend & Database
- **MongoDB 7.1.0** - NoSQL database for storing contact form submissions and other data
- **Node.js** - JavaScript runtime environment

### Additional Tools
- **postcss** - CSS processing tool for Tailwind CSS compilation
- **Next.js Font** - Google Fonts integration (Geist Sans and Geist Mono)

---

## ✨ Features

### 🏠 **Hero Section**
- Full-screen landing image with compelling call-to-action
- "UNLOCK YOUR POTENTIAL" tagline with JOIN TODAY button

### 📖 **About Section**
- Detailed information about FitCore Gym
- Mission and values of the gym

### 💪 **Services Section**
- **Personal Training** - One-on-one sessions with certified trainers
- **Group Classes** - Energy-filled group sessions (Yoga, HIIT, Zumba, etc.)
- **Diet Plans** - Personalized nutrition guidance and meal planning

### 💳 **Membership Plans**
- Multiple membership tiers: Diamond, Platinum, Gold, Silver
- Different pricing for Gents, Ladies, and Couples
- Detailed feature lists for each plan
- Monthly and annual pricing options

### 👥 **Trainers Page**
- Browse qualified fitness trainers
- Professional trainer profiles and expertise

### 📧 **Contact Form**
- Get in touch with the gym
- MongoDB integration for form submission storage
- Email notifications support

### 🌙 **Dark/Light Theme Toggle**
- Switch between dark and light modes
- Theme preference stored in localStorage
- Smooth transitions between modes
- Works on desktop and mobile views

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all device sizes (mobile, tablet, desktop)
- Smooth navigation with hamburger menu on mobile

### 🎨 **Modern UI**
- Clean and professional design
- Amber/Orange color scheme
- Smooth animations and transitions
- Shadow effects for depth

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git**

### Clone and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gym-website.git
   cd gym-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed for MongoDB)
   - Create a `.env.local` file in the root directory
   - Add your configuration variables

4. **Run the development server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - The page will auto-update as you make changes

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
gym-website/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── components/
│   │   ├── Header.tsx        # Navigation header with theme toggle
│   │   ├── Footer.tsx        # Footer component
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── ServiceCard.tsx   # Service card component
│   │   ├── TrainerCard.tsx   # Trainer profile card
│   │   └── ...
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/Light theme context
│   ├── membership-plans/     # Membership plans page
│   ├── trainers/             # Trainers page
│   ├── layout.tsx            # Root layout with theme provider
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── lib/
│   └── mongodb.ts            # MongoDB connection
├── public/                   # Static assets (images, logos)
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

---

## 🎯 How to Use

### As a Visitor
1. **Browse the Website** - Visit the home page to see featured services and gym information
2. **Explore Services** - Scroll through Personal Training, Group Classes, and Diet Plans
3. **View Membership Plans** - Check out different membership tiers and pricing
4. **Meet the Trainers** - Visit the Trainers page to view professional profiles
5. **Contact Us** - Fill out the contact form to send inquiries
6. **Toggle Theme** - Use the Dark/Light mode button in the header

### As a Developer

#### Adding New Features
1. Create new components in `/app/components/`
2. Add new pages in `/app/` directory for routing
3. Use Tailwind CSS for styling with dark mode support

#### Modifying Services
- Edit `/app/page.tsx` to update service information
- Update service cards styling in `/app/components/ServiceCard.tsx`

#### Managing Membership Plans
- Update membership data in `/app/membership-plans/page.tsx`
- Modify plan card styling in `/app/components/MembershipPlanCard.tsx`

#### Database Integration
- MongoDB connection in `/lib/mongodb.ts`
- API routes in `/app/api/` for backend operations

#### Theme System
- Modify theme colors in `/app/context/ThemeContext.tsx`
- Update CSS variables in `/app/globals.css`
- Extend dark mode styles with `dark:` prefix in Tailwind classes

---

## 🔧 Configuration

### Tailwind CSS Dark Mode
The project uses **class-based dark mode**. Toggle is managed through `ThemeContext` which adds/removes the `dark` class on the `<html>` element.

### MongoDB
MongoDB connection is configured in `/lib/mongodb.ts`. Update the connection string in your `.env.local` file:
```
MONGODB_URI=your_mongodb_connection_string
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Check code quality with ESLint |

---





