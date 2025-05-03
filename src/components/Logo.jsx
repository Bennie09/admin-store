import { LiaInfinitySolid } from "react-icons/lia";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <LiaInfinitySolid className="h-8 w-8 text-primary-600 dark:text-primary-400" />
      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Infinite</span>
    </div>
  );
}