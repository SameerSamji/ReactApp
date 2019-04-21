import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

    function RenderDish({dish}){
        if(dish != null){
            return (
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }

    function RenderComments({commentsArray}){
        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        if(commentsArray.length > 0){
            const comm = commentsArray.map((com) => {
                var d = new Date(com.date);
                return (
                    <div key={com.id}>
                        <ul className="list-unstyled">
                            <li>{com.comment}</li>
                            <li>-- {com.author} , {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</li>
                        </ul>
                    </div>
                );
            });

            return (
                <div className="container">
                    <h4>Comments</h4>
                    {comm}
                </div>
            );
            
        }else{
            return (
                <div></div>
            );
        }
        
    }

    const Dishdetail = (props) => {
        if(props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" object src={props.dish.image} alt={props.dish.name} />
                                <RenderDish dish={props.dish} />
                            </Card>
                        </div>
                        <div>
                            <RenderComments commentsArray={props.dish.comments} />
                        </div>                    
                    </div>
                </div>
                
            )
        }else{
            return (
                <div></div>
            )
        }
    }

export default Dishdetail;