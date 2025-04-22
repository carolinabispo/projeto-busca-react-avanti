import React, { useState } from 'react'
import "../searchComponent/SearchComponent.scss"
import githubImage from "../../assets/github.jpg"
import ResultComponent from '../resultsComponents/ResultComponent';
import axios from "axios"

const SearchComponent = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);
  
    const getGitUser = async (username) => {
      const API_GIT_SEARCH_URL = "https://api.github.com/users/";
  
      setLoading(true);
      setApiError(""); // limpa erro anterior
  
      try {
        const response = await axios.get(`${API_GIT_SEARCH_URL}${username}`);
        setUserData(response.data);
      } catch (error) {
        setUserData(null);
        setApiError(error);
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <main>
    <div id="logo">
      <img src={githubImage} alt="Logo do Github" />
      <h1>Perfil</h1>
      <h1>
        <b>GitHub</b>
      </h1>
    </div>

    <label id="searchConteiner" htmlFor="">
      <input
        type="text"
        id="searchBar"
        placeholder="Digite um usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="button"
        id="searchButton"
        onClick={() => getGitUser(username)}
      ></button>
    </label>

    <div>
      {loading && <p className="loading">Carregando...</p>}

      {!loading && (
        <ResultComponent
          error={apiError}
          userData={userData}
        ></ResultComponent>
      )}
    </div>
  </main>
  )
}

export default SearchComponent