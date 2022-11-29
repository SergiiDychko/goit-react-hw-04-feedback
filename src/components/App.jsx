import { useState } from 'react';
import './App.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (evt) => {
    const { name } = evt.target;
      switch (name) {
        case 'good': setGood(s => s + 1);
          break;
        case 'neutral': setNeutral(s => s + 1);
          break;
        case 'bad': setBad(s => s + 1);
          break;
        default: return 'something went wrong';
      }
  }
  
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
      </>
    );
}
  
export default App;