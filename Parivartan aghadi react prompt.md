# Prompt: Suncity Ambegaon D Wing Parivartan Aghadi (React + Bootstrap App)

You are an expert React developer. Build a complete, production-ready, responsive React application with the following requirements.

## App Name

"Suncity Ambegaon D Wing Parivartan Aghadi"

## Context

This is a campaign website for a housing society election. "Parivartan Aghadi" is a panel of candidates who want to publish their manifesto and introduce their members to the society residents. The app must work well on both mobile and desktop (fully responsive).

## Tech Requirements

- React (functional components + hooks), using Vite
- **Bootstrap 5** for all styling and layout, using the **react-bootstrap** library (`npm install bootstrap react-bootstrap`) and importing `bootstrap/dist/css/bootstrap.min.css`
- Use Bootstrap components wherever possible: `Navbar`, `Container`, `Row`, `Col`, `Card`, `Button`, `Modal`, `ListGroup` / `Accordion`
- Use Bootstrap's responsive grid and utility classes (spacing, flex, text, colors) instead of writing custom CSS. Add minimal custom CSS only where Bootstrap can't cover it (e.g., card hover effect, smooth scroll)
- No backend. Data is loaded from local JSON files in the `src/data/` folder
- Clean, modular folder structure with reusable components
- Mobile-first responsive design (works from 320px phones up to large desktop screens)

## Data Files

### 1. `members.json`

Array of objects with these fields:

- `fullName`
- `flatNo`
- `education`
- `permanentAddress`
- `photo` (image URL or path)

### 2. `manifesto.json`

Array of manifesto items (for example, `{ "id": 1, "title": "...", "description": "..." }`). Support a simple string array as well.

## Features and UI

### 1. Navbar

- Use the Bootstrap `Navbar` component (sticky top)
- Shows only the app name: "Suncity Ambegaon D Wing Parivartan Aghadi"
- No other links, menus, or toggle button
- The text should wrap or scale properly on small screens

### 2. Home Page

- A hero section with two prominent Bootstrap `Button`s: **"Members"** and **"Manifesto"**
- Clicking **Members** smooth-scrolls to the members section
- Clicking **Manifesto** smooth-scrolls to the manifesto section

### 3. Members Section (Profile Cards)

- Display members using Bootstrap `Row` and `Col` as a responsive grid (`xs=12`, `sm=6`, `lg=4`, `xl=3`)
- Each Bootstrap `Card` shows ONLY the member's **photo, full name, and flat number**
- Clicking a card opens a Bootstrap `Modal` showing ALL details: photo, full name, flat no, education, and permanent address
- The modal must be closable via a close button, clicking outside, and the Escape key
- Handle missing photos with a placeholder avatar

### 4. Manifesto Section

- Appears directly below the members section on the same page, so scrolling down continues from the member cards into the manifesto
- Display items using Bootstrap `ListGroup` (numbered) or `Card`s, with a clear heading such as "Our Manifesto"

## Design Guidelines

- Modern, clean, trustworthy look suitable for a community election campaign
- Customize the Bootstrap theme with a cohesive color palette (e.g., saffron/blue/white) using CSS variables or Bootstrap utility classes
- Subtle hover effects and transitions on cards and buttons
- Good accessibility: alt text on images, keyboard navigation, sufficient color contrast

## Deliverables

1. Complete folder structure
2. Full code for every file (App, components, any custom CSS, sample JSON data with 5-6 dummy members and 6-8 manifesto points)
3. Step-by-step instructions to run the project locally (`npm create vite@latest`, install Bootstrap and react-bootstrap, run)
4. Brief instructions on how to deploy it for free (e.g., Netlify or Vercel) so that residents can open it from a link on their phones

Provide the code in clearly labeled code blocks, file by file.