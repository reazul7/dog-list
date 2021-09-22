import React, { useEffect, useState } from "react";

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
      {/* <p>dog: {dog.status}</p> */}
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


      {/* table list */}
      <table class="table">
        <thead>
          <tr>
            <th>Like</th>
            <th>Dislike</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {likeDog ? (
                <div>
                  <img
                    src={dog.message}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <br />
                  <button onClick={handleRemoveLike}>Remove from Like</button>
                </div>
              ) : (
                ""
              )}{" "}
            </td>

            <td>
              {disLikeDog ? (
                <div>
                  <img
                    src={dog.message}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <br />
                  <button onClick={handleRemoveDisLike}>
                    Remove from Dislike
                  </button>
                </div>
              ) : (
                ""
              )}{" "}
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dog;
