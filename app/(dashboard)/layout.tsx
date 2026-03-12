import Link from "next/link";
import { LayoutDashboard, Briefcase, FolderGit2 } from "lucide-react";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
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
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500">
                        Admin
                    </span>
                </div>
                
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    <Link href="/admin" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100">
                        <LayoutDashboard className="mr-3 h-5 w-5 text-gray-500" />
                        Dashboard
                    </Link>
                    <Link href="/admin/experiences" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                        <Briefcase className="mr-3 h-5 w-5 text-gray-400" />
                        Experiences
                    </Link>
                    <Link href="/admin/projects" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                        <FolderGit2 className="mr-3 h-5 w-5 text-gray-400" />
                        Projects
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <Link href="/" className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md border border-gray-300">
                        Back to Public Site
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
      </body>
    </html>
    );
}
