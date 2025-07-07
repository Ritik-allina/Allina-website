import React from 'react';
import CloudinaryImage from './CloudinaryImage';
import { getCloudinaryUrl } from '../lib/cloudinary';

const CloudinaryTest: React.FC = () => {
  // Test with a sample image - replace with your actual image public ID
  const testPublicId = "sample"; // This is a default Cloudinary sample image

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Cloudinary Integration Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Test 1: Basic CloudinaryImage with preset */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Test 1: Preset Image</h2>
          <CloudinaryImage 
            publicId={testPublicId}
            alt="Test image with preset"
            preset="medium"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Test 2: Custom transformations */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Test 2: Custom Transformations</h2>
          <CloudinaryImage 
            publicId={testPublicId}
            alt="Test image with custom transformations"
            options={{
              width: 400,
              height: 300,
              crop: 'fill',
              quality: 'auto',
              format: 'webp'
            }}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Test 3: Responsive image */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Test 3: Responsive Image</h2>
          <CloudinaryImage 
            publicId={testPublicId}
            alt="Test responsive image"
            responsive={[
              { width: 300 },
              { width: 600 },
              { width: 900 }
            ]}
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 600px, 900px"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Test 4: Direct URL generation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Test 4: Direct URL</h2>
          <img 
            src={getCloudinaryUrl(testPublicId, { width: 400, height: 300, crop: 'fill' })}
            alt="Direct URL test"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Configuration Status</h3>
        <p className="text-sm text-gray-600">
          Cloud Name: <span className="font-mono">dllukqtlt</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Test Image URL: <span className="font-mono break-all">
            {getCloudinaryUrl(testPublicId, { width: 200, height: 200 })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CloudinaryTest; 