import { useLayoutEffect } from "react";

const useDisableBodyScroll = (open, scrollToTop) => {
  useLayoutEffect(() => {
    // Get original body overflow
    if (!open) {
      return;
    }
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [open, scrollToTop]);
};
export { useDisableBodyScroll };
