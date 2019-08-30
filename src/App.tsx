import React, { useState } from 'react';

const App: React.FC = () => {
  const [events, setEvents] = useState<string[]>([]);

  const addEvent = (event: string) => {
    const newEvents = events.concat([event])
    setEvents(newEvents);
  }

  return (
    <div className="App">
      <input
        type="text"
        onClick={() => addEvent('onClick')}
        onFocus={() => addEvent('onFocus')}
      />
      <pre>{events.reverse().join("\n")}</pre>
    </div>
  );
}

export default App;
