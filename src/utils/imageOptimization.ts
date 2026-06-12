interface SrcSetOptions {
  basePath: string;
  widths: number[];
  extension?: string;
}

export function generateSrcSet({
  basePath,
  widths,
  extension = 'webp',
}: SrcSetOptions): string {
  const pathWithoutExt = basePath.replace(/\.[^.]+$/, '');

  return widths
    .map((width) => `${pathWithoutExt}-${width}w.${extension} ${width}w`)
    .join(', ');
}

export function getResponsiveSizes(
  mobile: string,
  tablet: string,
  desktop: string,
): string {
  return `(max-width: 768px) ${mobile}, (max-width: 1200px) ${tablet}, ${desktop}`;
}

export function getImageBaseName(src: string): string {
  return src.replace(/\.[^.]+$/, '');
}
