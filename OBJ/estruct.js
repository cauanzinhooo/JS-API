const peoples = [
    {id: 5, name: 'Platao'},
    {id: 2, name: 'Socrates'},
    {id: 3, name: 'Jupiter'}
];
const newPeoples = new Map();
for(const people of peoples){
    const{id} = people;
    newPeoples.set(id,{...people});
};
for( const peoples of newPeoples.get(3)){
    console.log(peoples);
};