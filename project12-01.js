'use strict';
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Yawavi
      Date:   April 10, 2024

      Filename: project12-01.js
*/

// Run when the page is loaded and ready
$(document).ready(function () {
  // Step 4: Mouseover event to show dropdown menu
  $('li.submenu').mouseover(function () {
    $(this).children('ul').show();
  });

  // Step 5: Mouseout event to hide dropdown menu
  $('li.submenu').mouseout(function () {
    $(this).children('ul').hide();
  });
});
