# Week 12 challenge

Write a function `expandIt` which accepts a number and returns a string in Mathematical Expanded Notation


Examples:
```
expandIt(4) // returns '4'
expandIt(17) // returns '10 + 7'
expandIt(1024) // returns '1000 + 20 + 4'
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name    | Performance | Codegolf | Vote  | Total points |
|-------|---------|-------------|----------|-------|--------------|
| 1.    | Lars    | 25          |          |       | 25           |
|       | Aman    | 25          |          |       | 25           |
|       | Josef   | 25          |          |       | 25           |
| 4.    | Varun   | 10          | 5        | 5     | 20           |
| 5.    | Hossein | 12          |          |       | 12           |
| 6.    | Medhat  | 10          |          |       | 10           |
| 7.    | Lee     | 6           |          |       | 6            |
| 8.    | Joseph  | 4           |          |       | 4            |
|       | Daan    | 4           |          |       | 4            |


### Screenshot

![2022 Week 12 podium](./podium.png)

![2022 Week 12 results](./results.png)

### Vote

```
╔════════════════╤══════════╤════════════════════════════════════╗
║ Name           │ Vote     │ Comment                            ║
╟────────────────┼──────────┼────────────────────────────────────╢
║ harijs.deksnis │ varun2   │ nicely formatted code              ║
╟────────────────┼──────────┼────────────────────────────────────╢
║ joseph         │ varun4   │ Last minute winner on codegolf     ║
╟────────────────┼──────────┼────────────────────────────────────╢
║ varun          │ hossein2 │ Unique reduceRight solution        ║
╟────────────────┼──────────┼────────────────────────────────────╢
║ hossein        │ varun4   │ Golfer                             ║
╟────────────────┼──────────┼────────────────────────────────────╢
║ aman.tuladhar  │ josef2   │ Concise and performant             ║
╟────────────────┼──────────┼────────────────────────────────────╢
║ peter-paul     │ aman1    │ clean and fast one-shot submission ║
╚════════════════╧══════════╧════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 30/03/2022, 12:06:57
EVALUATING CHALLENGE:               2022/w12
FOUND 24 SOLUTIONS:                 aman1.js, daan1.js, hossein1.js, hossein2.js, hossein3.js, hossein4.js, hossein5.js, josef1.js, josef2.js, josef3.js,
                          joseph1.js, joseph2.js, lars1.js, lars2.js, lars3.js, lee1.js, medhat1.js, medhat2.js, medhat3.js, medhat4.js, varun1.js,
                          varun2.js, varun3.js, varun4.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   30/03/2022, 13:37:01
DURATION:                           1 hour, 30 minutes, 2.637 seconds

RANKINGS:
╔═══════╤════════╤══════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name     │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lars1    │ 1.073ms │ 1.059ms  │ 0.014ms      │ 318  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ aman1    │ 1.094ms │ 1.079ms  │ 0.015ms      │ 478  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ josef2   │ 1.104ms │ 1.091ms  │ 0.013ms      │ 170  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ hossein5 │ 1.178ms │ 1.158ms  │ 0.020ms      │ 543  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ medhat4  │ 1.539ms │ 1.525ms  │ 0.014ms      │ 444  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 10     │ varun2   │ 1.598ms │ 1.583ms  │ 0.015ms      │ 382  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ lee1     │ 2.775ms │ 2.761ms  │ 0.015ms      │ 318  ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ joseph2  │ 7.086ms │ 7.073ms  │ 0.013ms      │ 86   ║
╟───────┼────────┼──────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 4      │ daan1    │ 7.130ms │ 7.113ms  │ 0.017ms      │ 403  ║
╚═══════╧════════╧══════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              hossein4.js, hossein1.js, josef3.js, medhat1.js, varun1.js, josef1.js, medhat3.js, joseph1.js, medhat2.js, hossein2.js,
                          lars3.js, lars2.js

ONLY CODEGOLF SOLUTIONS:            hossein3.js, varun3.js, varun4.js

CODEGOLF AWARD:                     varun4.js with 79 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │   solution    │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼───────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │  'lars1.js'   │ 1.0729259997606277 │ 1.0587369995191693 │ 0.014189000241458416 │ 318  │ 'successfully' │ 14.18593399999736  │    false     │ false  │    null    │ 40550 │
│    1    │  'aman1.js'   │ 1.0936929997988045 │ 1.0791409998200834 │ 0.014551999978721142 │ 478  │ 'successfully' │ 31.59148400000049  │    false     │ false  │    null    │ 40550 │
│    2    │  'josef2.js'  │ 1.1040229995269328 │ 1.0912200000602752 │ 0.012802999466657639 │ 170  │ 'successfully' │ 13.405106000001979 │    false     │ false  │    null    │ 40550 │
│    3    │ 'hossein5.js' │ 1.1780330003239214 │ 1.1582230003550649 │ 0.019809999968856573 │ 543  │ 'successfully' │ 18.350351000000956 │    false     │ false  │    null    │ 40550 │
│    4    │ 'hossein4.js' │ 1.1788750000414439 │ 1.1651359999668784 │ 0.01373900007456541  │ 601  │ 'successfully' │ 16.46016900000177  │    false     │ false  │    null    │ 40550 │
│    5    │ 'hossein1.js' │ 1.1899469992495142 │ 1.1760140000260435 │ 0.013932999223470688 │ 467  │ 'successfully' │ 28.841589999999997 │    false     │ false  │    null    │ 40550 │
│    6    │  'josef3.js'  │ 1.490095000131987  │ 1.4773509999504313 │ 0.012744000181555748 │  95  │ 'successfully' │ 106.84139499999947 │    false     │ false  │    null    │ 40550 │
│    7    │ 'medhat4.js'  │ 1.5391880003735423 │ 1.525449000298977  │ 0.01373900007456541  │ 444  │ 'successfully' │ 13.842670000001817 │    false     │ false  │    null    │ 40550 │
│    8    │  'varun2.js'  │ 1.598480999469757  │ 1.5833449997007847 │ 0.015135999768972397 │ 382  │ 'successfully' │ 12.766529000000446 │    false     │ false  │    null    │ 40550 │
│    9    │ 'medhat1.js'  │ 1.9084970001131296 │ 1.8932460001669824 │ 0.015250999946147203 │ 483  │ 'successfully' │ 15.64557799999966  │    false     │ false  │    null    │ 40550 │
│   10    │  'varun1.js'  │ 2.366126999957487  │ 2.351581000024453  │ 0.014545999933034182 │  90  │ 'successfully' │ 45.11324500000046  │    false     │ false  │    null    │ 40550 │
│   11    │   'lee1.js'   │ 2.7754750000312924 │  2.76097400020808  │ 0.014500999823212624 │ 318  │ 'successfully' │ 17.905941000000894 │    false     │ false  │    null    │ 40550 │
│   12    │  'josef1.js'  │  5.11867499910295  │ 5.104129999876022  │ 0.014544999226927757 │ 231  │ 'successfully' │ 30.61862100000144  │    false     │ false  │    null    │ 40550 │
│   13    │ 'joseph2.js'  │ 7.085984999779612  │ 7.072578999679536  │ 0.013406000100076199 │  86  │ 'successfully' │ 29.996178999997937 │    false     │ false  │    null    │ 40550 │
│   14    │  'daan1.js'   │ 7.130384999793023  │  7.11333499988541  │  0.0170499999076128  │ 403  │ 'successfully' │ 41.66138299999875  │    false     │ false  │    null    │ 40550 │
│   15    │ 'medhat3.js'  │ 7.487996000330895  │ 7.4745310000143945 │ 0.013465000316500664 │  89  │ 'successfully' │ 32.26091399999859  │    false     │ false  │    null    │ 40550 │
│   16    │ 'joseph1.js'  │ 7.846823000116274  │ 7.834009000100195  │ 0.012814000016078353 │  99  │ 'successfully' │ 31.215947000000597 │    false     │ false  │    null    │ 40550 │
│   17    │ 'medhat2.js'  │ 8.308447000104934  │ 8.294755000155419  │ 0.013691999949514866 │  94  │ 'successfully' │ 29.89772399999856  │    false     │ false  │    null    │ 40550 │
│   18    │ 'hossein2.js' │  9.11167400010163  │ 9.097746999992523  │ 0.013927000109106302 │  93  │ 'successfully' │ 45.44071899999835  │    false     │ false  │    null    │ 40550 │
│   19    │  'lars3.js'   │ 11.845547000411898 │ 11.832182000391185 │ 0.013365000020712614 │  80  │ 'successfully' │ 124.59248200000002 │    false     │ false  │    null    │ 40550 │
│   20    │  'lars2.js'   │ 26.16557800024748  │  26.1513529997319  │ 0.014225000515580177 │  99  │ 'successfully' │ 153.15802600000097 │    false     │ false  │    null    │ 40550 │
│   21    │ 'hossein3.js' │        null        │        null        │         null         │  81  │ 'successfully' │ 78.31173599999966  │     true     │ false  │    null    │   0   │
│   22    │  'varun3.js'  │        null        │        null        │         null         │  81  │ 'successfully' │  21.6184170000015  │     true     │ false  │    null    │   0   │
│   23    │  'varun4.js'  │        null        │        null        │         null         │  79  │ 'successfully' │ 22.973400999999285 │     true     │ false  │    null    │   0   │
└─────────┴───────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  