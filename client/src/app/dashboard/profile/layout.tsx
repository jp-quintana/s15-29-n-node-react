import ProfileNav from '@/components/dashboard/profile/profile-nav';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4">
      <ProfileNav />
      {children}
    </div>
  );
}
