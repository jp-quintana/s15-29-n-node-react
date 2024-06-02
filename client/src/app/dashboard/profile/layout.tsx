import ProfileNav from '@/components/dashboard/profile/profile-nav';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResizablePanelGroup direction="horizontal" className="border rounded-sm">
      <ResizablePanel
        defaultSize={25}
        minSize={18}
        collapsible
        className="min-w-12"
      >
        <ProfileNav />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
