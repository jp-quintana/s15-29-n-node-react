'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Spinner from './spinner';

interface LoadingButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
  className?: string;
}

const LoadingButton = ({
  children,
  isLoading,
  type,
  variant,
  className,
}: LoadingButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={cn('relative', className)}
      disabled={isLoading}
    >
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
      {isLoading && <Spinner />}
    </Button>
  );
};

export default LoadingButton;
