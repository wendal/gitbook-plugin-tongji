require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
      console.log("FUCKING START")
    });

    gitbook.events.bind("page.change", function() {
      console.log("FUCKING CHANGE")
    });
});
