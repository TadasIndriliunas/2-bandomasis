const serverURL = 'http://localhost:3000';

class API {
  static getToy = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/Toy`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 2000);
  }

  static deleteToy = (id, success, failure) => {
    fetch(`${serverURL}/Toy/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}


// API.getToy(
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )


// API.deleteToy(
//   '1', // id
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )
