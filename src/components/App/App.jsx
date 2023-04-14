import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutralClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  badClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const goodClick = this.goodClick;
    const neutralClick = this.neutralClick;
    const badClick = this.badClick;

    return (
      <div className="task-one">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={{ goodClick, neutralClick, badClick }}
          />
        </Section>
        <Section title="Statistics">
          {(good || neutral || bad) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics good={good} neutral={neutral} bad={bad} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
