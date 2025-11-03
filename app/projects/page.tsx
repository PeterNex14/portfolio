import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectPage() {
    return (
        <div className="flex flex-col min-h-screen w-full p-4 sm:p-6">
            <p className="font-sans text-3xl sm:text-5xl mb-8 text-center">Projects</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#11224E] pt-6 px-4 sm:px-6 shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-bold text-white">
                                Klinik Anugerah Tomohon Mobile App
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug">
                                A digital medical record and registration app for clinics. Engineered using React Native to facilitate patient registration and viewing of standardized medical data, ensuring seamless access for both patients and doctors.
                            </p>
                        </div>
                        <div>
                            <div className="p-2 sm:p-3 bg-white rounded-full">
                                <FiArrowUpRight className="text-[#11224E] w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[350px] mt-6 overflow-hidden">
                        <div className="absolute bottom-[-60%] right-[-30%] w-[140%] h-[140%] scale-150">
                            <Image
                                src="/mockup.png"
                                alt="Mockup Phone"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#11224E] pt-6 px-4 sm:px-6 shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-bold text-white">
                                Klinik Anugerah Tomohon Web Dashboard
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug">
                                A digital medical record and registration app for clinics. Engineered using NextJS to facilitate administration and viewing of standardized medical data, ensuring seamless access for medical staff.
                            </p>
                        </div>
                        <div>
                            <div className="p-2 sm:p-3 bg-white rounded-full">
                                <Link href="">
                                    <FiArrowUpRight className="text-[#11224E] w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[350px] mt-6 overflow-hidden">
                        <div className="absolute bottom-[10%] right-[0%] w-[60%] h-[60%] scale-150">
                            <Image
                                src="/mockup_dashboard.png"
                                alt="Mockup Dashboard"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#11224E] pt-6 px-4 sm:px-6 shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-bold text-white">
                                Klinik Anugerah Tomohon Web Service
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug">
                                The backend serves as the central nervous system for the entire EMR system, ensuring secure, reliable, and real-time data flow between the mobile and web portals.
                            </p>
                        </div>
                        <div>
                            <div className="p-2 sm:p-3 bg-white rounded-full">
                                <Link href="">
                                    <FiArrowUpRight className="text-[#11224E] w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[350px] mt-6 overflow-hidden">
                        <div className="absolute bottom-[10%] -right-[20%] w-full h-[60%]">
                            <Image
                                src="/elements_background.png"
                                alt="Mockup Backend"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#11224E] pt-6 px-4 sm:px-6 shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-bold text-white">My City App</p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug">
                                MyCityApp is a practice project built with Android Jetpack Compose.
                                It displays categories of city places and provides details for each.
                            </p>
                        </div>
                        <div>
                            <div className="p-2 sm:p-3 bg-white rounded-full">
                                <Link href="https://github.com/PeterNex14/my-city-app.git">
                                    <FiArrowUpRight className="text-[#11224E] w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[350px] mt-6 overflow-hidden">
                        <div className="absolute bottom-[0%] -right-[20%] w-full h-[60%] scale-125">
                            <Image
                                src="/phone-category.png"
                                alt="Mockup Phone"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#11224E] pt-6 px-4 sm:px-6 shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-bold text-white">Movies App</p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug">
                                A simple Android app showing movie lists, details, and bookmarks.
                                Built during the Studi Independent Infinite Learning program.
                            </p>
                        </div>
                        <div>
                            <div className="p-2 sm:p-3 bg-white rounded-full">
                                <Link href="https://github.com/PeterNex14/MoviesApp.git">
                                    <FiArrowUpRight className="text-[#11224E] w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[350px] mt-6 overflow-hidden">
                        <div className="absolute bottom-[0%] -right-[20%] w-full h-[60%] scale-125">
                            <Image
                                src="/movies_app.png"
                                alt="Movies App"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
