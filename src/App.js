import "./App.css";
import Data from "./Components/Data";
import Form from "./Components/Form";
import { TodoComponents } from "./store/TodoProvaider";

function App() {
  return (
    <div className="App">
      <TodoComponents>
        <Form />
        <Data/>
      </TodoComponents>
    </div>
  );
}

export default App;
