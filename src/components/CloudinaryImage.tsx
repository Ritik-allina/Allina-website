import React from 'react';
import { useCloudinaryImage, useCloudinaryPreset, useCloudinaryResponsive } from '../hooks/useCloudinary';
import { imagePresets } from '../lib/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  className?: string;
  preset?: keyof typeof imagePresets;
  options?: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: string;
    crop?: string;
    gravity?: string;
  };
  responsive?: { width: number; quality?: string | number }[];
  sizes?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  publicId,
  alt,
  className = '',
  preset,
  options,
  responsive,
  sizes,
  loading = 'lazy',
  placeholder,
  onLoad,
  onError
}) => {
  // Use appropriate hook based on props
  const presetResult = useCloudinaryPreset(publicId, preset || 'medium');
  const customResult = useCloudinaryImage(publicId, options);
  const responsiveResult = useCloudinaryResponsive(publicId, responsive || []);

  // Determine which result to use
  let imageUrl = '';
  let imageSrcSet = '';
  let isLoading = true;
  let error = null;

  if (responsive && responsive.length > 0) {
    // Use responsive images
    imageSrcSet = responsiveResult.imageSrcSet;
    isLoading = responsiveResult.isLoading;
    error = responsiveResult.error;
    // For responsive images, use the largest size as the main src
    imageUrl = responsiveResult.imageSrcSet.split(',')[0]?.split(' ')[0] || '';
  } else if (preset) {
    // Use preset
    imageUrl = presetResult.imageUrl;
    isLoading = presetResult.isLoading;
    error = presetResult.error;
  } else {
    // Use custom options
    imageUrl = customResult.imageUrl;
    isLoading = customResult.isLoading;
    error = customResult.error;
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 ${className}`}>
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 animate-pulse ${className}`}>
        {placeholder ? (
          <img src={placeholder} alt={alt} className="opacity-50" />
        ) : (
          <span className="text-gray-400 text-sm">Loading...</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      srcSet={imageSrcSet || undefined}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default CloudinaryImage; 