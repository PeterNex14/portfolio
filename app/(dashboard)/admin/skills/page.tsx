"use client";

import { useEffect, useState } from "react";

type Skill = {
    id: string;
    label: string;
    icon: string;
    category: string;
    updatedAt: string;
};

export default function AdminSkillsPage() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [isCreating, setIsCreating] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        label: "",
        icon: "",
        category: "frontend",
    });

    const resetForm = () => {
        setFormData({ label: "", icon: "", category: "frontend" });
        setIsCreating(false);
        setEditingId(null);
    };

    const fetchSkills = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/skills');
            if (!res.ok) throw new Error('Failed to fetch data');
            const data = await res.json();
            setSkills(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const url = editingId ? `/api/skills?id=${editingId}` : '/api/skills';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                resetForm();
                fetchSkills();
            } else {
                 const errorData = await res.json();
                 alert(errorData.error || 'Failed to save skill');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving');
        }
    };

    const handleEditClick = (skill: Skill) => {
        setFormData({
            label: skill.label,
            icon: skill.icon,
            category: skill.category,
        });
        setEditingId(skill.id);
        setIsCreating(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this skill?')) return;

        try {
            const res = await fetch(`/api/skills?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchSkills();
            } else {
                const errorData = await res.json();
                alert(errorData.error || 'Failed to delete skill');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while deleting');
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Skills Manager</h1>
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
                    <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Skill' : 'Add New Skill'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                                <input required type="text" value={formData.label} onChange={e => setFormData({...formData, label: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. React" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500">
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="mobile">Mobile</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">React Icon Component Name</label>
                                <input required type="text" value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. FaReact" />
                                <p className="text-xs text-gray-400 mt-1">Must be imported in SkillsSection.tsx</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-4">
                            <button type="button" onClick={resetForm} className="px-6 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800">
                                {editingId ? 'Update Skill' : 'Save Skill'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List of Skills */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading skills...</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill Label</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon Component</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {skills.map((skill) => (
                                <tr key={skill.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{skill.label}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{skill.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">{skill.icon}</code>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(skill.updatedAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button 
                                            onClick={() => handleEditClick(skill)}
                                            className="text-orange-600 hover:text-orange-900 mr-3"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(skill.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {skills.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No skills found. Add your first skill!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
