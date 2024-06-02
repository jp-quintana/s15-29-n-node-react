'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Menu,
  User,
  Gavel,
  SunMoon,
  Moon,
  Sun,
  LogIn,
  UserPlus,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface NavDropdownProps {
  isLoggedIn?: boolean;
}

const NavDropdown = ({ isLoggedIn }: NavDropdownProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-0 h-10 w-10">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5">
        {isLoggedIn && (
          <>
            <DropdownMenuLabel className="text">Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className="flex">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Gavel className="mr-2 h-4 w-4" />
                <span>Mis subastas</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        )}
        {!isLoggedIn && (
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/login" className="flex">
                <LogIn className="mr-2 h-4 w-4" />
                <span>Ingresar</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/register" className="flex">
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Crear cuenta</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoon className="mr-2 h-4 w-4" />
              <span>Mode</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        {isLoggedIn && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={async () => await signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
