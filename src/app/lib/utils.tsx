import React from 'react';
import Button from '@/app/ui/button';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional, for smooth scrolling
    });
  };

  return (
    <Button onClick={scrollToTop}>
      Back to Top
    </Button>
  );
}