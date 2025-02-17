import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Textarea } from "@heroui/input";
import { FC, FormEvent, useState } from "react";

import apiService from "../../services/api";
import {
  CreateFlashcardRequest,
  CreateFlashcardResponse,
} from "../../types/flashcardTypes";

import { text } from "@/config/custom-styles";

interface CreateFlashcardProps {
  onFlashcardCreated: (newFlashcard: CreateFlashcardResponse) => void;
}

const CreateFlashcard: FC<CreateFlashcardProps> = ({ onFlashcardCreated }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      const createFlashcardRequest: CreateFlashcardRequest = {
        question,
        answer,
      };
      const response = await apiService.createFlashcard(createFlashcardRequest);
      const newFlashcard: CreateFlashcardResponse = response.data;

      onFlashcardCreated(newFlashcard);
      setSuccessMessage("Flashcard created successfully!");
      setQuestion("");
      setAnswer("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create flashcard");
    }
  };

  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader>
        <h2 className={text({ size: "sm", bold: true })}>
          Create New Flashcard
        </h2>
      </CardHeader>
      <CardBody>
        {error && <Alert color="danger">{error}</Alert>}
        {successMessage && <Alert color="success">{successMessage}</Alert>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Textarea
            required
            id="question"
            label="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Textarea
            required
            id="answer"
            label="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button color="primary" type="submit">
            Create Flashcard
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default CreateFlashcard;
