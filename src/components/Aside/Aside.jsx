import { Link, Route, Routes } from "react-router-dom";

export const Aside = () => {
  return (
    <aside class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <Link to="users">
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="ml-3">Пользователи</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="roles">
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Роли</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="doctors">
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Врачи</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
