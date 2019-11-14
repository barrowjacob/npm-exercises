const item = {
    name: "eggs",
    weight: "eggs",
    type: "eggs",
    color: "brown"
};

//can also do "export const item" and "export const thing" but in the index.js file you have to list them individually wtih "import"
const thing = {
    name: 'milk',
    weight: 'more than eggs',
    type: 'moo juice',
    color: 'off-white'
};

// name export the item you're trying to export
export default {item, thing};

