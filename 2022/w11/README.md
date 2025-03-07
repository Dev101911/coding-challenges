# Week 11 challenge

Write a function `truncIt` which accepts an array and returns the sum without the smallest and the largest item.
If there are multiple smallest or largest values, only one of each (min and/or max) is removed


*Note:* Array with no items remaining returns 0.

Examples:
```
truncIt([1, 2, 3, 4]) // returns 5
truncIt([1, 1, 2, 3, 4]) // returns 6
truncIt([1, 2, 3, 4, 4]) // returns 9
truncIt([1, 1, 2, 3, 4, 4]) // returns 10
truncIt([]) // returns 0
truncIt([1]) // returns 0
truncIt([1, 1]) // returns 0
truncIt([1, 4]) // returns 0
truncIt([1, 4, 6, 8, 12, -4]) // returns 19
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Lars         | 25          | 5        | 5     | 35           |
| 2.    | Lee          | 25          |          |       | 25           |
| 3.    | Hossein      | 15          | 5        |       | 20           |
| 4.    | Daan         | 15          |          |       | 15           |
|       | Luc          | 15          |          |       | 15           |
| 6.    | Medhat       | 8           |          |       | 8            |
|       | Aman         | 8           |          |       | 8            |
| 8.    | Andre Muijen | 4           |          |       | 4            |
| 9.    | Varun        | 2           |          |       | 2            |


### Screenshot

![2022 Week 11 podium](./podium.png)

![2022 Week 11 results](./results.png)

### Vote

```
╔════════════════╤═══════╤════════════════════════════════════════╗
║ Name           │ Vote  │ Comment                                ║
╟────────────────┼───────┼────────────────────────────────────────╢
║ hossein        │ lars4 │ Again! Voting myself not Lars :p       ║
╟────────────────┼───────┼────────────────────────────────────────╢
║ harijs.deksnis │ lee1  │ One submission and right away fastest! ║
╟────────────────┼───────┼────────────────────────────────────────╢
║ varun          │ lars5 │ Keeping it simple                      ║
╚════════════════╧═══════╧════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 23/03/2022, 12:06:49
EVALUATING CHALLENGE:               2022/w11
FOUND 23 SOLUTIONS:                 aman1.js, andremuijen1.js, andremuijen2.js, andremuijen3.js, daan1.js, daan2.js, daan3.js, daan4.js, hossein1.js,
                          hossein2.js, hossein3.js, lars1.js, lars2.js, lars3.js, lars4.js, lars5.js, lee1.js, luc1.js, luc2.js, luc3.js,
                          medhat1.js, medhat2.js, varun1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   23/03/2022, 13:36:58
DURATION:                           1 hour, 30 minutes, 8.483 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lee1         │ 1.040ms │ 1.026ms  │ 0.014ms      │ 422  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ lars5        │ 1.055ms │ 1.042ms  │ 0.014ms      │ 386  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ daan2        │ 1.106ms │ 1.092ms  │ 0.014ms      │ 427  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 15     │ hossein2     │ 1.119ms │ 1.105ms  │ 0.014ms      │ 368  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 15     │ luc3         │ 1.150ms │ 1.137ms  │ 0.013ms      │ 220  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ medhat1      │ 1.194ms │ 1.180ms  │ 0.014ms      │ 366  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 8      │ aman1        │ 1.239ms │ 1.226ms  │ 0.013ms      │ 321  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ andremuijen3 │ 1.481ms │ 1.467ms  │ 0.014ms      │ 227  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ varun1       │ 1.786ms │ 1.771ms  │ 0.014ms      │ 382  ║
╚═══════╧════════╧══════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              lars3.js, daan4.js, daan1.js, daan3.js, andremuijen2.js, lars1.js, luc1.js, medhat2.js, lars4.js, hossein1.js,
                          hossein3.js, lars2.js

CODEGOLF AWARD:                     hossein3.js, lars4.js with 69 bytes

FAILED SOLUTIONS:                   andremuijen1.js, luc2.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────────────┬───────┐
│ (index) │     solution      │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │     failReason     │ runs  │
├─────────┼───────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────────────┼───────┤
│    0    │     'lee1.js'     │ 1.039690000237897  │ 1.0256910000462085 │ 0.013999000191688538 │ 422  │ 'successfully' │ 53.92201799999748  │    false     │ false  │        null        │ 17000 │
│    1    │    'lars5.js'     │ 1.0552269998006523 │ 1.041501000057906  │ 0.013725999742746353 │ 386  │ 'successfully' │ 141.36542200000258 │    false     │ false  │        null        │ 17000 │
│    2    │    'lars3.js'     │ 1.0723210000433028 │ 1.058255999814719  │ 0.014065000228583813 │ 423  │ 'successfully' │ 146.28288299999986 │    false     │ false  │        null        │ 17000 │
│    3    │    'daan2.js'     │ 1.1061050001881085 │ 1.0922750001773238 │ 0.013830000010784715 │ 427  │ 'successfully' │ 59.15966800000024  │    false     │ false  │        null        │ 17000 │
│    4    │    'daan4.js'     │ 1.1163769997656345 │ 1.102489999961108  │ 0.013886999804526567 │ 479  │ 'successfully' │ 63.18634999999995  │    false     │ false  │        null        │ 17000 │
│    5    │   'hossein2.js'   │ 1.1189920000033453 │ 1.1050299999769777 │ 0.013962000026367605 │ 368  │ 'successfully' │ 65.41847899999993  │    false     │ false  │        null        │ 17000 │
│    6    │     'luc3.js'     │ 1.1497670002281666 │ 1.1368950000032783 │ 0.012872000224888325 │ 220  │ 'successfully' │ 55.29649200000131  │    false     │ false  │        null        │ 17000 │
│    7    │   'medhat1.js'    │ 1.1935600000433624 │ 1.1796079999767244 │ 0.013952000066637993 │ 366  │ 'successfully' │ 57.26847900000212  │    false     │ false  │        null        │ 17000 │
│    8    │    'daan1.js'     │ 1.2243040001485497 │ 1.2105539999902248 │ 0.013750000158324838 │ 427  │ 'successfully' │ 67.50328000000081  │    false     │ false  │        null        │ 17000 │
│    9    │    'aman1.js'     │ 1.2385220000287518 │ 1.225882999948226  │ 0.012639000080525875 │ 321  │ 'successfully' │ 276.4576649999981  │    false     │ false  │        null        │ 17000 │
│   10    │ 'andremuijen3.js' │ 1.481155999994371  │ 1.4671380000072531 │ 0.014017999987117946 │ 227  │ 'successfully' │  85.207653999998   │    false     │ false  │        null        │ 17000 │
│   11    │    'varun1.js'    │ 1.7857749999966472 │ 1.771307999966666  │ 0.014467000029981136 │ 382  │ 'successfully' │ 71.97157300000254  │    false     │ false  │        null        │ 17000 │
│   12    │    'daan3.js'     │  3.08532000053674  │ 3.072130000218749  │ 0.01319000031799078  │  81  │ 'successfully' │ 130.05664400000023 │    false     │ false  │        null        │ 17000 │
│   13    │ 'andremuijen2.js' │ 7.437569000001531  │ 7.422860999999102  │ 0.01470800000242889  │ 291  │ 'successfully' │ 86.76977199999965  │    false     │ false  │        null        │ 17000 │
│   14    │    'lars1.js'     │ 15.163596999947913 │ 15.14756099996157  │ 0.016035999986343086 │ 554  │ 'successfully' │  91.9278630000008  │    false     │ false  │        null        │ 17000 │
│   15    │     'luc1.js'     │ 17.376924000214785 │ 17.362927000038326 │ 0.01399700017645955  │  78  │ 'successfully' │ 208.20901700000104 │    false     │ false  │        null        │ 17000 │
│   16    │   'medhat2.js'    │ 27.06847600004403  │ 27.053698000032455 │ 0.014778000011574477 │  74  │ 'successfully' │ 120.45246000000043 │    false     │ false  │        null        │ 17000 │
│   17    │    'lars4.js'     │ 46.25479499978246  │ 46.23913599998923  │ 0.015658999793231487 │  69  │ 'successfully' │ 206.31516199999896 │    false     │ false  │        null        │ 17000 │
│   18    │   'hossein1.js'   │ 46.469370000530034 │ 46.45347100030631  │ 0.015899000223726034 │  70  │ 'successfully' │ 238.95987400000013 │    false     │ false  │        null        │ 17000 │
│   19    │   'hossein3.js'   │ 46.87953799997922  │  46.8636669999687  │ 0.01587100001052022  │  69  │ 'successfully' │ 241.16264500000034 │    false     │ false  │        null        │ 17000 │
│   20    │    'lars2.js'     │ 48.54675300011877  │ 48.53132700000424  │ 0.015426000114530325 │  77  │ 'successfully' │ 242.67823599999974 │    false     │ false  │        null        │ 17000 │
│   21    │ 'andremuijen1.js' │        null        │        null        │         null         │ 228  │ 'successfully' │ 54.23717100000067  │    false     │  true  │ 'Incorrect result' │   0   │
│   22    │     'luc2.js'     │        null        │        null        │         null         │  72  │ 'successfully' │ 12.075980999998137 │    false     │  true  │ 'Incorrect result' │   0   │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────────────┴───────┘
```
  