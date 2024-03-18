import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StoryForm() {
  const [title, setTitle] = useState(""); // Add state for title
  const [content, setContent] = useState(""); // Add state for content
  const [story, setStory] = useState("");
  const [emotion, setEmotion] = useState("");
  const [liked, setLiked] = useState(false);
  const navigateTo = useNavigate();

  const handleChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "content") {
      setContent(event.target.value);
    } else if (event.target.name === "emotion") {
      setEmotion(event.target.value);
    } else if (event.target.name === "story") {
      setStory(event.target.value);
    } else if (event.target.name === "liked") {
      setLiked(event.target.checked);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const story = await Save("req.body", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, emotion, liked }), // Include title and content in the request body
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      navigateTo.push(`/story/${data._id}`);
    } catch (error) {
      console.error("Error adding story", error);
    }
  };

  return (
    <form action="/StoryForm" method = "POST" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />{" "}
        {/* Input field for title */}
      </div>

      <div>
        <label>Content</label>
        <textarea
          rows="9"
          cols="17"
          name="content"
          value={content}
          onChange={handleChange}
        >
          {" "}
          {/* Textarea for content */}
        </textarea>
      </div>

      <div>
        <label>EMOTION</label>
        <select name="emotion" value={emotion} onChange={handleChange}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </div>

      <div>
        <label>Like this story?</label>
        <input
          type="checkbox"
          name="liked"
          checked={liked}
          onChange={handleChange}
        />{" "}
        {/* Checkbox for the liked state */}
      </div>

      <div>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
