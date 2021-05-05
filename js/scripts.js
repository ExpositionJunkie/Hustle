$(function () {

    rockerboy = rockerBoyHustle(1, 4);

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
    }
});