# REE-Source Design Guide

## Design Philosophy

REE-Source follows a **minimal, sharp, pixel-outline aesthetic**:
- No softness, no gradients, no shadows  
- Strong borders and structure  
- Functional, developer-first UI  
- Inspired by retro terminal + blueprint visuals  

---

## Core Principles

1. Clarity over decoration  
2. Consistency in spacing and borders  
3. Reusable components  
4. Minimal color palette  
5. Sharp geometry only  

---

## Color System

| Role        | Color     |
|------------|------------|
| Primary    | #0300B8  |
| Background | #F5F5F5  |
| Text       | #0300B8  |
| White      | #FFFFFF  |

---

## Layout System

- Use vertical stacking  
- Maintain consistent spacing  
- Prefer flex layouts  
- Keep alignment strict (left text, right actions)  
- use components where ever necessary

---

## Borders

Core identity:

- `border: 2px solid #0300B8`
- No border radius  
- No shadows  

---

## Buttons

### Filled Button
- Blue background  
- White text  

### Outline Button
- Transparent background  
- Blue border + text  


# Tech Stack
## frontend
  - React (Vite)
  - TypeScript
  - Tailwind CSS