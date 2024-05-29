import { getServerSession } from 'next-auth';

import LogoutButton from '@/components/logout-button';
import { authOptions } from '../api/auth/[...nextauth]/route';

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p>{JSON.stringify(session)}</p>
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;
