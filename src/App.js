import './App.css';
import Flex from './styled/Flex.styled';
import { format, sub } from 'date-fns'

function App() {
  return (
    <section style={{
      background: '#212121',
      color: 'white',
      height: '100vh',
      fontSize: '1.5rem'
    }}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" width="100vw" height="100vh">
        <h1 style={{ marginBottom: 20 }}>18+ Age checker</h1>
        <div>
          <span>Born on: {format(sub(new Date(), { years: 18 }), 'do MMM yyyy')}</span>
        </div>
      </Flex>
    </section>
  );
}

export default App;
