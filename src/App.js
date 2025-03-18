import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utility/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import { lazy } from 'react';

function App() {
  // const Watch = lazy(() => import("./components/Watch"));

  const appRouter =createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
      {
      path: "/",
      element: <MainContainer/>,
      },
      {
        path:"/watch",
        element: <Watch/>
      }

    ]
  }])
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
      {
        /**
         * Head
         * Body
         *    SideBar
         *      Menu Items
         *    MainContainer
         *      ButtonList
         *      VideoContainer
         *        VideoCard
         * 
         */
      }
    </div>
    </Provider>
  );
}

export default App;
