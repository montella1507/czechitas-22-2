// Nechte uživatele zadat 3 čísla - strany trojúhelníku a zjistěte, zda jde trojúhelník sestrojit

// 2 nejmensi ze trech... -> hledam nejdelsi...

// - trojuhelnik jde sestrojit, pokud soucet 2 nejmensich stran je > nez treti strana
// - principialne jde POUZE o podminku navic do prikladu 2...

let a = Number(prompt('Prvni strana:'));
let b = Number(prompt('Druha strana:'));
let c = Number(prompt('Treti strana:'));

if (a > b) {
  // větší bylo Acko .. a tudiz musim porovnat s ceckem...
  if (a > c) {
    // větší bylo Cecko .. takze nejvetsi cislo je A
    console.log('Nejvetsi strana je A:' + a);

    if (b + c > a) {
      console.log('Trojuhelnik jde sestavit, protoze B+C > A');
    } else {
      console.log('Trojuhelnik nejde sestavit');
    }
  } else {
    console.log('Nejvetsi strana je C:' + c);
    if (a + b > c) {
      console.log('Trojuhelnik jde sestavit, protoze  a + b > c');
    } else {
      console.log('Trojuhelnik nejde sestavit');
    }
  }
} else {
  // větší bylo Bcko .. a tudiz musim porovnat s ceckem...
  if (b > c) {
    // větší bylo Cecko .. takze nejvetsi cislo je B
    console.log('Nejvetsi strana je B:' + b);
    if (a + c > b) {
      console.log('Trojuhelnik jde sestavit, protoze  a + c > b');
    } else {
      console.log('Trojuhelnik nejde sestavit');
    }
  } else {
    console.log('Nejvetsi strana je C:' + c);
    if (a + b > c) {
      console.log('Trojuhelnik jde sestavit, protoze  a + b > c');
    } else {
      console.log('Trojuhelnik nejde sestavit');
    }
  }
}
