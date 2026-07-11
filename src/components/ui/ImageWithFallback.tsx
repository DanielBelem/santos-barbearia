import {
  useEffect,
  useState,
  type ImgHTMLAttributes,
  type SyntheticEvent,
} from 'react';

type ImageWithFallbackProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src'
> & {
  src: string;
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc = '/images/placeholder.svg',
  onError,
  ...imageProps
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);


  function handleError(event: SyntheticEvent<HTMLImageElement>) {
    onError?.(event);

    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  }

  return (
    <img
      {...imageProps}
      src={currentSrc}
      onError={handleError}
    />
  );
}