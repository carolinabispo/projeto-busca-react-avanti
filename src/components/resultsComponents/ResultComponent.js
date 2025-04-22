import React from 'react'
import "../resultsComponents/ResultComponent.scss"


const ResultComponent = ({ userData, error }) => {
    if (error) {
        return (
          <>
            <p className="notFoundUser">
              Nenhum perfil foi encontrado com este nome de usuário.
              <br />
              Tente novamente.
            </p>
          </>
        );
    }
  return (
    <div id="foundProfile">
    {!userData ? (
      <div id="userDataText">
        <h2>Bem Vindo ao buscador de perfis!</h2>
        <p>Digite o nome de um usuário do GitHub acima para começar.</p>
      </div>
    ) : (
      <>
        <img src={userData.avatar_url} alt="Avatar do usuário" />
        <div id="userDataDetails">
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
        </div>
      </>
    )}
  </div>
  )
}

export default ResultComponent