'use client';
import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileAvatar {
  previewImage?: string;
  className?: string;
}

const ProfileAvatar = ({ previewImage, className }: ProfileAvatar) => {
  const { data: session } = useSession();

  const src = session?.user?.image || previewImage;

  return (
    session?.user && (
      <Avatar className={className}>
        {src && <AvatarImage src={src} className="object-cover" />}
        <AvatarFallback className="bg-gray-500 text-white font-medium">
          {(session.user.name as string)[0]}
        </AvatarFallback>
      </Avatar>
    )
  );
};

export default ProfileAvatar;
