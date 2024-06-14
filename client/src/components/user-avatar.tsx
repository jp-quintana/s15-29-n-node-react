'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// TODO: update types
interface UserAvatarProps {
  user?: any;
  className?: string;
}
const UserAvatar = ({ user, className }: UserAvatarProps) => {
  return (
    user && (
      <Avatar className={className}>
        {user.image && (
          <AvatarImage src={user.image} className="object-cover" />
        )}
        <AvatarFallback className="bg-gray-500 text-white font-medium">
          {(user.name as string)[0]}
          {(user.lastName as string)[0]}
        </AvatarFallback>
      </Avatar>
    )
  );
};

export default UserAvatar;
