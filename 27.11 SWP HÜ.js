//indexOf
const fußballklubs = ['Rapid', 'Austria', 'Barca'];
const indexBarca = fußballklubs.indexOf('Barca'); // indexBarca wird 2 sein
const indexReal Madrid = fußballklubs.indexOf('Real Madrid'); // indexReal Madrid wird -1 sein

//push/unshift
arr.push(10); // Am Ende des Arrays wird eine 10 hinzugefügt
arr.unshift(0); // Am Anfang des Arrays wird eine 0 hinzugefügt

//pop/shift
const arr = [1, 2, 3];
const poppedValue = arr.pop(); //Entfernt das letzte Element also 3
const poppedValue = arr.shift(); //Entfernt das erste Element also 1

//includes
const arr = [1, 2, 3];
const includesTwo = arr.includes(2); //Überprüft, ob ein bestimmtes Element in einem Array vorhanden ist, includesTwo wird true sein

//slice
const arr = [1, 2, 3];
const slicedArr = arr.slice(1, 2); // slicedArr wird [2, 3] sein

//splice
arr.splice(1, 2, 'a', 'b'); // Es werden die zwei Elemente entfert ab index 1 und sie werden durch 'a' und 'b' ersetzt

// of/in
const arr = Array.of(1, 2, 3); // arr wird [1, 2, 3] sein
for (const index in arr) {
  console.log(index); // Gibt 0, 1, 2 aus
}

// map
const names = ['Leon', 'Adnan', 'Lio'];
const bergrüßung = names.map(name => `Hallo ${name}`); // Erstellt ein neues Array (bergrüßung) mit 'Leon', 'Adnan', 'Lio'

// filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); // evenNumbers wird [2, 4] sein

// split / join
const sentence = 'Brennt dein Aquarium monte jajaja?';
const words = sentence.split(' '); // words wird ['Brennt,', 'dein', 'Aquarium', 'monte', 'jajaja?'] sein
const newSentence = words.join('-'); // newSentence wird 'Brennt-dein-Aquarium-monte-jajaja?' sein

// some
const numbers = [1, 2, 3, 4, 5]; // Überprüft, ob mindestens ein Element in einem Array die bereitgestellte Funktion für sich genommen true zurückgibt.
const hasEven = numbers.some(num => num % 2 === 0); // hasEven wird true sein

// reverse
const arr = [1, 2, 3, 4, 5]; //Dreht die Reihenfolge der Elemente in einem Array um.
const reversedArr = arr.reverse(); // reversedArr wird [5, 4, 3, 2, 1] sein

//reduce
const numbers = [1, 2, 3, 4, 5]; //Reduziert ein Array auf einen einzigen Wert, indem eine kumulative Funktion auf alle Elemente angewendet wird
const sum = numbers.reduce((acc, num) => acc + num, 0); // sum wird 15 sein

//a = [...arr]
const arr = [1, 2, 3]; //Erstellt eine Kopie eines Arrays. 
const copyArr = [...arr]; // copyArr wird [1, 2, 3] sein

