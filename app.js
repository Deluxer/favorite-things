// Gerardo Del Angel Nuñez, 17 August 2022
// Goal: Things people enjoy

// 1. Add an object for yourself following a similar format
// 2. Put each object in an array so you have an array of objects (your choice how to do that). 
// 3. Iterate through the array of objects adding the date the script was run 
// to each object as favorite things may change in the future.
// 4. Console.log only active records with the Name, date, Favorite movie of each person. 
// 5. Add a function that can sort the output by object property.
// 6. There may be a time where no Active records are found.
// 7. Include code that provides a message when that occurs.

// For the point 2, do I need create a functionality to do that?
// For the point 3, what is the date format?


let peopleObj = [
    {
        'name': 'Rocky',
        'favoriteFood': 'Sushi',
        'favoriteMovie': 'Back to The Future',
        'status': 'Inactive'
    },
    {
        'name': 'Miroslav',
        'favoriteFood': 'Sushi',
        'favoriteMovie': 'American Psycho',
        'status': 'Active'
    },
    {
        'name': 'Donny',
        'favoriteFood': 'Singapore chow mei fun',
        'favoriteMovie': 'The Princess Bride',
        'status': 'Inactive'
    },
    {
        'name': 'Matt',
        'favoriteFood': 'Brisket Tacos',
        'favoriteMovie': 'The Princess Bride',
        'status': 'Active'
    },
    {
        'name': 'Ana',
        'favoriteFood': 'Shrimp cocktail',
        'favoriteMovie': 'Harry Potter',
    }
];

const main = () => {

    const data = [];
    for (let i = 0; i < peopleObj.length; i++) {    
        
        if(peopleObj[i].status === 'Inactive') continue;
        
        data.push({
            name: peopleObj[i].name,
            date: new Date(),
            favoriteMovie: peopleObj[i].favoriteMovie
        })
    }
    
    if(data.length === 0) {
        return `Data not found`;
    }

    return sortObj(data);
}

const sortObj = (data) => {
    return data.sort( (a,b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    } );
}

const result = main();

console.log(result);