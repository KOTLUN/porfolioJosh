const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

export const getProjects = () => request("/api/projects");
export const getProject = (id) => request(`/api/projects/${id}`);
export const sendContactMessage = (payload) =>
  request("/api/contact", { method: "POST", body: JSON.stringify(payload) });
