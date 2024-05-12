import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [table, setTable] = useState([]);
  const handleChange = (input) => {
    const inputNumber = input.target.value;
    setNumber(inputNumber);

    if (!isNaN(inputNumber)) {
      const newTable = Array.from({ length: 20 }, (_, index) => ({
        multiplicand: index + 1,
        product: (index + 1) * inputNumber,
      }));
      setTable(newTable);
    } else {
      setTable([]);
    }
  };

  return (
    <>
      <div>
        <h1>Tabuada</h1>
      </div>
      <div>
        <input type="number" value={number} onChange={handleChange} />
        <table>
          <thead>
            <tr>
              <th>Multiplicador</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => (
              <tr key={item.multiplicand}>
                <td>{item.multiplicand}</td>
                <td>{item.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
