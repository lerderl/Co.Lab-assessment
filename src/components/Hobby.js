import axios from "axios";
import { useEffect, useState } from "react";
import { ExternalLink } from "react-external-link";

const Hobby = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=21"
      );
      setQuestions(response.data.results);
    };
    getData();
  }, []);

  if(!questions) return <div>loading...</div>

  return (
    <article className="mt-3 section_padding" id="hobby">
      <h3 className="text-center title_color mb-5 title_bold">MY FAVORITE HOBBY</h3>
      <p className="text-center">
        I usually participate in any soccer or football-related activity during
        my leisure time because it's my favorite pastime. So find below some
        trivia questions that intrigued me.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
            <th scope="col">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((item, id) => (
            <tr key={id}>
              <td>{item.question}</td>
              <td>{item.correct_answer}</td>
              <td>{item.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center">
        <strong className="text-decoration-underline">N.B.</strong>
        <br />
        The API employed here is{" "}
        <ExternalLink href="https://opentdb.com/api_config.php">
          Open Trivia DB
        </ExternalLink>
        . I chose this because it was the closest I found to generate some
        trivia questions.
      </p>
    </article>
  );
};

export default Hobby;
