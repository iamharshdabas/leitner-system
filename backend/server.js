const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

const intervals = [0, 1, 3, 7, 14, 30];

const flashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  level: { type: Number, default: 1 },
  nextReviewDate: { type: Date, required: true },
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

app.post("/flashcards", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const nextReviewDate = new Date(Date.now() + intervals[1] * 86400000);
    const newFlashcard = new Flashcard({ question, answer, nextReviewDate });
    await newFlashcard.save();
    res.status(201).send(newFlashcard);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/flashcards", async (req, res) => {
  try {
    const flashcards = await Flashcard.find({
      nextReviewDate: { $lte: new Date() },
    });
    res.send(flashcards);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put("/flashcards/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body;

    const flashcard = await Flashcard.findById(id);

    if (!flashcard) {
      return res.status(404).send({ message: "Flashcard not found" });
    }

    if (action === "correct") {
      flashcard.level = Math.min(flashcard.level + 1, 5);
    } else if (action === "incorrect") {
      flashcard.level = 1;
    } else {
      return res.status(400).send({
        message: "Invalid action. Action should be 'correct' or 'incorrect'.",
      });
    }

    const days =
      intervals[flashcard.level] || intervals[intervals.length - 1] || 1;
    flashcard.nextReviewDate = new Date(Date.now() + days * 86400000);
    await flashcard.save();
    res.send(flashcard);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.delete("/flashcards/:id", async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
    if (!flashcard) {
      return res.status(404).send({ message: "Flashcard not found" });
    }
    res.send({ message: "Flashcard deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
