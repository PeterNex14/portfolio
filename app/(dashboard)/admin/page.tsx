export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-gray-600">
                    Welcome to your portfolio CMS. Use the sidebar to navigate and manage your public data.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
                        <h3 className="font-semibold text-orange-800">Experiences</h3>
                        <p className="text-sm text-orange-600 mt-1">Manage your work history.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
