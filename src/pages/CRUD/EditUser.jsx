import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser, fetchUpdateUsers } from "../../redux/slices/users";
import { useEffect } from "react";

export const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // const userData = useSelector((state) => state.users.data);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    dispatch(fetchOneUser(params.id));
  }, []);

  const onSubmit = (values) => {
    dispatch(fetchUpdateUsers(params.id, values));
  };

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Изменение пользователя
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Почта
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email", { required: "Укажите поле" })}
                  />
                </div>
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ФИО
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Иванов Иван Иванович"
                    {...register("username", { required: "Укажите поле" })}
                  />
                </div>
                <div>
                  <label
                    for="telephone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Телефон
                  </label>
                  <input
                    type="telephone"
                    name="telephone"
                    id="telephone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+79234234523"
                    {...register("telephone", { required: "Укажите поле" })}
                  />
                </div>
                <div>
                  <label
                    for="date"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Дата рождения
                  </label>
                  <input
                    type="date"
                    id="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    {...register("birthday", { required: "Укажите поле" })}
                  />
                </div>
                <div>
                  <label
                    for="roles"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Роль
                  </label>
                  <input
                    type="roles"
                    id="roles"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="USER"
                    {...register("roles", { required: "Укажите поле" })}
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Изменить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
