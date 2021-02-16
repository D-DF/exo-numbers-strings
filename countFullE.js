let txt = "Je suis le ténébreux, - le veuf, - l'inconsolé, \n Le prince d'Aquitaine à la tour abolie : \n Ma seule étoile est morte, - et mon luth constellé \n Porte le soleil noir de la Mélancolie. \n \n Dans la nuit du tombeau, toi qui m'as consolé, \n Rends-moi le Pausilippe et la mer d'Italie, \n La fleur qui plaisait tant à mon cœur désolé, \n Et la treille où le pampre à la rose s'allie. \n \n Suis-je Amour ou Phébus ? ... Lusignan ou Biron ? \n Mon front est rouge encor du baiser de la reine ; \n J'ai rêvé dans la grotte où nage la sirène... \n \n Et j'ai deux fois vainqueur traversé l'Achéron ; \n Modulant tour à tour sur la lyre d'Orphée \n Les soupirs de la sainte et les cris de la fée. \n";


let compteurMajuscule = 0;
let compteurMiniscule = 0;

let lettre = 'e';
let majuscule = lettre.toUpperCase();
let miniscule = lettre.toLowerCase();

for (let i = 0; i < txt.length; i++) {
  let mot = txt[i];

  if (mot === majuscule) {
    compteurMajuscule++;
    console.log(compteurMajuscule)
  }

  if (mot === miniscule) {
    compteurMiniscule++;
    console.log(compteurMiniscule)
  }
}




