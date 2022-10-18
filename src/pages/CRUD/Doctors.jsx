
export const Doctors = () => {
  const arr = [1, 2, 3, 4, 5, 3, 3, 3, 3, 3, 3, 3];
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left rounded-lg text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                ФИО
              </th>
              <th scope="col" class="py-3 px-6">
                Дата рождения
              </th>
              <th scope="col" class="py-3 px-6">
                Роль
              </th>
              <th scope="col" class="py-3 px-6">
                eMAIL
              </th>
              <th scope="col" class="py-3 px-6">
                CRUD
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map((obj) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Имя Фамилия Отчество
                  </th>
                  <td class="py-4 px-6">12.12.1231</td>
                  <td class="py-4 px-6">USER</td>
                  <td class="py-4 px-6">1231@asdf.com</td>
                  <td class="py-4 px-6">
                    <div class="inline-flex rounded-md shadow-sm">
                      <a
                        aria-current="page"
                        class="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        Изменить
                      </a>
                      <a class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border rounded-r-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Удалить
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
