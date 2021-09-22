import React, { useState } from 'react';

const Dog = () => {
    const [dog, setDog] = useState({});
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        setDog(data);
    }, [dog])
    return (
        <div style={{paddingTop: "40px"}}>
            {/* <p>dog: {dog.status}</p> */}
            <img src={dog.message} alt="" style={{height: '250px', width: '250px'}}/>
            <br />
            <button>Like</button>
            <span style={{paddingLeft: '20px'}}></span>
            <button>Dislike</button>
        </div>
    );
};

export default Dog;