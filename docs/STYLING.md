# Armorock Website Styling Guide

This document outlines the styling approach used in the Armorock website project.

## Style Organization

The styling for this project is organized using a hybrid approach:

1. **Tailwind CSS** as the core utility framework
2. **Component classes** defined in globals.css for common patterns
3. **JavaScript style constants** in `/src/styles/index.js` for consistent usage in components

## Key Files

- `/src/app/globals.css` - Main CSS file with Tailwind directives and component classes
- `/src/styles/index.js` - JavaScript constants for component styles
- `/src/styles/tailwind-theme.js` - Tailwind theme extension
- `/tailwind.config.js` - Tailwind configuration

## Style Constants

We use JavaScript constants from `/src/styles/index.js` to maintain consistent styling across components:

```javascript
import { COLORS, BUTTONS, HEADER, LAYOUT, TYPOGRAPHY } from '@/styles';
```

### Available Constants

- `COLORS` - Theme color variables
- `BUTTONS` - Button style variants
- `HEADER` - Header style variants
- `LAYOUT` - Common layout styles
- `TYPOGRAPHY` - Typography styles
- `FORMS` - Form element styles
- `ANIMATIONS` - Animation classes
- `HERO` - Hero section styles

## CSS Classes

The project uses several CSS component classes defined in `globals.css`:

### Button Classes
- `.btn` - Base button
- `.btn-primary` - Primary colored button
- `.btn-outline` - White outline button
- `.btn-outline-red` - Red outline button
- `.quote-btn` - Quote button style

### Layout Classes
- `.container-custom` - Main container with responsive padding
- `.section` - Standard section padding
- `.grid-2-cols`, `.grid-3-cols`, `.grid-4-cols` - Grid layouts

### Header Classes
- `.header` - Base header
- `.header-scrolled` - Scrolled state with background
- `.header-transparent` - Transparent background
- `.nav-link` - Navigation link
- `.nav-link-active` - Active navigation link

## Style Guide

A visual style guide is available at `/style-guide` to showcase all available styles.

## Best Practices

1. Use Tailwind utility classes for component-specific styling
2. Use component classes for repeated patterns
3. Import style constants for consistent usage across components
4. Reference the style guide for available styles

## Adding New Styles

To add new styles:

1. For component-specific styles, use Tailwind utility classes
2. For reusable components, add component classes to `globals.css`
3. For JavaScript constants, add to the appropriate object in `src/styles/index.js`
4. Update the style guide to showcase new styles
