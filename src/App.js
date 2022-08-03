import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createRepos } from "./redux/actions/actions";
import { Container, Form, ListGroup } from "react-bootstrap";
import Repo from "./Components/repo/index";

const GithubRepo = () => {
  const [repos, setRepos] = useState([]);
  const dispatch = useDispatch();

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
        dispatch(createRepos(reposTemp));
      })
      .catch((error) => {
        console.log(`inside getrepos error: ${error}`);
        this.setState({
          errorMessage: error.response.statusText,
        });
      });
  };

  const ShowRepos = () => {
    return <Repo />;
  };

  return (
    <Container className="pb-5">
      <Form className="mt-3 mb-5">
        <Form.Group className="mb-3">
          <Form.Label>
            <b>Github Username</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan username github anda"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <h5>List Repository : </h5>
      {repos.length > 0 && (
        <ListGroup>
          <Repo />
        </ListGroup>
      )}
    </Container>
  );
};

export default GithubRepo;
