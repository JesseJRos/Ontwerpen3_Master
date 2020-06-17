// FundFamily sign
window.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('idFundFamily').offsetTop,
        offScreen = top < document.getElementById('idFundFamily').offsetTop;
  
     if (isVisible) {
       document.getElementById('idFundFamily').classList.add('animateFundFamily');
     }
     if (offScreen) {
        document.getElementById('idFundFamily').classList.remove('animateFundFamily');
     }
  });

// Sign Petitions
window.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('idSignPetitions').offsetTop,
        offScreen = top < document.getElementById('idSignPetitions').offsetTop;
  
     if (isVisible) {
       document.getElementById('idSignPetitions').classList.add('animateSignPetitions');
     }
     if (offScreen) {
        document.getElementById('idSignPetitions').classList.remove('animateSignPetitions');
     }
  });


// OBSOLETE (but kept for reference)

// Polaroid 1
// window.addEventListener('scroll', function (e) {
//     var top  = window.pageYOffset + window.innerHeight,
//         isVisible = top > document.getElementById('animatedPolaroid1').offsetTop,
//         offScreen = top < document.getElementById('animatedPolaroid1').offsetTop;
  
//      if (isVisible) {
//        document.getElementById('animatedPolaroid1').classList.add('animatePolaroid1');
//      }
//      if (offScreen) {
//         document.getElementById('animatedPolaroid1').classList.remove('animatePolaroid1');
//      }
//   });

  // Polaroid 2
//   window.addEventListener('scroll', function (e) {
//     var top  = window.pageYOffset + window.innerHeight,
//         isVisible = top > document.getElementById('animatedPolaroid2').offsetTop,
//         offScreen = top < document.getElementById('animatedPolaroid2').offsetTop;
  
//      if (isVisible) {
//        document.getElementById('animatedPolaroid2').classList.add('animatePolaroid2');
//      }
//      if (offScreen) {
//         document.getElementById('animatedPolaroid2').classList.remove('animatePolaroid2');
//      }
//   });

  // Polaroid 3
//   window.addEventListener('scroll', function (e) {
//     var top  = window.pageYOffset + window.innerHeight,
//         isVisible = top > document.getElementById('animatedPolaroid3').offsetTop,
//         offScreen = top < document.getElementById('animatedPolaroid3').offsetTop;
  
//      if (isVisible) {
//        document.getElementById('animatedPolaroid3').classList.add('animatePolaroid3');
//      }
//      if (offScreen) {
//         document.getElementById('animatedPolaroid3').classList.remove('animatePolaroid3');
//      }
//   });

  // Bottom Image
//   window.addEventListener('scroll', function (e) {
//     var top  = window.pageYOffset + window.innerHeight,
//         isVisible = top > document.getElementById('idBottomImage').offsetTop,
//         offScreen = top < document.getElementById('idBottomImage').offsetTop;
  
//      if (isVisible) {
//        document.getElementById('idBottomImage').classList.add('animateBottomImage');
//      }
//      if (offScreen) {
//         document.getElementById('idBottomImage').classList.remove('animateBottomImage');
//      }
//   });