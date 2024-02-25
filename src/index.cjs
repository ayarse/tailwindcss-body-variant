/**
 * A Tailwind CSS plugin that introduces a new `body` variant to
 * target elements based on the `body` tag's class list.
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
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchVariant }) {
  matchVariant('body', (value) => `body.${value} &`);
});
