import Routes from './app/router/index';
import AuthProvider from './app/context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

