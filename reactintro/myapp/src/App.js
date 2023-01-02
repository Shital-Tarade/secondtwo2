
import './App.css';

function MyComponents() {
  return <div> hello guyes</div>
}
function App() {
  return (
    <div>
      hello guyes<MyComponents />
    </div>
  );
}

export default App;
