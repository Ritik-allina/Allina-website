# Cloudinary Integration Setup

## Overview
This project is now integrated with Cloudinary for optimized image delivery and management. Your Cloudinary account is configured with:

- **Cloud Name**: dllukqtlt
- **API Key**: 758489139732744
- **API Secret**: qwOj2ghi0-z00lhGFjjb2Y1op2w

## File Structure
```
src/
├── lib/
│   └── cloudinary.ts          # Main Cloudinary configuration and utilities
├── hooks/
│   └── useCloudinary.ts       # React hooks for Cloudinary integration
└── components/
    └── CloudinaryImage.tsx    # Reusable CloudinaryImage component
```

## Environment Variables (Optional)
Create a `.env` file in your project root with:
```
CLOUDINARY_URL=cloudinary://758489139732744:qwOj2ghi0-z00lhGFjjb2Y1op2w@dllukqtlt
VITE_CLOUDINARY_CLOUD_NAME=dllukqtlt
VITE_CLOUDINARY_API_KEY=758489139732744
```

## Usage Examples

### 1. Using the CloudinaryImage Component (Recommended)

```tsx
import CloudinaryImage from '../components/CloudinaryImage';

// Basic usage with preset
<CloudinaryImage 
  publicId="your_image_id" 
  alt="Description" 
  preset="large"
  className="w-full h-auto"
/>

// Custom transformations
<CloudinaryImage 
  publicId="your_image_id" 
  alt="Description" 
  options={{
    width: 800,
    height: 600,
    crop: 'fill',
    quality: 'auto',
    format: 'webp'
  }}
  className="w-full h-auto"
/>

// Responsive images
<CloudinaryImage 
  publicId="your_image_id" 
  alt="Description" 
  responsive={[
    { width: 400 },
    { width: 800 },
    { width: 1200 }
  ]}
  sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  className="w-full h-auto"
/>
```

### 2. Using Hooks Directly

```tsx
import { useCloudinaryImage, useCloudinaryPreset } from '../hooks/useCloudinary';

function MyComponent() {
  const { imageUrl, isLoading, error } = useCloudinaryPreset('your_image_id', 'hero');
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading image</div>;
  
  return <img src={imageUrl} alt="Hero image" />;
}
```

### 3. Using Utility Functions

```tsx
import { getCloudinaryUrl, getImageWithPreset } from '../lib/cloudinary';

// Generate URL with custom options
const imageUrl = getCloudinaryUrl('your_image_id', {
  width: 600,
  height: 400,
  crop: 'fill',
  quality: 'auto',
  format: 'webp'
});

// Generate URL with preset
const heroUrl = getImageWithPreset('your_image_id', 'hero');
```

## Available Presets

The following presets are available:
- `thumbnail`: 150x150, cropped, auto quality
- `small`: 300px width, auto quality, WebP format
- `medium`: 600px width, auto quality, WebP format
- `large`: 1200px width, auto quality, WebP format
- `hero`: 1920x1080, cropped, auto quality, WebP format

## Image Upload Process

1. Upload your images to Cloudinary dashboard
2. Note the public ID of each uploaded image
3. Replace existing image paths in your components

## Replacing Existing Images

When you provide the Cloudinary public IDs, you can replace existing images like this:

### Before:
```tsx
<img src="/public/images/hero-image.jpg" alt="Hero" />
```

### After:
```tsx
<CloudinaryImage 
  publicId="hero-image" 
  alt="Hero" 
  preset="hero"
  className="w-full h-auto"
/>
```

## Benefits

1. **Automatic Optimization**: Images are automatically optimized for web delivery
2. **Responsive Images**: Automatically serve different sizes based on device
3. **Format Conversion**: Automatically serve WebP format for supported browsers
4. **Lazy Loading**: Built-in lazy loading support
5. **CDN Delivery**: Fast global content delivery
6. **Transformations**: On-the-fly image transformations

## Next Steps

1. Upload your images to Cloudinary
2. Provide the public IDs for each image
3. Replace existing image components with CloudinaryImage
4. Test the integration

Let me know when you're ready to start replacing the existing images with Cloudinary URLs! 