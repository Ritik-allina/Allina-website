import { useState, useEffect } from 'react';
import { getCloudinaryUrl, getImageWithPreset, imagePresets } from '../lib/cloudinary';

// Hook for single image
export const useCloudinaryImage = (
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
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      const url = getCloudinaryUrl(publicId, options);
      setImageUrl(url);
      setError(null);
    } catch (err) {
      setError('Failed to generate image URL');
      console.error('Cloudinary URL generation error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [publicId, options]);

  return { imageUrl, isLoading, error };
};

// Hook for preset images
export const useCloudinaryPreset = (
  publicId: string, 
  preset: keyof typeof imagePresets
) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      const url = getImageWithPreset(publicId, preset);
      setImageUrl(url);
      setError(null);
    } catch (err) {
      setError('Failed to generate preset image URL');
      console.error('Cloudinary preset error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [publicId, preset]);

  return { imageUrl, isLoading, error };
};

// Hook for responsive images
export const useCloudinaryResponsive = (
  publicId: string,
  sizes: { width: number; quality?: string | number }[]
) => {
  const [imageSrcSet, setImageSrcSet] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      const srcSetArray = sizes.map(size => {
        const url = getCloudinaryUrl(publicId, {
          width: size.width,
          quality: size.quality || 'auto',
          format: 'webp',
          crop: 'fill'
        });
        return `${url} ${size.width}w`;
      });
      setImageSrcSet(srcSetArray.join(', '));
      setError(null);
    } catch (err) {
      setError('Failed to generate responsive image URLs');
      console.error('Cloudinary responsive error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [publicId, sizes]);

  return { imageSrcSet, isLoading, error };
};

export default {
  useCloudinaryImage,
  useCloudinaryPreset,
  useCloudinaryResponsive
}; 