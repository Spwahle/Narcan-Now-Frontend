import './_directions-container.scss';
import React from 'react';
import * as utils from '../../lib/utils';
import {connect} from 'react-redux';

class DirectionContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className='directions-container'>
        <ul>
          <li> <h1>1. Identify opioid overdose and check for response</h1>

            <p>Ask person if he or she is okay and shout name.
                    Shake shoulders and firmly rub the middle of their chest.
                    Check for signs of an opioid overdose:<br />
                    • Will not wake up or respond to your voice or touch<br />
                    • Breathing is very slow, irregular, or has stopped<br />
                    • Center part of their eye is very small, sometimes called “pinpoint pupils”</p></li>
          <br />
          <br />

          <li><h1>2. Remove Narcan nasal spray from the box</h1>
            <p>Peel back the tab with the circle to open the NARCAN Nasal Spray.
                    Hold the NARCAN Nasal Spray with your thumb on the bottom of the plunger
                    and your first and middle fingers on either side of the nozzle.
                    Gently insert the tip of the nozzle into either nostril.</p></li>

          <br />
          <br />
          <li><h1>3. Give Narcan nasal spray</h1>
            <p>Tilt the person’s head back and provide support under the neck with your
                    hand. Gently insert the tip of the nozzle into one nostril, until your fingers on
                    either side of the nozzle are against the bottom of the person’s nose.
                    Press the plunger firmly to give the dose of NARCAN Nasal Spray. <br />
                    • Remove the NARCAN Nasal Spray from the nostril after giving the dose.
                    Move the person on their side (recovery position)
                    after giving NARCAN Nasal Spray.<br />
                    If the person does not respond by waking up, to voice or touch, or
                    breathing normally another dose may be given. NARCAN Nasal Spray may
                    be dosed every 2 to 3 minutes, if available.<br />
              <br />
                    Important: For use in the nose only.
                    Do not remove or test the NARCAN Nasal Spray until ready to use.
                    Lay the person on their back to receive a dose of NARCAN Nasal Spray.</p></li>
        </ul>
      </div>
    );
  }
}

let mapStateToProps = state => ({
});

let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DirectionContainer);
