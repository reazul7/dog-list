import React, { useEffect, useState } from "react";
import DogTable from "../DogTable/DogTable";
import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";
import Counter from "../Counter/Counter";

const Dog = () => {
  const [dog, setDog] = useState({});
  const [likeDog, setLikeDog] = useState(0);
  const [disLikeDog, setDisLikeDog] = useState(0);

  // for like
  function handleLike() {
    setLikeDog(likeDog + 1);
  }
  function handleRemoveLike() {
    setLikeDog(0);
  }

  // for dislike
  function handleDisLike() {
    setDisLikeDog(disLikeDog + 1);
  }
  function handleRemoveDisLike() {
    setDisLikeDog(0);
  }

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data));
  }, []);

  return (
    <div>
      <section>
        <Counter likeDog={likeDog} disLikeDog={disLikeDog}/>
      </section>

      <main className="py-5">
        <section className="flex justify-center pt-2">
          <img
            src={dog.message}
            alt=""
            className=" rounded w-60 h-60 shadow-2xl"
          />
        </section>

        <section className="flex justify-center py-3">
          <button
            onClick={handleLike}
            className="flex border-1 border-green-500 bg-gray-200 px-4 py-1 rounded text-green-600"
          >
            Like <AiFillLike className="ml-1 mt-1" />{" "}
          </button>
          <span className="px-3"></span>
          <button
            onClick={handleDisLike}
            className="flex border-1 border-red-500 bg-gray-200 px-4 py-1 rounded text-red-600"
          >
            Dislike <AiTwotoneDislike className="ml-1 mt-1" />{" "}
          </button>
        </section>

        <DogTable
          handleRemoveLike={handleRemoveLike}
          handleRemoveDisLike={handleRemoveDisLike}
          dog={dog}
          likeDog={likeDog}
          disLikeDog={disLikeDog}
        />
      </main>
    </div>
  );
};

export default Dog;
