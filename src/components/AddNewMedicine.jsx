import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AddNewMedicine = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
        Add New Medicine
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Medicine Name
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Medicine ID
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
            onChange={(e) => setFormData({...formData, id: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Description
          </label>
          <textarea
            required
            rows="4"
            className="w-full p-3 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#2D2D2D] text-white rounded-lg hover:bg-[#A68763] transition-colors"
        >
          Add Medicine
        </button>
      </form>
    </motion.div>
  );
};

export default AddNewMedicine; 