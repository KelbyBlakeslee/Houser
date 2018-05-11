import React, { Component } from 'react';
import axios from 'axios';
import Listings from '../Listings/Listings'


class List extends Component {
 constructor() {
     super();

     this.state = {
         house: ''
     }

 }


 render() {
     return (
         <div>
             <Listings listing={''}/>
         </div>
     )
 }


}