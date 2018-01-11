/**
 * Created by Roy Barak on 11-Jan-18.
 */
/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, { Component } from 'react';

class NameSelect extends Component {


    render() {
        let emp_info = {
            name:"roy",
            color:"red"
        }

        let emps_arr = Object.keys(emp_info).map(key =>
            <option>{emp_info[key]}</option>
        );
       return (
           <div>
               <h1>Info</h1>
               <select>{emps_arr}</select>
           </div>
       );
    }
}

export default NameSelect;
