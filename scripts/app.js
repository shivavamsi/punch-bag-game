new Vue({
  el: '#punchbag-app',
  data: {
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
      var r = Math.floor(Math.random() * Math.floor(3));
      var audio = new Audio("/media/punch-" + r + ".wav");
      audio.play();

      this.bagHealth -= 10;
      if (this.bagHealth <= 0)
        this.isDead = true;

      var i = Math.floor(Math.random() * Math.floor(10));

      this.exclamation = this.exclamations[i];
    },
    resetGame: function() {
      this.bagHealth = 100;
      this.isDead = false;
      this.exclamation = "";
    }
  }
});