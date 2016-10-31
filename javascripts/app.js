"use strict";
$(document).ready(function(){
let PlayerOneReady = false;
let PlayerTwoReady = false;
let PlayerOne = new Robot.Combatants.Bot();
let PlayerTwo = new Robot.Combatants.Bot();
//enable/disable player from changing classes
    $('.player-names').keyup(function(){
        if ($(this).val() !== "") {
          $(this).next('button').removeClass("disabled");
        } else {
          $(this).next('button').addClass("disabled");
        }
    });

    $('.player-types').change(function(){
        if ($(this).val().indexOf("Select") < 0) {
          $(this).next('button').removeClass("disabled");
        } else {
          $(this).next('button').addClass("disabled");
        }
    });

    $('.player-model').change(function(){
        if ($(this).val().indexOf("Select") < 0) {
          $(this).next('button').removeClass("disabled");
        } else {
          $(this).next('button').addClass("disabled");
        }
    });

    $('.player-weapons').change(function(){
        if ($(this).val().indexOf("Select") < 0) {
          $(this).next('button').removeClass("disabled");
        } else {
          $(this).next('button').addClass("disabled");
        }
    });

    $('.choose-nm-btn').click(function() {
      if (!$(this).hasClass("disabled")) {
         var selectedId = $(this).attr("id");
         $(this).prev('input').slideUp();
         $(this).addClass("hidden");
         $(this).next('div').removeClass("hidden");
         if(selectedId.indexOf("one") >= 0) {
         PlayerOne.playerName = $("#player-one-nm").val();
         $("#player-one-types").removeClass("hidden");
         } else if(selectedId.indexOf("two") >= 0) {
         PlayerTwo.playerName = $("#player-two-nm").val();
         $("#player-two-types").removeClass("hidden");
         }
      }
    });

    $('.choose-type-btn').click(function() {
      if (!$(this).hasClass("disabled")) {
         var selectedId = $(this).attr("id");
         $(this).prev('select').slideUp();
         $(this).addClass("hidden");
         if(selectedId.indexOf("one") >= 0) {
         PlayerOne.type = new Robot.Types[$("#player-one-types-select").val()]();
         let PlayerOneType = $("#player-one-types-select").val().toLowerCase();
            if (PlayerOneType.indexOf("drone") >= 0) {
              $("#player-one-drone").removeClass("hidden");
            } else if (PlayerOneType.indexOf("bipedal") >= 0) {
              $("#player-one-bipedal").removeClass("hidden");
            } else if (PlayerOneType.indexOf("atv") >= 0) {
              $("#player-one-atv").removeClass("hidden");
            }
         } else if(selectedId.indexOf("two") >= 0) {
         PlayerTwo.type = new Robot.Types[$("#player-two-types-select").val()]();
         let PlayerTwoType = $("#player-two-types-select").val().toLowerCase();
            if (PlayerTwoType.indexOf("drone") >= 0) {
              $("#player-two-drone").removeClass("hidden");
            } else if (PlayerTwoType.indexOf("bipedal") >= 0) {
              $("#player-two-bipedal").removeClass("hidden");
            } else if (PlayerTwoType.indexOf("atv") >= 0) {
              $("#player-two-atv").removeClass("hidden");
            }
         }
      }
    });

    $('.choose-mod-btn').click(function() {
      if (!$(this).hasClass("disabled")) {
         var selectedId = $(this).attr("id");
         $(this).prev('select').slideUp();
         $(this).addClass("hidden");
        if(selectedId.indexOf("one") >= 0) {
          PlayerOne.model = new Robot.Types[$("#player-one-" + PlayerOne.type.name +  "-select").val()]();
          $("#player-one-weapons").removeClass("hidden");
         } else if(selectedId.indexOf("two") >= 0) {
          PlayerTwo.model = new Robot.Types[$("#player-two-" + PlayerTwo.type.name +  "-select").val()]();
          $("#player-two-weapons").removeClass("hidden");
         }
      }
    })

    $('.player-ready-btn').click(function() {
      if (!$(this).hasClass("disabled")) {
         var selectedId = $(this).attr("id");
         $(this).prev('select').slideUp();
         if(selectedId.indexOf("one") >= 0) {
         $(this).text("Waiting for Player Two...");
         PlayerOne.weapon = new Robot.Arsenal[$("#player-one-weapons-select").val()]();
         PlayerOneReady = true;
         checkStatus();
         console.log(PlayerOne);
         } else if(selectedId.indexOf("two") >= 0) {
         PlayerTwo.weapon = new Robot.Arsenal[$("#player-two-weapons-select").val()]();
         $(this).text("Waiting for Player One...");
         PlayerTwoReady = true;
         checkStatus();
       }
      }
    });

    function checkStatus () {
      if (PlayerOneReady && PlayerTwoReady) {
        //alert("Both players ready!");
        $("#players-setup").slideUp();
        $("#battleground").removeClass("hidden");

        $("#player-one-battle-name").html("Player One Name: " + PlayerOne.playerName);
        $("#player-one-battle-health").html("Health: " + PlayerOne.model.health);
        $("#player-one-battle-robot").html("Robot: " + PlayerOne.type.name);
        $("#player-one-battle-model").html("Model: " + PlayerOne.model.name);
        $("#player-one-battle-weapon").html("Weapon: " + PlayerOne.weapon.name);
        $("#player-two-battle-name").html("Player Two Name: " + PlayerTwo.playerName);
        $("#player-two-battle-health").html("Health: " + PlayerTwo.model.health);
        $("#player-two-battle-robot").html("Robot: " + PlayerTwo.type.name);
        $("#player-two-battle-model").html("Model: " + PlayerTwo.model.name);
        $("#player-two-battle-weapon").html("Weapon: " + PlayerTwo.weapon.name);
      }
    }

 $("#attack-btn").click(function() {
    //Player One//
      PlayerOne.model.health = (PlayerOne.model.health - (PlayerTwo.weapon.damage * PlayerTwo.model.damageBonus));
      if (PlayerOne.model.health  <= 0) {
              playerOneDied();
      }
      $("#player-one-battle-health").html("Health: " + (PlayerOne.model.health));
    //Player Two//
      PlayerTwo.model.health = (PlayerTwo.model.health - (PlayerOne.weapon.damage * PlayerOne.model.damageBonus));
      if (PlayerTwo.model.health <= 0) {
              playerTwoDied();
      }
      $("#player-two-battle-health").html("Health: " + (PlayerTwo.model.health));
 });

function  playerOneDied() {
    $("#battleground").hide();
    $("#winner").removeClass("hidden");
    $("#winner-text").html(PlayerTwo.playerName + " defeated " + PlayerOne.playerName + " with the " + PlayerTwo.weapon.name + "!");
}

function  playerTwoDied() {
    $("#battleground").hide();
    $("#winner").removeClass("hidden");
    $("#winner-text").html(PlayerOne.playerName + " defeated " + PlayerTwo.playerName + " with the " + PlayerOne.weapon.name + "!");
}

$("#play-again-btn").click(function() {
  window.location.reload()
})


});


