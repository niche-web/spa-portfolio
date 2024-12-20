export const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log(response);

    throw new Error(`status: ${response.status}`);
  }
  const notification = await response.json();
  return notification;
};
