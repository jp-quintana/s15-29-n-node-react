import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

interface NavIconLinkProps {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
  pathname: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
  textIsHidden?: boolean;
  listItemStyles?: string;
  linkSelectedStyles?: string;
  className?: string;
}

const NavIconLink = ({
  id,
  title,
  href,
  icon,
  pathname,
  variant,
  textIsHidden,
  listItemStyles,
  linkSelectedStyles,
  className,
}: NavIconLinkProps) => {
  const linkIsSelected = pathname.split('/').includes(id);
  return (
    <li className={cn(listItemStyles)}>
      <Link
        href={href}
        className={cn(
          variant && buttonVariants({ variant: variant }),
          'p-0 max-md:leading-none max-md:h-auto max-md:p-2 max-md:rounded-full flex items-center gap-3',
          linkIsSelected
            ? `${linkSelectedStyles || 'underline'} pointer-events-none`
            : 'text-foreground',
          className
        )}
      >
        {icon}
        <span
          className={cn('max-md:hidden truncate', textIsHidden && 'hidden')}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default NavIconLink;
