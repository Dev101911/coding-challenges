# Week 47 challenge

Write a function `pingMeMaybe` which accepts a string. Your task is to determine if it is a valid IPv4 address.
A valid IPv4 address consists of 4 octets (with values 0 to 255 including) separated by dots.

*Note:* Leading zeroes are not valid


Examples:
```
pingMeMaybe('0.0.0.0') // true
pingMeMaybe('255.255.255.255') // true
pingMeMaybe('10.123.17.2') // true
pingMeMaybe('3.12.1.1') // returns true
pingMeMaybe('262.12.1.1') // returns false
pingMeMaybe('3.12.1.01') // returns false
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name     | Performance | Codegolf | Vote  | Total points |
|-------|----------|-------------|----------|-------|--------------|
| 1.    | Aman     | 25          |          | 5     | 30           |
| 2.    | Hossein  | 18          | 5        |       | 23           |
| 3.    | Lars     | 12          | 5        | 5     | 22           |
| 4.    | Varun    | 18          |          |       | 18           |
| 5.    | Tim      | 10          | 5        |       | 15           |
| 6.    | Anuradha | 6           | 5        |       | 11           |
| 7.    | Bram     | 10          |          |       | 10           |
| 8.    | Patrick  | 6           |          |       | 6            |
| 9.    | Lee      | 2           |          |       | 2            |
| 10.   | Devin    | 1           |          |       | 1            |

### Screenshot

![2021 Week 47 podium](./podium.png)

![2021 Week 47 results](./results.png)

### Vote

```
╔════════════════╤═══════╤═════════════════════════════════════════════════════╗
║ Name           │ Vote  │ Comment                                             ║
╟────────────────┼───────┼─────────────────────────────────────────────────────╢
║ harijs.deksnis │ aman2 │ Really smart and efficient                          ║
╟────────────────┼───────┼─────────────────────────────────────────────────────╢
║ aman.tuladhar  │ lars8 │ simple, elegant regx expression and smart execution ║
╚════════════════╧═══════╧═════════════════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 01/12/2021, 12:06:45
EVALUATING CHALLENGE:               2021/w47
FOUND 49 SOLUTIONS:                 aman1.js, aman2.js, anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, bram1.js, bram2.js, bram3.js, bram4.js,
                          bram5.js, devin1.js, hossein1.js, hossein2.js, hossein3.js, hossein4.js, hossein5.js, hossein6.js, hossein7.js, lars1.js,
                          lars2.js, lars3.js, lars4.js, lars5.js, lars6.js, lars7.js, lars8.js, lee1.js, luc1.js, luc10.js, luc11.js, luc2.js,
                          luc3.js, luc4.js, luc5.js, luc6.js, luc7.js, luc8.js, luc9.js, patrick1.js, patrick2.js, tim1.js, tim2.js, tim3.js,
                          tim4.js, tim5.js, varun1.js, varun2.js, varun3.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   01/12/2021, 13:36:47
DURATION:                           1 hour, 30 minutes, 1.207 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ aman2     │ 0.568ms │ 0.555ms  │ 0.013ms      │ 358  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ hossein7  │ 0.599ms │ 0.585ms  │ 0.014ms      │ 422  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 18     │ varun1    │ 0.622ms │ 0.610ms  │ 0.012ms      │ 511  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ lars8     │ 0.638ms │ 0.622ms  │ 0.016ms      │ 165  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ bram1     │ 0.742ms │ 0.730ms  │ 0.012ms      │ 151  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 10     │ tim4      │ 0.756ms │ 0.741ms  │ 0.015ms      │ 310  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ patrick1  │ 0.854ms │ 0.843ms  │ 0.012ms      │ 192  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 6      │ anuradha1 │ 0.895ms │ 0.884ms  │ 0.012ms      │ 136  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ lee1      │ 1.148ms │ 1.137ms  │ 0.012ms      │ 69   ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ devin1    │ 1.379ms │ 1.366ms  │ 0.013ms      │ 133  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 11    │        │ luc8      │ 4.790ms │ 4.778ms  │ 0.011ms      │ 46   ║
╚═══════╧════════╧═══════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              aman1.js, varun2.js, varun3.js, bram4.js, bram3.js, lars5.js, bram2.js, hossein6.js, bram5.js, tim5.js, hossein2.js,
                          lars2.js, lars4.js, anuradha4.js, anuradha3.js, tim3.js, lars3.js, hossein1.js, lars1.js, luc3.js, luc5.js, luc4.js,
                          luc2.js, luc1.js, patrick2.js, luc10.js, luc11.js, tim1.js, hossein5.js, luc9.js, tim2.js, lars7.js, anuradha2.js,
                          hossein4.js, hossein3.js, lars6.js

CODEGOLF AWARD:                     anuradha2.js, hossein5.js, lars7.js, luc9.js, tim2.js with 44 bytes

FAILED SOLUTIONS:                   luc6.js, luc7.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel Xeon Processor (Cascadelake)
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬────────────────┬────────────────────┬────────────────────┬──────────────────────┬────────┬──────────────────────────────────────────┬───────────────────────┬──────────────┬────────┬───────────────────────┬───────┐
│ (index) │    solution    │       total        │      bestRun       │     bestCompile      │  size  │                 compiled                 │    validationTime     │ onlyCodegolf │ failed │      failReason       │ runs  │
├─────────┼────────────────┼────────────────────┼────────────────────┼──────────────────────┼────────┼──────────────────────────────────────────┼───────────────────────┼──────────────┼────────┼───────────────────────┼───────┤
│    0    │   'aman2.js'   │ 0.5678139998235565 │ 0.5547499999993306 │ 0.013063999824225903 │  358   │              'successfully'              │  18.809728000000177   │    false     │ false  │         null          │ 27300 │
│    1    │ 'hossein7.js'  │ 0.5988779998842801 │ 0.5852249999988999 │ 0.013652999885380268 │  422   │              'successfully'              │   7.746956000002683   │    false     │ false  │         null          │ 27300 │
│    2    │   'aman1.js'   │ 0.6038409998873249 │ 0.5907379999989644 │  0.0131029998883605  │  332   │              'successfully'              │  21.974228999999468   │    false     │ false  │         null          │ 27300 │
│    3    │  'varun1.js'   │ 0.6223519998748088 │ 0.6098630000051344 │ 0.012488999869674444 │  511   │              'successfully'              │   29.58405800000037   │    false     │ false  │         null          │ 27300 │
│    4    │  'varun2.js'   │  0.62434299978122  │ 0.6117130000020552 │ 0.012629999779164791 │  511   │              'successfully'              │   29.36143699999957   │    false     │ false  │         null          │ 27300 │
│    5    │  'varun3.js'   │ 0.6279499999945983 │ 0.6142450000043027 │ 0.013704999990295619 │  599   │              'successfully'              │   7.404046999999991   │    false     │ false  │         null          │ 27300 │
│    6    │   'lars8.js'   │ 0.6377749999664957 │ 0.6215119999978924 │ 0.016262999968603253 │  165   │              'successfully'              │   6.025104000000283   │    false     │ false  │         null          │ 27300 │
│    7    │   'bram1.js'   │ 0.7422269999588025 │ 0.7304910000020755 │ 0.011735999956727028 │  151   │              'successfully'              │   9.222090000002936   │    false     │ false  │         null          │ 27300 │
│    8    │   'bram4.js'   │ 0.745646000301349  │ 0.7340479999984382 │ 0.011598000302910805 │  121   │              'successfully'              │   6.287419999996928   │    false     │ false  │         null          │ 27300 │
│    9    │   'bram3.js'   │ 0.7528830000082962 │ 0.7412690000055591 │ 0.011614000002737157 │  264   │              'successfully'              │  13.490373000000545   │    false     │ false  │         null          │ 27300 │
│   10    │   'tim4.js'    │ 0.755775000754511  │ 0.7409990000014659 │ 0.014776000753045082 │  310   │              'successfully'              │   6.755698000000848   │    false     │ false  │         null          │ 27300 │
│   11    │   'lars5.js'   │ 0.7743820000032429 │ 0.7626270000037039 │ 0.011754999999538995 │  119   │              'successfully'              │   7.164619999999559   │    false     │ false  │         null          │ 27300 │
│   12    │   'bram2.js'   │ 0.7936419999932696 │ 0.7802189999965776 │ 0.013422999996691942 │  194   │              'successfully'              │   9.469496000001527   │    false     │ false  │         null          │ 27300 │
│   13    │ 'hossein6.js'  │ 0.7947150000545662 │ 0.7820490000012796 │ 0.012666000053286552 │  349   │              'successfully'              │   8.262521000000561   │    false     │ false  │         null          │ 27300 │
│   14    │   'bram5.js'   │ 0.8215350000245962 │ 0.8100200000044424 │ 0.01151500002015382  │   60   │              'successfully'              │   6.515768000001117   │    false     │ false  │         null          │ 27300 │
│   15    │   'tim5.js'    │ 0.8237850000004983 │ 0.8113470000098459 │ 0.012437999990652315 │  243   │              'successfully'              │   6.669279000001552   │    false     │ false  │         null          │ 27300 │
│   16    │ 'patrick1.js'  │ 0.8542510000297625 │ 0.8425360000001092 │ 0.01171500002965331  │  192   │              'successfully'              │   7.693154999997205   │    false     │ false  │         null          │ 27300 │
│   17    │ 'hossein2.js'  │ 0.858445999903779  │ 0.8462280000021565 │ 0.012217999901622534 │  395   │              'successfully'              │   8.070105999999214   │    false     │ false  │         null          │ 27300 │
│   18    │ 'anuradha1.js' │ 0.8954579999990528 │ 0.8839569999981904 │ 0.011501000000862405 │  136   │              'successfully'              │  10.647313000001304   │    false     │ false  │         null          │ 27300 │
│   19    │   'lars2.js'   │ 0.9360090001646313 │ 0.9213410000011208 │ 0.014668000163510442 │  130   │              'successfully'              │   6.804709000000003   │    false     │ false  │         null          │ 27300 │
│   20    │   'lars4.js'   │ 0.9640070000168635 │ 0.9524800000071991 │ 0.011527000009664334 │   67   │              'successfully'              │   7.263347000000067   │    false     │ false  │         null          │ 27300 │
│   21    │ 'anuradha4.js' │ 0.9758619999556686 │ 0.9646149999971385 │ 0.011246999958530068 │   70   │              'successfully'              │   8.668409000001702   │    false     │ false  │         null          │ 27300 │
│   22    │   'lee1.js'    │ 1.1484230002533877 │ 1.1369219999905908 │ 0.011501000262796879 │   69   │              'successfully'              │   6.668050000000221   │    false     │ false  │         null          │ 27300 │
│   23    │  'devin1.js'   │ 1.3794220001000213 │ 1.365922999990289  │ 0.013499000109732151 │  133   │              'successfully'              │   7.461425000001327   │    false     │ false  │         null          │ 27300 │
│   24    │ 'anuradha3.js' │ 1.966202000156045  │ 1.9535050000995398 │ 0.012697000056505203 │  373   │              'successfully'              │   9.769811000001937   │    false     │ false  │         null          │ 27300 │
│   25    │   'tim3.js'    │ 2.382337999995798  │ 2.3693900000071153 │ 0.012947999988682568 │  466   │              'successfully'              │   12.20011599999998   │    false     │ false  │         null          │ 27300 │
│   26    │   'lars3.js'   │ 2.8446389997843653 │ 2.831711000064388  │ 0.012927999719977379 │  332   │              'successfully'              │  11.198895999998058   │    false     │ false  │         null          │ 27300 │
│   27    │ 'hossein1.js'  │ 3.4818610000656918 │ 3.470282999915071  │ 0.011578000150620937 │   66   │              'successfully'              │   9.897938999998587   │    false     │ false  │         null          │ 27300 │
│   28    │   'lars1.js'   │ 4.782264000008581  │  4.76851500000339  │ 0.013749000005191192 │  216   │              'successfully'              │  12.643089000001055   │    false     │ false  │         null          │ 27300 │
│   29    │   'luc8.js'    │ 4.789527000160888  │ 4.778033999959007  │ 0.011493000201880932 │   46   │              'successfully'              │   15.31576800000039   │    false     │ false  │         null          │ 27300 │
│   30    │   'luc3.js'    │ 4.962739999988116  │ 4.951350999996066  │ 0.01138899999205023  │   55   │              'successfully'              │  15.493796999999176   │    false     │ false  │         null          │ 27300 │
│   31    │   'luc5.js'    │ 4.995561000192538  │ 4.984495999990031  │ 0.01106500020250678  │   54   │              'successfully'              │   14.06549399999858   │    false     │ false  │         null          │ 27300 │
│   32    │   'luc4.js'    │ 5.0447989998501725 │ 5.033473999996204  │ 0.01132499985396862  │   54   │              'successfully'              │  15.646294000001944   │    false     │ false  │         null          │ 27300 │
│   33    │   'luc2.js'    │ 5.377164999998058  │ 5.365700999987894  │ 0.011464000010164455 │   62   │              'successfully'              │  17.155096999998932   │    false     │ false  │         null          │ 27300 │
│   34    │   'luc1.js'    │ 5.700073000734847  │ 5.688906999996107  │ 0.011166000738739967 │   63   │              'successfully'              │  16.019838000000163   │    false     │ false  │         null          │ 27300 │
│   35    │ 'patrick2.js'  │  5.86552300000767  │ 5.854239000000234  │ 0.01128400000743568  │  132   │              'successfully'              │  26.619715000000724   │    false     │ false  │         null          │ 27300 │
│   36    │   'luc10.js'   │ 6.139350000703416  │ 6.126538000004075  │ 0.012812000699341297 │  213   │              'successfully'              │  16.783124000001408   │    false     │ false  │         null          │ 27300 │
│   37    │   'luc11.js'   │ 6.307260999994469  │ 6.295727000004263  │ 0.011533999990206212 │   92   │              'successfully'              │  19.793374000000767   │    false     │ false  │         null          │ 27300 │
│   38    │   'tim1.js'    │  6.47322900002473  │ 6.4620040000008885 │ 0.011225000023841858 │   54   │              'successfully'              │   15.01045299999896   │    false     │ false  │         null          │ 27300 │
│   39    │ 'hossein5.js'  │ 6.564649000269128  │ 6.553085999999894  │ 0.01156300026923418  │   44   │              'successfully'              │  15.716136999999435   │    false     │ false  │         null          │ 27300 │
│   40    │   'luc9.js'    │ 6.579392999861739  │ 6.567974999998114  │ 0.011417999863624573 │   44   │              'successfully'              │  17.835661999997683   │    false     │ false  │         null          │ 27300 │
│   41    │   'tim2.js'    │ 6.629734999951324  │ 6.6184269999939715 │ 0.011307999957352877 │   44   │              'successfully'              │   14.88940999999977   │    false     │ false  │         null          │ 27300 │
│   42    │   'lars7.js'   │ 6.6889439999940805 │ 6.677637000000686  │ 0.011306999993394129 │   44   │              'successfully'              │  15.146978999997373   │    false     │ false  │         null          │ 27300 │
│   43    │ 'anuradha2.js' │  6.69333200006804  │ 6.682006000075489  │ 0.01132599999255035  │   44   │              'successfully'              │  27.119574000000284   │    false     │ false  │         null          │ 27300 │
│   44    │ 'hossein4.js'  │  6.70147400010319  │ 6.690234000096098  │ 0.011240000007092021 │   62   │              'successfully'              │   16.20197200000257   │    false     │ false  │         null          │ 27300 │
│   45    │ 'hossein3.js'  │ 6.827273000002606  │ 6.815879000001587  │ 0.011394000001018867 │   63   │              'successfully'              │   16.7678820000001    │    false     │ false  │         null          │ 27300 │
│   46    │   'lars6.js'   │ 21.327106000499043 │ 21.31532899999729  │  0.0117770005017519  │   58   │              'successfully'              │   34.94837099999859   │    false     │ false  │         null          │ 27300 │
│   47    │   'luc6.js'    │        null        │        null        │         null         │  148   │ 'ReferenceError: require is not defined' │  0.21753000000171596  │    false     │  true  │  'Incorrect result'   │   0   │
│   48    │   'luc7.js'    │        null        │        null        │         null         │ 440327 │              'successfully'              │ 0.0007420000001729932 │    false     │  true  │ 'Exceeded 2048 bytes' │   0   │
└─────────┴────────────────┴────────────────────┴────────────────────┴──────────────────────┴────────┴──────────────────────────────────────────┴───────────────────────┴──────────────┴────────┴───────────────────────┴───────┘
```
  