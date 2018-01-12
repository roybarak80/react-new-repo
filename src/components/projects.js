/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, { Component } from 'react';


class Projects extends Component {



    render() {

        var _data = this.props.projects;
        console.log(_data);

        return (
            <div className="Projects">
                {_data.map(function(object, i){
                    return <div className={"row"} key={i}>
                        {[ object.name ,
                            <b className="fosfo" key={i}> {object.city} </b> ,
                        ]}
                    </div>;
                })}
            </div>
        );
    }
}

export default Projects;
