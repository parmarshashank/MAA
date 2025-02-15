import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AssignMedicines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientId: '',
    medicineId: '',
    dosage: '',
    frequency: '',
    duration: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call logic here
    console.log('Submitting:', formData);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#2D2D2D] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
      >
        Assign Medicines
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
              Assign Medicine to Patient
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
                  Patient ID
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
                  onChange={(e) => setFormData({...formData, patientId: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
                  Medicine
                </label>
                <select
                  required
                  className="w-full p-2 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
                  onChange={(e) => setFormData({...formData, medicineId: e.target.value})}
                >
                  <option value="">Select Medicine</option>
                  {/* Add medicine options here */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
                  Dosage
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
                  onChange={(e) => setFormData({...formData, dosage: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
                  Frequency
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
                  onChange={(e) => setFormData({...formData, frequency: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#D7C9AE] rounded-lg focus:ring-2 focus:ring-[#A68763]"
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-[#2D2D2D] text-[#2D2D2D] rounded-lg hover:bg-[#2D2D2D] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#2D2D2D] text-white rounded-lg hover:bg-[#A68763] transition-colors"
                >
                  Assign
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AssignMedicines; 