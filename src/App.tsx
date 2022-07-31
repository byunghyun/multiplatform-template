import { BrowserRouter, Link } from 'react-router-dom';

import TrackingLocationSearchParam from './higherOrderComponents/TrackingLocationSearchParam';
import RoutesMain from './RoutesMain';

const App = () => {
  return (
    <BrowserRouter>
      <TrackingLocationSearchParam>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/login'>login</Link>
        </nav>
        <RoutesMain />
      </TrackingLocationSearchParam>
    </BrowserRouter>
  );
};
export default App;
