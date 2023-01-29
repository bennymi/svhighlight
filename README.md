# SvHighlight - Code Highlighting with Svelte

A code syntax highlighter for Svelte, with line blur and highligthing and focus buttons. The component can be easily customized with TailwindCSS.

## Links
- [Documentation](https://svhighlight.vercel.app/)
- [Github](https://github.com/bennymi/svhighlight)

## Features

- ✅ line numbers toggle
- ✅ highlighting lines / blur out non-highlighted lines
- ✅ hovering over blurred area unblurs the code
- ✅ copy button
- ✅ focus blocks and buttons to focus your reader's attention
- ✅ customizable

## Installation

```bash
pnpm add svhighlight
```

For this package you also need [highlight.js](https://www.npmjs.com/package/highlight.js?activeTab=readme):

```bash
pnpm add highlight.js
```

Additionally install [TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit).

In your `tailwind.config.cjs` file add the following line `"./node_modules/svhighlight/**/*.svelte"` to the `content`, so it looks like this:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/svhighlight/**/*.svelte"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Example Screenshots

### Focus Blocks

![Focus Blocks](static/focus%20blocks.jpg)

### Blur

![Blur](./static/example.jpg)

### Highlighting

![Highlighting](static/highlight.jpg)