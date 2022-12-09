import React, {useState} from 'react';
import { Story } from "@storybook/blocks";
import ArrowPrevious from './assets/arrow-previous.svg';
import ArrowPreviousDisabled from './assets/arrow-previous_disabled.svg';
import ArrowNext from './assets/arrow-next.svg';
import ArrowNextDisabled from './assets/arrow-next_disabled.svg';

export default function ThemingPreview(props) {
  const [activeStory, setActiveStory] = useState(props.stories[0]);

  const displayPreviousPreview = () => {
    let currentIndex = props.stories.findIndex(item => item.id === activeStory.id);
    setActiveStory(props.stories[--currentIndex]);
  }

  const displayNextPreview = () => {
    let currentIndex = props.stories.findIndex(item => item.id === activeStory.id);
    setActiveStory(props.stories[++currentIndex]);
  }

  return (
    <div>
      <section className="theme-preview__header">
        <button className="theme-preview__button" onClick={displayPreviousPreview} disabled={activeStory.id === props.stories[0].id}>
          <img src={activeStory.id === props.stories[0].id ? ArrowPreviousDisabled : ArrowPrevious} alt="display next preview"/>
        </button>
        <span>{activeStory.name}</span>
        <button className="theme-preview__button" onClick={displayNextPreview} disabled={activeStory.id === props.stories[props.stories.length -1].id}>
          <img src={activeStory.id === props.stories[props.stories.length -1].id ? ArrowNextDisabled : ArrowNext} alt="display previous preview"/>
        </button>
      </section>
      <Story id={activeStory.id} />

    </div>
  )
}
