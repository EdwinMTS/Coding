// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arrayDNA) => {
  return {
    _id: number,
    _DNA: arrayDNA,

    mutate() {
      let randNum = 0;
      let randBase = 0;
      while (randNum === randBase) {
        randNum = Math.floor(Math.random() * 15);
        // console.log(randNum);
        randBase = returnRandBase();
        // console.log(randBase);
      }
      this._DNA[randNum] = randBase;
    },

    compareDNA (pAequor) {
      let matchNum = 0;
      for (let i = 0; i < pAequor._DNA.length; i++) {
        if (this._DNA[i] === pAequor._DNA[i]) {
          matchNum++;
        }
        console.log(matchNum);
      }
      let percentageCommon = (matchNum / 15) * 100;
      return percentageCommon + '%';
    },

    willLikelySurvive () {
      let gOrCBase = 0;
      for (let j = 0; j < this._DNA.length; j++) {
        if (this._DNA[j] === 'C' || this._DNA[j] === 'G') {
          gOrCBase++;
        }
      }
      let percentageCOrG = (gOrCBase / 15) * 100;

      if (percentageCOrG >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}


let testObjects = [];

while (testObjects.length < 30) {
    for (let k = 0; testObjects.length < 30; k++) {
      let object = pAequorFactory(k, mockUpStrand());
      if (object.willLikelySurvive()) {
        testObjects.push(object);
      }
    }
}
console.log(testObjects.length);