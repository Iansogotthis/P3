import React, { useState, useEffect } from "react";

export default function StoryLister() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/api/stories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => setStories(data))
      .catch((error) => console.error("Error fetching stories", error));
  }, []);

  return (
    <div>
      <h1>Story list</h1>
      {stories.map((story) => (
        <div key={story._id}>
          <h2>{story.title}</h2>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
}
