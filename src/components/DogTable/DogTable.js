import React from "react";

const DogTable = (props) => {
    const {handleRemoveLike, handleRemoveDisLike, dog, likeDog, disLikeDog} = props;

  return (
    <div>
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

export default DogTable;
