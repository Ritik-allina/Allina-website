import { v2 as cloudinary } from 'cloudinary';

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dllukqtlt',
  api_key: '758489139732744',
  api_secret: 'qwOj2ghi0-z00lhGFjjb2Y1op2w',
  secure: true
});

// Utility function to generate optimized image URLs
export const getCloudinaryUrl = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: string;
    crop?: string;
    gravity?: string;
  }
) => {
  const baseUrl = `https://res.cloudinary.com/dllukqtlt/image/upload`;
  
  const transformations = [];
  
  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  if (options?.quality) transformations.push(`q_${options.quality}`);
  if (options?.format) transformations.push(`f_${options.format}`);
  if (options?.crop) transformations.push(`c_${options.crop}`);
  if (options?.gravity) transformations.push(`g_${options.gravity}`);
  
  const transformString = transformations.length > 0 ? `/${transformations.join(',')}` : '';
  
  return `${baseUrl}${transformString}/${publicId}`;
};

// Helper function for responsive images
export const getResponsiveImageUrl = (
  publicId: string,
  sizes: { width: number; quality?: string | number }[]
) => {
  return sizes.map(size => ({
    src: getCloudinaryUrl(publicId, {
      width: size.width,
      quality: size.quality || 'auto',
      format: 'webp',
      crop: 'fill'
    }),
    width: size.width
  }));
};

// Common image transformation presets
export const imagePresets = {
  thumbnail: { width: 150, height: 150, crop: 'fill', quality: 'auto' },
  small: { width: 300, quality: 'auto', format: 'webp' },
  medium: { width: 600, quality: 'auto', format: 'webp' },
  large: { width: 1200, quality: 'auto', format: 'webp' },
  hero: { width: 1920, height: 1080, crop: 'fill', quality: 'auto', format: 'webp' }
};

// Function to get image with preset
export const getImageWithPreset = (publicId: string, preset: keyof typeof imagePresets) => {
  return getCloudinaryUrl(publicId, imagePresets[preset]);
};

export default cloudinary; 