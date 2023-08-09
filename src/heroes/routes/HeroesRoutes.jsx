import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <div className="container flex-grow-1">
              <Routes>
                  <Route path="marvel" element={<MarvelPage />} />
                  <Route path="dc" element={<DcPage />} />  
                  <Route path="search" element={<SearchPage />} />
                  <Route path="hero/:id" element={<HeroPage />} />
                  <Route path="/" element={<Navigate to="/marvel" />} />
              </Routes>
          </div>

          <Footer />
        </div>

    </>
  )
}
