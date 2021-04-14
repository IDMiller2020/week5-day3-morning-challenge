function battle(good, evil) {
  let goodArr = good.split(' ')
  let evilArr = evil.split(' ')
  console.log(goodArr);
  console.log(evilArr)
  let goodTotal = 0
  let evilTotal = 0
  let goodPoints = [1,2,3,3,4,10]
  let evilPoints = [1,2,2,2,3,5,10]
  goodArr.forEach((g, i) => {
    let num = parseInt(g, 10) * goodPoints[i]
    goodTotal += num
  })
  evilArr.forEach((e, i) => {
    let num = parseInt(e, 10) * evilPoints[i]
    evilTotal += num
  })
  console.log(`Total Good: ${goodTotal}`);
  console.log(`Total Evil: ${evilTotal}`);
  if (goodTotal > evilTotal) {
    console.log('Good wins')
  } else if (evilTotal > goodTotal) {
    console.log('Evil wins')
  } else {
    console.log('Tie');
  }
}

battle('4 2 5 10 3 1', '1 2 10 2 2 1 1')
battle('4 2 5 10 3 1', '1 2 10 2 2 1 5')
battle('4 2 5 10 3 1', '1 2 10 2 2 3 5')
battle('4 2 5 10 3 1', '1 1 9 2 5 3 2')

// Good
// Hobbits - 1,
// Men - 2,
// Elves - 3,
// Dwarves - 3,
// Eagles - 4,
// Wizards - 10

// Evil
// Orcs - 1,
// Men - 2,
// Wargs - 2,
// Goblins - 2,
// Uruk Hai - 3,
// Trolls - 5,
// Wizards - 10

// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:

// On the Good Side:
// Hobbits - 1,
// Men - 2,
// Elves - 3,
// Dwarves - 3,
// Eagles - 4,
// Wizards - 10

// On the side of evil we have:
// Orcs - 1,
// Men - 2,
// Wargs - 2,
// Goblins - 2,
// Uruk Hai - 3,
// Trolls - 5,
// Wizards - 10

// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return
// if Good wins - "Battle Result: Good triumphs over Evil"

// if Evil Wins - "Battle Result: Evil eradicates all trace of Good"

// if Tied - "Battle Result: No victor on this battle field"