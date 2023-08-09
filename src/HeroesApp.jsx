import { AppRouter } from './router/AppRouter';
import LoadingPage from './class/pages/LoadingPage';


export const HeroesApp = () => {
  return (
    <>
        
        <>
       { loading ? <LoadingPage /> :  <AppRouter />}
    </>

    </>
  )
}
