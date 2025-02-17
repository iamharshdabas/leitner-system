import { useCallback, useState } from "react";

import CreateFlashcard from "@/components/flashcard/createFlashcard";
import FlashcardList from "@/components/flashcard/flashcardList";

const HomePage = () => {
  const [flashcardsUpdated, setFlashcardsUpdated] = useState(0);

  const handleFlashcardCreated = useCallback(() => {
    setFlashcardsUpdated((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <FlashcardList key={flashcardsUpdated} />
      <div className="py-16" />
      <CreateFlashcard onFlashcardCreated={handleFlashcardCreated} />
    </div>
  );
};

export default HomePage;
