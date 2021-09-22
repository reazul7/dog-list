import React from "react";
import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";

const Counter = (props) => {
    const {likeDog, disLikeDog} = props;

  return (
    <div>
      <div class="pt-4">
        <main class="h-full overflow-y-auto">
          <div class="container  mx-auto grid ">
            <div class="mx-auto grid gap-2 mb-8 md:grid-cols-2 xl:grid-cols-2">

              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-green-400 bg-green-100 rounded-full dark:text-orange-100 dark:bg-yellow-500">
                  <AiFillLike />
                </div>
                <div>
                  <p class="mb-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                    Like User
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {likeDog}
                  </p>
                </div>
              </div>

              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <AiTwotoneDislike />
                </div>
                <div>
                  <p class="mb-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                    Dislike User
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {disLikeDog}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Counter;
