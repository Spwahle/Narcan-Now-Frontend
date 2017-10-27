import './_about-container.scss';
import React from 'react';
import * as utils from '../../lib/utils';
import {connect} from 'react-redux';

class AboutContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="about-container">
        <div className="info">
          <ul>
            <div className="left">
              <br />
              <li> 1. Opioid drugs can slow or stop a person’s breathing, leading to death.<br />
            Opioids include illegal drugs like heroin, but also prescription medications such as morphine, <br />
            codeine and hydrocodone, which doctors often prescribe to treat pain. Anyone who uses opioids <br />
            for long-term management of cancer or non-cancer pain is also at risk for opioid overdose, <br />
            not just those who use street drugs like heroin.</li> <br />

              <li> 2. You can now purchase the opiate overdose antidote drug naloxone, which restores breathing, <br />
            at California pharmacies without a prescription. Emergency room doctors and first responders have <br />
            used naloxone for years to restore breathing in someone who has overdosed on an opiate. </li><br />
              <br />
              <li> 3. Nonmedical personnel, family members and close friends of those at risk of overdose<br />
             may safely administer naloxone in a life-threatening emergency. However, an individual who <br />
             is experiencing opioid overdose requires immediate medical attention, so a critical first <br />
             step is to call 911  for medical assistance. The administration of naloxone can buy critical <br />
             time while waiting for emergency services to arrive.</li><br />
              <br />
            </div>
            <div className="right">
              <li> 4. Despite what you see in movies like “Pulp Fiction,” you should never inject naloxone <br />
            directly into the heart of someone who is overdosing. Rather, you should administer it as a <br />
            nasal spray or an injection into the upper arm or thigh muscle.</li><br />
              <br />
              <li> 5. Naloxone has no psychoactive effects and does not present any potential for abuse. It<br />
             can send a person into rapid withdrawal, which often includes potentially painful side effects. <br />
             However, withdrawal is far better than risking death. It is important to note that naloxone is <br />
             not an overdose antidote for benzodiazepine drugs like Valium and Xanax , cocaine, methamphetamines, <br />
             alcohol or bath salts. Call 911 immediately if you suspect overdose from any of these substances.</li><br />
              <br />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
});

let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
