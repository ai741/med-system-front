import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <aside class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <Link to="users">
              <span
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="ml-3">Пользователи</span>
              </span>
            </Link>
          </li>
          {/* <li>
            <Link to="roles">
              <span
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Роли</span>
              </span>
            </Link>
          </li> */}
          <li>
            <Link to="doctors">
              <span
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Врачи</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
