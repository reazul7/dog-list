import React from "react";
import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";

const Counter = (props) => {
    const {likeDog, disLikeDog} = props;

  return (
    <div>
      <div className="pt-4">
        <main className="h-full overflow-y-auto">
          <div className="container  mx-auto grid ">
            <div className="mx-auto grid gap-2 mb-8 md:grid-cols-2 xl:grid-cols-2">

              <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="p-3 mr-4 text-green-400 bg-green-100 rounded-full dark:text-orange-100 dark:bg-yellow-500">
                  <AiFillLike />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                    Like User
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {likeDog}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <AiTwotoneDislike />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                    Dislike User
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
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
