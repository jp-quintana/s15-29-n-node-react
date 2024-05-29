import { cn } from '@/lib/utils';

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div className={cn('max-w-7xl w-[90%] mx-auto', className)}>{children}</div>
  );
};

export default MaxWidthContainer;
