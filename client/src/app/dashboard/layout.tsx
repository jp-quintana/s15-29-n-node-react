import DashboardNav from '@/components/dashboard/dashboard-nav';
import MaxWidthContainer from '@/components/max-width-container';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-20 min-h-screen flex flex-col space-y-4">
      <MaxWidthContainer className="flex flex-col space-y-6">
        <DashboardNav />
        {children}
      </MaxWidthContainer>
    </div>
  );
}
