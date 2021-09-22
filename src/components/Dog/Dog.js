import React, { useEffect, useState } from "react";
import DogTable from "../DogTable/DogTable";

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
    <div style={{ paddingTop: "20px" }}>
      <img
        src={dog.message}
        alt=""
        style={{ height: "250px", width: "250px" }}
      />
      <br />
      <div style={{ paddingTop: "5px" }}></div>

      <button onClick={handleLike}>Like: {likeDog}</button>
      <span style={{ paddingLeft: "10px" }}></span>
      <button onClick={handleDisLike}>Dislike: {disLikeDog}</button>

      <DogTable
        handleRemoveLike={handleRemoveLike}
        handleRemoveDisLike={handleRemoveDisLike}
        dog={dog}
        likeDog={likeDog}
        disLikeDog={disLikeDog}
      />
    </div>
  );
};

export default Dog;
