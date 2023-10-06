const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (id, content) => {
  // function to update entry on autosave
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
    })
  );
  console.log(JSON.stringify(res));
  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error("Something went wrong on API server!...");
  }
};

export const askQuestion = async (question) => {
  const res = await fetch(
    new Request(createURL("/api/question"), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error("Something went wrong on API server!...");
  }
};
