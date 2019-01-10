new Vue({
  el: '#punchbag-app',
  data: {
    // declare variables
    bagHealth: 100,
    isDead: false,
    exclamation: "",
    exclamations: ["POW!!!",
      "BLAM!!!",
      "WHACK!!",
      "SMASH!!",
      "WHAM!!!",
      "BOFF!!!",
      "WHAP!!!",
      "BANG!!!",
      "PUFF!!!",
      "BOFF!!!",
      "SMACK!!"
    ]
  },
  methods: {
    punch: function() {
      // generate random integer to play audio
      var r = Math.floor(Math.random() * Math.floor(3));

      // play punch audio
      document.getElementById('punch-' + r).play();

      // decrease health by 10 for each punch
      this.bagHealth -= 10;

      // change isDead flag if health is 0
      if (this.bagHealth <= 0)
        this.isDead = true;

      // generate a random number for expression
      var i = Math.floor(Math.random() * Math.floor(10));

      // update the expression
      this.exclamation = this.exclamations[i];
    },
    resetGame: function() {
      // play restart audio
      document.getElementById('restart').play();

      // reset bag health
      this.bagHealth = 100;

      // reset isDead flag
      this.isDead = false;

      // reset expression
      this.exclamation = "";
    }
  }
});