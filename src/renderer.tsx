import {createRoot} from 'react-dom/client';

const App = () => {
  return <h1>Hello from react</h1>
}

const container:HTMLElement = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App/>);
