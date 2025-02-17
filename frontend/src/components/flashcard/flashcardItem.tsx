import { FC, useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Spinner } from "@heroui/spinner";
import { Button } from "@heroui/button";

import apiService from "../../services/api";
import { Flashcard, FlashcardAction } from "../../types/flashcardTypes";

interface FlashcardItemProps {
  flashcard: Flashcard;
  onFlashcardUpdate: (updatedFlashcard: Flashcard) => void;
}

const FlashcardItem: FC<FlashcardItemProps> = ({
  flashcard,
  onFlashcardUpdate,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleCorrect = async () => {
    await updateFlashcard("correct");
  };

  const handleIncorrect = async () => {
    await updateFlashcard("incorrect");
  };

  const updateFlashcard = async (action: FlashcardAction) => {
    if (isUpdating) return;
    setIsUpdating(true);
    try {
      const response = await apiService.updateFlashcard(flashcard._id, {
        action,
      });

      onFlashcardUpdate(response.data);
    } catch (error) {
      console.error("Error updating flashcard:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card>
      <CardBody>
        <p className="font-semibold mb-2">{flashcard.question}</p>
        {showAnswer ? (
          <div>
            <p className="mb-4">{flashcard.answer}</p>
            <div className="flex justify-around">
              <Button
                color="success"
                disabled={isUpdating}
                onPress={handleCorrect}
              >
                {isUpdating ? <Spinner size="sm" /> : "Got it Right"}
              </Button>
              <Button
                color="danger"
                disabled={isUpdating}
                onPress={handleIncorrect}
              >
                {isUpdating ? <Spinner size="sm" /> : "Got it Wrong"}
              </Button>
            </div>
          </div>
        ) : (
          <Button color="primary" onPress={() => setShowAnswer(true)}>
            Show Answer
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default FlashcardItem;
