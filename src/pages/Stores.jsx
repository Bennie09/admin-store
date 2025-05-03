import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Stores() {
  const [stores] = useState([
    {
      id: 1,
      name: 'Downtown Store',
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'downtown@infinite.com',
    },
    {
      id: 2,
      name: 'Mall Location',
      address: '456 Shopping Ave, Los Angeles, CA 90012',
      phone: '+1 (555) 987-6543',
      email: 'mall@infinite.com',
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Stores</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{store.name}</h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">{store.address}</span>
              </div>
              
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">{store.phone}</span>
              </div>
              
              <div className="flex items-center">
                <FiMail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">{store.email}</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Edit
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}