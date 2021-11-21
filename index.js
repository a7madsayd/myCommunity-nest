/*
 *--------------------------------------------------------------
 *  Copyright 2018 (c) Shady Khalifa (@shekohex).
 *  All rights reserved.
 *-------------------------------------------------------------
 */


// require('longjohn');
process.on('unhandledRejection', function(reason) {
  console.log('Unhandled rejection');

});
require('ts-node/register');
require('tsconfig-paths/register');
require('./src/main');
