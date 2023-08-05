//import logo from './logo.svg';

import './App.css';
import SearchAppBar from './components/AppBar';
import Card from './components/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
  function App() {
    return (
    <div className="App">
    <Container>
    <SearchAppBar />
      <Grid container spacing={5}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Container>
    </div>
    );
  }
  export default App;
// function App() {
// return <div className="App"></div>
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>我不想学大数据可视化了！！！</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a href="https://www.4399.com/" target="_blank">Try your game!</a><br></br>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//  }

//  export default App;
