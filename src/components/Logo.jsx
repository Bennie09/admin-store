import { FiInfinity } from 'react-icons/fi';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <FiInfinity className="h-8 w-8 text-primary-600 dark:text-primary-400" />
      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Infinite</span>
    </div>
  );
}