import Link from "next/link";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Sidebar from "./Sidebar";
import "../globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat-mono",
    subsets: ["latin"]
})


export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} antialiased font-mono`}>
                <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
      </body>
    </html>
    );
}
