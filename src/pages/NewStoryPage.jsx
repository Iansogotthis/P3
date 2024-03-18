import React from 'react';
import NavBar from '../components/NavBar';
import StoryForm from '../components/StoryForm/StoryForm';


function NewStoryPage() {
  return (
    <span className='newStoryDesign'>
    <div>
    </div>
    <h1>New Story</h1>
    <div>
      <StoryForm />
    </div>
    </span>
  );
}

export default NewStoryPage;