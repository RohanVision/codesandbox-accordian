import "./App.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    question: "question1",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    id: 2,
    question: "question2",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    id: 3,
    question: "question3",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    id: 4,
    question: "question4",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item, index) => {
          return (
            <div key={item.id} className="item">
              <div className="title" onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>{isOpen == index ? "-" : "+"}</span>
              </div>
              <div className={isOpen == index ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
