$(function () {

    let rockerboy = rockerBoyHustle(3,4);
    console.log(rockerboy[0], rockerboy[1])
    
    let eddies = 0;

    function rockerBoyHustle(rank = 1, daysToRoll = 1) {
        let returnString;
        let returnArray = [];
        let roll = Math.floor(Math.random()*6);

        for (let days= 0; days = daysToRoll; days++) {
            switch(roll) {
                case 1:
                    returnString = "Played a small local gig";
                    console.log(retrunString);
                    switch(rank){
                        case 1: case 2: case 3: case 4:
                            eddies += 200;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 5: case 6: case 7:
                            eddies += 300;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 8: case 9: case 10:
                            eddies += 600;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                    }
                    break;
                case 2:
                    returnString = `No gigs or jobs to be had this week`;
                    console.log(retrunString)
                    switch(rank){
                        case 1: case 2: case 3: case 4:
                            eddies += 0;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 5: case 6: case 7:
                            eddies += 100;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 8: case 9: case 10:
                            eddies += 300;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                    }
                    break;
                case 3:
                    returnString= `Played a big gig for a rich Corpo-rat or local personality`;
                    console.log(returnString);
                    switch(rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 300;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 5: case 6: case 7:
                            eddies += 500;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 8: case 9: case 10:
                            eddies += 800;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                    };
                    break;
                case 4:
                    returnString = `Got some royalties in for your most recent Data Pool download.`;
                    console.log(returnString);
                    switch(rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 300;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 5: case 6: case 7:
                            eddies += 500;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 8: case 9: case 10:
                            eddies += 800;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                    };
                    break;
                case 5:
                    returnString = `Opening act for a Big-Name group.`;
                    console.log(returnString);
                    switch(rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 300;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 5: case 6: case 7:
                            eddies += 500;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 8: case 9: case 10:
                            eddies += 800;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                    };
                    break;
                case 6:
                    returnString = `Personal appearance netted you a large fee.`;
                    console.log(retrunString);
                    switch(rank) {
                        case 1: case 2: case 3: case 4:
                            eddies += 200;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 5: case 6: case 7:
                            eddies += 300;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                        case 8: case 9: case 10:
                            eddies += 600;
                            console.log(`${eddies} eb gained!`);
                            returnArray.push(returnString, eddies)
                            return returnArray;
                    };
                    break;
            };
        };

    
    }

});