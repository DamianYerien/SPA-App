import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente.jsx';
import Propiedades from './components/Propiedades.jsx';
import Estado from './components/Estado.jsx';
import RenderizadoCondicional from './components/RenderizadoCondicional';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Componente msg='Hola soy un componente pasado por props' />
        <hr />
        <Propiedades 
        cadena='soy cadena' 
        numero={2} 
        booleano={true} 
        arreglo={[1, 2, 3]}
        objeto={{nombre: 'Damian', apellido: 'Yerien'}}
        funcion={num => num * num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="soy un compoennte pasado como prop"/>}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
      </section>
      </header>
      
          
    </div>
  );
}

export default App;
