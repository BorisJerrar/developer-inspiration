const getPosts = async (
start: number, end: number
  ) => {
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
      }),
    };
    return await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`,
      requestOptions
    );
  };

  export {getPosts}