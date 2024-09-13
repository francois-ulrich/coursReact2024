// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   console.log(this);
// }

// function Food(category) {
//   this.category = category;
//   console.log(this);
// }

// const pomme = new Product("Pomme", 1);
// const foodPomme = Food.bind(pomme);

// foodPomme("fruit");

// Food.call(pomme, "fruit")


function afficherGonAlt(message) {
  console.info(`${message} - Gon`, this);
}

function HunterExam() {
  const giveHunterLicence = () => {
    console.warn("Gon has been given his hunter licence !", this);
  }

  giveHunterLicence();
}

// const HunterExam = () => { };

// const hunterExam = new HunterExam();

const boundAfficherGon = afficherGonAlt.bind(new HunterExam());
boundAfficherGon("bleh ! ><");

const afficherGon = (message) => {
  if (typeof message !== 'string')
    return;

  console.info(`${message.toUpperCase()} - Gon`, this);
};

afficherGon("Ore wa Gon Freecs ! :D");
afficherGon(1);

const calculPrixTTC = (prix) => prix * 1.2;

console.log(calculPrixTTC(1000));


// async

const timeoutDuration = 1000;

// function afficher() {
//   console.log("======");

//   const asyncCallback = () => {
//     console.log("hey");
//   }

//   setTimeout(asyncCallback, timeoutDuration)

//   console.log("======");
// }

// afficher();

// promise

const callback = (resolve, reject) => {
  console.log(this);

  const asyncCallback = () => {
    // reject(["hisoka", "irumi"]);

    const characters = ["Gon", "Killua", "Kurapika", "Leorio"];

    resolve(characters);
  }

  setTimeout(asyncCallback, timeoutDuration)
};

// const promise = new Promise(callback)
//   .then(res => console.info(res))
//   .catch(res => console.info(res));

console.log("======");
console.log("======");

async function executePromesse() {
  const result = await new Promise(callback);

  console.info(result);

  return result;
}

executePromesse().then(result => console.log("all done..."));

console.info("dernière ligne");