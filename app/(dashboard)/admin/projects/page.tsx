"use client";

import { useEffect, useState } from "react";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    type: string;
    tech: string[];
    scale: string;
    offset: string;
    updatedAt: string;
};

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [isCreating, setIsCreating] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        link: "",
        type: "web",
        tech: "", // Comma-separated or newline-separated string to convert to array
        scale: "scale-100",
        offset: "",
    });

    const resetForm = () => {
        setFormData({ title: "", description: "", image: "", link: "", type: "web", tech: "", scale: "scale-100", offset: "" });
        setIsCreating(false);
        setEditingId(null);
    };

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/projects');
            if (!res.ok) throw new Error('Failed to fetch data');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Convert multiline/comma-separated tech string into an array
        const techArray = formData.tech
            .split(/[,\n]/)
            .map((line) => line.trim())
            .filter((line) => line !== '');

        const url = editingId ? `/api/projects?id=${editingId}` : '/api/projects';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    tech: techArray,
                }),
            });

            if (res.ok) {
                resetForm();
                fetchProjects();
            } else {
                 const errorData = await res.json();
                 alert(errorData.error || 'Failed to save project');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving');
        }
    };

    const handleEditClick = (proj: Project) => {
        setFormData({
            title: proj.title,
            description: proj.description,
            image: proj.image,
            link: proj.link,
            type: proj.type,
            tech: proj.tech.join(', '),
            scale: proj.scale,
            offset: proj.offset,
        });
        setEditingId(proj.id);
        setIsCreating(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const res = await fetch(`/api/projects?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchProjects();
            } else {
                const errorData = await res.json();
                alert(errorData.error || 'Failed to delete project');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while deleting');
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Project Manager</h1>
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
                    <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Project' : 'Add New Project'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. My Awesome App" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL path</label>
                                <input required type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. /my-app.png" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                                <input required type="text" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. https://github.com/..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type Categories</label>
                                <select required value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500">
                                    <option value="web">Web</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="cli">CLI</option>
                                    <option value="backend">Backend</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack (comma separated)</label>
                                <input required type="text" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. React, Next.js, Tailwind" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Scale (Tailwind class)</label>
                                <input required type="text" value={formData.scale} onChange={e => setFormData({...formData, scale: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. scale-200" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Offset (Tailwind classes)</label>
                                <input required type="text" value={formData.offset} onChange={e => setFormData({...formData, offset: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="e.g. bottom-[20%] right-[-30%]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500" placeholder="Brief explanation of the project..."></textarea>
                        </div>
                        <div className="flex justify-end gap-3">
                            <button type="button" onClick={resetForm} className="px-6 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800">
                                {editingId ? 'Update Project' : 'Save Project'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List of Projects */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading projects...</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tech</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {projects.map((proj) => (
                                <tr key={proj.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{proj.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{proj.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{proj.tech.join(', ')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(proj.updatedAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button 
                                            onClick={() => handleEditClick(proj)}
                                            className="text-orange-600 hover:text-orange-900 mr-3"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(proj.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No projects found. Add your first project!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
