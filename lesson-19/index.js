function getCarById(id) {
  return fetch(`https://cars-server.herokuapp.com/cars/${id}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong')
      }

    });
}

getCarById(100)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.trace(err);
  });
