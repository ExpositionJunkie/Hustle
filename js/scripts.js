$(function () {

    let rockerboy = [[`Played a small local gig.`, 200, 300, 600], [`No gigs or jobs to be had this week.`, 0, 100, 300], [`Played a big gig for a rich Corporate or Local Personality.`, 300, 500, 800], [`Got some royalties in for your most recent
    Data Pool download.`, 300, 500, 800], [`Opening act for a Big-Name group`, 300, 500, 800], [`Personal appearance netted you a large fee.`, 200, 300, 600]]

    function rollHustle(aClassArray, rank, daysToRoll) {
        let returnArray = [];
        let roll = Math.floor(Math.random()*aClassArray.length);
        let eddies = 0;
        let dayEddies;
        let message;

        for (let days = 0; days <= daysToRoll; days++) {
            switch (roll){
                case 1:
                    message = aClassArray[0][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[0][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[0][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[0][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
                case 2:
                    message = aClassArray[1][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[1][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[1][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[1][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
                case 3:
                    message = aClassArray[2][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[2][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[2][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[2][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
                case 4:
                    message = aClassArray[3][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[3][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[3][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[3][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
                case 4:
                    message = aClassArray[3][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[3][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[3][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[3][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
                case 5:
                    message = aClassArray[4][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[4][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[4][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[4][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
                case 6:
                    message = aClassArray[5][0]
                    switch (rank){
                        case 1: case 2: case 3: case 4:
                            dayEddies = aClassArray[5][1];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 5: case 6: case 7:
                            dayEddies = aClassArray[5][2];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                        case 8: case 9: case 10:
                            dayEddies = aClassArray[5][3];
                            eddies += dayEddies;
                            returnArray.push(message, dayEddies, eddies);
                    }
            }
        }
    };
    return returnArray;

/*     rockerboy = rockerBoyHustle(1, 4);

    function rockerBoyHustle(rank = 1, daysToRoll = 1) {
        let returnString;
        var returnArray = [];
        let roll = Math.floor(Math.random() * 6);
        let eddies = 0;
        // need to make an eddies per job and an eddies permanent

        for (let days = 0; days <= daysToRoll; days++) {
            let dayEddies;
            switch (roll) {
                case 1:
                    returnString = "Played a small local gig";
                    console.log(returnString);
                    switch (rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 200;
                            dayEddies = 200;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 5: case 6: case 7:
                            eddies += 300;
                            dayEddies = 300;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 8: case 9: case 10:
                            eddies += 600;
                            dayEddies = 600; 
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                    }
                case 2:
                    returnString = `No gigs or jobs to be had this week`;
                    console.log(returnString)
                    switch (rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 0;
                            dayEddies = 0;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 5: case 6: case 7:
                            eddies += 100;
                            dayEddies = 100;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 8: case 9: case 10:
                            eddies += 300;
                            dayEddies = 300;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                    }
                case 3:
                    returnString = `Played a big gig for a rich Corpo-rat or local personality`;
                    console.log(returnString);
                    switch (rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 300;
                            dayEddies = 300;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 5: case 6: case 7:
                            eddies += 500;
                            dayEddies = 500;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 8: case 9: case 10:
                            eddies += 800;
                            dayEddies = 800;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                    };
                case 4:
                    returnString = `Got some royalties in for your most recent Data Pool download.`;
                    console.log(returnString);
                    switch (rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 300;
                            dayEddies = 300;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 5: case 6: case 7:
                            eddies += 500;
                            dayEddies = 500;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 8: case 9: case 10:
                            eddies += 800;
                            dayEddies = 800;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                    };
                case 5:
                    returnString = `Opening act for a Big-Name group.`;
                    console.log(returnString);
                    switch (rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 300;
                            dayEddies = 300;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 5: case 6: case 7:
                            eddies += 500;
                            dayEddies = 500;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 8: case 9: case 10:
                            eddies += 800;
                            dayEddies = 800;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                    };
                case 6:
                    returnString = `Personal appearance netted you a large fee.`;
                    console.log(returnString);
                    switch (rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 200;
                            dayEddies = 200;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 5: case 6: case 7:
                            eddies += 300;
                            dayEddies = 300;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                        case 8: case 9: case 10:
                            eddies += 600;
                            dayEddies = 600;
                            console.log(`${dayEddies} eb gained!`);
                            returnArray.push(returnString, dayEddies, eddies)
                            break;
                    };
            };
        };
        return returnArray;
    } */
});