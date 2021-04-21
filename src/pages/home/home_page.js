import "./home_page.css";
import LessonItem from "../../components/lessonItem";
import { Link } from "react-router-dom";

function Home() {
  const lessons = [
    {
      name: "Fizik",
      id: "fizik",
      hoverColor:"#95cadc"
    },
    {
      name: "Kimya",
      id: "kimya",
      hoverColor:"#c7d4a6"
    },
    {
      name: "Biyoloji",
      id: "biyoloji",
      hoverColor:"#e5b0c4"
    },
    {
      name: "Matematik",
      id: "matematik",
      hoverColor:"#bfadeb"
    },
  ];

  return (
    <div className="Home">
      <header className="linker-header">
        <h1>Linker From BBTech for BB</h1>
        <h6>Dersler</h6>
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson}></LessonItem>
        ))}
      </header>
    </div>
  );
}

export default Home;
