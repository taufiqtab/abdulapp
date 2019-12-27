import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class DetailUsers extends Component {
    constructor(props){
      super(props)
      this.state={
        user : ''
      }
    }

    componentDidMount() {
      const { match: { params } } = this.props;
    
      this.setState({ user : params.name });
    }

    render(){
        return (
            <div>
            <h2>Hai {this.state.user}</h2>
            
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="https://thumbnail.imgbin.com/4/11/12/imgbin-steven-ogg-grand-theft-auto-v-xbox-360-trevor-philips-franklin-clinton-grand-theft-auto-5-JjP29V1BxAK8eegvHqckgsVjL_t.jpg" alt="" class="circle responsive-img"/>
            </div>
            <div class="col s10">
              <span class="black-text">
                Ummm. Yummy Let's Party !!!!.
              </span>
            </div>
          </div>
        </div>
      </div>
            
          </div>
        );
    }
  }
  
  export default DetailUsers;