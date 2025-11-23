# Closet Organizer

A simple wardrobe management app built with **Next.js, React, TypeScript, and Tailwind CSS**.  
This is part of my preparation for the **Vinted Academy Web Engineering** application and a way to practice real-world React state management, TypeScript types, and data flow.

---

## Live Demo

**[https://closet-app-djanuskevicius.vercel.app/](https://closet-app-iota.vercel.app/)**  

---

## Features

### Wardrobe
- Add new clothing items (name, brand, color, category, notes, image)
- Edit existing items through a modal
- Delete items
- Filter by category
- Search by brand or item name
- Responsive layout
- LocalStorage persistence
- Optional demo seeding with mock items (for fast testing)

### Outfits
- Create outfits by grouping clothing items
- Give each outfit a custom name
- Delete outfits
- LocalStorage persistence

### Core Architecture
- Global state handled with React Context + custom hooks
- Local state for forms and selections
- Strong TypeScript typing across components and context
- Modular component structure

---

## Technologies

- **Next.js 14** (App Router)  
- **React** 
- **TypeScript** 
- **LocalStorage** for persistence  
- **Context API** for global state  

---

## Design Process

To speed up the design phase, I generated the initial layout using **Figma AI**,  
then refined spacing, structure, responsiveness, and implemented all UI elements manually with Tailwind and React.

This let me focus more time on state management, data flow, and building out real functionality.

---

## Notes

This is a learning focused project.  
The goal is to achieve clean code, good architecture, and an understanding of how React state flows in a real app.
