import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <LoaderCircle className={cn('animate-spin h-5 w-5 absolute', className)} />
  );
};

export default Spinner;
