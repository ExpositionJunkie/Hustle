$(function () {

    let rockerboy = [[`Played a small local gig.`, 200, 300, 600], [`No gigs or jobs to be had this week.`, 0, 100, 300], [`Played a big gig for a rich Corporate or Local Personality.`, 300, 500, 800], [`Got some royalties in for your most recent
    Data Pool download.`, 300, 500, 800], [`Opening act for a Big-Name group`, 300, 500, 800], [`Personal appearance netted you a large fee.`, 200, 300, 600]];

    let solo = [[`Bodyguard work, low-end client`, 100, 200, 500], [`Bodyguard work, high-end client.`, 200, 300, 600], [`Difficult hit or extraction.`, 200, 300, 600], [`Hired out as muscle to a Fixer, Corp, or Gang.`, 100, 200, 500], [`Attracted undue attention, had to lay low.`, 0, 100, 300], [`Basic enforcer or hitman work for a local Corp`, 100, 200, 500]]

    var testRocker = rollHustle(rockerboy, 5, 3);
    console.log(`test Rocker: ${testRocker}`);

    var testSolo = rollHustle(solo, 6, 4);
    console.log(`test Solo: ${testSolo}`)

    function setTier(rank){
        switch(rank){
            case 1: case 2: case 3: case 4:
                tier = 1;
                return tier;
            case 5: case 6: case 7:
                tier = 2;
                return tier;
            case 8: case 9: case 10:
                tier = 3;
                return tier;
        }
    }

    function rollHustle(aClassArray, rank, daysToRoll) {
        let returnArray = [];
        let eddies = 0;
        let dayEddies;
        let message;
        let tier = setTier(rank);

        for (let days = 0; days < daysToRoll; days++) {
            let roll = Math.floor(Math.random()*6+1);
            message = aClassArray[roll-1][0]
            dayEddies = aClassArray[roll-1][tier];
            eddies += dayEddies;
            returnArray.push(message, dayEddies, eddies);
        };
        return returnArray;
    }
});