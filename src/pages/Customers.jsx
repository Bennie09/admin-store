import { useState } from 'react';
import { FiMail, FiPhone, FiShoppingBag } from 'react-icons/fi';

export default function Customers() {
  const [customers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      orders: 5,
      totalSpent: 499.95,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 (555) 987-6543',
      orders: 3,
      totalSpent: 299.97,
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Customers</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{customer.name}</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FiMail className="h-4 w-4 mr-2" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FiPhone className="h-4 w-4 mr-2" />
                      {customer.phone}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FiShoppingBag className="h-4 w-4 mr-2" />
                    {customer.orders} orders
                  </div>
                  <div className="mt-1 text-lg font-semibold text-primary-600 dark:text-primary-400">
                    ${customer.totalSpent}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  View Orders
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}