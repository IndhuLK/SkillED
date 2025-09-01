import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "/src/components/ui/sidebar";
import { AppSideline } from "./AppSideline";

export function BlogLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSideline />

        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="ml-4" />
          </header>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
