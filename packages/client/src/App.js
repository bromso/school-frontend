import React from 'react'
import { Routing } from './routes/Routing'
import { Navbar } from './components/organisms/Navbar'
import { UserProvider } from './shared/global/provider/UserProvider'
import './shared/app.css'

function App() {
  return (
    <UserProvider>
      <Routing>
				<Navbar />
      </Routing>
    </UserProvider>
  );
}

export default App;
