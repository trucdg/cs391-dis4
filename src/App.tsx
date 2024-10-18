import "./App.css";
import Header from "./components/header";
import AboutPage from "./components/about-page";
import ArtworksListContent from "./components/artworks-list-content"
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import ArtworkContent from "./components/artwork-content";

const Root = () => {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/" element={<ArtworksListContent /> } />
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/artwork/:id" element={<ArtworkContent />} />
      </Routes>
    </div>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}

