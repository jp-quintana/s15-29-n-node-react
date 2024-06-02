'use client';

import { useState } from 'react';
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
  const [navIsCollapsed, setIsNavCollapsed] = useState(false);

  return (
    <ResizablePanelGroup direction="horizontal" className="border rounded-sm">
      <ResizablePanel
        defaultSize={22}
        minSize={18}
        maxSize={22}
        collapsible
        className="min-w-16 max-md:max-w-16"
        onCollapse={() => setIsNavCollapsed(true)}
        onExpand={() => setIsNavCollapsed(false)}
      >
        <ProfileNav navIsCollapsed={navIsCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
