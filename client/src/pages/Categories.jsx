import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const res = await fetch(`${baseUrl}/api/categories`, { credentials: 'include' });
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-md mx-auto py-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 px-2">Categories</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {loading ? (
            <div className="text-center w-full">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 w-full">{error}</div>
          ) : categories.length === 0 ? (
            <div className="text-center w-full">No categories found.</div>
          ) : (
            categories.map((cat, idx) => (
              <div key={cat.category_id || cat.id || idx} className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 text-center shadow w-40">
                <div className="font-semibold text-lg text-blue-800">{cat.name}</div>
                <div className="text-gray-500 text-sm">{cat.description || ''}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
