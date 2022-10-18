import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteUsers, fetchUsers } from "../../redux/slices/users";
import { useEffect } from "react";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.data);

  const onClickDelete = (id) => {
    if (window.confirm("Удалить?")) {
      dispatch(fetchDeleteUsers(id));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="overflow-x-auto relative">
        <Link to="create">
          <button
            type="button"
            class="focus:outline-none m-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Создать
          </button>
        </Link>
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
            {users?.map((obj) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {obj.username}
                  </th>
                  <td class="py-4 px-6">{obj.birthday}</td>
                  <td class="py-4 px-6">{obj.roles}</td>
                  <td class="py-4 px-6">{obj.email}</td>
                  <td class="py-4 px-6">
                    <div class="inline-flex rounded-md shadow-sm">
                      <Link to={`edit/${obj._id}`}>
                        <button
                          type="button"
                          aria-current="page"
                          class="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                          Изменить
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          onClickDelete(obj._id);
                        }}
                        class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border rounded-r-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        Удалить
                      </button>
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
