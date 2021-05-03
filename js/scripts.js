$(function () {
    let eddies = 0;

    
    rockerBoyHustle();

    function rockerBoyHustle(rank = 1) {
        let roll = Math.floor(Math.random()*6);
        switch(roll) {
            case 1:
                console.log("Played a small local gig");
                switch(rank){
                    case 1: case 2: case 3: case 4:
                        eddies += 200;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 5: case 6: case 7:
                        eddies += 300;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 8: case 9: case 10:
                        eddies += 600;
                        console.log(`${eddies} eb gained!`);
                        break;
                }
                break;
            case 2:
                console.log(`No gigs or jobs to be had this week`)
                switch(rank){
                    case 1: case 2: case 3: case 4:
                        eddies += 0;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 5: case 6: case 7:
                        eddies += 100;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 8: case 9: case 10:
                        eddies += 300;
                        console.log(`${eddies} eb gained!`);
                        break;
                }
                break;
            case 3:
                console.log(`Played a big gig for a rich Corpo-rat or local personality`)
                switch(rank) {
                    case 1: case 2: case 3: case 4:
                        eddies += 300;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 5: case 6: case 7:
                        eddies += 500;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 8: case 9: case 10:
                        eddies += 800;
                        console.log(`${eddies} eb gained!`);
                        break;
                }
                break;
            case 4:
                console.log(`Got some royalties in for your most recent Data Pool download.`)
                switch(rank) {
                    case 1: case 2: case 3: case 4:
                        eddies += 300;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 5: case 6: case 7:
                        eddies += 500;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 8: case 9: case 10:
                        eddies += 800;
                        console.log(`${eddies} eb gained!`);
                        break;
                }
                break;
            case 5:
                console.log(`Opening act for a Big-Name group.`)
                switch(rank) {
                    case 1: case 2: case 3: case 4:
                        eddies += 300;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 5: case 6: case 7:
                        eddies += 500;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 8: case 9: case 10:
                        eddies += 800;
                        console.log(`${eddies} eb gained!`);
                        break;
                }
                break;
            case 6:
                console.log(`Personal appearance netted you a large fee.`)
                switch(rank) {
                    case 1: case 2: case 3: case 4:
                        eddies += 200;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 5: case 6: case 7:
                        eddies += 300;
                        console.log(`${eddies} eb gained!`);
                        break;
                    case 8: case 9: case 10:
                        eddies += 600;
                        console.log(`${eddies} eb gained!`);
                        break;
                }
                break;
        }
    }

});