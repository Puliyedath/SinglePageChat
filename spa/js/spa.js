/*
 * spa.js
 * Root name space module
 */


/*jslint
  devel: true,
  browser: true,
  continue, true,
  indent: 2 , 
  maxerr: 50,
  newcap: true,
  nomen: true,
  plusplus: true,
  regexp: true, 
  sloppy: true,
  vars: false, 
  white: true
*/

/* global $, spa */

var spa = (function() {
    function initModule($container) {
        $container.html(
                '<h1 style="display:inline-block;margin:25px;">'
                + 'hello world'
                +'<h1>'
        );
    }

    return {
        initModule: initModule
    };
})();
