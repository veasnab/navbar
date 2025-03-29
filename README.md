# NavBar - React Component | Bootstrap Icons

A reusable and responsive React component for a navigation bar, utilizing **Bootstrap Icons** for a fresh, up-to-date, and user-friendly design.
![UML Diagram](public/assets/image.png)

---

## Summary

This **NavBar React component** is built to be simple, responsive, and easily integrated into any React application. The goal is to maintain a consistent style so developers can focus on updating only the **NavContent.jsx** for changing content in the navigation bar.

The style of the NavBar can be adjusted as necessary, but the primary purpose of this component is to minimize design work for developers, allowing them to focus on the content of the navigation bar, rather than styling.

---

## Outcome

This project offers a **reusable component** that can be utilized across multiple future projects. The content for the NavBar is stored in **NavContent.jsx** in a standardized format:

```jsx
const contents = [
  {
    id: uuidv4(),
    icon: <i className="bi bi-file-code-fill"></i>,
    title: "Projects",
    link: "",
    isVisible: false,
    subLink: [
      {
        id: uuidv4(),
        icon: <i className="bi bi-filetype-jsx"></i>,
        title: "Gridshot-React",
        source: "https://veasnab.github.io/gridshot/"
      }
    ]
  },
  // additional content items...
];
