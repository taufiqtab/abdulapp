import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import $ from 'jquery'; 
import '../App.css';

class Home extends Component {
    componentDidMount() {
        window.$(document).ready(function(){
            window.$('.parallax').parallax();
          });
      }

    render(){
        return (
            <div>
                <div className="parallax-container" style={{height: "200px"}}>
                    <div className="parallax"><img className="responsive-img" src="http://cdn.miscellaneoushi.com/1920x1200/20121018/pixelart%20pixel%20art%201920x1200%20wallpaper_www.miscellaneoushi.com_59.jpg"/></div>

                    <div className="content">
                        <div className="row">
                            <div className="col s12">
                            
                            <div className="center-align">
                            <div className="col s12 m4 l4">
                                <div className="card grey  darken-2">
                                    <div className="card-content white-text">
                                        <span className="card-title">a continuous learning WebApp</span>
                                        <p>by Taufiq Abdullah.</p>
                                    </div>
                                    {/* <div className="card-action">
                                        <a href="#">Sign Up</a>
                                        <a href="#">Sign In</a>
                                    </div> */}
                                </div>
                            </div>
                            </div>

                                {/* <h3 className="center-align white-text text-darken-2">a continuous learning WebApp</h3>
                                <h6 className="center-align white-text text-darken-2">by Taufiq Abdullah</h6> */}

                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <h3 className="center-align">Create</h3>
                    <h3 className="center-align">Develope</h3>
                    <h3 className="center-align">Maintenance</h3>
                    <h3 className="center-align">Fix</h3>
                    <h3 className="center-align">Leave</h3>
                </div>
                <div className="parallax-container" style={{height: "200px"}}>
                    <div className="parallax"><img className="responsive-img" src="http://cdn.miscellaneoushi.com/1920x1200/20121018/pixelart%20pixel%20art%201920x1200%20wallpaper_www.miscellaneoushi.com_59.jpg"/></div>

                    <div className="content">
                        <div className="row">
                            <div className="col s12">
                            
                            <div className="center-align">
                           
                            </div>

                                {/* <h3 className="center-align white-text text-darken-2">a continuous learning WebApp</h3>
                                <h6 className="center-align white-text text-darken-2">by Taufiq Abdullah</h6> */}

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
  }
  
  export default Home;