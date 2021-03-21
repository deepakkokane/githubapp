import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, ListGroupItemText } from "reactstrap";
import { toast } from "react-toastify";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
   try {
    const { data } = await Axios.get(repos_url);

    setRepos(data);
   } catch (error) {
     toast(error.message,{type:"error"})
   }
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <ListGroupItemText>
          <span className="h6">RepoName:</span> <span className="text-primary"> {repo.name}</span>
          </ListGroupItemText>
          <ListGroupItemText>
            <span className="text-secondary">Laguage: {repo.language}</span>
          </ListGroupItemText>
          <ListGroupItemText>
            <span >Description: {repo.description}</span>
          </ListGroupItemText>
        </ListGroupItem>
        
      ))}
    </ListGroup>
  );
};

export default Repos;
