import React from 'react';
import ReactDOM from 'react-dom';
import './_home-container.scss';
// import assetPicture from '../../assets/mountains.jpg';
import scrollToComponent from 'react-scroll-to-component';


class HomeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this.refs.hello);
    if (elem) {
      elem.scrollIntoView(false);
    }
  }


  render() {
    return (
      <section>
        <div className='home'>
          <h3>OH HEY I HAS HOMEPAGE HURHUR</h3>
          {/* <Image ref='hello' className='uploadedImages' src={assetPicture} responsive /> */}

        </div>
      </section>
    );
  }
}


export default HomeContainer;
