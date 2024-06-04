'use client';
import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileAvatar {
  className?: string;
}

const ProfileAvatar = ({ className }: ProfileAvatar) => {
  const { data: session } = useSession();

  return (
    session?.user && (
      <Avatar className={className}>
        {session?.user.image && <AvatarImage src={session.user.image} />}
        <AvatarFallback className="bg-gray-500 text-white font-medium">
          {(session.user.name as string)[0]}
        </AvatarFallback>
      </Avatar>
    )
  );
};

export default ProfileAvatar;
