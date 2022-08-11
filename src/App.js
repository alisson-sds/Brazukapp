import './App.css'

import axios from 'axios'
import ReactDOM from 'react-dom/client'

import { useEffect, useState } from 'react'

const token = 'live_d2985bbe5f49f1803d44871a441d55'

const api = axios.create({
  headers: { Authorization: 'Bearer ' + token },
})

const App = () => {
  const [teams, setTeams] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  //eu escrevo isso todo dia

  useEffect(() => {
    const getData = async () => {
      //isso tbm
      setIsLoading(true)
      try {
        const response = await api.get('https://api.api-futebol.com.br/v1/campeonatos/10/tabela')
        setTeams(response.data)
      } catch (error) {
        console.error(error)
      }
      //isso tbm
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <>
      {
        //HTML condicional, se está buscando da API retorna:
        isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          //se não, retorna o q já carregou
          <>
            <div className='header centralize'>
              <h1>Brazukapp</h1>
            </div>
            <div className='content centralize'>
              <table border='3'>
                <thead>
                  <tr>
                    <td></td>
                    <td>Time</td>
                    <td>PT</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>SG</td>
                    <td>%</td>
                    <td>Últimos Resultados</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    //aqui a mágica acontece, no meio do HTML podemos usar chaves pra inserir JS, exemplo  
                    //ou da pra fazer uma coisa mais interessante, como fazer um loop por um array e retornar algo, inclusive HTML
                    //já q salvamos um array de dados no teams:
                    teams.map((team) => {
                      return (
                        //key é importante em um loop, mas a explicação fica pra próx
                        <tr key={team.time.time_id}>
                          <td className="rightAlign">{team.posicao}</td>
                          <td>{team.time.nome_popular}</td>
                          <td className="rightAlign">{team.pontos}</td>
                          <td className="rightAlign">{team.jogos}</td>
                          <td className="rightAlign">{team.vitorias}</td>
                          <td className="rightAlign">{team.empates}</td>
                          <td className="rightAlign">{team.derrotas}</td>
                          <td className="rightAlign">{team.gols_pro}</td>
                          <td className="rightAlign">{team.gols_contra}</td>
                          <td className="rightAlign">{team.saldo_gols}</td>
                          <td>{team.aproveitamento}</td>
                          <td>{team.ultimos_jogos}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </>
        )
      }
    </>
  )
}

export default App