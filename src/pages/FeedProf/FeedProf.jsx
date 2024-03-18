import React, { useState, useEffect } from 'react';
import { Grid } from "semantic-ui-react";
import NavBar from '../../components/NavBar';
import Story from "./Story"; // Import your Story component

export default function UserProfileFeed({loggedUser, handleLogout, stories}) {
  const [displayedStories, setDisplayedStories] = useState([]);

  useEffect(() => {
    // Get the first two stories
    setDisplayedStories(stories.slice(0, 2));
  }, [stories]);

  const loadMoreStories = () => {
    // Get the next two stories
    const nextStories = stories.slice(displayedStories.length, displayedStories.length + 2);
    setDisplayedStories(prevStories => [...prevStories, ...nextStories]);
  };

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header loggedUser={loggedUser} handleLogout={handleLogout}/>
          <NavBar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          {displayedStories.map(story => <Story key={story.id} story={story} />)}
          <button onClick={loadMoreStories}>Load more stories</button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}