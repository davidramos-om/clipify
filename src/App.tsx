import './App.css'

import Video from './components/Video';
import MovePageControls from './components/MovePageControls';
import { ThemeMode } from './components/ThemeMode';

function App() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <ThemeMode />
      <Video />
      <MovePageControls />
    </div>
  );
}

export default App;