import { ReactNode } from "react";

interface SkillItemProps {
    icon: ReactNode;
    label: string;
}

export default function SkillItem({ icon, label }: SkillItemProps) {
    return (
        <div
            className="group flex flex-row sm:flex-col items-center justify-center gap-1 sm:gap-2 
                 p-2 sm:p-3 rounded-lg w-full 
                 transition-all duration-300 ease-in-out 
                 hover:bg-orange-500 hover:shadow-md cursor-pointer"
        >
            {/* Icon */}
            <div className="text-orange-500 text-xl sm:text-2xl transition-colors duration-300 group-hover:text-white">
                {icon}
            </div>

            {/* Label */}
            <p className="text-gray-800 text-sm sm:text-base font-mono font-bold text-center 
                    transition-colors duration-300 group-hover:text-white">
                {label}
            </p>
        </div>
    );
}