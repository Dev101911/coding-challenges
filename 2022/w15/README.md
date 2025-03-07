# Week 15 challenge

Write a function `simplify` which accepts an array of ascending numbers and returns a string. The returned list is a comma seperated list. If it includes more than 2 consecutive numbers, those are reduced to a range.

Examples:
```
simplify([1,2,3,4,5]) // returns '1-5'
simplify([-2,-1,0,1,2,3,4,5]) // returns '-2-5'
simplify([1,2,4,5,6]) // returns '1,2,4-6'
simplify([-7,-4,-3,-2,0,7,9,15,16,17,18,19,22]) // returns '-7,-4--2,0,7,9,15-19,22'
```

## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Tom Atterton | 25          | 5        | 5     | 35           |
| 2.    | Varun        | 25          |          |       | 25           |
| 3.    | Arpad        | 15          |          |       | 15           |
| 4.    | Daan         | 12          |          |       | 12           |
|       | Aman         | 12          |          |       | 12           |
| 6.    | Medhat       | 8           |          |       | 8            |
| 7.    | Joseph       | 6           |          |       | 6            |
| 8.    | Lee          | 4           |          |       | 4            |
|       | Hossein      | 4           |          |       | 4            |


### Screenshot

![2022 Week 15 podium](./podium.png)

![2022 Week 15 results](./results.png)

### Vote

```
╔═══════════════╤══════════════╤═════════════════════╗
║ Name          │ Vote         │ Comment             ║
╟───────────────┼──────────────┼─────────────────────╢
║ daan          │ tomatterton5 │ :O                  ║
╟───────────────┼──────────────┼─────────────────────╢
║ aman.tuladhar │ tomatterton5 │ wow, like this one! ║
╚═══════════════╧══════════════╧═════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 20/04/2022, 12:06:51
EVALUATING CHALLENGE:               2022/w15
FOUND 24 SOLUTIONS:                 aman1.js, arpad1.js, arpad2.js, daan1.js, daan2.js, daan3.js, daan4.js, daan5.js, hossein1.js, hossein2.js, joseph1.js,
                          joseph2.js, joseph3.js, joseph4.js, joseph5.js, lee1.js, medhat1.js, tomatterton1.js, tomatterton2.js, tomatterton3.js,
                          tomatterton4.js, tomatterton5.js, varun1.js, varun2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   20/04/2022, 13:37:05
DURATION:                           1 hour, 30 minutes, 13.98 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ tomatterton4 │ 5.383ms  │ 5.330ms  │ 0.053ms      │ 711  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ varun2       │ 5.626ms  │ 5.570ms  │ 0.056ms      │ 585  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ arpad2       │ 5.687ms  │ 5.635ms  │ 0.052ms      │ 631  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ daan5        │ 6.028ms  │ 5.976ms  │ 0.052ms      │ 445  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 12     │ aman1        │ 6.154ms  │ 6.104ms  │ 0.050ms      │ 449  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ medhat1      │ 6.519ms  │ 6.465ms  │ 0.053ms      │ 492  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ joseph5      │ 9.044ms  │ 8.989ms  │ 0.055ms      │ 636  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ lee1         │ 10.163ms │ 10.106ms │ 0.057ms      │ 505  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 4      │ hossein1     │ 10.249ms │ 10.175ms │ 0.074ms      │ 706  ║
╚═══════╧════════╧══════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              varun1.js, daan4.js, arpad1.js, tomatterton3.js, tomatterton1.js, daan3.js, daan2.js, joseph4.js, daan1.js, joseph1.js,
                          joseph2.js, tomatterton2.js, tomatterton5.js, joseph3.js, hossein2.js

CODEGOLF AWARD:                     tomatterton5.js with 81 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │     solution      │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼───────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │ 'tomatterton4.js' │ 5.383283999748528  │ 5.329911999870092  │ 0.05337199987843633  │ 711  │ 'successfully' │ 62.182754999999815 │    false     │ false  │    null    │ 18300 │
│    1    │    'varun2.js'    │ 5.625521999783814  │ 5.569914000108838  │ 0.05560799967497587  │ 585  │ 'successfully' │ 59.87932400000136  │    false     │ false  │    null    │ 18300 │
│    2    │    'arpad2.js'    │ 5.686865999829024  │ 5.634606999810785  │ 0.05225900001823902  │ 631  │ 'successfully' │ 61.11781400000109  │    false     │ false  │    null    │ 18300 │
│    3    │    'varun1.js'    │ 5.707701999694109  │  5.6525739999488   │ 0.05512799974530935  │ 585  │ 'successfully' │ 61.019030000001294 │    false     │ false  │    null    │ 18300 │
│    4    │    'daan5.js'     │ 6.0282800000859424 │ 5.975893000140786  │ 0.052386999945156276 │ 445  │ 'successfully' │ 61.93517500000053  │    false     │ false  │    null    │ 18300 │
│    5    │    'daan4.js'     │ 6.105563000077382  │ 6.053949999855831  │ 0.051613000221550465 │ 420  │ 'successfully' │ 61.10104599999977  │    false     │ false  │    null    │ 18300 │
│    6    │    'aman1.js'     │ 6.154358999803662  │ 6.104253999888897  │ 0.05010499991476536  │ 449  │ 'successfully' │ 104.32529599999907 │    false     │ false  │    null    │ 18300 │
│    7    │   'medhat1.js'    │ 6.5186820002272725 │ 6.465395000297576  │ 0.05328699992969632  │ 492  │ 'successfully' │ 60.41522299999997  │    false     │ false  │    null    │ 18300 │
│    8    │    'arpad1.js'    │ 8.181892999913543  │ 8.129255999810994  │ 0.05263700010254979  │ 630  │ 'successfully' │ 69.71128500000123  │    false     │ false  │    null    │ 18300 │
│    9    │ 'tomatterton3.js' │ 8.336061000358313  │ 8.279490000102669  │ 0.05657100025564432  │ 771  │ 'successfully' │ 65.47025100000064  │    false     │ false  │    null    │ 18300 │
│   10    │ 'tomatterton1.js' │ 8.348406999837607  │  8.2988339997828   │ 0.04957300005480647  │ 434  │ 'successfully' │ 63.887228999999934 │    false     │ false  │    null    │ 18300 │
│   11    │    'daan3.js'     │ 8.891175000113435  │ 8.840187000110745  │ 0.05098800000268966  │ 410  │ 'successfully' │ 59.62589599999956  │    false     │ false  │    null    │ 18300 │
│   12    │    'daan2.js'     │ 8.928702999372035  │ 8.874967999756336  │ 0.05373499961569905  │ 559  │ 'successfully' │  60.1256719999983  │    false     │ false  │    null    │ 18300 │
│   13    │   'joseph5.js'    │ 9.043586999643594  │ 8.988617999479175  │ 0.05496900016441941  │ 636  │ 'successfully' │ 61.61963400000059  │    false     │ false  │    null    │ 18300 │
│   14    │   'joseph4.js'    │  9.26244099996984  │ 9.207371999975294  │ 0.055068999994546175 │ 645  │ 'successfully' │ 66.68382200000087  │    false     │ false  │    null    │ 18300 │
│   15    │    'daan1.js'     │  9.49832299980335  │ 9.446310999803245  │ 0.05201200000010431  │ 444  │ 'successfully' │ 59.80572000000029  │    false     │ false  │    null    │ 18300 │
│   16    │   'joseph1.js'    │  9.89349199924618  │ 9.839050999842584  │ 0.054440999403595924 │ 675  │ 'successfully' │ 64.94166200000109  │    false     │ false  │    null    │ 18300 │
│   17    │     'lee1.js'     │ 10.16291100019589  │ 10.105523000005633 │ 0.057388000190258026 │ 505  │ 'successfully' │ 60.083432999999786 │    false     │ false  │    null    │ 18300 │
│   18    │   'hossein1.js'   │ 10.249282999895513 │ 10.175139999948442 │ 0.07414299994707108  │ 706  │ 'successfully' │ 234.67171699999926 │    false     │ false  │    null    │ 18300 │
│   19    │   'joseph2.js'    │ 14.361254000104964 │ 14.308707000222057 │ 0.052546999882906675 │ 373  │ 'successfully' │ 74.65464000000065  │    false     │ false  │    null    │ 18300 │
│   20    │ 'tomatterton2.js' │ 20.378546999767423 │  20.3294350001961  │ 0.049111999571323395 │ 129  │ 'successfully' │ 76.67403399999966  │    false     │ false  │    null    │ 18300 │
│   21    │ 'tomatterton5.js' │ 20.904706000117585 │ 20.860414000228047 │ 0.04429199988953769  │  81  │ 'successfully' │ 82.56457899999987  │    false     │ false  │    null    │ 18300 │
│   22    │   'joseph3.js'    │ 21.471988999750465 │ 21.42666699970141  │ 0.04532200004905462  │  89  │ 'successfully' │ 82.42295100000047  │    false     │ false  │    null    │ 18300 │
│   23    │   'hossein2.js'   │ 22.75309699960053  │ 22.709232999943197 │  0.0438639996573329  │ 106  │ 'successfully' │  84.3277309999994  │    false     │ false  │    null    │ 18300 │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  