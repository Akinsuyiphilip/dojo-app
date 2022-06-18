import './App.css';

function App() {

 const Name = 'welcome to my BLog';
 const Age = 'Your age is ?';

 const link = 'https://www.google.com/';
  return (
    <div className="App">
     <div className="content">
      <h1>{Name}</h1>
      <p>{Age}</p>
      <p> { Math.floor( Math.random() * 30 )} </p>

      <a href={link}> Google </a>
     </div>
    </div>
  );
}

export default App;
