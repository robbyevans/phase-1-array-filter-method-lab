// first function findMatching()

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(array,name){
   const newArray=[];
    for (let items of array){
        if((items.toUpperCase())===(name.toUpperCase())){
            newArray.push(items)
        }
    }
    return newArray;
}

findMatching(drivers,'Bobby');

// 2nd function fuzzyMatch()

function fuzzyMatch(array,initial){
    const newArray=[];
    for(let items of array){
        if(initial===(items.slice(0,2))){
            newArray.push(items)
        }
    }
    return newArray
};

fuzzyMatch(drivers,'Sa')

// 3rd function matchName()

function matchName(array,name){
    const newArray=[];
    for (let items of array){
        if (items.name===name){
            newArray.push(items);
        }
    }
  return newArray;
}