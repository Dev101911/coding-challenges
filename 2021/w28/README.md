# Week 28 challenge

Write a function `largestCommonDivisor` which takes in 2 numbers and returns the number which is the largest common divisor of both

Examples:
```
largestCommonDivisor(1, 2) // returns 1
largestCommonDivisor(3, 4) // returns 1
largestCommonDivisor(3, 12) // returns 3
largestCommonDivisor(15, 25) // returns 5
largestCommonDivisor(12, 18) // returns 6
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Lars        | 25          | 5        |            | 30           |
|       | Lee         | 25          | 5        |            | 30           |
|       | Pablo       | 25          | 5        |            | 30           |
| 4.    | Javad       | 25          |          |            | 25           |
|       | Ezzeddine   | 25          |          |            | 25           |
| 6.    | Tim         | 8           | 5        |            | 13           |
| 7.    | Hossein     | 8           |          |            | 8            |
|       | Anuradha    | 8           |          |            | 8            |
| 9.    | Gift        | 2           |          | 5          | 7            |
| 10.   | Jan Bart    | 2           |          |            | 2            |
| 11.   | Mettin      |             |          |            |              |

### Jury vote

1. gift2 - commented and clear
2. javad1 - hardcoding prime numbers
3. jmulders1 - shortcut if and recursion

### Screenshot

![2021 Week 28 podium](./podium.png)

![2021 Week 28 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 21/07/2021, 13:04:28
EVALUATING CHALLENGE:               2021/w28
FOUND 34 SOLUTIONS:                 anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, ezzeddine1.js, ezzeddine2.js, gift1.js, gift2.js, gift3.js,
                          gift4.js, gift5.js, hossein1.js, hossein2.js, javad1.js, javad3.js, javad4.js, javad5.js, jmulders1.js, lars1.js,
                          lars2.js, lars3.js, lars4.js, lars5.js, lars6.js, lee1.js, lee2.js, mettin1.js, pablo1.js, pablo2.js, tim1.js, tim2.js,
                          tim3.js, tim4.js, tim5.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   21/07/2021, 14:34:30
DURATION:                           1 hour, 30 minutes, 1.66 seconds

RANKINGS:
╔═══════╤════════╤════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name       │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lars6      │ 0.699ms │ 0.686ms  │ 0.012ms      │ 167  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ lee2       │ 0.713ms │ 0.698ms  │ 0.015ms      │ 223  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ javad5     │ 0.720ms │ 0.708ms  │ 0.012ms      │ 182  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ pablo1     │ 0.726ms │ 0.714ms  │ 0.012ms      │ 194  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ ezzeddine2 │ 0.729ms │ 0.717ms  │ 0.012ms      │ 292  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ tim5       │ 0.737ms │ 0.726ms  │ 0.011ms      │ 55   ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 8      │ hossein1   │ 0.754ms │ 0.739ms  │ 0.015ms      │ 180  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 8      │ anuradha1  │ 0.764ms │ 0.752ms  │ 0.012ms      │ 200  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ gift2      │ 0.869ms │ 0.857ms  │ 0.012ms      │ 310  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 2      │ jmulders1  │ 0.909ms │ 0.897ms  │ 0.012ms      │ 245  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 11    │        │ mettin1    │ 6.333ms │ 6.322ms  │ 0.011ms      │ 265  ║
╚═══════╧════════╧════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              lars5.js, lars4.js, javad3.js, javad4.js, lars1.js, gift5.js, gift3.js, gift4.js, anuradha2.js, tim3.js, ezzeddine1.js,
                          anuradha4.js, hossein2.js, anuradha3.js, javad1.js, gift1.js

ONLY CODEGOLF SOLUTIONS:            lars2.js, lars3.js, lee1.js, pablo2.js, tim2.js, tim4.js

CODEGOLF AWARD:                     lars3.js, lee1.js, pablo2.js, tim4.js with 36 bytes

FAILED SOLUTIONS:                   tim1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────────────┬───────┐
│ (index) │    solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │     failReason     │ runs  │
├─────────┼─────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────────────┼───────┤
│    0    │   'lars6.js'    │ 0.6986230001784861 │ 0.6864040000364184 │ 0.01221900014206767  │ 167  │ 'successfully' │ 16.380153000001883 │    false     │ false  │        null        │ 85700 │
│    1    │    'lee2.js'    │ 0.7134979993570596 │ 0.6984399994835258 │ 0.015057999873533845 │ 223  │ 'successfully' │ 19.61374199999773  │    false     │ false  │        null        │ 85700 │
│    2    │   'lars5.js'    │ 0.7164320002775639 │ 0.7043810002505779 │ 0.012051000026986003 │ 253  │ 'successfully' │ 16.83449599999949  │    false     │ false  │        null        │ 85700 │
│    3    │   'lars4.js'    │ 0.7186429998837411 │ 0.7065880000591278 │ 0.012054999824613333 │ 146  │ 'successfully' │ 15.690236999998888 │    false     │ false  │        null        │ 85700 │
│    4    │   'javad5.js'   │ 0.7195930001325905 │ 0.7076310000848025 │ 0.011962000047788024 │ 182  │ 'successfully' │ 8.804212000002735  │    false     │ false  │        null        │ 85700 │
│    5    │   'pablo1.js'   │ 0.7259590006433427 │ 0.7139740004204214 │ 0.011985000222921371 │ 194  │ 'successfully' │ 12.710966999999073 │    false     │ false  │        null        │ 85700 │
│    6    │ 'ezzeddine2.js' │ 0.729394999332726  │ 0.7172709992155433 │ 0.012124000117182732 │ 292  │ 'successfully' │ 20.09264400000029  │    false     │ false  │        null        │ 85700 │
│    7    │   'javad3.js'   │ 0.7300009997561574 │ 0.7178819999098778 │ 0.012118999846279621 │ 139  │ 'successfully' │ 10.255486000001838 │    false     │ false  │        null        │ 85700 │
│    8    │    'tim5.js'    │ 0.737296000123024  │ 0.7263070000335574 │ 0.010989000089466572 │  55  │ 'successfully' │ 38.80421500000011  │    false     │ false  │        null        │ 85700 │
│    9    │   'javad4.js'   │ 0.7526479999069124 │ 0.7405619998462498 │ 0.012086000060662627 │ 195  │ 'successfully' │ 8.703030000000581  │    false     │ false  │        null        │ 85700 │
│   10    │  'hossein1.js'  │ 0.7541470003779978 │ 0.7392920004203916 │ 0.014854999957606196 │ 180  │ 'successfully' │ 9.741544000000431  │    false     │ false  │        null        │ 85700 │
│   11    │ 'anuradha1.js'  │ 0.7638909999805037 │ 0.751510000001872  │ 0.012380999978631735 │ 200  │ 'successfully' │ 41.02414000000135  │    false     │ false  │        null        │ 85700 │
│   12    │   'gift2.js'    │ 0.8686879999004304 │ 0.8566089998930693 │ 0.012079000007361174 │ 310  │ 'successfully' │ 15.821460000002844 │    false     │ false  │        null        │ 85700 │
│   13    │   'lars1.js'    │ 0.889850000385195  │ 0.8777340003289282 │ 0.012116000056266785 │ 158  │ 'successfully' │ 7.911230999998224  │    false     │ false  │        null        │ 85700 │
│   14    │ 'jmulders1.js'  │ 0.909130999352783  │ 0.8970559993758798 │  0.0120749999769032  │ 245  │ 'successfully' │ 7.854917999997269  │    false     │ false  │        null        │ 85700 │
│   15    │   'gift5.js'    │ 0.9127759996335953 │ 0.9003049999009818 │ 0.012470999732613564 │  51  │ 'successfully' │ 11.856101000001217 │    false     │ false  │        null        │ 85700 │
│   16    │   'gift3.js'    │ 0.9276429999154061 │ 0.9155629999004304 │ 0.012080000014975667 │ 126  │ 'successfully' │ 11.925908000001073 │    false     │ false  │        null        │ 85700 │
│   17    │   'gift4.js'    │ 0.9302799998258706 │ 0.9181960000132676 │ 0.012083999812602997 │  54  │ 'successfully' │ 12.509796999998798 │    false     │ false  │        null        │ 85700 │
│   18    │ 'anuradha2.js'  │ 0.9382990002632141 │ 0.9264080002903938 │ 0.011890999972820282 │  43  │ 'successfully' │ 22.028870999998617 │    false     │ false  │        null        │ 85700 │
│   19    │    'tim3.js'    │ 0.9439240002830047 │ 0.9317469999950845 │ 0.012177000287920237 │ 155  │ 'successfully' │ 7.800143000000389  │    false     │ false  │        null        │ 85700 │
│   20    │ 'ezzeddine1.js' │ 0.9509279998019338 │ 0.9388810000382364 │ 0.012046999763697386 │ 181  │ 'successfully' │ 13.702527999997983 │    false     │ false  │        null        │ 85700 │
│   21    │ 'anuradha4.js'  │ 1.133003000082681  │ 1.1220170000160579 │ 0.010986000066623092 │  61  │ 'successfully' │ 21.81925599999886  │    false     │ false  │        null        │ 85700 │
│   22    │  'hossein2.js'  │ 1.1499010003171861 │ 1.1348690004087985 │ 0.015031999908387661 │ 224  │ 'successfully' │ 9.185257000001002  │    false     │ false  │        null        │ 85700 │
│   23    │ 'anuradha3.js'  │ 1.1575870006345212 │ 1.1453570006415248 │ 0.012229999992996454 │ 215  │ 'successfully' │ 13.980915000000095 │    false     │ false  │        null        │ 85700 │
│   24    │   'javad1.js'   │ 2.634335000999272  │ 2.6205500001087785 │ 0.013785000890493393 │ 790  │ 'successfully' │ 12.678036999997857 │    false     │ false  │        null        │ 85700 │
│   25    │  'mettin1.js'   │ 6.333368999767117  │ 6.3220600000349805 │ 0.011308999732136726 │ 265  │ 'successfully' │ 709.8094470000033  │    false     │ false  │        null        │ 85700 │
│   26    │   'gift1.js'    │ 13.101154999807477 │ 13.087664999999106 │ 0.013489999808371067 │ 305  │ 'successfully' │ 28.297521000000415 │    false     │ false  │        null        │ 85700 │
│   27    │   'lars2.js'    │        null        │        null        │         null         │  40  │ 'successfully' │ 16.28929000000062  │     true     │ false  │        null        │   0   │
│   28    │   'lars3.js'    │        null        │        null        │         null         │  36  │ 'successfully' │ 23.43640400000004  │     true     │ false  │        null        │   0   │
│   29    │    'lee1.js'    │        null        │        null        │         null         │  36  │ 'successfully' │ 31.22208899999896  │     true     │ false  │        null        │   0   │
│   30    │   'pablo2.js'   │        null        │        null        │         null         │  36  │ 'successfully' │ 17.483682999998564 │     true     │ false  │        null        │   0   │
│   31    │    'tim1.js'    │        null        │        null        │         null         │ 135  │ 'successfully' │ 0.2278569999980391 │    false     │  true  │ 'Incorrect result' │   0   │
│   32    │    'tim2.js'    │        null        │        null        │         null         │  38  │ 'successfully' │ 16.299913999999262 │     true     │ false  │        null        │   0   │
│   33    │    'tim4.js'    │        null        │        null        │         null         │  36  │ 'successfully' │ 15.454189999996743 │     true     │ false  │        null        │   0   │
└─────────┴─────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────────────┴───────┘
```