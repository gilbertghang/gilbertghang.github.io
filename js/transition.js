YUI().use('transition', function(Y) {
  var landing = Y.one('.landing')
  var main = Y.one('.main');

  function revealTest(e){
    e.preventDefault();
    landing.hide(true);

    main.setStyle('display', 'block');
    main.transition({
      delay: 0.75,
      duration: 1,
      easing: 'ease-in',
      opacity: 1
    });
  }
  landing.one('button').on('click', revealTest);
});