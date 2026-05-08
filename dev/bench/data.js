window.BENCHMARK_DATA = {
  "lastUpdate": 1778210727164,
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
          "id": "3e1326072aa0a249e4e9d3254d6d64d5368a3b91",
          "message": "Batch primary-region two phase commit RPCs (#242)\n\nSigned-off-by: eric_song <songguocheng348@gmail.com>",
          "timestamp": "2026-05-08T13:17:09+10:00",
          "tree_id": "b9cb021dc32d324a2dc6aff027505aec49ae1bee",
          "url": "https://github.com/Rinai-R/NoKV/commit/3e1326072aa0a249e4e9d3254d6d64d5368a3b91"
        },
        "date": 1778210726607,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 1667,
            "unit": "ns/op\t  38.40 MB/s\t    1537 B/op\t       0 allocs/op",
            "extra": "69219 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1667,
            "unit": "ns/op",
            "extra": "69219 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 38.4,
            "unit": "MB/s",
            "extra": "69219 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 1537,
            "unit": "B/op",
            "extra": "69219 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69219 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 290,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "381700 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 290,
            "unit": "ns/op",
            "extra": "381700 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "381700 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "381700 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 289.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "414879 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 289.5,
            "unit": "ns/op",
            "extra": "414879 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "414879 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "414879 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1200470 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 103,
            "unit": "ns/op",
            "extra": "1200470 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1200470 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1200470 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 1026,
            "unit": "ns/op\t  62.35 MB/s\t     159 B/op\t       1 allocs/op",
            "extra": "115096 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1026,
            "unit": "ns/op",
            "extra": "115096 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 62.35,
            "unit": "MB/s",
            "extra": "115096 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 159,
            "unit": "B/op",
            "extra": "115096 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "115096 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 414,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "294966 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 414,
            "unit": "ns/op",
            "extra": "294966 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "294966 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "294966 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 387.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "306882 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 387.2,
            "unit": "ns/op",
            "extra": "306882 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "306882 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "306882 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 42.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2813384 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 42.95,
            "unit": "ns/op",
            "extra": "2813384 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2813384 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2813384 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index)",
            "value": 382,
            "unit": "ns/op\t 167.53 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "377482 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 382,
            "unit": "ns/op",
            "extra": "377482 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 167.53,
            "unit": "MB/s",
            "extra": "377482 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 162,
            "unit": "B/op",
            "extra": "377482 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "377482 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index)",
            "value": 1062,
            "unit": "ns/op\t  60.26 MB/s\t     161 B/op\t       1 allocs/op",
            "extra": "372392 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1062,
            "unit": "ns/op",
            "extra": "372392 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 60.26,
            "unit": "MB/s",
            "extra": "372392 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 161,
            "unit": "B/op",
            "extra": "372392 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "372392 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerNilCharge (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2.431,
            "unit": "ns/op",
            "extra": "66739077 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeFromBucket (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 40.69,
            "unit": "ns/op",
            "extra": "3280215 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeWithMockSleep (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 44.34,
            "unit": "ns/op",
            "extra": "2781547 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerStats (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 0.3606,
            "unit": "ns/op",
            "extra": "324320440 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyLinear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 800.6,
            "unit": "ns/op",
            "extra": "129058 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyViaSublevels (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 84.66,
            "unit": "ns/op",
            "extra": "1281230 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33532,
            "unit": "ns/op\t 244.30 MB/s\t   34911 B/op\t     206 allocs/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33532,
            "unit": "ns/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 244.3,
            "unit": "MB/s",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34911,
            "unit": "B/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 42651,
            "unit": "ns/op\t 192.07 MB/s\t   34913 B/op\t     206 allocs/op",
            "extra": "2684 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 42651,
            "unit": "ns/op",
            "extra": "2684 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 192.07,
            "unit": "MB/s",
            "extra": "2684 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34913,
            "unit": "B/op",
            "extra": "2684 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "2684 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 5410554,
            "unit": "ns/op\t75971168 B/op\t     530 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 5410554,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75971168,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 530,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 5288378,
            "unit": "ns/op\t75989671 B/op\t     530 allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 5288378,
            "unit": "ns/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75989671,
            "unit": "B/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 530,
            "unit": "allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 631,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "178744 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 631,
            "unit": "ns/op",
            "extra": "178744 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "178744 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "178744 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 859.6,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "135535 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 859.6,
            "unit": "ns/op",
            "extra": "135535 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "135535 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "135535 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "800863 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 150,
            "unit": "ns/op",
            "extra": "800863 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "800863 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "800863 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 355.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "346803 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 355.3,
            "unit": "ns/op",
            "extra": "346803 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "346803 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "346803 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 31068,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 31068,
            "unit": "ns/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 74.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1599870 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 74.88,
            "unit": "ns/op",
            "extra": "1599870 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1599870 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1599870 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 15163,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "7867 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 15163,
            "unit": "ns/op",
            "extra": "7867 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "7867 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "7867 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 456.9,
            "unit": "ns/op\t     280 B/op\t       4 allocs/op",
            "extra": "261957 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 456.9,
            "unit": "ns/op",
            "extra": "261957 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 280,
            "unit": "B/op",
            "extra": "261957 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "261957 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 14654,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "8091 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 14654,
            "unit": "ns/op",
            "extra": "8091 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "8091 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8091 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 425.7,
            "unit": "ns/op\t     248 B/op\t       3 allocs/op",
            "extra": "283275 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 425.7,
            "unit": "ns/op",
            "extra": "283275 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 248,
            "unit": "B/op",
            "extra": "283275 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "283275 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 50927,
            "unit": "ns/op\t   19080 B/op\t      11 allocs/op",
            "extra": "2352 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 50927,
            "unit": "ns/op",
            "extra": "2352 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 19080,
            "unit": "B/op",
            "extra": "2352 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2352 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 871.4,
            "unit": "ns/op\t     656 B/op\t      11 allocs/op",
            "extra": "142513 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 871.4,
            "unit": "ns/op",
            "extra": "142513 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 656,
            "unit": "B/op",
            "extra": "142513 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "142513 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 55596,
            "unit": "ns/op\t   22448 B/op\t      54 allocs/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 55596,
            "unit": "ns/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 22448,
            "unit": "B/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 4392,
            "unit": "ns/op\t    4080 B/op\t      54 allocs/op",
            "extra": "26558 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 4392,
            "unit": "ns/op",
            "extra": "26558 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 4080,
            "unit": "B/op",
            "extra": "26558 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "26558 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 82440,
            "unit": "ns/op\t   48880 B/op\t     390 allocs/op",
            "extra": "1430 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 82440,
            "unit": "ns/op",
            "extra": "1430 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 48880,
            "unit": "B/op",
            "extra": "1430 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "1430 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 32302,
            "unit": "ns/op\t   30960 B/op\t     390 allocs/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 32302,
            "unit": "ns/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30960,
            "unit": "B/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2045,
            "unit": "ns/op\t    1832 B/op\t      21 allocs/op",
            "extra": "52022 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2045,
            "unit": "ns/op",
            "extra": "52022 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1832,
            "unit": "B/op",
            "extra": "52022 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "52022 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1657,
            "unit": "ns/op\t    1344 B/op\t      16 allocs/op",
            "extra": "69888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1657,
            "unit": "ns/op",
            "extra": "69888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1344,
            "unit": "B/op",
            "extra": "69888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "69888 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 10510,
            "unit": "ns/op\t    8776 B/op\t     105 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 10510,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8776,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 105,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 10782,
            "unit": "ns/op\t    8288 B/op\t     100 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 10782,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8288,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 38370,
            "unit": "ns/op\t   32584 B/op\t     393 allocs/op",
            "extra": "3154 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 38370,
            "unit": "ns/op",
            "extra": "3154 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32584,
            "unit": "B/op",
            "extra": "3154 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 393,
            "unit": "allocs/op",
            "extra": "3154 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 41620,
            "unit": "ns/op\t   32096 B/op\t     388 allocs/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 41620,
            "unit": "ns/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32096,
            "unit": "B/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 388,
            "unit": "allocs/op",
            "extra": "3012 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 41424,
            "unit": "ns/op\t     344 B/op\t       9 allocs/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 41424,
            "unit": "ns/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1143,
            "unit": "ns/op\t     320 B/op\t       6 allocs/op",
            "extra": "101714 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1143,
            "unit": "ns/op",
            "extra": "101714 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "101714 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "101714 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 62.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1924494 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 62.36,
            "unit": "ns/op",
            "extra": "1924494 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1924494 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1924494 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 62.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1917602 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 62.44,
            "unit": "ns/op",
            "extra": "1917602 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1917602 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1917602 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 15084,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "9032 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 15084,
            "unit": "ns/op",
            "extra": "9032 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "9032 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "9032 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 14039,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 14039,
            "unit": "ns/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 20032,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5017 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 20032,
            "unit": "ns/op",
            "extra": "5017 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5017 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5017 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 20168,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5007 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 20168,
            "unit": "ns/op",
            "extra": "5007 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5007 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5007 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 16235,
            "unit": "ns/op\t     252 B/op\t       6 allocs/op",
            "extra": "6870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 16235,
            "unit": "ns/op",
            "extra": "6870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 252,
            "unit": "B/op",
            "extra": "6870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "6870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 902.1,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "131551 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 902.1,
            "unit": "ns/op",
            "extra": "131551 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "131551 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "131551 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 21652,
            "unit": "ns/op\t     302 B/op\t       7 allocs/op",
            "extra": "4776 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 21652,
            "unit": "ns/op",
            "extra": "4776 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 302,
            "unit": "B/op",
            "extra": "4776 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4776 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1081,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "110514 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1081,
            "unit": "ns/op",
            "extra": "110514 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "110514 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "110514 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 80608,
            "unit": "ns/op\t   30416 B/op\t      30 allocs/op",
            "extra": "1464 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 80608,
            "unit": "ns/op",
            "extra": "1464 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30416,
            "unit": "B/op",
            "extra": "1464 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1464 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2108,
            "unit": "ns/op\t    2008 B/op\t      28 allocs/op",
            "extra": "57468 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2108,
            "unit": "ns/op",
            "extra": "57468 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 2008,
            "unit": "B/op",
            "extra": "57468 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "57468 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 83915,
            "unit": "ns/op\t   33784 B/op\t      73 allocs/op",
            "extra": "1378 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 83915,
            "unit": "ns/op",
            "extra": "1378 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 33784,
            "unit": "B/op",
            "extra": "1378 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "1378 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 5987,
            "unit": "ns/op\t    5432 B/op\t      71 allocs/op",
            "extra": "19996 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 5987,
            "unit": "ns/op",
            "extra": "19996 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 5432,
            "unit": "B/op",
            "extra": "19996 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "19996 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 114646,
            "unit": "ns/op\t   60217 B/op\t     409 allocs/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 114646,
            "unit": "ns/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 60217,
            "unit": "B/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 409,
            "unit": "allocs/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34965,
            "unit": "ns/op\t   32312 B/op\t     407 allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34965,
            "unit": "ns/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32312,
            "unit": "B/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 407,
            "unit": "allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33290,
            "unit": "ns/op\t 246.08 MB/s\t   25058 B/op\t      76 allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33290,
            "unit": "ns/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 246.08,
            "unit": "MB/s",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25058,
            "unit": "B/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34211,
            "unit": "ns/op\t 239.45 MB/s\t   25050 B/op\t      76 allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34211,
            "unit": "ns/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 239.45,
            "unit": "MB/s",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25050,
            "unit": "B/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 35657,
            "unit": "ns/op\t 229.74 MB/s\t   25055 B/op\t      76 allocs/op",
            "extra": "3158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 35657,
            "unit": "ns/op",
            "extra": "3158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 229.74,
            "unit": "MB/s",
            "extra": "3158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25055,
            "unit": "B/op",
            "extra": "3158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33912,
            "unit": "ns/op\t 241.57 MB/s\t   25050 B/op\t      76 allocs/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33912,
            "unit": "ns/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 241.57,
            "unit": "MB/s",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25050,
            "unit": "B/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 519.1,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "228213 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 519.1,
            "unit": "ns/op",
            "extra": "228213 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "228213 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "228213 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 763.5,
            "unit": "ns/op\t      56 B/op\t       3 allocs/op",
            "extra": "155364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 763.5,
            "unit": "ns/op",
            "extra": "155364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 56,
            "unit": "B/op",
            "extra": "155364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "155364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1094,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "104166 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1094,
            "unit": "ns/op",
            "extra": "104166 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "104166 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "104166 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1783,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "68658 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1783,
            "unit": "ns/op",
            "extra": "68658 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "68658 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "68658 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 244.2,
            "unit": "ns/op\t      72 B/op\t       1 allocs/op",
            "extra": "513360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 244.2,
            "unit": "ns/op",
            "extra": "513360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "513360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "513360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1742337,
            "unit": "ns/op\t     191 B/op\t       4 allocs/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1742337,
            "unit": "ns/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 191,
            "unit": "B/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2548,
            "unit": "ns/op",
            "extra": "45961 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6259,
            "unit": "ns/op",
            "extra": "19008 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 13062,
            "unit": "ns/op",
            "extra": "7929 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 28432,
            "unit": "ns/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToLbaseUnderL0ToL0Pressure (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 13271,
            "unit": "ns/op",
            "extra": "8779 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 660.8,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "168625 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 660.8,
            "unit": "ns/op",
            "extra": "168625 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "168625 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "168625 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 668,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "156019 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 668,
            "unit": "ns/op",
            "extra": "156019 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "156019 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "156019 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 491.6,
            "unit": "ns/op\t      41 B/op\t       2 allocs/op",
            "extra": "243127 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 491.6,
            "unit": "ns/op",
            "extra": "243127 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 41,
            "unit": "B/op",
            "extra": "243127 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "243127 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1531,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "76768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1531,
            "unit": "ns/op",
            "extra": "76768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "76768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "76768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 582.2,
            "unit": "ns/op\t      43 B/op\t       2 allocs/op",
            "extra": "199903 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 582.2,
            "unit": "ns/op",
            "extra": "199903 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "199903 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "199903 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2514,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "47940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2514,
            "unit": "ns/op",
            "extra": "47940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "47940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "47940 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 134480,
            "unit": "ns/op\t  458776 B/op\t    2033 allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 134480,
            "unit": "ns/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 458776,
            "unit": "B/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2033,
            "unit": "allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 2248509,
            "unit": "ns/op\t 5096944 B/op\t   20271 allocs/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 2248509,
            "unit": "ns/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 5096944,
            "unit": "B/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 20271,
            "unit": "allocs/op",
            "extra": "49 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 29250878,
            "unit": "ns/op\t56256196 B/op\t  202588 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 29250878,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 56256196,
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
            "value": 8.437,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13426236 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 8.437,
            "unit": "ns/op",
            "extra": "13426236 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13426236 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13426236 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 271974,
            "unit": "ns/op\t  676799 B/op\t     224 allocs/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 271974,
            "unit": "ns/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 676799,
            "unit": "B/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 224,
            "unit": "allocs/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 3151350,
            "unit": "ns/op\t 6767112 B/op\t    2074 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 3151350,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 6767112,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2074,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 55.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2146380 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 55.78,
            "unit": "ns/op",
            "extra": "2146380 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2146380 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2146380 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal)",
            "value": 377.5,
            "unit": "ns/op\t 678.16 MB/s\t      40 B/op\t       3 allocs/op",
            "extra": "320578 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 377.5,
            "unit": "ns/op",
            "extra": "320578 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - MB/s",
            "value": 678.16,
            "unit": "MB/s",
            "extra": "320578 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "320578 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "320578 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal)",
            "value": 42118542,
            "unit": "ns/op\t 5992376 B/op\t   83380 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 42118542,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 5992376,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 83380,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local)",
            "value": 8327,
            "unit": "ns/op\t   3.84 MB/s\t     510 B/op\t      14 allocs/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 8327,
            "unit": "ns/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 3.84,
            "unit": "MB/s",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 510,
            "unit": "B/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local)",
            "value": 13671,
            "unit": "ns/op\t 299.62 MB/s\t    5256 B/op\t      14 allocs/op",
            "extra": "8785 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 13671,
            "unit": "ns/op",
            "extra": "8785 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 299.62,
            "unit": "MB/s",
            "extra": "8785 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5256,
            "unit": "B/op",
            "extra": "8785 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "8785 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local)",
            "value": 764.8,
            "unit": "ns/op\t  83.68 MB/s\t     267 B/op\t       5 allocs/op",
            "extra": "153003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 764.8,
            "unit": "ns/op",
            "extra": "153003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 83.68,
            "unit": "MB/s",
            "extra": "153003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 267,
            "unit": "B/op",
            "extra": "153003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "153003 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local)",
            "value": 1759,
            "unit": "ns/op\t2328.76 MB/s\t    5051 B/op\t       5 allocs/op",
            "extra": "65838 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 1759,
            "unit": "ns/op",
            "extra": "65838 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 2328.76,
            "unit": "MB/s",
            "extra": "65838 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5051,
            "unit": "B/op",
            "extra": "65838 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "65838 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local)",
            "value": 103430,
            "unit": "ns/op\t 158.41 MB/s\t   48450 B/op\t     220 allocs/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 103430,
            "unit": "ns/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 158.41,
            "unit": "MB/s",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48450,
            "unit": "B/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 220,
            "unit": "allocs/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local)",
            "value": 388240,
            "unit": "ns/op\t  42.20 MB/s\t   49329 B/op\t     254 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 388240,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 42.2,
            "unit": "MB/s",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49329,
            "unit": "B/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 254,
            "unit": "allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local)",
            "value": 384526,
            "unit": "ns/op\t  42.61 MB/s\t   49533 B/op\t     255 allocs/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 384526,
            "unit": "ns/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 42.61,
            "unit": "MB/s",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49533,
            "unit": "B/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 255,
            "unit": "allocs/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local)",
            "value": 90810,
            "unit": "ns/op\t  45.11 MB/s\t   21648 B/op\t     216 allocs/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 90810,
            "unit": "ns/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 45.11,
            "unit": "MB/s",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 21648,
            "unit": "B/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 216,
            "unit": "allocs/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local)",
            "value": 104837,
            "unit": "ns/op\t 156.28 MB/s\t   48549 B/op\t     224 allocs/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 104837,
            "unit": "ns/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 156.28,
            "unit": "MB/s",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48549,
            "unit": "B/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 224,
            "unit": "allocs/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local)",
            "value": 149858,
            "unit": "ns/op\t 437.32 MB/s\t  167300 B/op\t     230 allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 149858,
            "unit": "ns/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 437.32,
            "unit": "MB/s",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 167300,
            "unit": "B/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 230,
            "unit": "allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local)",
            "value": 311849,
            "unit": "ns/op\t 840.61 MB/s\t  657320 B/op\t     252 allocs/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 311849,
            "unit": "ns/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 840.61,
            "unit": "MB/s",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 657320,
            "unit": "B/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 252,
            "unit": "allocs/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local)",
            "value": 527234,
            "unit": "ns/op\t 994.41 MB/s\t 1309970 B/op\t     260 allocs/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 527234,
            "unit": "ns/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 994.41,
            "unit": "MB/s",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 1309970,
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
            "value": 3726845,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 3726845,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator)",
            "value": 911.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "115185 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 911.2,
            "unit": "ns/op",
            "extra": "115185 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "115185 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "115185 times\n4 procs"
          },
          {
            "name": "BenchmarkTouch (github.com/feichai0017/NoKV/thermos)",
            "value": 22.73,
            "unit": "ns/op",
            "extra": "5256840 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchParallel (github.com/feichai0017/NoKV/thermos)",
            "value": 56.35,
            "unit": "ns/op",
            "extra": "2128876 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchAndClamp (github.com/feichai0017/NoKV/thermos)",
            "value": 20.03,
            "unit": "ns/op",
            "extra": "5966217 times\n4 procs"
          },
          {
            "name": "BenchmarkFrequency (github.com/feichai0017/NoKV/thermos)",
            "value": 16.12,
            "unit": "ns/op",
            "extra": "7312264 times\n4 procs"
          },
          {
            "name": "BenchmarkTopN (github.com/feichai0017/NoKV/thermos)",
            "value": 20031110,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindow (github.com/feichai0017/NoKV/thermos)",
            "value": 80.09,
            "unit": "ns/op",
            "extra": "1499384 times\n4 procs"
          },
          {
            "name": "BenchmarkDecay (github.com/feichai0017/NoKV/thermos)",
            "value": 31958,
            "unit": "ns/op",
            "extra": "3555 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 4493628,
            "unit": "ns/op\t         2.000 apply/op\t   23777 B/op\t     323 allocs/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 4493628,
            "unit": "ns/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - apply/op",
            "value": 2,
            "unit": "apply/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - B/op",
            "value": 23777,
            "unit": "B/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 323,
            "unit": "allocs/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 6657677,
            "unit": "ns/op\t         2.000 apply/op\t   35004 B/op\t     454 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 6657677,
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
            "value": 35004,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 454,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 8857444,
            "unit": "ns/op\t         2.000 apply/op\t   55312 B/op\t     692 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 8857444,
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
            "value": 55312,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 692,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 51.83,
            "unit": "ns/op",
            "extra": "2279437 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 180.6,
            "unit": "ns/op",
            "extra": "696003 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 210.5,
            "unit": "ns/op",
            "extra": "658210 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 232.8,
            "unit": "ns/op",
            "extra": "552181 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 44.21,
            "unit": "ns/op",
            "extra": "2727835 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 111,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 150.9,
            "unit": "ns/op",
            "extra": "864339 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 181,
            "unit": "ns/op",
            "extra": "769524 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 54.31,
            "unit": "ns/op",
            "extra": "2173574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 189.6,
            "unit": "ns/op",
            "extra": "703927 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 220.6,
            "unit": "ns/op",
            "extra": "593029 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 229.8,
            "unit": "ns/op",
            "extra": "544884 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePopOnlyReady (github.com/feichai0017/NoKV/utils)",
            "value": 28.31,
            "unit": "ns/op",
            "extra": "4252482 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueFullQueueWake (github.com/feichai0017/NoKV/utils)",
            "value": 283.5,
            "unit": "ns/op",
            "extra": "378789 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 5577,
            "unit": "ns/op",
            "extra": "21486 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 8209,
            "unit": "ns/op",
            "extra": "14280 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 45.01,
            "unit": "ns/op",
            "extra": "2564246 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 89.52,
            "unit": "ns/op",
            "extra": "1337805 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 88.16,
            "unit": "ns/op",
            "extra": "1372956 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 86.9,
            "unit": "ns/op",
            "extra": "1382245 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPopBurst (github.com/feichai0017/NoKV/utils)",
            "value": 11.16,
            "unit": "ns/op",
            "extra": "10762862 times\n4 procs"
          }
        ]
      }
    ]
  }
}