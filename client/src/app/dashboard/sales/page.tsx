import UserPostList from '@/components/dashboard/user-post-list';

const Page = async () => {
  return (
    <div>
      <h1 className="font-bold mb-3">Tus productos en venta</h1>
      <UserPostList />
    </div>
  );
};

export default Page;
