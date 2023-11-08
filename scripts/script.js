document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let persona = document.querySelector("figure:first-of-type");
  let personaimg = document.querySelector("figure:first-of-type img");
  let enemy = document.querySelector("figure:last-of-type");
  let enemyimg = document.querySelector("figure:last-of-type img");
  const gear = document.querySelector("button:first-of-type");
  const fight = document.querySelector("button:last-of-type");
  
  // text update
  const textenemy2 = "Chapter 436, Luffy vs Lucci. Het gevecht dat vlak na het gevecht tegen blueno plaats vond op enies lobby. Rob Lucci was een gevreesd lid van de CP9-organisatie, die bekendstond om zijn meedogenloze en dodelijke vaardigheden. Hij had de kracht van de Zoan Devil Fruit gegeten, waardoor hij kon veranderen in een krachtige leopardmensch.Tijdens hun gevecht op Enies Lobby onthulde Luffy zijn Gear Third-transformatie. Met Gear Third kon Luffy zijn botten vergroten en zichzelf opblazen tot enorme proporties, wat hem een enorme kracht en slagkracht gaf. Hij gebruikte zijn opgeblazen arm om zijn Gum-Gum Jet Shell-aanval uit te voeren, die de brute kracht had om Rob Lucci te verslaan en de stenen bouw van Enies Lobby te vernietigen. Dit gevecht was een keerpunt in de serie en markeerde Luffy's vastberadenheid om zijn vrienden te redden en de krachtige tegenstanders te verslaan die hem in de weg stonden. Het gevecht tussen Luffy en Lucci op Enies Lobby is een van de meest memorabele momenten in de One Piece-verhaallijn. "
  const textenemy3 = "Chapter 896, Luffy vs Katakuri. Het gevecht vond plaats op Whole Cake Island, een eiland in de wereld van One Piece dat wordt geregeerd door Big Mom, een van de Yonko, de vier machtigste piratenkapiteins in de wereld. Dit epische duel vond plaats in hoofdstuk 896 van de One Piece-manga, geschreven en getekend door Eiichiro Oda. Charlotte Katakuri, bijgenaamd Dogtooth, was de oudste zoon van Big Mom en een van haar sterkste commandanten. Hij bezat de krachten van de Mochi Mochi no Mi, een Paramecia-type Duivelvrucht waarmee hij zijn lichaam in mochi, een soort kleverige rijstcake, kon veranderen. Tijdens het gevecht tegen Katakuri onthulde Luffy zijn Gear Fourth-transformatie. Met Gear Fourth, genaamd Boundman, pompte Luffy zijn spieren op en bedekte zijn lichaam met een elastische huid. Hierdoor kreeg hij een enorme toename van kracht, snelheid en duurzaamheid. Zijn uiterlijk veranderde ook, waarbij hij grotere spieren en een opgeblazen lichaam kreeg.In deze vorm kon Luffy Katakuri op gelijke voet bestrijden en zelfs de bovenhand krijgen in het gevecht. Het gevecht tussen Luffy en Katakuri toonde niet alleen Luffy's vastberadenheid om sterker te worden, maar ook de vasthoudendheid van Katakuri, die bleef vechten ondanks zijn moeilijkheden. Het gevecht tussen Luffy en Katakuri wordt beschouwd als een van de hoogtepunten van de Whole Cake Island-verhaallijn in One Piece.";
  const textenemy4 = "Chapter 1044, Luffy vs Kaido. Dit gececht vond plaats op Wano island, een eiland dat afgesloten is van de buitenwereld. Dit eiland wordt geregeerd door de dictator/ Yonko Kaido, the king of beasts over dit gevecht zal ik echter nog niet te veel verklappen. Wil je weten hoe dit afloopt en heb je doorzettingsvermogen? ga dan snel One Piece verder kijken!";
  const textenemy5 = "5";

  function updateEnemyImage(img, isHover) {
    let enemydata = enemy.getAttribute("data-image");
    let imgSrc = "./images/enemy/" + enemydata + ".png";
    if (isHover && (enemydata == 2 || enemydata == 4)) {
      imgSrc = "./images/enemy/" + enemydata + "5.png";
    }
    img.setAttribute("src", imgSrc);
  }

  gear.addEventListener("click", function () {
    let state = parseInt(persona.getAttribute("data-image"));
    if (state < 5 && state == parseInt(enemy.getAttribute("data-image"))) {
      state++;
    } else if (
      state < 5 &&
      state != parseInt(enemy.getAttribute("data-image"))
    ) {
      alert("Je moet eest de tegenstander verslaan!!");
    }
    persona.setAttribute("data-image", state);
    personaimg.setAttribute("src", "./images/persona/" + state + ".png");

    personaimg.addEventListener("mouseenter", function () {
      let state = parseInt(persona.getAttribute("data-image"));
      if (state == 4) {
        this.setAttribute("src", "./images/persona/" + state + "5.png");
      }
    });

    personaimg.addEventListener("mouseleave", function () {
      let state = parseInt(persona.getAttribute("data-image"));
      this.setAttribute("src", "./images/persona/" + state + ".png");
    });
  });

  fight.addEventListener("click", function () {
    let personadata = parseInt(persona.getAttribute("data-image"));
    let enemydata = parseInt(enemy.getAttribute("data-image"));
    const textbox = document.querySelector("p");
    if (personadata > enemydata) {
      if (enemydata < 4) {
        enemydata++;
        let text = "textenemy" + enemydata;
        document.querySelector("main > img").classList.add("fight");
        setTimeout(function () {
          textbox.textContent = eval(text);
          enemyimg.setAttribute("src", "./images/enemy/" + enemydata + ".png");
          document.querySelector("main > img").classList.remove("fight");
        }, 1000);
        enemyimg.addEventListener("mouseover", function () {
          updateEnemyImage(this, true);
        });

        enemyimg.addEventListener("mouseleave", function () {
          updateEnemyImage(this, false);
        });
      } else if (enemydata == 4) {
        document.querySelector("body > img").classList.add("show");
      }
      enemy.setAttribute("data-image", enemydata);
    } else {
      alert("Je moet eerst van Gear upgraden!");
    }
  });
});
