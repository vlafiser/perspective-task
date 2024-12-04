/**
 * Calculates the scale factor based on the current window dimensions.
 * @param referenceWidth - The reference width (e.g., the design width).
 * @param referenceHeight - The reference height (e.g., the design height).
 * @param scalingFactor - Optional multiplier to adjust the scaling (default is 1).
 * @returns A scale factor as a number.
 */
const calculateScale = (
    referenceWidth: number,
    referenceHeight: number,
    scalingFactor: number = 0.7
  ): number => {
    if (typeof window === 'undefined') {
      // Return 1 in server-side rendering environments (e.g., Next.js SSR)
      return 1;
    }
  
    const widthScale = window.innerWidth / (referenceWidth * scalingFactor);
    const heightScale = window.innerHeight / referenceHeight;
  
    // Maintain aspect ratio by using the smaller scale
    return Math.min(widthScale, heightScale);
  };
  
  export default calculateScale;
  