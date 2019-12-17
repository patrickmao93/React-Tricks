const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(data => {
      if (Math.random() > 0.5) {
        // throw new Error("noooo");
        return Promise.reject("noo");
      }
      return data.results[0];
    });
};

const wrapPromise = promise => {
  let status = "pending";
  let result = "";

  let suspender = promise
    .then(res => {
      status = "success";
      result = res;
    })
    .catch(e => {
      status = "error";
      result = e;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    },
  };
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
  };
};
