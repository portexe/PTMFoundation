import React, { useEffect } from 'react';

export const useUx = () => {
  useEffect(() => {
    const feed = document.getElementById('feed');
    const numberOfPosts = document.getElementsByClassName('post').length;
    feed.style.width = `${numberOfPosts * 750}px`;
    function scrollHorizontally(e) {
      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.documentElement.scrollLeft -= delta * 40;
      document.body.scrollLeft -= delta * 40;
      e.preventDefault();
    }
    if (window.addEventListener) {
      window.addEventListener('mousewheel', scrollHorizontally, { capture: false, passive: false });
      window.addEventListener('DOMMouseScroll', scrollHorizontally, { capture: false, passive: false });
    } else {
      window.attachEvent('onmousewheel', scrollHorizontally);
    }

    return () => {
      window.removeEventListener('mousewheel', scrollHorizontally);
      window.removeEventListener('DOMMouseScroll', scrollHorizontally);
    };
  }, []);
};
