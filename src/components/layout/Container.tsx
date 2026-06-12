import { cn } from '@/utils/classNames';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={cn('container-app', className)}>
      {children}
    </Component>
  );
}
