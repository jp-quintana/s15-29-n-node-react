import MaxWidthContainer from '@/components/max-width-container';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-20 min-h-screen flex justify-center items-center">
      <MaxWidthContainer className="flex justify-center">
        {children}
      </MaxWidthContainer>
    </div>
  );
}
