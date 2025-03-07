# Week 46 challenge

Write a function `wheatFromTheChaff` which accepts an alphanumeric string. You task is to dismiss the letters and return the highest number of consecutive digits.

Examples:
```
wheatFromTheChaff('abcd1abfafa5fafafa3rc') // returns 5
wheatFromTheChaff('qwerty17gga6fafa13ppp') // returns 17
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name       | Performance | Codegolf | Vote  | Total points |
|-------|------------|-------------|----------|-------|--------------|
| 1.    | Lars       | 25          |          | 5     | 30           |
| 2.    | Hossein    | 15          | 5        | 5     | 25           |
| 3.    | Aman       | 18          |          |       | 18           |
| 4.    | Anuradha   | 15          |          |       | 15           |
|       | Tim        | 15          |          |       | 15           |
|       | Patrick    | 15          |          |       | 15           |
| 7.    | Lee        | 6           |          |       | 6            |
| 8.    | Peter-Paul |             |          | 5     | 5            |
| 9.    | Devin      | 4           |          |       | 4            |
|       | Luc        | 4           |          |       | 4            |
| 11.   | Medhat     | 1           |          |       | 1            |


### Screenshot

![2021 Week 46 podium](./podium.png)

![2021 Week 46 results](./results.png)

### Vote

```
╔════════════════╤═════════════╤════════════════════════════════════════════════════════════╗
║ Name           │ Vote        │ Comment                                                    ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────╢
║ tim            │ peter-paul1 │ using charcode and manually calculating the max + cheat :) ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────╢
║ harijs.deksnis │ hossein2    │ The split with \D was genius                               ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────╢
║ anuradha       │ lars3       │ usage of char < '0' || char > '9'                          ║
╚════════════════╧═════════════╧════════════════════════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 24/11/2021, 12:06:59
EVALUATING CHALLENGE:               2021/w46
FOUND 24 SOLUTIONS:                 aman1.js, amine1.js, amine2.js, anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, devin1.js, devin2.js,
                          hossein1.js, hossein2.js, hossein3.js, lars1.js, lars2.js, lars3.js, lee1.js, lee2.js, lee3.js, luc1.js, medhat1.js,
                          patrick1.js, peter-paul1.js, tim1.js, tim2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   24/11/2021, 13:37:13
DURATION:                           1 hour, 30 minutes, 14.429 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lars3       │ 3.535ms  │ 3.521ms  │ 0.013ms      │ 582  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ aman1       │ 3.819ms  │ 3.805ms  │ 0.014ms      │ 491  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ anuradha4   │ 5.676ms  │ 5.663ms  │ 0.012ms      │ 46   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 15     │ hossein1    │ 5.686ms  │ 5.674ms  │ 0.012ms      │ 46   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 15     │ tim2        │ 5.696ms  │ 5.684ms  │ 0.012ms      │ 46   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 15     │ patrick1    │ 5.775ms  │ 5.762ms  │ 0.012ms      │ 47   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ lee3        │ 6.021ms  │ 6.007ms  │ 0.014ms      │ 315  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ devin2      │ 6.756ms  │ 6.740ms  │ 0.015ms      │ 240  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 4      │ luc1        │ 7.009ms  │ 6.997ms  │ 0.013ms      │ 60   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ medhat1     │ 8.821ms  │ 8.807ms  │ 0.014ms      │ 177  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 11    │        │ amine2      │ 9.788ms  │ 9.775ms  │ 0.013ms      │ 148  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 12    │        │ peter-paul1 │ 12.881ms │ 12.868ms │ 0.012ms      │ 720  ║
╚═══════╧════════╧═════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              lars2.js, lars1.js, tim1.js, lee2.js, devin1.js, lee1.js, anuradha2.js, hossein3.js, hossein2.js, anuradha1.js,
                          anuradha3.js

CODEGOLF AWARD:                     hossein2.js with 44 bytes

FAILED SOLUTIONS:                   amine1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel Xeon Processor (Cascadelake)
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────────────┬───────┐
│ (index) │     solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │     failReason     │ runs  │
├─────────┼──────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────────────┼───────┤
│    0    │    'lars3.js'    │ 3.5346940006129444 │ 3.5214190003462136 │ 0.013275000266730785 │ 582  │ 'successfully' │ 11.104527999999846 │    false     │ false  │        null        │ 14700 │
│    1    │    'aman1.js'    │ 3.819296000059694  │ 3.805447000078857  │ 0.013848999980837107 │ 491  │ 'successfully' │ 40.482059000001755 │    false     │ false  │        null        │ 14700 │
│    2    │    'lars2.js'    │ 3.9457530002109706 │ 3.9327549999579787 │ 0.012998000252991915 │ 627  │ 'successfully' │ 11.942352999998548 │    false     │ false  │        null        │ 14700 │
│    3    │    'lars1.js'    │ 5.632397999987006  │ 5.619870000053197  │ 0.012527999933809042 │  46  │ 'successfully' │ 16.12728000000061  │    false     │ false  │        null        │ 14700 │
│    4    │  'anuradha4.js'  │ 5.675569999963045  │ 5.663348000030965  │ 0.012221999932080507 │  46  │ 'successfully' │ 17.090619999999035 │    false     │ false  │        null        │ 14700 │
│    5    │  'hossein1.js'   │ 5.686355999670923  │ 5.673910999670625  │ 0.012445000000298023 │  46  │ 'successfully' │ 16.900471000000834 │    false     │ false  │        null        │ 14700 │
│    6    │    'tim2.js'     │ 5.696151999756694  │ 5.683894000016153  │ 0.012257999740540981 │  46  │ 'successfully' │ 16.458321000001888 │    false     │ false  │        null        │ 14700 │
│    7    │    'tim1.js'     │ 5.714857999875676  │ 5.698671999853104  │ 0.016186000022571534 │ 213  │ 'successfully' │ 16.821418000003177 │    false     │ false  │        null        │ 14700 │
│    8    │  'patrick1.js'   │ 5.774819000042044  │ 5.762333000078797  │ 0.012485999963246286 │  47  │ 'successfully' │ 17.104197999997268 │    false     │ false  │        null        │ 14700 │
│    9    │    'lee3.js'     │ 6.021008999785408  │ 6.007379999849945  │ 0.013628999935463071 │ 315  │ 'successfully' │ 14.885185999999521 │    false     │ false  │        null        │ 14700 │
│   10    │    'lee2.js'     │ 6.1954140001907945 │ 6.1819930002093315 │ 0.013420999981462955 │ 534  │ 'successfully' │ 15.41472000000067  │    false     │ false  │        null        │ 14700 │
│   11    │   'devin2.js'    │ 6.755669000092894  │ 6.740437000058591  │ 0.015232000034302473 │ 240  │ 'successfully' │ 15.765145000001212 │    false     │ false  │        null        │ 14700 │
│   12    │   'devin1.js'    │ 6.801207000098657  │ 6.786003000102937  │ 0.015203999995719641 │ 291  │ 'successfully' │ 16.14016199999969  │    false     │ false  │        null        │ 14700 │
│   13    │    'luc1.js'     │ 7.009461000561714  │  6.99666600022465  │ 0.012795000337064266 │  60  │ 'successfully' │ 18.008409000001848 │    false     │ false  │        null        │ 14700 │
│   14    │   'medhat1.js'   │ 8.820776999928057  │ 8.806586000137031  │ 0.014190999791026115 │ 177  │ 'successfully' │ 18.652032999998482 │    false     │ false  │        null        │ 14700 │
│   15    │    'lee1.js'     │ 8.940468000015244  │  8.92662400007248  │ 0.01384399994276464  │ 161  │ 'successfully' │ 18.29537199999686  │    false     │ false  │        null        │ 14700 │
│   16    │   'amine2.js'    │  9.78806799929589  │ 9.774695999920368  │ 0.013371999375522137 │ 148  │ 'successfully' │ 82.44894099999874  │    false     │ false  │        null        │ 14700 │
│   17    │ 'peter-paul1.js' │ 12.880766999907792 │ 12.868454999756068 │ 0.012312000151723623 │ 720  │ 'successfully' │ 10.662435999998706 │    false     │ false  │        null        │ 14700 │
│   18    │  'anuradha2.js'  │ 14.331497000530362 │ 14.316914999857545 │ 0.01458200067281723  │ 309  │ 'successfully' │ 26.11707100000058  │    false     │ false  │        null        │ 14700 │
│   19    │  'hossein3.js'   │ 20.377051000017673 │ 20.358281000051647 │ 0.018769999966025352 │ 505  │ 'successfully' │ 30.882926000002044 │    false     │ false  │        null        │ 14700 │
│   20    │  'hossein2.js'   │ 47.18611199967563  │ 47.17196699976921  │ 0.014144999906420708 │  44  │ 'successfully' │ 60.66693800000212  │    false     │ false  │        null        │ 14700 │
│   21    │  'anuradha1.js'  │ 61.001484999855165 │ 60.98520599999756  │ 0.016278999857604504 │ 255  │ 'successfully' │ 90.71230699999796  │    false     │ false  │        null        │ 14700 │
│   22    │  'anuradha3.js'  │  62.4596859999001  │ 62.44508500024676  │ 0.014600999653339386 │  63  │ 'successfully' │ 79.31958200000008  │    false     │ false  │        null        │ 14700 │
│   23    │   'amine1.js'    │        null        │        null        │         null         │ 204  │ 'successfully' │ 19.62248300000283  │    false     │  true  │ 'Incorrect result' │   0   │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────────────┴───────┘
```
  