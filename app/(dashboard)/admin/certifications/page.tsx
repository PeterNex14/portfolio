"use client";

import { useEffect, useState } from "react";

type Certification = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    icon: string;
    iconColor: string;
    updatedAt: string;
};

export default function AdminCertificationsPage() {
    const [certs, setCerts] = useState<Certification[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [isCreating, setIsCreating] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        issuer: "",
        date: new Date().getFullYear().toString(),
        icon: "FaAward",
        iconColor: "text-orange-500",
    });

    const resetForm = () => {
        setFormData({ 
            title: "", 
            issuer: "", 
            date: new Date().getFullYear().toString(), 
            icon: "FaAward", 
            iconColor: "text-orange-500" 
        });
        setIsCreating(false);
        setEditingId(null);
    };

    const fetchCertifications = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/certifications');
            if (!res.ok) throw new Error('Failed to fetch data');
            const data = await res.json();
            setCerts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCertifications();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const url = editingId ? `/api/certifications?id=${editingId}` : '/api/certifications';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                resetForm();
                fetchCertifications();
            } else {
                 const errorData = await res.json();
                 alert(errorData.error || 'Failed to save certification');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving');
        }
    };

    const handleEditClick = (cert: Certification) => {
        setFormData({
            title: cert.title,
            issuer: cert.issuer,
            date: cert.date,
            icon: cert.icon,
            iconColor: cert.iconColor,
        });
        setEditingId(cert.id);
        setIsCreating(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this certification?')) return;

        try {
            const res = await fetch(`/api/certifications?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchCertifications();
            } else {
                const errorData = await res.json();
                alert(errorData.error || 'Failed to delete certification');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while deleting');
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Certifications Manager</h1>
                <button 
                    onClick={() => {
                        if (isCreating) resetForm();
                        else setIsCreating(true);
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                    {isCreating ? 'Cancel' : '+ Add New'}
                </button>
            </div>

            {/* Creation/Edit Form */}
            {isCreating && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                    <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Certification' : 'Add New Certification'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. Google UX Design Professional" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
                                <input required type="text" value={formData.issuer} onChange={e => setFormData({...formData, issuer: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. Coursera" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date/Year</label>
                                <input required type="text" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. 2023" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">React Icon Name</label>
                                <input required type="text" value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. FaAward" />
                                <p className="text-xs text-gray-400 mt-1">Must be imported in CertificationsSection.tsx</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tailwind Text Color</label>
                                <input required type="text" value={formData.iconColor} onChange={e => setFormData({...formData, iconColor: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. text-emerald-500" />
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-4">
                            <button type="button" onClick={resetForm} className="px-6 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800">
                                {editingId ? 'Update Certification' : 'Save Certification'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List of Certs */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading certifications...</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issuer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon / Color</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {certs.map((cert) => (
                                <tr key={cert.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-xs truncate">{cert.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.issuer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex flex-col gap-1">
                                            <code className="bg-gray-100 px-2 py-0.5 rounded textxs w-fit">{cert.icon}</code>
                                            <span className={`text-xs ${cert.iconColor}`}>{cert.iconColor}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(cert.updatedAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button 
                                            onClick={() => handleEditClick(cert)}
                                            className="text-orange-600 hover:text-orange-900 mr-3"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(cert.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {certs.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No certifications found. Add your first certificate!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
