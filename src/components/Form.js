import React from "react"
import { Button, Input } from "semantic-ui-react";

class Form extends React.Component{
    render(){
        return(
            <div className="inputForm">
                <form className="input-form" onSubmit={this.props.getWeather}>
                    <Input type="text" name ="city" placeholder="City"/>
                    <Input type="text" name ="country" placeholder="Country"/>
                    <Button>Submit</Button>
                </form>
            </div>
        );
    }
};
export default Form;