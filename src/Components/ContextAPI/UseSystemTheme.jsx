// import { useState, useEffect } from 'react';

// function UseSystemTheme() {
//   const getSystemTheme = () => {
//     if (typeof window !== 'undefined' && window.matchMedia) {
//       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     }
//     return 'light'; // Default to light if not supported or on server
//   };

//   const [theme, setTheme] = useState(getSystemTheme);

//   useEffect(() => {
//     if (typeof window === 'undefined' || !window.matchMedia) return;

//     const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = (event) => {
//       setTheme(event.matches ? 'dark' : 'light');
//     };

//     mediaQueryList.addEventListener('change', handleChange);
//     return () => mediaQueryList.removeEventListener('change', handleChange);
//   }, []);

//   return theme;
// }

// export default UseSystemTheme;
