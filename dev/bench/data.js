window.BENCHMARK_DATA = {
  "lastUpdate": 1778065561967,
  "repoUrl": "https://github.com/Rinai-R/NoKV",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "songguocheng348@gmail.com",
            "name": "Guocheng Song",
            "username": "feichai0017"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "455af83bbee6c6bda0ba045bdde36062da1c13f0",
          "message": "Fix fsmeta 2PC commit timestamp boundary (#233)\n\n* Fix fsmeta 2PC commit timestamp boundary\n\n* Propagate actual fsmeta commit timestamps\n\n* Pin fsmeta handoff commit frontiers",
          "timestamp": "2026-05-06T20:24:10+10:00",
          "tree_id": "8253c47faeac503b4b8080e6a232ebe2ced2064e",
          "url": "https://github.com/Rinai-R/NoKV/commit/455af83bbee6c6bda0ba045bdde36062da1c13f0"
        },
        "date": 1778065560715,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 1980,
            "unit": "ns/op\t  32.32 MB/s\t    1541 B/op\t       0 allocs/op",
            "extra": "102547 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1980,
            "unit": "ns/op",
            "extra": "102547 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 32.32,
            "unit": "MB/s",
            "extra": "102547 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 1541,
            "unit": "B/op",
            "extra": "102547 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "102547 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 373.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "363201 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 373.6,
            "unit": "ns/op",
            "extra": "363201 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "363201 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "363201 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 298,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "406243 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 298,
            "unit": "ns/op",
            "extra": "406243 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "406243 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "406243 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 128.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1322259 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 128.8,
            "unit": "ns/op",
            "extra": "1322259 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1322259 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1322259 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 1937,
            "unit": "ns/op\t  33.03 MB/s\t     155 B/op\t       1 allocs/op",
            "extra": "135656 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 1937,
            "unit": "ns/op",
            "extra": "135656 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 33.03,
            "unit": "MB/s",
            "extra": "135656 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 155,
            "unit": "B/op",
            "extra": "135656 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "135656 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 741.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146853 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 741.1,
            "unit": "ns/op",
            "extra": "146853 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "146853 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "146853 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 443.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287462 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 443.6,
            "unit": "ns/op",
            "extra": "287462 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287462 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287462 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 51.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2580472 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 51.34,
            "unit": "ns/op",
            "extra": "2580472 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2580472 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2580472 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index)",
            "value": 492.7,
            "unit": "ns/op\t 129.89 MB/s\t     159 B/op\t       1 allocs/op",
            "extra": "327996 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 492.7,
            "unit": "ns/op",
            "extra": "327996 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 129.89,
            "unit": "MB/s",
            "extra": "327996 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 159,
            "unit": "B/op",
            "extra": "327996 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "327996 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index)",
            "value": 994.5,
            "unit": "ns/op\t  64.36 MB/s\t     160 B/op\t       1 allocs/op",
            "extra": "341944 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 994.5,
            "unit": "ns/op",
            "extra": "341944 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 64.36,
            "unit": "MB/s",
            "extra": "341944 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "341944 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "341944 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerNilCharge (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2.205,
            "unit": "ns/op",
            "extra": "53536294 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeFromBucket (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 41.79,
            "unit": "ns/op",
            "extra": "3275788 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeWithMockSleep (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 42.98,
            "unit": "ns/op",
            "extra": "2630228 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerStats (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 0.6246,
            "unit": "ns/op",
            "extra": "191908519 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyLinear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1087,
            "unit": "ns/op",
            "extra": "96357 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyViaSublevels (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 101.7,
            "unit": "ns/op",
            "extra": "1059687 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 36214,
            "unit": "ns/op\t 226.21 MB/s\t   34913 B/op\t     206 allocs/op",
            "extra": "2763 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 36214,
            "unit": "ns/op",
            "extra": "2763 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 226.21,
            "unit": "MB/s",
            "extra": "2763 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34913,
            "unit": "B/op",
            "extra": "2763 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "2763 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 44331,
            "unit": "ns/op\t 184.79 MB/s\t   34908 B/op\t     206 allocs/op",
            "extra": "2613 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 44331,
            "unit": "ns/op",
            "extra": "2613 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 184.79,
            "unit": "MB/s",
            "extra": "2613 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34908,
            "unit": "B/op",
            "extra": "2613 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "2613 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6992570,
            "unit": "ns/op\t75976472 B/op\t     530 allocs/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 6992570,
            "unit": "ns/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75976472,
            "unit": "B/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 530,
            "unit": "allocs/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 7960437,
            "unit": "ns/op\t75960749 B/op\t     525 allocs/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 7960437,
            "unit": "ns/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75960749,
            "unit": "B/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 525,
            "unit": "allocs/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 686.4,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "163136 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 686.4,
            "unit": "ns/op",
            "extra": "163136 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "163136 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "163136 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 901.1,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "129193 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 901.1,
            "unit": "ns/op",
            "extra": "129193 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "129193 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "129193 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 161.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "635757 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 161.2,
            "unit": "ns/op",
            "extra": "635757 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "635757 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "635757 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 332.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "381412 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 332.8,
            "unit": "ns/op",
            "extra": "381412 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "381412 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "381412 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34730,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3336 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34730,
            "unit": "ns/op",
            "extra": "3336 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3336 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3336 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 93.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1294599 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 93.49,
            "unit": "ns/op",
            "extra": "1294599 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1294599 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1294599 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 18445,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 18445,
            "unit": "ns/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 519.1,
            "unit": "ns/op\t     280 B/op\t       4 allocs/op",
            "extra": "230611 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 519.1,
            "unit": "ns/op",
            "extra": "230611 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 280,
            "unit": "B/op",
            "extra": "230611 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "230611 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 17587,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "6596 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 17587,
            "unit": "ns/op",
            "extra": "6596 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "6596 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6596 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 488.5,
            "unit": "ns/op\t     248 B/op\t       3 allocs/op",
            "extra": "249925 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 488.5,
            "unit": "ns/op",
            "extra": "249925 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 248,
            "unit": "B/op",
            "extra": "249925 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "249925 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 55400,
            "unit": "ns/op\t   19080 B/op\t      11 allocs/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 55400,
            "unit": "ns/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 19080,
            "unit": "B/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 882.8,
            "unit": "ns/op\t     656 B/op\t      11 allocs/op",
            "extra": "136466 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 882.8,
            "unit": "ns/op",
            "extra": "136466 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 656,
            "unit": "B/op",
            "extra": "136466 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "136466 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 59227,
            "unit": "ns/op\t   22448 B/op\t      54 allocs/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 59227,
            "unit": "ns/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 22448,
            "unit": "B/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 4563,
            "unit": "ns/op\t    4080 B/op\t      54 allocs/op",
            "extra": "24681 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 4563,
            "unit": "ns/op",
            "extra": "24681 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 4080,
            "unit": "B/op",
            "extra": "24681 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "24681 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 89048,
            "unit": "ns/op\t   48880 B/op\t     390 allocs/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 89048,
            "unit": "ns/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 48880,
            "unit": "B/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33443,
            "unit": "ns/op\t   30960 B/op\t     390 allocs/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33443,
            "unit": "ns/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30960,
            "unit": "B/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2193,
            "unit": "ns/op\t    1832 B/op\t      21 allocs/op",
            "extra": "49357 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2193,
            "unit": "ns/op",
            "extra": "49357 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1832,
            "unit": "B/op",
            "extra": "49357 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "49357 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1792,
            "unit": "ns/op\t    1344 B/op\t      16 allocs/op",
            "extra": "58006 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1792,
            "unit": "ns/op",
            "extra": "58006 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1344,
            "unit": "B/op",
            "extra": "58006 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "58006 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 10938,
            "unit": "ns/op\t    8776 B/op\t     105 allocs/op",
            "extra": "10767 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 10938,
            "unit": "ns/op",
            "extra": "10767 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8776,
            "unit": "B/op",
            "extra": "10767 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 105,
            "unit": "allocs/op",
            "extra": "10767 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 11438,
            "unit": "ns/op\t    8288 B/op\t     100 allocs/op",
            "extra": "9828 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 11438,
            "unit": "ns/op",
            "extra": "9828 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8288,
            "unit": "B/op",
            "extra": "9828 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "9828 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 41598,
            "unit": "ns/op\t   32584 B/op\t     393 allocs/op",
            "extra": "2990 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 41598,
            "unit": "ns/op",
            "extra": "2990 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32584,
            "unit": "B/op",
            "extra": "2990 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 393,
            "unit": "allocs/op",
            "extra": "2990 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 43845,
            "unit": "ns/op\t   32096 B/op\t     388 allocs/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 43845,
            "unit": "ns/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32096,
            "unit": "B/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 388,
            "unit": "allocs/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 46359,
            "unit": "ns/op\t     344 B/op\t       9 allocs/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 46359,
            "unit": "ns/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1266,
            "unit": "ns/op\t     320 B/op\t       6 allocs/op",
            "extra": "95450 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1266,
            "unit": "ns/op",
            "extra": "95450 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "95450 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "95450 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 61.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1954567 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 61.26,
            "unit": "ns/op",
            "extra": "1954567 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1954567 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1954567 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 61.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1962709 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 61.17,
            "unit": "ns/op",
            "extra": "1962709 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1962709 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1962709 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 16421,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 16421,
            "unit": "ns/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 16066,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 16066,
            "unit": "ns/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 23072,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 23072,
            "unit": "ns/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 23650,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5365 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 23650,
            "unit": "ns/op",
            "extra": "5365 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5365 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5365 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 18704,
            "unit": "ns/op\t     252 B/op\t       6 allocs/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 18704,
            "unit": "ns/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 252,
            "unit": "B/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 997.8,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "119898 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 997.8,
            "unit": "ns/op",
            "extra": "119898 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "119898 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "119898 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 24819,
            "unit": "ns/op\t     302 B/op\t       7 allocs/op",
            "extra": "4941 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 24819,
            "unit": "ns/op",
            "extra": "4941 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 302,
            "unit": "B/op",
            "extra": "4941 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4941 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1188,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "100442 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1188,
            "unit": "ns/op",
            "extra": "100442 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "100442 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "100442 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 82762,
            "unit": "ns/op\t   30416 B/op\t      30 allocs/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 82762,
            "unit": "ns/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30416,
            "unit": "B/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2216,
            "unit": "ns/op\t    2008 B/op\t      28 allocs/op",
            "extra": "53708 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2216,
            "unit": "ns/op",
            "extra": "53708 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 2008,
            "unit": "B/op",
            "extra": "53708 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "53708 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 87507,
            "unit": "ns/op\t   33784 B/op\t      73 allocs/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 87507,
            "unit": "ns/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 33784,
            "unit": "B/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6345,
            "unit": "ns/op\t    5432 B/op\t      71 allocs/op",
            "extra": "18549 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 6345,
            "unit": "ns/op",
            "extra": "18549 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 5432,
            "unit": "B/op",
            "extra": "18549 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "18549 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 120486,
            "unit": "ns/op\t   60216 B/op\t     409 allocs/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 120486,
            "unit": "ns/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 60216,
            "unit": "B/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 409,
            "unit": "allocs/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 38461,
            "unit": "ns/op\t   32312 B/op\t     407 allocs/op",
            "extra": "3080 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 38461,
            "unit": "ns/op",
            "extra": "3080 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32312,
            "unit": "B/op",
            "extra": "3080 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 407,
            "unit": "allocs/op",
            "extra": "3080 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34720,
            "unit": "ns/op\t 235.95 MB/s\t   25049 B/op\t      76 allocs/op",
            "extra": "3271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34720,
            "unit": "ns/op",
            "extra": "3271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 235.95,
            "unit": "MB/s",
            "extra": "3271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25049,
            "unit": "B/op",
            "extra": "3271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 35680,
            "unit": "ns/op\t 229.59 MB/s\t   25054 B/op\t      76 allocs/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 35680,
            "unit": "ns/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 229.59,
            "unit": "MB/s",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25054,
            "unit": "B/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 35161,
            "unit": "ns/op\t 232.99 MB/s\t   25054 B/op\t      76 allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 35161,
            "unit": "ns/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 232.99,
            "unit": "MB/s",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25054,
            "unit": "B/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 35022,
            "unit": "ns/op\t 233.91 MB/s\t   25051 B/op\t      76 allocs/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 35022,
            "unit": "ns/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 233.91,
            "unit": "MB/s",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25051,
            "unit": "B/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 587.2,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "178792 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 587.2,
            "unit": "ns/op",
            "extra": "178792 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "178792 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "178792 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 807.3,
            "unit": "ns/op\t      56 B/op\t       3 allocs/op",
            "extra": "147348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 807.3,
            "unit": "ns/op",
            "extra": "147348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 56,
            "unit": "B/op",
            "extra": "147348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "147348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1118,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "107952 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1118,
            "unit": "ns/op",
            "extra": "107952 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "107952 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "107952 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1754,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "67021 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1754,
            "unit": "ns/op",
            "extra": "67021 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "67021 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "67021 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 265.8,
            "unit": "ns/op\t      72 B/op\t       1 allocs/op",
            "extra": "479529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 265.8,
            "unit": "ns/op",
            "extra": "479529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "479529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "479529 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1588196,
            "unit": "ns/op\t     190 B/op\t       4 allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1588196,
            "unit": "ns/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 190,
            "unit": "B/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2657,
            "unit": "ns/op",
            "extra": "42876 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6438,
            "unit": "ns/op",
            "extra": "17299 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 13944,
            "unit": "ns/op",
            "extra": "8589 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 31012,
            "unit": "ns/op",
            "extra": "3423 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToLbaseUnderL0ToL0Pressure (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 13589,
            "unit": "ns/op",
            "extra": "8803 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 708.1,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "153991 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 708.1,
            "unit": "ns/op",
            "extra": "153991 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "153991 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "153991 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 707.4,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "162195 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 707.4,
            "unit": "ns/op",
            "extra": "162195 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "162195 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "162195 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 478.1,
            "unit": "ns/op\t      41 B/op\t       2 allocs/op",
            "extra": "224462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 478.1,
            "unit": "ns/op",
            "extra": "224462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 41,
            "unit": "B/op",
            "extra": "224462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "224462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1611,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "77011 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1611,
            "unit": "ns/op",
            "extra": "77011 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "77011 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "77011 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 531.1,
            "unit": "ns/op\t      43 B/op\t       2 allocs/op",
            "extra": "213789 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 531.1,
            "unit": "ns/op",
            "extra": "213789 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "213789 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "213789 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2513,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "45405 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2513,
            "unit": "ns/op",
            "extra": "45405 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "45405 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "45405 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 132017,
            "unit": "ns/op\t  458776 B/op\t    2033 allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 132017,
            "unit": "ns/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 458776,
            "unit": "B/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2033,
            "unit": "allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 2218191,
            "unit": "ns/op\t 5096930 B/op\t   20271 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 2218191,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 5096930,
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
            "value": 25185097,
            "unit": "ns/op\t56256196 B/op\t  202588 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 25185097,
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
            "value": 7.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16284379 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 7.36,
            "unit": "ns/op",
            "extra": "16284379 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16284379 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16284379 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 270874,
            "unit": "ns/op\t  676802 B/op\t     224 allocs/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 270874,
            "unit": "ns/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 676802,
            "unit": "B/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 224,
            "unit": "allocs/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 3987923,
            "unit": "ns/op\t 6767002 B/op\t    2074 allocs/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 3987923,
            "unit": "ns/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 6767002,
            "unit": "B/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2074,
            "unit": "allocs/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 51.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2312796 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 51.65,
            "unit": "ns/op",
            "extra": "2312796 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2312796 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2312796 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal)",
            "value": 421.3,
            "unit": "ns/op\t 607.65 MB/s\t      40 B/op\t       3 allocs/op",
            "extra": "294488 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 421.3,
            "unit": "ns/op",
            "extra": "294488 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - MB/s",
            "value": 607.65,
            "unit": "MB/s",
            "extra": "294488 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "294488 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "294488 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal)",
            "value": 35718899,
            "unit": "ns/op\t 5991541 B/op\t   83376 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 35718899,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 5991541,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 83376,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local)",
            "value": 7467,
            "unit": "ns/op\t   4.29 MB/s\t     509 B/op\t      14 allocs/op",
            "extra": "16024 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 7467,
            "unit": "ns/op",
            "extra": "16024 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 4.29,
            "unit": "MB/s",
            "extra": "16024 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 509,
            "unit": "B/op",
            "extra": "16024 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "16024 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local)",
            "value": 14521,
            "unit": "ns/op\t 282.08 MB/s\t    5256 B/op\t      14 allocs/op",
            "extra": "8206 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 14521,
            "unit": "ns/op",
            "extra": "8206 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 282.08,
            "unit": "MB/s",
            "extra": "8206 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5256,
            "unit": "B/op",
            "extra": "8206 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "8206 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local)",
            "value": 909.8,
            "unit": "ns/op\t  70.34 MB/s\t     267 B/op\t       5 allocs/op",
            "extra": "119389 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 909.8,
            "unit": "ns/op",
            "extra": "119389 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 70.34,
            "unit": "MB/s",
            "extra": "119389 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 267,
            "unit": "B/op",
            "extra": "119389 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "119389 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local)",
            "value": 1840,
            "unit": "ns/op\t2226.64 MB/s\t    5051 B/op\t       5 allocs/op",
            "extra": "55470 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 1840,
            "unit": "ns/op",
            "extra": "55470 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 2226.64,
            "unit": "MB/s",
            "extra": "55470 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5051,
            "unit": "B/op",
            "extra": "55470 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "55470 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local)",
            "value": 99568,
            "unit": "ns/op\t 164.55 MB/s\t   48414 B/op\t     220 allocs/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 99568,
            "unit": "ns/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 164.55,
            "unit": "MB/s",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48414,
            "unit": "B/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 220,
            "unit": "allocs/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local)",
            "value": 515565,
            "unit": "ns/op\t  31.78 MB/s\t   49637 B/op\t     259 allocs/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 515565,
            "unit": "ns/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 31.78,
            "unit": "MB/s",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49637,
            "unit": "B/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 259,
            "unit": "allocs/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local)",
            "value": 537076,
            "unit": "ns/op\t  30.51 MB/s\t   49653 B/op\t     261 allocs/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 537076,
            "unit": "ns/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 30.51,
            "unit": "MB/s",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49653,
            "unit": "B/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 261,
            "unit": "allocs/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local)",
            "value": 105962,
            "unit": "ns/op\t  38.66 MB/s\t   21711 B/op\t     220 allocs/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 105962,
            "unit": "ns/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 38.66,
            "unit": "MB/s",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 21711,
            "unit": "B/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 220,
            "unit": "allocs/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local)",
            "value": 109464,
            "unit": "ns/op\t 149.67 MB/s\t   48564 B/op\t     226 allocs/op",
            "extra": "986 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 109464,
            "unit": "ns/op",
            "extra": "986 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 149.67,
            "unit": "MB/s",
            "extra": "986 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48564,
            "unit": "B/op",
            "extra": "986 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "986 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local)",
            "value": 174560,
            "unit": "ns/op\t 375.43 MB/s\t  167534 B/op\t     234 allocs/op",
            "extra": "763 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 174560,
            "unit": "ns/op",
            "extra": "763 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 375.43,
            "unit": "MB/s",
            "extra": "763 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 167534,
            "unit": "B/op",
            "extra": "763 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "763 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local)",
            "value": 341226,
            "unit": "ns/op\t 768.24 MB/s\t  657621 B/op\t     254 allocs/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 341226,
            "unit": "ns/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 768.24,
            "unit": "MB/s",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 657621,
            "unit": "B/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 254,
            "unit": "allocs/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local)",
            "value": 585984,
            "unit": "ns/op\t 894.71 MB/s\t 1310306 B/op\t     261 allocs/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 585984,
            "unit": "ns/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 894.71,
            "unit": "MB/s",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 1310306,
            "unit": "B/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 261,
            "unit": "allocs/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator)",
            "value": 4737420,
            "unit": "ns/op\t      13 B/op\t       0 allocs/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 4737420,
            "unit": "ns/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 13,
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
            "value": 1103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 1103,
            "unit": "ns/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkTouch (github.com/feichai0017/NoKV/thermos)",
            "value": 23.7,
            "unit": "ns/op",
            "extra": "5006031 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchParallel (github.com/feichai0017/NoKV/thermos)",
            "value": 55.25,
            "unit": "ns/op",
            "extra": "2167777 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchAndClamp (github.com/feichai0017/NoKV/thermos)",
            "value": 20.49,
            "unit": "ns/op",
            "extra": "5885277 times\n4 procs"
          },
          {
            "name": "BenchmarkFrequency (github.com/feichai0017/NoKV/thermos)",
            "value": 16.84,
            "unit": "ns/op",
            "extra": "7239400 times\n4 procs"
          },
          {
            "name": "BenchmarkTopN (github.com/feichai0017/NoKV/thermos)",
            "value": 19616114,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindow (github.com/feichai0017/NoKV/thermos)",
            "value": 77.46,
            "unit": "ns/op",
            "extra": "1566728 times\n4 procs"
          },
          {
            "name": "BenchmarkDecay (github.com/feichai0017/NoKV/thermos)",
            "value": 55577,
            "unit": "ns/op",
            "extra": "1965 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 4500514,
            "unit": "ns/op\t         2.000 apply/op\t   23547 B/op\t     320 allocs/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 4500514,
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
            "value": 23547,
            "unit": "B/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 320,
            "unit": "allocs/op",
            "extra": "25 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 6796316,
            "unit": "ns/op\t         2.000 apply/op\t   34673 B/op\t     453 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 6796316,
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
            "value": 34673,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 453,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 9084306,
            "unit": "ns/op\t         2.000 apply/op\t   55847 B/op\t     703 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 9084306,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - apply/op",
            "value": 2,
            "unit": "apply/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - B/op",
            "value": 55847,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 703,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 48.04,
            "unit": "ns/op",
            "extra": "2433216 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 145.3,
            "unit": "ns/op",
            "extra": "886738 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 163.9,
            "unit": "ns/op",
            "extra": "903812 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 184.1,
            "unit": "ns/op",
            "extra": "643210 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 37.54,
            "unit": "ns/op",
            "extra": "3135571 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 109.4,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 129.7,
            "unit": "ns/op",
            "extra": "930409 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 163.2,
            "unit": "ns/op",
            "extra": "989425 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 58.21,
            "unit": "ns/op",
            "extra": "2106888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 162,
            "unit": "ns/op",
            "extra": "805504 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 178.3,
            "unit": "ns/op",
            "extra": "754758 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 201.7,
            "unit": "ns/op",
            "extra": "863937 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePopOnlyReady (github.com/feichai0017/NoKV/utils)",
            "value": 26,
            "unit": "ns/op",
            "extra": "4565598 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueFullQueueWake (github.com/feichai0017/NoKV/utils)",
            "value": 286,
            "unit": "ns/op",
            "extra": "408823 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 4714,
            "unit": "ns/op",
            "extra": "25875 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 8251,
            "unit": "ns/op",
            "extra": "14248 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 49.8,
            "unit": "ns/op",
            "extra": "2672806 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 73.65,
            "unit": "ns/op",
            "extra": "1639106 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 75.15,
            "unit": "ns/op",
            "extra": "1654087 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 72.13,
            "unit": "ns/op",
            "extra": "1663422 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPopBurst (github.com/feichai0017/NoKV/utils)",
            "value": 9.888,
            "unit": "ns/op",
            "extra": "12175540 times\n4 procs"
          }
        ]
      }
    ]
  }
}