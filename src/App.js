import './App.css'

import axios from 'axios'
import ReactDOM from 'react-dom/client'

import { useEffect, useState } from 'react'

const token = 'live_d2985bbe5f49f1803d44871a441d55'

//aqui só instancia a api que vai fazer a chamada usando o token de acesso
const api = axios.create({
  headers: { Authorization: 'Bearer ' + token },
})

const App = () => {
  //useState armazena variáveis no React, n da pra simplesmente ter um let teams = response pq n é assim q funciona.
  const [teams, setTeams] = useState([])
  //a primeira posição do array é a variável que vai armazenar os dados, a segunda é uma função q atualiza a primeira

  //useEffect roda uma vez (explicação curta) em condições básicas
  useEffect(() => {
    //Troquei as promises (.then) por async - await, mais moderno
    const getData = async () => {
      try {
        //aqui pega de verdade a rota q tu quer, da pra usar o baseUrl pra ficar mais bonitinho, tirei pq n sei de cabeça
        const response = await api.get('https://api.api-futebol.com.br/v1/campeonatos/10/tabela')
        console.log(response.data)
        //como disse antes, n da pra jogar numa variável, então usamos o state para armazenar
        setTeams(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  return (
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

export default App