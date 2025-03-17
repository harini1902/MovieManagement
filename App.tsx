import {AppProvider} from './products/AppContext';

import StackNavigator from './products/StackNavigator';

const App: React.FC = () => {
  return (
    <AppProvider>
      <StackNavigator />
    </AppProvider>
  );
};

export default App;
