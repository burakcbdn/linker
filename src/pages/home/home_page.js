import "./home_page.css";
import LessonItem from "../../components/lessonItem";

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
        <h1>Linker From BB</h1>
      </header>
      <h4>Dersler</h4>
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson}></LessonItem>
        ))}
    </div>
  );
}

export default Home;
