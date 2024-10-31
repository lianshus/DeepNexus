'use client';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from '../components/app-siderbar';
export default function More() {
  return (
    <main className="w-full bg-mainpage">

        <div className="w-full h-full flex flex-col justify-center items-center min-h-screen z-0">
          <div className="w-full max-w-7xl text-center text-9xl">
          <SidebarProvider className="w-full">
                <AppSidebar />
                <SidebarTrigger />
                </SidebarProvider>
          </div>
    
        </div>
        
    </main>
  );
}
