## Tailwind CSS Body Variant Plugin

This lightweight Tailwind CSS plugin allows you to style elements conditionally based on the presence of specific classes in the `<body>` tag.

**Installation**

```bash
npm install tailwindcss-body-variant
```

Add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  // ... other Tailwind config
  plugins: [
    require("tailwindcss-body-variant"),
    // ... other plugins
  ],
};
```

**Usage**

1. Add a class to your `<body>` tag to represent the state you want to target.

   Example:

   ```html
   <body class="menu-open"></body>
   ```

2. Prefix any utility class with `body-[class-name]:` to apply styles only when the `[class-name]` class is present on the body.

   Example:

   ```html
   <div class="body-[menu-open]:opacity-50"></div>
   ```

   Example (React):

   ```tsx
   import React, { useEffect } from "react";

   const MenuComponent = ({ open }: { open: boolean }) => {
     useEffect(() => {
       document.body.classList.add("menu-open");

       return () => {
         document.body.classList.remove("menu-open");
       };
     }, []);

     return <div>...</div>;
   };

   const AnotherComponent = () => {
     return (
       <div className="body-[menu-open]:opacity-50 transition-opacity duration-300">
         ...
       </div>
     );
   };

   export { MenuComponent, AnotherComponent };
   ```
