"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, FolderGit2, Code2, Award } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Experiences", href: "/admin/experiences", icon: Briefcase },
        { name: "Projects", href: "/admin/projects", icon: FolderGit2 },
        { name: "Skills", href: "/admin/skills", icon: Code2 },
        { name: "Certs", href: "/admin/certifications", icon: Award },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div className="h-16 flex items-center px-6 border-b border-gray-200">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500">
                    Admin
                </span>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link 
                            key={item.name}
                            href={item.href} 
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                isActive 
                                    ? "bg-orange-50 text-orange-700" 
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                            <item.icon 
                                className={`mr-3 h-5 w-5 ${
                                    isActive ? "text-orange-600" : "text-gray-400"
                                }`} 
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-200">
                <Link href="/" className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md border border-gray-300 transition-colors hover:bg-gray-50">
                    Back to Public Site
                </Link>
            </div>
        </aside>
    );
}
