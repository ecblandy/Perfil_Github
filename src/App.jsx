import { useState } from "react"
import PerfilGit from "./Perfil/Perfil"
import ReposList from "./ReposList"
function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <input type="text"  onBlur={e => setNomeUsuario(e.target.value)} placeholder="Nome do usuario"/>
    {nomeUsuario.length > 4 && (
      <>
      <PerfilGit nomeUsuario={nomeUsuario}/>
     <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    </>
  )
}

export default App
