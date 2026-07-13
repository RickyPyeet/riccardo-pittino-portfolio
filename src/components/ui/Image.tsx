import { cn } from '@/utils/classNames';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain';
}

export function Image({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
  objectFit = 'cover',
}: ImageProps) {
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      className={cn('overflow-hidden rounded-lg bg-background-light', className)}
      style={{ aspectRatio }}
    >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          className={cn('h-full w-full', objectFit === 'cover' ? 'object-cover' : 'object-contain')}
        />
    </div>
  );
}
