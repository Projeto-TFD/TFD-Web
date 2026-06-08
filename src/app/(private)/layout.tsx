import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "@/src/components/layout/sidebar/Sidebar";
import { AppSidebar } from "@/src/components/layout/sidebar/SidebarNew";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SidebarProvider className="flex h-screen bg-slate-100 font-sans text-slate-900">
    //   <AppSidebar />

    //   <div>
    //     <SidebarTrigger />

    //     <main className="flex flex-col flex-1 overflow-y-auto p-6">{children}</main>
    //   </div>
    // </SidebarProvider>

    <div className="flex h-screen bg-slate-100 font-sans text-slate-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
