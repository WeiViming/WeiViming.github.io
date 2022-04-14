$(function() {

  $('.chat-scroll').each(function() {
    new PerfectScrollbar(this, {
      suppressScrollX: true,
      wheelPropagation: true
    });
  });

  $('.chat-sidebox-toggler').click(function(e) {
    e.preventDefault();
    $('.chat-wrapper').toggleClass('chat-sidebox-open');
  });

  mermaid.initialize({
    theme: 'forest',
    // themeCSS: '.node rect { fill: red; }',
    logLevel: 3,
    securityLevel: 'loose',
    flowchart: { curve: 'basis' },
    gantt: { axisFormat: '%m/%d/%Y' },
    sequence: { actorMargin: 50 },
    // sequenceDiagram: { actorMargin: 300 } // deprecated
  });

});
