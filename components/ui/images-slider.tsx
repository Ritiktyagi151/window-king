"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Variants import kiya
import React, { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Memoized functions taaki useEffect mein error na aaye
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    // Image loading logic ko simplify kiya
    const loadImages = () => {
      const loadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then((loaded) => {
          setLoadedImages(loaded as string[]);
        })
        .catch((error) => console.error("Failed to load images", error));
    };
    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [handleNext, handlePrevious, autoplay]);

  // Variants ko fix kiya (Explicitly typed as Variants)
  const slideVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 1.1, // Halka bada ho kar start hoga
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: direction === "up" ? "-20%" : "20%", // Exit animation smooth kiya
      transition: {
        duration: 0.5,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center bg-slate-950",
        className
      )}
    >
      {areImagesLoaded && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 h-full w-full object-cover object-center z-0"
          />
        </AnimatePresence>
      )}

      {/* Overlay: Isse text saaf dikhta hai */}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/50 z-10", overlayClassName)}
        />
      )}

      {/* Children (Text/Buttons) hamesha overlay ke upar hone chahiye */}
      {areImagesLoaded && (
        <div className="z-20 relative w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};