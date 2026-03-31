"use client";

import { useEffect, useState } from "react";

type Experience = {
    id: string;
    role: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string[];
    updatedAt: string;
};

export default function AdminExperiencesPage() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State for creating/editing an experience
    const [isCreating, setIsCreating] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "", 
        description: "",
    });

    const resetForm = () => {
        setFormData({ role: "", company: "", startDate: "", endDate: "", description: "" });
        setIsCreating(false);
        setEditingId(null);
    };

    const fetchExperiences = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/experiences');
            if (!res.ok) throw new Error('Failed to fetch data');
            const data = await res.json();
            setExperiences(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Convert multiline text area into an array of strings
        const descriptionArray = formData.description
            .split('\n')
            .filter((line) => line.trim() !== '');

        const url = editingId ? `/api/experiences?id=${editingId}` : '/api/experiences';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    role: formData.role,
                    company: formData.company,
                    startDate: formData.startDate,
                    endDate: formData.endDate || null,
                    description: descriptionArray,
                }),
            });

            if (res.ok) {
                resetForm();
                fetchExperiences(); // Refresh the list
            } else {
                 const errorData = await res.json();
                 alert(errorData.error || 'Failed to save experience');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving');
        }
    };

    const handleEditClick = (exp: Experience) => {
        const toMonthYear = (dateStr: string | null) => {
            if (!dateStr) return "";
            return dateStr.substring(0, 7);
        };

        setFormData({
            role: exp.role,
            company: exp.company,
            startDate: toMonthYear(exp.startDate),
            endDate: toMonthYear(exp.endDate),
            description: exp.description.join('\n'),
        });
        setEditingId(exp.id);
        setIsCreating(true); // Open the form with the pre-filled data
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top where form is
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this experience?')) return;

        try {
            const res = await fetch(`/api/experiences?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchExperiences(); // Refresh the list
            } else {
                const errorData = await res.json();
                alert(errorData.error || 'Failed to delete experience');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while deleting');
        }
    };

    return (

        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Experience Manager</h1>
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
                    <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Experience' : 'Add New Experience'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. Google" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <input required type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. Software Engineer" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                <input 
                                    required 
                                    type={formData.startDate ? "month" : "text"}
                                    onFocus={(e) => e.target.type = 'month'}
                                    onBlur={(e) => { if (!formData.startDate) e.target.type = 'text'; }}
                                    value={formData.startDate} 
                                    onChange={e => setFormData({...formData, startDate: e.target.value})} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" 
                                    placeholder="YYYY-MM" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">End Date (Leave empty if Present)</label>
                                <input 
                                    type={formData.endDate ? "month" : "text"}
                                    onFocus={(e) => e.target.type = 'month'}
                                    onBlur={(e) => { if (!formData.endDate) e.target.type = 'text'; }}
                                    value={formData.endDate} 
                                    onChange={e => setFormData({...formData, endDate: e.target.value})} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" 
                                    placeholder="YYYY-MM" 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description (Bullet points, one per line)</label>
                            <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="Developed main features...&#10;Led a team of 3..."></textarea>
                        </div>
                        <div className="flex justify-end gap-3">
                            <button type="button" onClick={resetForm} className="px-6 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800">
                                {editingId ? 'Update Experience' : 'Save Experience'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List of Experiences */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading experiences...</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {experiences.map((exp) => (
                                <tr key={exp.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exp.company}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exp.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {exp.startDate ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(exp.updatedAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button 
                                            onClick={() => handleEditClick(exp)}
                                            className="text-orange-600 hover:text-orange-900 mr-3"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(exp.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {experiences.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No experiences found. Add one above!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
