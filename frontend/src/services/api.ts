import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  getFlashcards: async () => api.get("/flashcards"),
  createFlashcard: async (flashcardData: any) =>
    api.post("/flashcards", flashcardData),
  updateFlashcard: async (id: string, action: any) =>
    api.put(`/flashcards/${id}`, action),
  deleteFlashcard: async (id: string) => api.delete(`/flashcards/${id}`),
};

export default apiService;
