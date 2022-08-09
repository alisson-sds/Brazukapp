import './App.css';

function App() {
  return (
    <>

      <div className='header centralize'>
        <h1>Brazukapp</h1>
      </div>
      <div className='content centralize'>
        <table border="3">
          <tr>
            <td>Nome</td>
            <td>Idade</td>
            <td>Profissão</td>
          </tr>
          <tr>
            <td>Ted</td>
            <td>22</td>
            <td>Estudante</td>
          </tr>
          <tr>
            <td>Ralf</td>
            <td>26</td>
            <td>Designer</td>
          </tr>
        </table>
      </div>

    </>
  );
}

export default App;
