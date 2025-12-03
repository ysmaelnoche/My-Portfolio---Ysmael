# Project Images

## How to Add Your Project Images

1. **Add your images to this folder** (`public/projects/`)
   - Supported formats: JPG, PNG, WebP, GIF
   - Recommended size: 600x400 pixels (or similar 3:2 ratio)
   - Name them clearly, for example:
     - `byaheng-media.jpg`
     - `workflow-system.png`
     - `cuki-habit.jpg`
     - `buko-express-pos.png`
     - `asset-management.jpg`

2. **Update the project data** in `components/Projects.tsx`
   
   Change the `image` property from:
   ```tsx
   image: '/api/placeholder/600/400',
   ```
   
   To your actual image path:
   ```tsx
   image: '/projects/byaheng-media.jpg',
   ```

## Example:

```tsx
const projects = [
  {
    id: 1,
    title: 'Byaheng Media',
    image: '/projects/byaheng-media.jpg',  // ← Update this line
    // ... rest of the properties
  },
];
```

## Profile Picture

To add your profile picture in the Hero section:

1. Add your photo to `public/` folder (e.g., `public/profile.jpg`)
2. Update `components/Hero.tsx` - replace the "YN" placeholder section with:

```tsx
<div className="absolute inset-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl overflow-hidden relative">
  <img 
    src="/profile.jpg" 
    alt="Ysmael Noche" 
    className="w-full h-full object-cover"
  />
</div>
```
