# Passionate People Coding Challenges

![Passionate People Coding Challenges](./pp-cc-logo.png)

## Instructions

run `yarn test` to run the latest challenge tests.
Develop your solution in `2021/w<week number>/solution.js` file until all tests pass.
Since you will send the contents of this file as your solution, all your code should be in this 1 file.

**WARNING!!: Do not commit your solution!** as that will disclose your approach to others!
The solution should be submitted via an upload link provided for each solution.

### Evaluation

You can also run the evaluation locally and compare various versions of your solution. This is the same script that is running in the cloud.
It can serve as a rough benchmark for relative performance. However, it might differ on the cloud machine due to different underlying hardware.

Run `node evaluate.js -c [challenge] -d [durationInSeconds]`.

## Ranking
Only correct solutions count. Failing at least 1 test case immediately disqualifies the solution.
So you should make sure the solution works with the provided tests before submitting it.
You can submit multiple versions of your solutions. At the end, only the fastest will be taken into account.

Ranking is based on performance. Fastest execution time (accross multiple tries) wins. F1 style points are awarded for each week.
- 1st place: 25 points
- 2nd place: 18 points
- 3rd: 15
- 4th: 12
- 5th: 10
- 6th: 8
- 7th: 6
- 8th: 4
- 9th: 2
- 10th: 1

### Extra points

- +5 points for the shortest solution (codegolf). Judged by the number of bytes your solution file has. If tied, both (or more) get awarded 5 points.
- +5 points determined via voting procedure. Ties are also possible.
- challenge creator gets as many points as participants in the challenge. (clamped to min: 10; max: 25)

**Note:** Since you can submit multiple solutions, the shortest and most elegant solution will be ranked apart from fastest. E.g. you can submit 3 solutions - one aimed to be fastest, another one to be the shortest and the 3rd one to be most readable/elegant/novel or otherwise noteworthy for the voting. It could very well be that a solution is both elegant and fast. So all correct solutions will be evaluated independently for each award category.

#### Voting process

Voting commences as soon as official run is completed.
Each Slack member can run `/vote` command and select the best solution of the last week.
The votes are counted after a week - the top one gets 5pts from jury. (ties are possible; then multiple get 5pts).

### Proxibited solutions

- mutating function inputs
- caching inputs directly to results, so that consequent evaluation cases would simply return ready result from map

Example:
```
const cache = {};

module.exports = (input) {
  if (cache[input]) return cache[input];

  // expensive computation
  const result = ....

  cache[input] = result;

  return result;
}
```

*Note:* Caching is disallowed for mapping inputs directly to results! Caching _intermediary_ results is not disallowed.

#### Fair play principles

In principle solution should rely only on JavaScript features to come up with correct solution inside the function that is being exported from the solutions file.
Using built in Node API's is allowed as long as it doesn't meddle with execution of tests or evaluation, or takes unfair advantage in any other way.

Prohibited approaches include
- requiring or meddling with test spec cases
- meddling how tests are run and evaluated
- meddling with how performance is evaluated
- meddling with or overwriting node internals (module, require, etc.)
- meddling with other solutions
- running npm commands as child process etc.
- using fs module to read/write other files/directories
- doing system calls or web requests to extenal services/servers (unless it's part of challenge)

We reserve right to update this list or disqualify a solution if we see that it is taking an unfair advantage and/or is unfair to other solutions.
This whole challenge concept is still a MVP and we iterate and improve as we go :) Thank you for your understanding ;)

#### Practical size limits

Since challenges are intended to be relatively small, solvable in short time and withhout excessive coding, there's a practical limit of max 2048 bytes per solution.
This also prevents taking advantage and precoding responses to the test spec.

## Tips and Tricks

[List of ideas from our participants](TIPS-AND-TRICKS.md)

## Authoring

If you'd like to contribute and create a challenge, here are instructions for [authoring](AUTHORING.md) one.

# Results


- [2021](2021/README.md)

## 2022

| Place | Name         | Week 05 | Week 06 | Week 07 | Week 08 | Week 09 | Week 10 | Week 11 | Week 12 | Total points |
|-------|--------------|---------|---------|---------|---------|---------|---------|---------|---------|--------------|
| 1.    | Lars         | 15      | 20      | 35      |         | 35      | 35      | 35      | 25      | 200          |
| 2.    | Aman         | 10      | 25      | 25      | 25      | 25      | 15      | 8       | 25      | 158          |
| 3.    | Lee          | 15      | 25      | 30      | 8       | 25      | 8       | 25      | 6       | 142          |
| 4.    | Hossein      |         | 2       | 30      | 25      | 15      | 15      | 20      | 12      | 119          |
| 5.    | Varun        | 35      | 25      | 6       |         |         |         | 2       | 15      | 83           |
| 6.    | Medhat       | 18      | 1       |         | 6       | 25      | 10      | 8       | 10      | 78           |
| 7.    | Luc          |         |         | 30      | 25      |         |         | 15      |         | 70           |
| 8.    | Daan         | 2       | 10      | 7       | 12      |         | 10      | 15      | 4       | 60           |
| 9.    | Joseph       | 8       | 10      | 11      | 10      | 4       |         |         | 4       | 47           |
| 10.   | Irene        |         | 25      |         |         | 8       |         |         |         | 33           |
| 11.   | Anuradha     | 11      | 10      | 11      |         |         |         |         |         | 32           |
| 12.   | Koodal       | 1       |         | 25      |         | 4       |         |         |         | 30           |
| 13.   | Tim          |         |         | 5       |         | 4       | 18      |         |         | 27           |
| 14.   | Josef        |         |         |         |         |         |         |         | 25      | 25           |
| 15.   | Adjoa        |         |         |         | 6       | 6       | 4       |         |         | 16           |
| 16.   | Andre Muijen |         |         |         |         |         | 6       | 4       |         | 10           |
| 17.   | Ji           | 6       |         |         | 2       |         |         |         |         | 8            |
| 18.   | Patrick      |         |         | 5       |         |         |         |         |         | 5            |
| 19.   | Amine        |         |         |         |         | 4       |         |         |         | 4            |
| 20.   | Matthias     |         | 1       |         |         |         |         |         |         | 1            |


### March

| Place | Name         | Week 09 | Week 10 | Week 11 | Week 12 | Week 13 | Total points |
|-------|--------------|---------|---------|---------|---------|---------|--------------|
| 1.    | Lars         | 35      | 35      | 35      | 25      |         | 130          |
| 2.    | Aman         | 25      | 15      | 8       | 25      |         | 73           |
| 3.    | Lee          | 25      | 8       | 25      | 6       |         | 64           |
| 4.    | Hossein      | 15      | 15      | 20      | 12      |         | 62           |
| 5.    | Medhat       | 25      | 10      | 8       | 10      |         | 53           |
| 6.    | Daan         |         | 10      | 15      | 4       |         | 29           |
| 7.    | Josef        |         |         |         | 25      |         | 25           |
| 8.    | Tim          | 4       | 18      |         |         |         | 22           |
| 9.    | Varun        |         |         | 2       | 15      |         | 17           |
| 10.   | Luc          |         |         | 15      |         |         | 15           |
| 11.   | Adjoa        | 6       | 4       |         |         |         | 10           |
|       | Andre Muijen |         | 6       | 4       |         |         | 10           |
| 13.   | Irene        | 8       |         |         |         |         | 8            |
|       | Joseph       | 4       |         |         | 4       |         | 8            |
| 15.   | Koodal       | 4       |         |         |         |         | 4            |
|       | Amine        | 4       |         |         |         |         | 4            |


### February

| Place | Name     | Week 05 | Week 06 | Week 07 | Week 08 | Total points |
|-------|----------|---------|---------|---------|---------|--------------|
| 1.    | Aman     | 10      | 25      | 25      | 25      | 85           |
| 2.    | Lee      | 15      | 25      | 30      | 8       | 78           |
| 3.    | Lars     | 15      | 20      | 35      |         | 70           |
| 4.    | Varun    | 35      | 25      | 6       |         | 66           |
| 5.    | Hossein  |         | 2       | 30      | 25      | 57           |
| 6.    | Luc      |         |         | 30      | 25      | 55           |
| 7.    | Joseph   | 8       | 10      | 11      | 10      | 39           |
| 8.    | Anuradha | 11      | 10      | 11      |         | 32           |
| 9.    | Daan     | 2       | 10      | 7       | 12      | 31           |
| 10.   | Koodal   | 1       |         | 25      |         | 26           |
| 11.   | Medhat   | 18      | 1       |         | 6       | 25           |
|       | Irene    |         | 25      |         |         | 25           |
| 13.   | Ji       | 6       |         |         | 2       | 8            |
| 14.   | Adjoa    |         |         |         | 6       | 6            |
| 15.   | Patrick  |         |         | 5       |         | 5            |
|       | Tim      |         |         | 5       |         | 5            |
| 17.   | Matthias |         | 1       |         |         | 1            |
