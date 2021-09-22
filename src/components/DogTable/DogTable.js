import React from "react";

const DogTable = (props) => {
  const { handleRemoveLike, handleRemoveDisLike, dog, likeDog, disLikeDog } =
    props;

  return (
    <div className="container py-5">
      <table className="table text-center">
        <thead className="border-1 border-black">
          <tr>
            <th className="border-1 border-green-600 text-green-600">Like</th>
            <th className="border-1 border-red-600 text-red-600">Dislike</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border-1 border-green-600 w-60">
              {likeDog ? (
                <div className="justify-center mx-auto">
                  <img
                    src={dog.message}
                    alt=""
                    className="w-32 h-32 mx-auto pb-2 rounded shadow"
                  />
                  <button
                    className="border-1 border-green-500 bg-gray-200 px-4 py-1 rounded text-green-600"
                    onClick={handleRemoveLike}
                  >
                    Removed from Like
                  </button>
                </div>
              ) : (
                <p className="font-bold text-gray-400">Empty</p>
              )}{" "}
            </td>

            <td className="border-1 border-red-600 w-60">
              {disLikeDog ? (
                <div className="justify-center mx-auto">
                  <img
                    src={dog.message}
                    alt=""
                    className="w-32 h-32 mx-auto pb-2 rounded shadow"
                  />
                  <button
                    className="border-1 border-red-500 bg-gray-200 px-4 py-1 rounded text-red-600"
                    onClick={handleRemoveDisLike}
                  >
                    Removed from Dislike
                  </button>
                </div>
              ) : (
                <p className="font-bold text-gray-400">Empty</p>
              )}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DogTable;
