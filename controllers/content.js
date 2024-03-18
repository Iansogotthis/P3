const express = require("express");
const Story = require("../models/story"); // Assuming you have a Story model defined in models/story.js

const router = express.Router();

// Define the GET route
module.exports = {
  new: newStory,
  create,
  find: findOne,
  search: searchFor,
};

async function newStory(req, res) {
  try {
    const story = await Story.Save();
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function create(req, res) {
  try {
    const story = await Story(req.body);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }

  res.redirect("/StoryForm/new");
}

async function findOne(req, res) {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function searchFor(req, res) {
  try {
    const { query } = req.query;
    const stories = await Story.find({
      $or: [
        { emotion: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
      ],
    });
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

router.get("/api/stories/:id", findOne);
router.get("/api/stories/search", search);
router.get("/story/:id", async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Define the POST route
const create = async (req, res) => {
  const newStory = new Story({
    title: req.body.title, // Set the title property
    content: req.body.content, // Set the content property
    emotion: req.body.emotion,
    liked: req.body.liked,
  });

  try {
    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

router.post("/api/stories", create);
module.exports = router;
