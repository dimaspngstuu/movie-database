import Home from "./pages/Home";
import {Route,Routes} from 'react-router-dom'
import Popular from "./pages/Movie/Popular";
import Create from "./pages/Movie/Create";
import TopRated from "./pages/Movie/TopRated";
import NowPlaying from "./pages/Movie/NowPlaying";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utility/constant/theme";
import GlobalStyle from "./component/GlobalStyle";


function App() {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/create" element={<Create/>}/>
        <Route path="/movie/popular" element={<Popular/>}/>
        <Route path="/movie/now" element={<NowPlaying/>}/>
        <Route path="/movie/top" element={<TopRated/>}/>
      </Routes>
    </Layout>
    </ThemeProvider>
    
    </>
  );
}

export default App;
