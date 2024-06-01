import DashboardNav from '@/components/dashboard/dashboard-nav';
import MaxWidthContainer from '@/components/max-width-container';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('render');

  return (
    <div className="py-20 min-h-screen">
      <MaxWidthContainer>
        <DashboardNav />
        {children}
      </MaxWidthContainer>
    </div>
  );
}
