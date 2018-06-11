import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Image, Card } from 'semantic-ui-react'


class Weather extends React.Component{


    render(){
        return(
            <div className="cards">
            {
                this.props.city &&
           
            <Card.Group>
                <Card>
                <Card.Content>
                    <Image src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
                </Card.Content>
                    <Card.Meta>
                        Location: {this.props.city}, {this.props.country}
                        <br/>
                         {this.props.description}
                             <br/>
                           Temperature: {this.props.temp} C
                           <br/>
                            Humidity: {this.props.humidity}%
                     </Card.Meta>
                </Card>
            </Card.Group> }

           <p> {this.props.err && this.props.err}</p>
           </div>
        );
    }
};
export default Weather;