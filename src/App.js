//import logo from './logo.svg';

import './App.css';
import SearchAppBar from './components/AppBar';
import Card from './components/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from './Data/data.json'
import { Typography } from '@mui/material';
import { Tour } from '@mui/icons-material';
import GridWeb from './Grid/Grid';
import Wc from './Cloud/Cloudimage';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <GridWeb />
      

    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <SearchAppBar />
//       <Container sx={{
//         marginY: 5,
//       }}>
//         {cities.map((city) => (
//           <>
//             <Typography
//               variant='h4'
//               component="h2"
//               marginTop={5}
//               marginBottom={3}>
//              {city.id} Top {city.name} Tours
//             </Typography>
//             <Grid container spacing={5}>
//               {
//                 city.tours.map((tour,index)=>(
//                   <Card tour={tour} key={index} />
//                 ))
//               }
//             </Grid>
//           </>
//         ))}
//       </Container>
//     </div>
//   );
// }


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
