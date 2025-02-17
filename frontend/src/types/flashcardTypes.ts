// --- Flashcard Types ---

/**
 * Interface for a Flashcard object as received from the backend API.
 * Includes properties like ID, question, answer, level, and next review date.
 */
export interface Flashcard {
  _id: string; // MongoDB ObjectId is typically represented as a string in frontend
  question: string;
  answer: string;
  level: number; // Leitner box level (1-5)
  nextReviewDate: string; // Date string in ISO format (as sent by backend)
  createdAt?: string; // Optional: if you want to track creation date
  updatedAt?: string; // Optional: if you want to track update date
  __v?: number; // Optional: Mongoose version key
}

/**
 * Type for the action when updating a flashcard (correct or incorrect answer).
 * Used in the PUT /flashcards/:id endpoint.
 */
export type FlashcardAction = "correct" | "incorrect";

/**
 * Request type for creating a new flashcard (POST /flashcards).
 * Requires question and answer.
 */
export interface CreateFlashcardRequest {
  question: string;
  answer: string;
}

/**
 * Response type for creating a new flashcard (POST /flashcards).
 * Returns the newly created Flashcard object.
 */
export interface CreateFlashcardResponse extends Flashcard {}

/**
 * Response type for getting flashcards due for review (GET /flashcards).
 * Returns an array of Flashcard objects.
 */
export interface GetFlashcardsResponse extends Array<Flashcard> {}

/**
 * Request type for updating a flashcard (PUT /flashcards/:id).
 * Requires the action (correct or incorrect).
 */
export interface UpdateFlashcardRequest {
  action: FlashcardAction;
}

/**
 * Response type for updating a flashcard (PUT /flashcards/:id).
 * Returns the updated Flashcard object.
 */
export interface UpdateFlashcardResponse extends Flashcard {}

/**
 * Response type for deleting a flashcard (DELETE /flashcards/:id).
 * Returns a success message.
 */
export interface DeleteFlashcardResponse {
  message: string; // e.g., "Flashcard deleted successfully"
}

// --- Generic API Response Error Type (Optional but Recommended) ---

/**
 * Generic interface for error responses from the API.
 * This can be used for consistent error handling in the frontend.
 */
export interface APIErrorResponse {
  message: string; // Error message from the backend
}
