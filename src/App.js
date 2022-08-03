import React, { useState } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Repo from "./Components/repo/index";

const GithubRepo = () => {
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    const repoUrl = `https://api.github.com/users/${e.target.value}/repos`;
    axios
      .get(repoUrl)
      .then((responses) => {
        const reposTemp = responses.data.map(
          ({ name, language, html_url, created_at, description }) => {
            return { name, language, html_url, created_at, description };
          }
        );
        setRepos(reposTemp);
        console.log(e.target.value);
      })
      .catch((error) => {
        console.log(`inside getrepos error: ${error}`);
        this.setState({
          errorMessage: error.response.statusText,
        });
      });
  };

  const ShowRepos = () => {
    return repos.map((repo) => <Repo key={repo.name} repo={repo} />);
  };

  return (
    <Container>
      <Form className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Github Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan username github anda"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <h5>List Repository : </h5>
      {repos.length > 0 && <ShowRepos />}
    </Container>
  );
};

export default GithubRepo;
