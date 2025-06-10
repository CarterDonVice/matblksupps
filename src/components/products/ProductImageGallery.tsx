"use client";

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductImageGalleryProps {
  images: string[];
  altText: string;
  dataAiHint?: string;
}

export function ProductImageGallery({ images, altText, dataAiHint }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square w-full bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No image available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square w-full relative overflow-hidden rounded-lg shadow-lg border border-border/50">
        <Image
          src={selectedImage}
          alt={altText}
          fill
          priority
          className="object-cover transition-opacity duration-300 ease-in-out"
          data-ai-hint={dataAiHint || "product detail"}
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "aspect-square relative overflow-hidden rounded-md border-2 transition-all duration-200",
                selectedImage === image ? "border-primary shadow-md" : "border-transparent hover:border-primary/50"
              )}
            >
              <Image
                src={image}
                alt={`${altText} - thumbnail ${index + 1}`}
                fill
                className="object-cover"
                data-ai-hint={dataAiHint || "product thumbnail"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
