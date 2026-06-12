import { cn } from '@/utils/classNames';
import { getImageBaseName } from '@/utils/imageOptimization';

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
  const baseName = getImageBaseName(src);
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      className={cn('overflow-hidden rounded-lg bg-background-light', className)}
      style={{ aspectRatio }}
    >
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet={`${baseName}-lg.webp 1200w, ${baseName}-lg-2x.webp 2400w`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${baseName}-md.webp 900w, ${baseName}-md-2x.webp 1800w`}
          type="image/webp"
        />
        <source
          srcSet={`${baseName}-sm.webp 600w, ${baseName}-sm-2x.webp 1200w`}
          type="image/webp"
        />
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
      </picture>
    </div>
  );
}
