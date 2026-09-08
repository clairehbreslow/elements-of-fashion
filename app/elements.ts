export type ElementProfile = {
  number: number;
  symbol: string;
  name: string;
  family: string;
  atomicWeight: string;
  fact: string;
};

export const elements: ElementProfile[] = [
  { number: 1, symbol: 'H', name: 'Hydrogen', family: 'Nonmetal', atomicWeight: '1.008', fact: 'Hydrogen is the most abundant element in the universe and the fuel that powers stars.' },
  { number: 2, symbol: 'He', name: 'Helium', family: 'Noble gas', atomicWeight: '4.0026', fact: 'Helium was detected in the Sun before it was discovered here on Earth.' },
  { number: 3, symbol: 'Li', name: 'Lithium', family: 'Alkali metal', atomicWeight: '6.94', fact: 'Lithium is the lightest metal and a key ingredient in rechargeable batteries.' },
  { number: 4, symbol: 'Be', name: 'Beryllium', family: 'Alkaline earth', atomicWeight: '9.0122', fact: 'Beryllium is unusually transparent to X-rays, so it is used in specialized imaging windows.' },
  { number: 5, symbol: 'B', name: 'Boron', family: 'Metalloid', atomicWeight: '10.81', fact: 'Boron helps make borosilicate glass resistant to sudden changes in temperature.' },
  { number: 6, symbol: 'C', name: 'Carbon', family: 'Nonmetal', atomicWeight: '12.011', fact: 'Diamond and graphite look completely different, but both are made entirely of carbon.' },
  { number: 7, symbol: 'N', name: 'Nitrogen', family: 'Nonmetal', atomicWeight: '14.007', fact: 'Nitrogen makes up about 78 percent of Earth’s atmosphere.' },
  { number: 8, symbol: 'O', name: 'Oxygen', family: 'Nonmetal', atomicWeight: '15.999', fact: 'Oxygen makes up about 21 percent of the air and supports most life on Earth.' },
  { number: 9, symbol: 'F', name: 'Fluorine', family: 'Halogen', atomicWeight: '18.998', fact: 'Fluorine is the most chemically reactive element in the periodic table.' },
  { number: 10, symbol: 'Ne', name: 'Neon', family: 'Noble gas', atomicWeight: '20.180', fact: 'Pure neon glows a vivid reddish orange when electricity passes through it.' },
  { number: 11, symbol: 'Na', name: 'Sodium', family: 'Alkali metal', atomicWeight: '22.990', fact: 'Sodium combines with chlorine to make ordinary table salt.' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', family: 'Alkaline earth', atomicWeight: '24.305', fact: 'Magnesium burns with an intense white light and is used in fireworks and flares.' },
  { number: 14, symbol: 'Si', name: 'Silicon', family: 'Metalloid', atomicWeight: '28.085', fact: 'Silicon is central to computer chips and is the second most abundant element in Earth’s crust.' },
  { number: 15, symbol: 'P', name: 'Phosphorus', family: 'Nonmetal', atomicWeight: '30.974', fact: 'Phosphorus is essential to DNA, cell membranes, and the way living cells store energy.' },
  { number: 16, symbol: 'S', name: 'Sulfur', family: 'Nonmetal', atomicWeight: '32.06', fact: 'Bright yellow sulfur has been used by people since ancient times.' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', family: 'Halogen', atomicWeight: '35.45', fact: 'Chlorine compounds help disinfect drinking water and swimming pools.' },
  { number: 18, symbol: 'Ar', name: 'Argon', family: 'Noble gas', atomicWeight: '39.948', fact: 'Argon takes its name from a Greek word meaning inactive because it rarely reacts.' },
  { number: 19, symbol: 'K', name: 'Potassium', family: 'Alkali metal', atomicWeight: '39.0983', fact: 'Potassium helps nerves send signals and muscles contract.' },
  { number: 20, symbol: 'Ca', name: 'Calcium', family: 'Alkaline earth', atomicWeight: '40.078', fact: 'Calcium is the most abundant metal in the human body and gives bones their strength.' },
  { number: 32, symbol: 'Ge', name: 'Germanium', family: 'Metalloid', atomicWeight: '72.630', fact: 'Germanium helped power the first generation of transistors and is still used in fiber optics.' },
  { number: 33, symbol: 'As', name: 'Arsenic', family: 'Metalloid', atomicWeight: '74.9216', fact: 'Arsenic is poisonous, but carefully controlled compounds are valuable in semiconductors.' },
  { number: 34, symbol: 'Se', name: 'Selenium', family: 'Nonmetal', atomicWeight: '78.971', fact: 'Selenium is named after Selene, the Greek goddess of the Moon.' },
  { number: 35, symbol: 'Br', name: 'Bromine', family: 'Halogen', atomicWeight: '79.904', fact: 'Bromine is the only nonmetal that is liquid at ordinary room temperature.' },
  { number: 36, symbol: 'Kr', name: 'Krypton', family: 'Noble gas', atomicWeight: '83.798', fact: 'Krypton’s name comes from the Greek word for hidden.' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', family: 'Alkali metal', atomicWeight: '85.4678', fact: 'Rubidium atoms are used in precise clocks that help keep communications networks in sync.' },
  { number: 38, symbol: 'Sr', name: 'Strontium', family: 'Alkaline earth', atomicWeight: '87.62', fact: 'Strontium salts create the brilliant crimson color in fireworks.' },
  { number: 52, symbol: 'Te', name: 'Tellurium', family: 'Metalloid', atomicWeight: '127.60', fact: 'Tellurium is named after tellus, the Latin word for Earth.' },
  { number: 53, symbol: 'I', name: 'Iodine', family: 'Halogen', atomicWeight: '126.90447', fact: 'Iodine forms a striking violet vapor and is essential for healthy thyroid function.' },
  { number: 54, symbol: 'Xe', name: 'Xenon', family: 'Noble gas', atomicWeight: '131.293', fact: 'Xenon can power ion thrusters that gently propel spacecraft over long distances.' },
  { number: 55, symbol: 'Cs', name: 'Cesium', family: 'Alkali metal', atomicWeight: '132.90545', fact: 'The official definition of one second is based on transitions in cesium-133 atoms.' },
  { number: 56, symbol: 'Ba', name: 'Barium', family: 'Alkaline earth', atomicWeight: '137.327', fact: 'Barium sulfate is opaque to X-rays and is used to reveal parts of the digestive system.' },
  { number: 84, symbol: 'Po', name: 'Polonium', family: 'Post-transition metal', atomicWeight: '[209]', fact: 'Marie Curie named polonium after her native Poland.' },
  { number: 85, symbol: 'At', name: 'Astatine', family: 'Halogen', atomicWeight: '[210]', fact: 'Astatine is so rare that only tiny traces occur naturally in Earth’s crust at any moment.' },
  { number: 86, symbol: 'Rn', name: 'Radon', family: 'Noble gas', atomicWeight: '[222]', fact: 'Radon is a radioactive noble gas produced naturally as radium decays.' },
  { number: 87, symbol: 'Fr', name: 'Francium', family: 'Alkali metal', atomicWeight: '[223]', fact: 'Francium is extraordinarily rare and exists naturally only in fleeting traces.' },
  { number: 88, symbol: 'Ra', name: 'Radium', family: 'Alkaline earth', atomicWeight: '[226]', fact: 'Radium was discovered by Marie and Pierre Curie in 1898.' },
];
