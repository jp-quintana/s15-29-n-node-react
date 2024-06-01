import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/authOptions';

const Page = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  return <div>Profile</div>;
};

export default Page;
