export const getHotelsData = async () => {
  const response = await fetch(
    "https://mocki.io/v1/1cdc0cc6-ff79-4442-b22d-ecf61d0ce2b4"
  );

  return response.json();
};
