# Week 23 challenge

You need to write `howLong` function, which takes in a number representing seconds and returns a string in a human readable form.

Inputs range from 1 to 100000000 seconds (including)

**Notes:**
- parts are separated by commas, except the last (or only) parts are separated by "and"
- if there is a single part, it is written as singular, otherwise as plural
- output starts with larger units (e.g., years before months)
- parts with 0 units are skipped

Examples:
```
howLong(1) // returns "1 second"
howLong(60) // returns "1 minute"
howLong(123) // returns "2 minutes and 3 seconds"
howLong(3599) // returns "59 minutes and 59 seconds"
howLong(3600) // returns "1 hour"
howLong(3601) // returns "1 hour and 1 second"
howLong(100000) // returns "1 day, 3 hours, 46 minutes and 40 seconds"
howLong(1000000) // returns "11 days, 13 hours, 46 minutes and 40 seconds"
howLong(10000000) // returns "115 days, 17 hours, 46 minutes and 40 seconds"
howLong(100000000) // returns "3 years, 62 days, 9 hours, 46 minutes and 40 seconds"
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Peter-Paul  | 25          | 5        |            | 30           |
| 2.    | Lars        | 25          |          |            | 25           |
| 3.    | Mettin      | 15          |          |            | 15           |
| 4.    | Aman        | 12          |          |            | 12           |
| 5.    | Irene       | 10          |          |            | 10           |
| 6.    | Jan Bart    | 8           |          |            | 8            |
| 7.    | Dexter      | 6           |          |            | 6            |
|       | Alexander   | 6           |          |            | 6            |
|       | Lee         | 1           |          | 5          | 6            |
| 10.   | Tim         | 2           |          |            | 2            |

### Jury vote

#### David

1. jmulders1 - most readable solution
2. dexter1 - similair to jmulders1 just a little less readable
3. lee21 - creativity award for hacking the system

#### Harijs

1. lee21 - finding a way to require a module nevertheless
2. Lars/Peter-Paul - finding an optimal balance between pregeneration and computation

### Screenshot

![2021 Week 23 podium](./podium.png)

![2021 Week 23 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 16/06/2021, 12:08:21
EVALUATING CHALLENGE:               2021/w23
FOUND 24 SOLUTIONS:                 alexanderquintero1.js, alexanderquintero2.js, alexanderquintero3.js, alexanderquintero4.js, aman1.js, dexter1.js,
                          dexter2.js, dexter3.js, irene1.js, jmulders1.js, lars1.js, lars2.js, lee1.js, lee21.js, mettin1.js, mettin2.js,
                          mettin3.js, mettin4.js, mettin5.js, mettin6.js, peter-paul1.js, peter-paul2.js, peter-paul3.js, tim1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   16/06/2021, 13:38:22
DURATION:                           1 hour, 30 minutes, 0.483 seconds

RANKINGS:
╔═══════╤════════╤════════════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name               │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lars2              │ 1.571ms │ 1.476ms  │ 0.094ms      │ 1621 ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ peter-paul1        │ 1.613ms │ 1.556ms  │ 0.057ms      │ 973  ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ mettin6            │ 1.831ms │ 1.819ms  │ 0.012ms      │ 1015 ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ aman1              │ 2.113ms │ 2.098ms  │ 0.015ms      │ 728  ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ irene1             │ 2.876ms │ 2.862ms  │ 0.014ms      │ 1429 ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ jmulders1          │ 3.213ms │ 3.197ms  │ 0.016ms      │ 549  ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ dexter1            │ 3.692ms │ 3.672ms  │ 0.020ms      │ 607  ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 6      │ alexanderquintero4 │ 3.702ms │ 3.689ms  │ 0.014ms      │ 312  ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ tim1               │ 4.367ms │ 4.353ms  │ 0.014ms      │ 1398 ║
╟───────┼────────┼────────────────────┼─────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ lee1               │ 6.567ms │ 6.551ms  │ 0.016ms      │ 1580 ║
╚═══════╧════════╧════════════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              mettin4.js, mettin5.js, lars1.js, mettin3.js, dexter2.js, alexanderquintero3.js, alexanderquintero1.js,
                          alexanderquintero2.js, mettin1.js, mettin2.js, peter-paul2.js, peter-paul3.js, dexter3.js, lee21.js

CODEGOLF AWARD:                     peter-paul3.js with 187 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │        solution         │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼─────────────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │       'lars2.js'        │ 1.570735000539571  │ 1.4763780003413558 │ 0.09435700019821525  │ 1621 │ 'successfully' │ 15.992519000003085 │    false     │ false  │    null    │ 24500 │
│    1    │    'peter-paul1.js'     │ 1.613001000136137  │ 1.5556690003722906 │  0.0573319997638464  │ 973  │ 'successfully' │ 12.315593999999692 │    false     │ false  │    null    │ 24500 │
│    2    │      'mettin6.js'       │ 1.8309659997466952 │ 1.8185529997572303 │ 0.012412999989464879 │ 1015 │ 'successfully' │ 22.39654899999732  │    false     │ false  │    null    │ 24500 │
│    3    │       'aman1.js'        │ 2.1131170000880957 │ 2.0982370004057884 │ 0.014879999682307243 │ 728  │ 'successfully' │ 25.58193499999834  │    false     │ false  │    null    │ 24500 │
│    4    │      'mettin4.js'       │ 2.7319909995421767 │  2.71940999943763  │ 0.012581000104546547 │ 886  │ 'successfully' │ 25.615913000001456 │    false     │ false  │    null    │ 24500 │
│    5    │      'mettin5.js'       │ 2.7460890007205307 │ 2.733130000066012  │ 0.012959000654518604 │ 896  │ 'successfully' │ 24.865849999998318 │    false     │ false  │    null    │ 24500 │
│    6    │       'irene1.js'       │ 2.8759009997011162 │ 2.861728000047151  │ 0.014172999653965235 │ 1429 │ 'successfully' │ 13.69689500000095  │    false     │ false  │    null    │ 24500 │
│    7    │       'lars1.js'        │ 3.081807999871671  │ 3.066717999987304  │ 0.01508999988436699  │ 1330 │ 'successfully' │ 19.48132700000133  │    false     │ false  │    null    │ 24500 │
│    8    │     'jmulders1.js'      │ 3.2130959999049082 │ 3.1971709999488667 │ 0.015924999956041574 │ 549  │ 'successfully' │ 38.140143000000535 │    false     │ false  │    null    │ 24500 │
│    9    │      'dexter1.js'       │ 3.691715999506414  │ 3.671870999969542  │ 0.01984499953687191  │ 607  │ 'successfully' │ 27.78393000000142  │    false     │ false  │    null    │ 24500 │
│   10    │ 'alexanderquintero4.js' │ 3.7023520001675934 │ 3.6885760000441223 │ 0.013776000123471022 │ 312  │ 'successfully' │ 30.784999999999854 │    false     │ false  │    null    │ 24500 │
│   11    │        'tim1.js'        │ 4.367206000024453  │  4.35282799997367  │ 0.014378000050783157 │ 1398 │ 'successfully' │ 20.54088000000047  │    false     │ false  │    null    │ 24500 │
│   12    │      'mettin3.js'       │ 6.556759000290185  │ 6.543959000147879  │ 0.01280000014230609  │ 286  │ 'successfully' │ 41.32234199999948  │    false     │ false  │    null    │ 24500 │
│   13    │        'lee1.js'        │ 6.5669599999673665 │  6.55113899987191  │ 0.01582100009545684  │ 1580 │ 'successfully' │ 29.74502399999983  │    false     │ false  │    null    │ 24500 │
│   14    │      'dexter2.js'       │ 6.732597999740392  │ 6.719717999920249  │ 0.012879999820142984 │ 216  │ 'successfully' │ 20.519609999999375 │    false     │ false  │    null    │ 24500 │
│   15    │ 'alexanderquintero3.js' │ 7.504910999443382  │ 7.490983999799937  │ 0.013926999643445015 │ 359  │ 'successfully' │ 34.32339100000172  │    false     │ false  │    null    │ 24500 │
│   16    │ 'alexanderquintero1.js' │  7.72143300017342  │ 7.7077640001662076 │ 0.013669000007212162 │ 1416 │ 'successfully' │ 84.40033399999811  │    false     │ false  │    null    │ 24500 │
│   17    │ 'alexanderquintero2.js' │ 7.764848000137135  │  7.75067300000228  │ 0.014175000134855509 │ 597  │ 'successfully' │ 58.00136399999974  │    false     │ false  │    null    │ 24500 │
│   18    │      'mettin1.js'       │ 7.967494999989867  │ 7.952767000067979  │ 0.014727999921888113 │ 1254 │ 'successfully' │ 37.07210500000292  │    false     │ false  │    null    │ 24500 │
│   19    │      'mettin2.js'       │ 8.346622999757528  │ 8.333587999921292  │ 0.013034999836236238 │ 301  │ 'successfully' │  66.1820200000002  │    false     │ false  │    null    │ 24500 │
│   20    │    'peter-paul2.js'     │ 14.399839999852702 │ 14.386884999927133 │  0.0129549999255687  │ 213  │ 'successfully' │ 122.43962700000338 │    false     │ false  │    null    │ 24500 │
│   21    │    'peter-paul3.js'     │ 14.706263999687508 │ 14.693058999953791 │ 0.01320499973371625  │ 187  │ 'successfully' │ 135.93798599999718 │    false     │ false  │    null    │ 24500 │
│   22    │      'dexter3.js'       │ 23.13042700011283  │ 23.117882000282407 │ 0.012544999830424786 │ 215  │ 'successfully' │ 51.20760199999859  │    false     │ false  │    null    │ 24500 │
│   23    │       'lee21.js'        │ 34.199803999159485 │ 34.18664199998602  │ 0.013161999173462391 │ 382  │ 'successfully' │ 79.63559000000168  │    false     │ false  │    null    │ 24500 │
└─────────┴─────────────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```