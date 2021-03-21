import React from 'react'
import {Card,CardBody,CardText,CardImg, CardTitle} from "reactstrap"
const UserCard = ({user}) => {
    return (
       <Card>
           <CardImg src={user.avatar_url} top height={250}/>
           <CardBody className="mt-3">
               <CardTitle className="text-primary">{user.name}</CardTitle>
               <CardText>PublicRepositories:{user.public_repos}</CardText>
               <CardText>Followers:{user.followers}</CardText>
               <CardText>Location:{user.location}</CardText>
           </CardBody>
       </Card>
    )
}

export default UserCard;
