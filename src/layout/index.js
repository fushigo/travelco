"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/common/loader";

import Sidebar from "@/components/pages/dashboard/components/Sidebar";
import Header from "@/components/pages/dashboard/components/Header";
// import Header from "@/components/Header";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden dark:bg-boxdark-2">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="bg-white mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 dark:bg-boxdark-2">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
    </div>
  );
}
