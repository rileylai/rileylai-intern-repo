export async function fetchUser() {
  const response = await fetch("https://example.com/api/user");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await response.json();
  return data;
}
