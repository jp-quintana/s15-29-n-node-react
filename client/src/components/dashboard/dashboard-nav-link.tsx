import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

interface DashboardNavLinkProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  pathname: string;
}

const DashboardNavLink = ({
  name,
  href,
  icon,
  pathname,
}: DashboardNavLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: 'link' }),
          'p-0 max-md:leading-none max-md:hover:bg-primary max-md:hover:text-white max-md:h-auto max-md:p-2 max-md:rounded-full',
          pathname === href ? 'underline' : 'text-foreground'
        )}
      >
        <span className="max-md:hidden">{name}</span>
        {icon}
      </Link>
    </li>
  );
};

export default DashboardNavLink;
