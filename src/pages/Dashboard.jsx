import { FiShoppingBag, FiDollarSign, FiUsers, FiPackage } from 'react-icons/fi';

const stats = [
  { name: 'Total Sales', value: '$23,456', icon: FiDollarSign },
  { name: 'Total Orders', value: '456', icon: FiShoppingBag },
  { name: 'Total Products', value: '89', icon: FiPackage },
  { name: 'Total Customers', value: '234', icon: FiUsers },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      {item.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {item.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h2>
        <div className="mt-6">
          <p className="text-gray-500 dark:text-gray-400">No recent activity</p>
        </div>
      </div>
    </div>
  );
}