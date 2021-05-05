$(function () {

    // classes entered as arrays
    let rockerboy = [[`Played a small local gig.`, 200, 300, 600], [`No gigs or jobs to be had this week.`, 0, 100, 300], [`Played a big gig for a rich Corporate or Local Personality.`, 300, 500, 800], [`Got some royalties in for your most recent
    Data Pool download.`, 300, 500, 800], [`Opening act for a Big-Name group`, 300, 500, 800], [`Personal appearance netted you a large fee.`, 200, 300, 600]];

    let solo = [[`Bodyguard work, low-end client.`, 100, 200, 500], [`Bodyguard work, high-end client.`, 200, 300, 600], [`Difficult hit or extraction.`, 200, 300, 600], [`Hired out as muscle to a Fixer, Corp, or Gang.`, 100, 200, 500], [`Attracted undue attention, had to lay low.`, 0, 100, 300], [`Basic enforcer or hitman work for a local Corp.`, 100, 200, 500]];

    let netrunner = [[`Cracked a small system and sold the data.`, 100, 200, 500], [`Cracked a major Corporate system and sold the data.`, 200, 300, 600], [`You got sidetracked and didn't hack anything this week`, 0, 100, 300], [`Found a valuable cache in an abandoned system and sold it.`, 200, 300, 600], [`Brought down a minor system with ransomware and got paid off to uninstall it.`, 200, 300, 600], [`Sabotaged or otherwise disabled a major system for a faceless client.`, 200, 300, 600]];

    let tech = [[`No jobs this week.`, 0, 100, 300], [`Rebuilt some tech you scavenged in the Combat Zone.`, 100, 200, 500], [`Helped a client break into some place or installed security systems for a client.`, 200, 300, 600], [`Did some modifications or repairs to some cybertech.`, 100, 200, 500], [`Didd some modifications or repairs to some weapons`, 100, 200, 500], [`Sabotaged or otherwise disabled something for a client.`, 100, 200, 500]];

    let medtech = [[`Patched up someone after a firefight.`, 100, 200, 500], [`Sold cyberware from a 'failed' medical case.`, 200, 300, 600], [`Helped Trauma Team on some backup work when they were overloaded`, 100, 200, 500], [`Did some minor "free clinc" work for locals. You can't eat goodwill, though.`, 0, 100, 300], [`Did a major medical procedure for a very well-heeled client.`, 200, 300, 600], [`Designed and delivered medicines or street drugs to a client.`, 100, 200, 500]];

    let media = [[`Wrote an expose that covered a major topic, 
    made a big sale.`, 300, 500, 800], [`Wrote a popular "puff piece" that got you some 
    notice and some cash.`, 200, 300, 600], [`Did some boring ad writing to pay the bills.`, 200, 300, 600], [`Exposed a big story that got you a few enemies 
    and some cash.`, 200, 300, 600], [`No good stories or leads this week.`, 0, 100, 300], [`Wrote an expose that blew the lid off a major topic.`, 300, 500, 800]];

    let lawman = [[`Made a few minor busts, business as usual.`, 100, 200, 500], [`Got a reward from a grateful citizen. Or was it a bribe?`, 200, 300, 600], [`Bust went bad, and it came out of your salary.`, 0, 100, 300], [`Nothing much happened this week. 
    Collected a paycheck and that was it`, 100, 200, 500], [`Pulled off a major drug or smuggling bust and gained a bonus from the boss`, 200, 300, 600], [`Took down a big gang and got some of a 
    "civil seizure" bonus.`, 200, 300, 600]];

    let exec = [[`Landed a moderate success on a project, earned a reward bonus.`, 300, 500, 800], [`Nothing much happened, and Coporate was unimpressed. Lost a bonus.`, 0, 100, 300], [`Collected a paycheck and that was it.`, 200, 300, 600], [`Got some dirt on a rival and used it to scare a bonus.`, 300, 500, 800], [`Pulled off a major project success and gained a bonus from the Head Office.`, 300, 500, 800], [`Took out a legitimate target that was threatening a job and took their funding.`, 200, 300, 600]];

    let fixer = [[`Got a Media some information for a good bribe.`, 200, 300, 600], [`Got Rocker a good Gig for your 12% fee.`, 200, 300, 600], [`Helped a client locate a desirable item they needed and got a cut.`, 200, 300, 600], [`Deal went south; you're keeping your head down 'till it blows over.`, 0, 100, 300], [`Got a Solo or Netrunner a profitable "job" and took your agency fee.`, 200, 300, 600], [`Brought in a rare, illegal, or very hard to get item for a client.`, 300, 500, 800]];

    let nomad =[[`Made a legit shipment.`, 100, 200, 500], [`Protected a shipment.`, 100, 200, 500], [`Smuggled some small contraband.`, 10, 200, 500], [`Smuggled a huge shipment.`, 200, 300, 600], [`Delivered a client safely to a destination.`, 100, 200, 500], [`Couldn't find work this week, legit or otherwise.`, 0, 100, 300]];

    // testing as I enter new classes
    var testRocker = rollHustle(rockerboy, 6, 4);
    console.log(`test Rocker: ${testRocker}`);

    var testSolo = rollHustle(solo, 6, 4);
    console.log(`test Solo: ${testSolo}`);

    var testNetrunner = rollHustle(netrunner, 6, 4);
    console.log(`test Netrunner: ${testNetrunner}`)

    var testTech = rollHustle(tech, 6, 4);
    console.log(`test Tech: ${testTech}`);

    var testMedtech = rollHustle(medtech, 6, 4);
    console.log(`test Medtech: ${testMedtech}`);

    var testMedia = rollHustle(media, 6, 4);
    console.log(`test Media: ${testMedia}`);

    var testLawman = rollHustle(lawman, 6, 4);
    console.log(`test Lawman: ${testLawman}`);

    var testExec = rollHustle(exec, 6, 4);
    console.log(`test Exec: ${testExec}`);

    var testFixer = rollHustle(fixer, 6, 4);
    console.log(`test Fixer: ${testFixer}`);

    var testNomad = rollHustle(nomad, 6, 4);
    console.log(`test Nomad: ${testNomad}`)


    // this will be called in rollHustle() because the ranks are in tiers
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

    // does the heavy lifting, searches class arrays based on rank and adds up eddies as it goes
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