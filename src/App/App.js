import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Create from '../Create/Create';
import Home from '../Home/Home';
import '../main.css';

function App() {

  
  const [ list, setList ] = React.useState([]);
  const [ shape, setShape ] = React.useState(1);
  const [ decoration, setDecoration ] = React.useState(1);
  const [ bladeColor, setBladeColor] = React.useState(1);
  const [ name, setName] = React.useState('');
  const [ hilt, setHilt] = React.useState(0);
  const [ power, setPower] = React.useState(0);

  React.useEffect(() => {
    const listString = localStorage.getItem('list');
    if(listString !== null){
      setList(JSON.parse(listString));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [ list ]);

  return (
    <div className="App">
      <HashRouter>
          <Route path="/Gallery" render={() => <Gallery list={list} setList={setList}
            shape={shape} setShape={setShape}
            decoration={decoration} setDecoration={setDecoration}
            bladeColor={bladeColor} setBladeColor={setBladeColor}
            name={name} setName={setName}
            hilt={hilt} setHilt={setHilt}
            power={power} setPower={setPower}/>} />

          <Route path="/create" render={() => <Create list={list} setList={setList}
            shape={shape} setShape={setShape}
            decoration={decoration} setDecoration={setDecoration}
            bladeColor={bladeColor} setBladeColor={setBladeColor}
            name={name} setName={setName}
            hilt={hilt} setHilt={setHilt}
            power={power} setPower={setPower}/>}/>

          <Route path="/" exact component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
