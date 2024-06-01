import { redirect } from 'next/navigation';

// import { getServerSession } from 'next-auth';

// import { authOptions } from '@/lib/authOptions';

const Page = async () => {
  // const session = await getServerSession(authOptions);

  // console.log(session);

  return redirect('/dashboard/profile/edit');
};

export default Page;
