'use strict';

require('dotenv').config({path: '../../.env'});


// const TWILIO_ACCOUNT_SID='AC0de2559e6b4e1a00039336d64ffa4cea';
// const TWILIO_AUTH_TOKEN='c9554ecc2a9ad6028790f1e58fc01232';
// const TWILIO_PHONE_NUMBER='+12062078031';
//const CELL_PHONE_NUMBER='+12064984786';

module.exports = function textClient(cellNum) {
  const smsClient = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  smsClient.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: cellNum,
    body: 'YO this is a test'
  }, function(err, message) {
    if (err) {
      console.error(err.message);
    }
    console.log(message);
  });
};
