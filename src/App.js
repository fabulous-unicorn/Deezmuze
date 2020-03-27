import React from 'react';
import './App.css';
import { Button } from './ui/core/Button/Button';
import {IconMix, IconPlay} from './ui/core/Icon/icons';

function App() {
  const size = 'xs';
  return (
    <div className="App">
      <header className="App-header">
        <Button
          view='primary'
          size='xl'
          onClick={()=> { console.log("it's button click")}}
        >
          ЭТО КНОПКА
        </Button>

        <Button
          view='secondary'
          size='xl'
          component='a'
          onClick={()=> { console.log("it's button-a click")}}
        >
            И ЭТО ТОЖЕ КНОПКА
        </Button>

        <Button
          view='clear'
          icon={<IconPlay size='xl'/>}
          size='xl'
          component='button'
        />

        <Button
          view='secondary'
          size='xl'
          component='button'
        >
          <IconMix size='xl'/>
        </Button>

        <Button
          view='primary'
          rounded={true}
          icon={<IconPlay size='s'/>}
          component='button'
        />

      </header>
    </div>
  );
}

export default App;
