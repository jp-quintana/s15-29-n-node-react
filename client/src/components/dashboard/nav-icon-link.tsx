import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

interface NavIconLinkProps {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
  pathname: string;
  linkSelectedStyles?: string;
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

const NavIconLink = ({
  id,
  title,
  href,
  icon,
  pathname,
  variant,
  linkSelectedStyles,
  className,
}: NavIconLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          variant && buttonVariants({ variant: variant }),
          'p-0 max-md:leading-none max-md:hover:bg-primary max-md:hover:text-white max-md:h-auto max-md:p-2 max-md:rounded-full flex items-center gap-2',
          pathname.split('/').includes(id)
            ? linkSelectedStyles || 'underline'
            : 'text-foreground',
          className
        )}
      >
        {icon}
        <span className="max-md:hidden">{title}</span>
      </Link>
    </li>
  );
};

export default NavIconLink;
