window.BENCHMARK_DATA = {
  "lastUpdate": 1778307426096,
  "repoUrl": "https://github.com/Rinai-R/NoKV",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "songguocheng348@gmail.com",
            "name": "Guocheng(Eric) Song",
            "username": "feichai0017"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97448f32536231cd54270c60a38f6d7f60d08e3a",
          "message": "Optimize atomic mutate apply fusion (#253)\n\nSigned-off-by: eric_song <songguocheng348@gmail.com>",
          "timestamp": "2026-05-09T14:56:57+10:00",
          "tree_id": "da49b46a9c62e102127a89d60a6c5ce3d6e17f3d",
          "url": "https://github.com/Rinai-R/NoKV/commit/97448f32536231cd54270c60a38f6d7f60d08e3a"
        },
        "date": 1778307424678,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 1750,
            "unit": "ns/op\t  36.57 MB/s\t    1538 B/op\t       0 allocs/op",
            "extra": "64382 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1750,
            "unit": "ns/op",
            "extra": "64382 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 36.57,
            "unit": "MB/s",
            "extra": "64382 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 1538,
            "unit": "B/op",
            "extra": "64382 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "64382 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 341.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "388050 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 341.8,
            "unit": "ns/op",
            "extra": "388050 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "388050 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "388050 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 262.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "408799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 262.2,
            "unit": "ns/op",
            "extra": "408799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "408799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "408799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 107.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1012384 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 107.4,
            "unit": "ns/op",
            "extra": "1012384 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1012384 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1012384 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 1450,
            "unit": "ns/op\t  44.12 MB/s\t     157 B/op\t       1 allocs/op",
            "extra": "100171 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1450,
            "unit": "ns/op",
            "extra": "100171 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 44.12,
            "unit": "MB/s",
            "extra": "100171 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "100171 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "100171 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 425.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278397 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 425.7,
            "unit": "ns/op",
            "extra": "278397 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278397 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278397 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 430.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "292802 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 430.6,
            "unit": "ns/op",
            "extra": "292802 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292802 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292802 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 44.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2698224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 44.51,
            "unit": "ns/op",
            "extra": "2698224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2698224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2698224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index)",
            "value": 404,
            "unit": "ns/op\t 158.43 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "345144 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 404,
            "unit": "ns/op",
            "extra": "345144 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 158.43,
            "unit": "MB/s",
            "extra": "345144 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 162,
            "unit": "B/op",
            "extra": "345144 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "345144 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index)",
            "value": 927.6,
            "unit": "ns/op\t  68.99 MB/s\t     161 B/op\t       1 allocs/op",
            "extra": "340249 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 927.6,
            "unit": "ns/op",
            "extra": "340249 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 68.99,
            "unit": "MB/s",
            "extra": "340249 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 161,
            "unit": "B/op",
            "extra": "340249 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "340249 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerNilCharge (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2.184,
            "unit": "ns/op",
            "extra": "54479360 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeFromBucket (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 40.64,
            "unit": "ns/op",
            "extra": "3305494 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeWithMockSleep (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 43.64,
            "unit": "ns/op",
            "extra": "2731095 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerStats (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 0.4181,
            "unit": "ns/op",
            "extra": "288103022 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyLinear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1026,
            "unit": "ns/op",
            "extra": "108174 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyViaSublevels (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 101.4,
            "unit": "ns/op",
            "extra": "1150536 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33600,
            "unit": "ns/op\t 243.81 MB/s\t   34914 B/op\t     206 allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33600,
            "unit": "ns/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 243.81,
            "unit": "MB/s",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34914,
            "unit": "B/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 48344,
            "unit": "ns/op\t 169.45 MB/s\t   34916 B/op\t     206 allocs/op",
            "extra": "2178 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 48344,
            "unit": "ns/op",
            "extra": "2178 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 169.45,
            "unit": "MB/s",
            "extra": "2178 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34916,
            "unit": "B/op",
            "extra": "2178 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "2178 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 8817866,
            "unit": "ns/op\t75964199 B/op\t     527 allocs/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 8817866,
            "unit": "ns/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75964199,
            "unit": "B/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 527,
            "unit": "allocs/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6825591,
            "unit": "ns/op\t75981323 B/op\t     528 allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 6825591,
            "unit": "ns/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75981323,
            "unit": "B/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 528,
            "unit": "allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 672.4,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "151330 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 672.4,
            "unit": "ns/op",
            "extra": "151330 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "151330 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "151330 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 873.2,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "129144 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 873.2,
            "unit": "ns/op",
            "extra": "129144 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "129144 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "129144 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 154.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "701661 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 154.5,
            "unit": "ns/op",
            "extra": "701661 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "701661 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "701661 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 345.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "346729 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 345.1,
            "unit": "ns/op",
            "extra": "346729 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "346729 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "346729 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34604,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34604,
            "unit": "ns/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 89.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1326150 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 89.65,
            "unit": "ns/op",
            "extra": "1326150 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1326150 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1326150 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 18091,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 18091,
            "unit": "ns/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 514.6,
            "unit": "ns/op\t     280 B/op\t       4 allocs/op",
            "extra": "233875 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 514.6,
            "unit": "ns/op",
            "extra": "233875 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 280,
            "unit": "B/op",
            "extra": "233875 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "233875 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 17696,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 17696,
            "unit": "ns/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 469.2,
            "unit": "ns/op\t     248 B/op\t       3 allocs/op",
            "extra": "255784 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 469.2,
            "unit": "ns/op",
            "extra": "255784 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 248,
            "unit": "B/op",
            "extra": "255784 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "255784 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 59072,
            "unit": "ns/op\t   19080 B/op\t      11 allocs/op",
            "extra": "2131 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 59072,
            "unit": "ns/op",
            "extra": "2131 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 19080,
            "unit": "B/op",
            "extra": "2131 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2131 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 886.8,
            "unit": "ns/op\t     656 B/op\t      11 allocs/op",
            "extra": "136076 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 886.8,
            "unit": "ns/op",
            "extra": "136076 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 656,
            "unit": "B/op",
            "extra": "136076 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "136076 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 61330,
            "unit": "ns/op\t   22448 B/op\t      54 allocs/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 61330,
            "unit": "ns/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 22448,
            "unit": "B/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 4739,
            "unit": "ns/op\t    4080 B/op\t      54 allocs/op",
            "extra": "24312 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 4739,
            "unit": "ns/op",
            "extra": "24312 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 4080,
            "unit": "B/op",
            "extra": "24312 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "24312 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 89794,
            "unit": "ns/op\t   48880 B/op\t     390 allocs/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 89794,
            "unit": "ns/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 48880,
            "unit": "B/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33897,
            "unit": "ns/op\t   30960 B/op\t     390 allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33897,
            "unit": "ns/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30960,
            "unit": "B/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2047,
            "unit": "ns/op\t    1832 B/op\t      21 allocs/op",
            "extra": "51198 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2047,
            "unit": "ns/op",
            "extra": "51198 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1832,
            "unit": "B/op",
            "extra": "51198 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "51198 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1905,
            "unit": "ns/op\t    1344 B/op\t      16 allocs/op",
            "extra": "53605 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1905,
            "unit": "ns/op",
            "extra": "53605 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1344,
            "unit": "B/op",
            "extra": "53605 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "53605 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 11699,
            "unit": "ns/op\t    8776 B/op\t     105 allocs/op",
            "extra": "9699 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 11699,
            "unit": "ns/op",
            "extra": "9699 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8776,
            "unit": "B/op",
            "extra": "9699 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 105,
            "unit": "allocs/op",
            "extra": "9699 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 11543,
            "unit": "ns/op\t    8288 B/op\t     100 allocs/op",
            "extra": "9888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 11543,
            "unit": "ns/op",
            "extra": "9888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8288,
            "unit": "B/op",
            "extra": "9888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "9888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 42258,
            "unit": "ns/op\t   32584 B/op\t     393 allocs/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 42258,
            "unit": "ns/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32584,
            "unit": "B/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 393,
            "unit": "allocs/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 45570,
            "unit": "ns/op\t   32096 B/op\t     388 allocs/op",
            "extra": "2748 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 45570,
            "unit": "ns/op",
            "extra": "2748 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32096,
            "unit": "B/op",
            "extra": "2748 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 388,
            "unit": "allocs/op",
            "extra": "2748 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 45774,
            "unit": "ns/op\t     344 B/op\t       9 allocs/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 45774,
            "unit": "ns/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1194,
            "unit": "ns/op\t     320 B/op\t       6 allocs/op",
            "extra": "99513 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1194,
            "unit": "ns/op",
            "extra": "99513 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "99513 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "99513 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 62.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1897929 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 62.93,
            "unit": "ns/op",
            "extra": "1897929 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1897929 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1897929 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 62.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1910046 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 62.97,
            "unit": "ns/op",
            "extra": "1910046 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1910046 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1910046 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 16223,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 16223,
            "unit": "ns/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 15763,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 15763,
            "unit": "ns/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 23358,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5136 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 23358,
            "unit": "ns/op",
            "extra": "5136 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5136 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5136 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 23870,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5450 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 23870,
            "unit": "ns/op",
            "extra": "5450 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5450 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5450 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 18930,
            "unit": "ns/op\t     252 B/op\t       6 allocs/op",
            "extra": "5872 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 18930,
            "unit": "ns/op",
            "extra": "5872 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 252,
            "unit": "B/op",
            "extra": "5872 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "5872 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 948,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "125097 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 948,
            "unit": "ns/op",
            "extra": "125097 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "125097 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "125097 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 24427,
            "unit": "ns/op\t     302 B/op\t       7 allocs/op",
            "extra": "4918 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 24427,
            "unit": "ns/op",
            "extra": "4918 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 302,
            "unit": "B/op",
            "extra": "4918 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4918 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1130,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "103126 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1130,
            "unit": "ns/op",
            "extra": "103126 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "103126 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "103126 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 85403,
            "unit": "ns/op\t   30416 B/op\t      30 allocs/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 85403,
            "unit": "ns/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30416,
            "unit": "B/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2153,
            "unit": "ns/op\t    2008 B/op\t      28 allocs/op",
            "extra": "55269 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2153,
            "unit": "ns/op",
            "extra": "55269 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 2008,
            "unit": "B/op",
            "extra": "55269 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "55269 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 89606,
            "unit": "ns/op\t   33784 B/op\t      73 allocs/op",
            "extra": "1291 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 89606,
            "unit": "ns/op",
            "extra": "1291 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 33784,
            "unit": "B/op",
            "extra": "1291 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "1291 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6844,
            "unit": "ns/op\t    5432 B/op\t      71 allocs/op",
            "extra": "18673 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 6844,
            "unit": "ns/op",
            "extra": "18673 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 5432,
            "unit": "B/op",
            "extra": "18673 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "18673 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 125618,
            "unit": "ns/op\t   60216 B/op\t     409 allocs/op",
            "extra": "967 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 125618,
            "unit": "ns/op",
            "extra": "967 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 60216,
            "unit": "B/op",
            "extra": "967 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 409,
            "unit": "allocs/op",
            "extra": "967 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 40738,
            "unit": "ns/op\t   32312 B/op\t     407 allocs/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 40738,
            "unit": "ns/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32312,
            "unit": "B/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 407,
            "unit": "allocs/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 30941,
            "unit": "ns/op\t 264.76 MB/s\t   25055 B/op\t      76 allocs/op",
            "extra": "3242 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 30941,
            "unit": "ns/op",
            "extra": "3242 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 264.76,
            "unit": "MB/s",
            "extra": "3242 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25055,
            "unit": "B/op",
            "extra": "3242 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3242 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34797,
            "unit": "ns/op\t 235.42 MB/s\t   25050 B/op\t      76 allocs/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34797,
            "unit": "ns/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 235.42,
            "unit": "MB/s",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25050,
            "unit": "B/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33905,
            "unit": "ns/op\t 241.61 MB/s\t   25055 B/op\t      76 allocs/op",
            "extra": "3055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33905,
            "unit": "ns/op",
            "extra": "3055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 241.61,
            "unit": "MB/s",
            "extra": "3055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25055,
            "unit": "B/op",
            "extra": "3055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34767,
            "unit": "ns/op\t 235.63 MB/s\t   25051 B/op\t      76 allocs/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34767,
            "unit": "ns/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 235.63,
            "unit": "MB/s",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25051,
            "unit": "B/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 559.6,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "211982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 559.6,
            "unit": "ns/op",
            "extra": "211982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "211982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "211982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 781.1,
            "unit": "ns/op\t      56 B/op\t       3 allocs/op",
            "extra": "154435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 781.1,
            "unit": "ns/op",
            "extra": "154435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 56,
            "unit": "B/op",
            "extra": "154435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "154435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1103,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "100142 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1103,
            "unit": "ns/op",
            "extra": "100142 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "100142 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "100142 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1773,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "68218 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1773,
            "unit": "ns/op",
            "extra": "68218 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "68218 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "68218 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 267.1,
            "unit": "ns/op\t      72 B/op\t       1 allocs/op",
            "extra": "489475 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 267.1,
            "unit": "ns/op",
            "extra": "489475 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "489475 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "489475 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1557798,
            "unit": "ns/op\t     190 B/op\t       4 allocs/op",
            "extra": "76 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1557798,
            "unit": "ns/op",
            "extra": "76 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 190,
            "unit": "B/op",
            "extra": "76 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "76 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2659,
            "unit": "ns/op",
            "extra": "42648 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6547,
            "unit": "ns/op",
            "extra": "17812 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 14389,
            "unit": "ns/op",
            "extra": "9337 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 30559,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToLbaseUnderL0ToL0Pressure (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 14015,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 675.5,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "175726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 675.5,
            "unit": "ns/op",
            "extra": "175726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "175726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "175726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 681.3,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "152148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 681.3,
            "unit": "ns/op",
            "extra": "152148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "152148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "152148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 470.6,
            "unit": "ns/op\t      41 B/op\t       2 allocs/op",
            "extra": "216360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 470.6,
            "unit": "ns/op",
            "extra": "216360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 41,
            "unit": "B/op",
            "extra": "216360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "216360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1491,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "77823 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1491,
            "unit": "ns/op",
            "extra": "77823 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "77823 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "77823 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 540.5,
            "unit": "ns/op\t      43 B/op\t       2 allocs/op",
            "extra": "200058 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 540.5,
            "unit": "ns/op",
            "extra": "200058 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "200058 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "200058 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2420,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "47593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2420,
            "unit": "ns/op",
            "extra": "47593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "47593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "47593 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 138079,
            "unit": "ns/op\t  458776 B/op\t    2033 allocs/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 138079,
            "unit": "ns/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 458776,
            "unit": "B/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2033,
            "unit": "allocs/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 2213279,
            "unit": "ns/op\t 5096953 B/op\t   20271 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 2213279,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 5096953,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 20271,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 25374199,
            "unit": "ns/op\t56256112 B/op\t  202588 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 25374199,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 56256112,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 202588,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 7.423,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14463814 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 7.423,
            "unit": "ns/op",
            "extra": "14463814 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14463814 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14463814 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 290128,
            "unit": "ns/op\t  676805 B/op\t     224 allocs/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 290128,
            "unit": "ns/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 676805,
            "unit": "B/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 224,
            "unit": "allocs/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 3473472,
            "unit": "ns/op\t 6767127 B/op\t    2074 allocs/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 3473472,
            "unit": "ns/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 6767127,
            "unit": "B/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2074,
            "unit": "allocs/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 52.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2272207 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 52.6,
            "unit": "ns/op",
            "extra": "2272207 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2272207 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2272207 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal)",
            "value": 408.1,
            "unit": "ns/op\t 627.30 MB/s\t      40 B/op\t       3 allocs/op",
            "extra": "315470 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 408.1,
            "unit": "ns/op",
            "extra": "315470 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - MB/s",
            "value": 627.3,
            "unit": "MB/s",
            "extra": "315470 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "315470 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "315470 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal)",
            "value": 36785770,
            "unit": "ns/op\t 5991557 B/op\t   83377 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 36785770,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 5991557,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 83377,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local)",
            "value": 7634,
            "unit": "ns/op\t   4.19 MB/s\t     509 B/op\t      14 allocs/op",
            "extra": "15984 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 7634,
            "unit": "ns/op",
            "extra": "15984 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 4.19,
            "unit": "MB/s",
            "extra": "15984 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 509,
            "unit": "B/op",
            "extra": "15984 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "15984 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local)",
            "value": 14319,
            "unit": "ns/op\t 286.06 MB/s\t    5255 B/op\t      14 allocs/op",
            "extra": "8479 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 14319,
            "unit": "ns/op",
            "extra": "8479 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 286.06,
            "unit": "MB/s",
            "extra": "8479 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5255,
            "unit": "B/op",
            "extra": "8479 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "8479 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local)",
            "value": 716.5,
            "unit": "ns/op\t  89.33 MB/s\t     267 B/op\t       5 allocs/op",
            "extra": "165559 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 716.5,
            "unit": "ns/op",
            "extra": "165559 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 89.33,
            "unit": "MB/s",
            "extra": "165559 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 267,
            "unit": "B/op",
            "extra": "165559 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "165559 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local)",
            "value": 1770,
            "unit": "ns/op\t2314.78 MB/s\t    5051 B/op\t       5 allocs/op",
            "extra": "65191 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 1770,
            "unit": "ns/op",
            "extra": "65191 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 2314.78,
            "unit": "MB/s",
            "extra": "65191 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5051,
            "unit": "B/op",
            "extra": "65191 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "65191 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local)",
            "value": 108573,
            "unit": "ns/op\t 150.90 MB/s\t   48406 B/op\t     220 allocs/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 108573,
            "unit": "ns/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 150.9,
            "unit": "MB/s",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48406,
            "unit": "B/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 220,
            "unit": "allocs/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local)",
            "value": 491135,
            "unit": "ns/op\t  33.36 MB/s\t   49595 B/op\t     258 allocs/op",
            "extra": "238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 491135,
            "unit": "ns/op",
            "extra": "238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 33.36,
            "unit": "MB/s",
            "extra": "238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49595,
            "unit": "B/op",
            "extra": "238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 258,
            "unit": "allocs/op",
            "extra": "238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local)",
            "value": 506826,
            "unit": "ns/op\t  32.33 MB/s\t   49582 B/op\t     259 allocs/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 506826,
            "unit": "ns/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 32.33,
            "unit": "MB/s",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49582,
            "unit": "B/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 259,
            "unit": "allocs/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local)",
            "value": 95361,
            "unit": "ns/op\t  42.95 MB/s\t   21649 B/op\t     217 allocs/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 95361,
            "unit": "ns/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 42.95,
            "unit": "MB/s",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 21649,
            "unit": "B/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 217,
            "unit": "allocs/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local)",
            "value": 115856,
            "unit": "ns/op\t 141.42 MB/s\t   48577 B/op\t     226 allocs/op",
            "extra": "1003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 115856,
            "unit": "ns/op",
            "extra": "1003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 141.42,
            "unit": "MB/s",
            "extra": "1003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48577,
            "unit": "B/op",
            "extra": "1003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local)",
            "value": 160856,
            "unit": "ns/op\t 407.42 MB/s\t  167589 B/op\t     233 allocs/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 160856,
            "unit": "ns/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 407.42,
            "unit": "MB/s",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 167589,
            "unit": "B/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local)",
            "value": 323490,
            "unit": "ns/op\t 810.36 MB/s\t  657146 B/op\t     251 allocs/op",
            "extra": "394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 323490,
            "unit": "ns/op",
            "extra": "394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 810.36,
            "unit": "MB/s",
            "extra": "394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 657146,
            "unit": "B/op",
            "extra": "394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 251,
            "unit": "allocs/op",
            "extra": "394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local)",
            "value": 533540,
            "unit": "ns/op\t 982.66 MB/s\t 1309966 B/op\t     260 allocs/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 533540,
            "unit": "ns/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 982.66,
            "unit": "MB/s",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 1309966,
            "unit": "B/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator)",
            "value": 3943787,
            "unit": "ns/op\t      88 B/op\t       0 allocs/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 3943787,
            "unit": "ns/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator)",
            "value": 1098,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "98865 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 1098,
            "unit": "ns/op",
            "extra": "98865 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "98865 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "98865 times\n4 procs"
          },
          {
            "name": "BenchmarkTouch (github.com/feichai0017/NoKV/thermos)",
            "value": 23.92,
            "unit": "ns/op",
            "extra": "4893337 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchParallel (github.com/feichai0017/NoKV/thermos)",
            "value": 57.44,
            "unit": "ns/op",
            "extra": "2203507 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchAndClamp (github.com/feichai0017/NoKV/thermos)",
            "value": 20.44,
            "unit": "ns/op",
            "extra": "5874112 times\n4 procs"
          },
          {
            "name": "BenchmarkFrequency (github.com/feichai0017/NoKV/thermos)",
            "value": 16.56,
            "unit": "ns/op",
            "extra": "7210711 times\n4 procs"
          },
          {
            "name": "BenchmarkTopN (github.com/feichai0017/NoKV/thermos)",
            "value": 20864828,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindow (github.com/feichai0017/NoKV/thermos)",
            "value": 76.1,
            "unit": "ns/op",
            "extra": "1574540 times\n4 procs"
          },
          {
            "name": "BenchmarkDecay (github.com/feichai0017/NoKV/thermos)",
            "value": 55619,
            "unit": "ns/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 4524746,
            "unit": "ns/op\t         2.000 apply/op\t   24474 B/op\t     338 allocs/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 4524746,
            "unit": "ns/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - apply/op",
            "value": 2,
            "unit": "apply/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - B/op",
            "value": 24474,
            "unit": "B/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 338,
            "unit": "allocs/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 6667716,
            "unit": "ns/op\t         2.000 apply/op\t   36660 B/op\t     476 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 6667716,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - apply/op",
            "value": 2,
            "unit": "apply/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - B/op",
            "value": 36660,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 9118205,
            "unit": "ns/op\t         2.000 apply/op\t   56932 B/op\t     716 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 9118205,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - apply/op",
            "value": 2,
            "unit": "apply/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - B/op",
            "value": 56932,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 716,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 48.07,
            "unit": "ns/op",
            "extra": "2399359 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 148.2,
            "unit": "ns/op",
            "extra": "952902 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 166,
            "unit": "ns/op",
            "extra": "869714 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 178.7,
            "unit": "ns/op",
            "extra": "652077 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 38.16,
            "unit": "ns/op",
            "extra": "3136939 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 106,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 134.7,
            "unit": "ns/op",
            "extra": "908979 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 165,
            "unit": "ns/op",
            "extra": "776572 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 57.28,
            "unit": "ns/op",
            "extra": "2085528 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 162.3,
            "unit": "ns/op",
            "extra": "794066 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 176.7,
            "unit": "ns/op",
            "extra": "757335 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 198.5,
            "unit": "ns/op",
            "extra": "658828 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePopOnlyReady (github.com/feichai0017/NoKV/utils)",
            "value": 25.93,
            "unit": "ns/op",
            "extra": "4582195 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueFullQueueWake (github.com/feichai0017/NoKV/utils)",
            "value": 289.9,
            "unit": "ns/op",
            "extra": "408957 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 4734,
            "unit": "ns/op",
            "extra": "26376 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 8204,
            "unit": "ns/op",
            "extra": "14625 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 53.95,
            "unit": "ns/op",
            "extra": "2299512 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 75.51,
            "unit": "ns/op",
            "extra": "1595103 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 74.11,
            "unit": "ns/op",
            "extra": "1634286 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 73.38,
            "unit": "ns/op",
            "extra": "1630291 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPopBurst (github.com/feichai0017/NoKV/utils)",
            "value": 9.883,
            "unit": "ns/op",
            "extra": "12128870 times\n4 procs"
          }
        ]
      }
    ]
  }
}