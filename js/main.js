//   1 kopieer de hele heutemeut
//   2 vervolgens zet je een id op het element wat je wilt triggeren
//   3 daarna geef je het id bij isVisible en offScreen
//   4 geef dat id ook mee aan if statements 'getElementById'
//   5 bedenk een nieuwe id naam die die animatie triggered
//   6 zet die id in beide if statements
//   7 maak vervolgens de id aan in je css en style hem

// Hide audio
function audioHide() {
    var audio = document.getElementById('audio');
    audio.classList.toggle("audiohide");
}

// FundFamily sign
document.addEventListener('scroll', function (e) {
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

// Polaroid 1
  document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('animatedPolaroid1').offsetTop,
        offScreen = top < document.getElementById('animatedPolaroid1').offsetTop;
  
     if (isVisible) {
       document.getElementById('animatedPolaroid1').classList.add('animatePolaroid1');
     }
     if (offScreen) {
        document.getElementById('animatedPolaroid1').classList.remove('animatePolaroid1');
     }
  });

  // Polaroid 2
  document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('animatedPolaroid2').offsetTop,
        offScreen = top < document.getElementById('animatedPolaroid2').offsetTop;
  
     if (isVisible) {
       document.getElementById('animatedPolaroid2').classList.add('animatePolaroid2');
     }
     if (offScreen) {
        document.getElementById('animatedPolaroid2').classList.remove('animatePolaroid2');
     }
  });

  // Polaroid 3
  document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('animatedPolaroid3').offsetTop,
        offScreen = top < document.getElementById('animatedPolaroid3').offsetTop;
  
     if (isVisible) {
       document.getElementById('animatedPolaroid3').classList.add('animatePolaroid3');
     }
     if (offScreen) {
        document.getElementById('animatedPolaroid3').classList.remove('animatePolaroid3');
     }
  });

// Sign Petitions
document.addEventListener('scroll', function (e) {
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

  // Bottom Image
document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('idBottomImage').offsetTop,
        offScreen = top < document.getElementById('idBottomImage').offsetTop;
  
     if (isVisible) {
       document.getElementById('idBottomImage').classList.add('animateBottomImage');
     }
     if (offScreen) {
        document.getElementById('idBottomImage').classList.remove('animateBottomImage');
     }
  });