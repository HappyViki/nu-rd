import React from "react";
import styles from "./Output.css";

const Output = props => {
  console.log("prooops", props);

  return (
    <div className="output-container">
      <div className="output-words-container">
        <div className="output-words">
          {`
          Question: 
          Johnny has 2 apples.  Susie gives Johnny 2 apples.  How many apples does Johnny now have?

          `}

          {/*
          // ${props.results.name1} John has 2 ${props.results.noun}s. 
          // ${props.results.name2} ${props.results.verb} them 2 ${props.results.noun}. 
          // How many ${props.results.noun} does ${props.results.name1} now have?

      <div className="output-container">
        <div className="output-words-container">
            <div className="output-words">
                {props.name1} has {props.amount1} {props.noun}, {props.name2} {props.verb} {props.amount2} {props.noun}, how many {props.noun} are there?
            </div>
        </div>
        <div className="output-answer">
            Answer: {Number(props.amount1)+Number(props.amount2)}
     */}
        </div>
      </div>
      <div className="output-answer">Answer: 4</div>

      <div>
        <h2>Provide Us Your Email and Feedback</h2>
        <form method="POST" action="https://formspree.io/lydiarachel@gmail.com">
          <input type="email" className="email" placeholder="Your email" />
          <textarea
            className="text-area"
            name="message"
            placeholder="Feedback Message"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Output;
