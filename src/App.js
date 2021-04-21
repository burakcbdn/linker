import "./App.css";
import Home from "./pages/home/home_page";
import LessonPage from './pages/lesson/lesson_page';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/:lessonId" exact component={LessonPage}/>
      </Switch>
    </Router>
  );
}

export default App;
