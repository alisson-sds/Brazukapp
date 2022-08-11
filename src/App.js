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
        console.log(response.data)
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
          <h1>DEMORADO DEMAIS SLK</h1>
        ) : (
          //se não, retorna o q já carregou
          <>
            <div className='header centralize'>
              {/* gostei */}
              <h1>Brazukapp</h1>
            </div>
            <div className='content centralize'>
              <table border='3'>
                <thead>
                  <tr>
                    <td>Posição</td>
                    <td>Nome</td>
                    <td>Pontos</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    //aqui a mágica acontece, no meio do HTML podemos usar chaves pra inserir JS, exemplo
                    console.log('créu kkkkk sehh loooko')
                  }

                  {
                    //ou da pra fazer uma coisa mais interessante, como fazer um loop por um array e retornar algo, inclusive HTML
                    //já q salvamos um array de dados no teams:
                    teams.map((team) => {
                      return (
                        //key é importante em um loop, mas a explicação fica pra próx
                        <tr key={team.time.time_id}>
                          <td>{team.posicao}</td>
                          <td>{team.time.nome_popular}</td>
                          <td>{team.pontos}</td>
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