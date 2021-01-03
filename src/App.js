import { Routing } from './routes/Routing'
import { Navbar } from './components/navbar/'
import { Provider } from './shared/Provider'

function App() {
  return (
    <Provider>
      <Routing>
        <Navbar />
      </Routing>
    </Provider>
  );
}

export default App;
