/**
 * A Tailwind CSS plugin that matches variants for the body element.
 *
 * Usage:
 * ```html
 *   <body class="menu-open">
 *     <div class="body-[menu-open]:opacity-50">
 *       ...
 *     </div>
 *   </body>
 * ```
 */
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchVariant }) {
  matchVariant("body", (value) => `body.${value} &`);
});
