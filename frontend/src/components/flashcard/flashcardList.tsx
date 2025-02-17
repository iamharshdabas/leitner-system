import { Alert } from "@heroui/alert";
import { Spinner } from "@heroui/spinner";
import { FC, useEffect, useState } from "react";

import apiService from "../../services/api";
import { Flashcard, GetFlashcardsResponse } from "../../types/flashcardTypes";

import FlashcardItem from "./flashcardItem";

const FlashcardList: FC = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFlashcards = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.getFlashcards();
      const flashcardsResponse: GetFlashcardsResponse = response.data;

      setFlashcards(flashcardsResponse);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load flashcards.");
      console.error("Error fetching flashcards:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlashcards(); // Initial fetch
  }, []);

  const handleFlashcardUpdate = (updatedFlashcard: Flashcard) => {
    setFlashcards((currentFlashcards) =>
      currentFlashcards.map((fc) =>
        fc._id === updatedFlashcard._id ? updatedFlashcard : fc,
      ),
    );
    fetchFlashcards(); // Refetch after update
  };

  if (loading) {
    return (
      <div className="text-center mt-8">
        <Spinner />
        Loading flashcards...
      </div>
    );
  }

  if (error) {
    return (
      <Alert className="mt-8" color="danger">
        Error: {error}
      </Alert>
    );
  }

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Flashcards Due for Review</h2>
      <p className="mb-4">You have {flashcards.length} flashcards due today.</p>
      {flashcards.length === 0 && (
        <p>No flashcards due for review right now. 🎉</p>
      )}
      {flashcards.map((flashcard) => (
        <FlashcardItem
          key={flashcard._id}
          flashcard={flashcard}
          onFlashcardUpdate={handleFlashcardUpdate}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
