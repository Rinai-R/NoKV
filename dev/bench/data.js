window.BENCHMARK_DATA = {
  "lastUpdate": 1778151847717,
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
          "id": "70d35ebab7ebb2dd1ff43646dfaf05e8e0bf8f8b",
          "message": "Keep 2PC primary locks alive during commit (#239)\n\nSigned-off-by: eric_song <songguocheng348@gmail.com>",
          "timestamp": "2026-05-07T20:58:29+10:00",
          "tree_id": "46f5118021ab5b0c63fc789419898e2a1500702b",
          "url": "https://github.com/Rinai-R/NoKV/commit/70d35ebab7ebb2dd1ff43646dfaf05e8e0bf8f8b"
        },
        "date": 1778151847106,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 496.9,
            "unit": "ns/op\t 128.79 MB/s\t    1540 B/op\t       0 allocs/op",
            "extra": "246286 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 496.9,
            "unit": "ns/op",
            "extra": "246286 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 128.79,
            "unit": "MB/s",
            "extra": "246286 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 1540,
            "unit": "B/op",
            "extra": "246286 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "246286 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 155.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "768884 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 155.9,
            "unit": "ns/op",
            "extra": "768884 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "768884 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "768884 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 129.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890876 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 129.3,
            "unit": "ns/op",
            "extra": "890876 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "890876 times\n4 procs"
          },
          {
            "name": "BenchmarkARTSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "890876 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 56.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2151026 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 56.26,
            "unit": "ns/op",
            "extra": "2151026 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2151026 times\n4 procs"
          },
          {
            "name": "BenchmarkARTIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2151026 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index)",
            "value": 988.3,
            "unit": "ns/op\t  64.76 MB/s\t     160 B/op\t       1 allocs/op",
            "extra": "172041 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 988.3,
            "unit": "ns/op",
            "extra": "172041 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 64.76,
            "unit": "MB/s",
            "extra": "172041 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "172041 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "172041 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index)",
            "value": 443.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "269311 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 443.9,
            "unit": "ns/op",
            "extra": "269311 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "269311 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "269311 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index)",
            "value": 396.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "292209 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 396.4,
            "unit": "ns/op",
            "extra": "292209 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292209 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistSeek (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292209 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index)",
            "value": 44.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2686212 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 44.29,
            "unit": "ns/op",
            "extra": "2686212 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2686212 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistIteratorNext (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2686212 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index)",
            "value": 415,
            "unit": "ns/op\t 154.21 MB/s\t     160 B/op\t       1 allocs/op",
            "extra": "376111 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 415,
            "unit": "ns/op",
            "extra": "376111 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 154.21,
            "unit": "MB/s",
            "extra": "376111 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "376111 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertSequential (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "376111 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index)",
            "value": 914,
            "unit": "ns/op\t  70.02 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "352724 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - ns/op",
            "value": 914,
            "unit": "ns/op",
            "extra": "352724 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - MB/s",
            "value": 70.02,
            "unit": "MB/s",
            "extra": "352724 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - B/op",
            "value": 162,
            "unit": "B/op",
            "extra": "352724 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsertRandom (github.com/feichai0017/NoKV/engine/index) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "352724 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerNilCharge (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2.193,
            "unit": "ns/op",
            "extra": "53446806 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeFromBucket (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 40.96,
            "unit": "ns/op",
            "extra": "3320409 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerChargeWithMockSleep (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 43.86,
            "unit": "ns/op",
            "extra": "2720840 times\n4 procs"
          },
          {
            "name": "BenchmarkCompactionPacerStats (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 0.4189,
            "unit": "ns/op",
            "extra": "287327072 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyLinear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1079,
            "unit": "ns/op",
            "extra": "93112 times\n4 procs"
          },
          {
            "name": "BenchmarkL0SelectTablesForKeyViaSublevels (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 102.9,
            "unit": "ns/op",
            "extra": "1147977 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 33306,
            "unit": "ns/op\t 245.96 MB/s\t   34910 B/op\t     206 allocs/op",
            "extra": "3553 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 33306,
            "unit": "ns/op",
            "extra": "3553 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 245.96,
            "unit": "MB/s",
            "extra": "3553 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34910,
            "unit": "B/op",
            "extra": "3553 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "3553 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 46468,
            "unit": "ns/op\t 176.29 MB/s\t   34928 B/op\t     206 allocs/op",
            "extra": "2307 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 46468,
            "unit": "ns/op",
            "extra": "2307 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 176.29,
            "unit": "MB/s",
            "extra": "2307 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 34928,
            "unit": "B/op",
            "extra": "2307 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 206,
            "unit": "allocs/op",
            "extra": "2307 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 7088458,
            "unit": "ns/op\t75965919 B/op\t     529 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 7088458,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75965919,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 7698229,
            "unit": "ns/op\t75966910 B/op\t     526 allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 7698229,
            "unit": "ns/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 75966910,
            "unit": "B/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 526,
            "unit": "allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 659.1,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "182746 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 659.1,
            "unit": "ns/op",
            "extra": "182746 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "182746 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "182746 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 870.5,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "130564 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 870.5,
            "unit": "ns/op",
            "extra": "130564 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "130564 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMGetMemtableHit/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "130564 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 157.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "687778 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 157.1,
            "unit": "ns/op",
            "extra": "687778 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "687778 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/art (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "687778 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 341.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "345688 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 341.6,
            "unit": "ns/op",
            "extra": "345688 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "345688 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMemtableIterSeek/skiplist (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "345688 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 35354,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 35354,
            "unit": "ns/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 90.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1329418 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 90.09,
            "unit": "ns/op",
            "extra": "1329418 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1329418 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1329418 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 18119,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 18119,
            "unit": "ns/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 508.8,
            "unit": "ns/op\t     280 B/op\t       4 allocs/op",
            "extra": "232814 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 508.8,
            "unit": "ns/op",
            "extra": "232814 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 280,
            "unit": "B/op",
            "extra": "232814 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointHitPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "232814 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 17382,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "6628 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 17382,
            "unit": "ns/op",
            "extra": "6628 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "6628 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6628 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 476.5,
            "unit": "ns/op\t     248 B/op\t       3 allocs/op",
            "extra": "251116 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 476.5,
            "unit": "ns/op",
            "extra": "251116 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 248,
            "unit": "B/op",
            "extra": "251116 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelPointInRangeMissPruning/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "251116 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 57916,
            "unit": "ns/op\t   19080 B/op\t      11 allocs/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 57916,
            "unit": "ns/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 19080,
            "unit": "B/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 909.8,
            "unit": "ns/op\t     656 B/op\t      11 allocs/op",
            "extra": "134422 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 909.8,
            "unit": "ns/op",
            "extra": "134422 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 656,
            "unit": "B/op",
            "extra": "134422 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_1/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "134422 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 62921,
            "unit": "ns/op\t   22448 B/op\t      54 allocs/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 62921,
            "unit": "ns/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 22448,
            "unit": "B/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 4723,
            "unit": "ns/op\t    4080 B/op\t      54 allocs/op",
            "extra": "22897 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 4723,
            "unit": "ns/op",
            "extra": "22897 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 4080,
            "unit": "B/op",
            "extra": "22897 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_8/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "22897 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 90722,
            "unit": "ns/op\t   48880 B/op\t     390 allocs/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 90722,
            "unit": "ns/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 48880,
            "unit": "B/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 34130,
            "unit": "ns/op\t   30960 B/op\t     390 allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 34130,
            "unit": "ns/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30960,
            "unit": "B/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelIteratorBoundsPruning/width_64/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 390,
            "unit": "allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2115,
            "unit": "ns/op\t    1832 B/op\t      21 allocs/op",
            "extra": "51601 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2115,
            "unit": "ns/op",
            "extra": "51601 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1832,
            "unit": "B/op",
            "extra": "51601 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "51601 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1829,
            "unit": "ns/op\t    1344 B/op\t      16 allocs/op",
            "extra": "59270 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1829,
            "unit": "ns/op",
            "extra": "59270 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 1344,
            "unit": "B/op",
            "extra": "59270 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_8/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "59270 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 11496,
            "unit": "ns/op\t    8776 B/op\t     105 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 11496,
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
            "value": 11331,
            "unit": "ns/op\t    8288 B/op\t     100 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_64/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 11331,
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
            "value": 43241,
            "unit": "ns/op\t   32584 B/op\t     393 allocs/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 43241,
            "unit": "ns/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32584,
            "unit": "B/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/manual_seek_break (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 393,
            "unit": "allocs/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 46512,
            "unit": "ns/op\t   32096 B/op\t     388 allocs/op",
            "extra": "2769 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 46512,
            "unit": "ns/op",
            "extra": "2769 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32096,
            "unit": "B/op",
            "extra": "2769 times\n4 procs"
          },
          {
            "name": "BenchmarkTableIteratorBlockBounds/width_256/block_range (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 388,
            "unit": "allocs/op",
            "extra": "2769 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 46737,
            "unit": "ns/op\t     344 B/op\t       9 allocs/op",
            "extra": "2511 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 46737,
            "unit": "ns/op",
            "extra": "2511 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "2511 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2511 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1226,
            "unit": "ns/op\t     320 B/op\t       6 allocs/op",
            "extra": "99607 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1226,
            "unit": "ns/op",
            "extra": "99607 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 320,
            "unit": "B/op",
            "extra": "99607 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/deep_hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "99607 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 62.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1912975 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 62.86,
            "unit": "ns/op",
            "extra": "1912975 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1912975 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1912975 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 63.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1908128 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 63.18,
            "unit": "ns/op",
            "extra": "1908128 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1908128 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelPointPruning/miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1908128 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 16457,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 16457,
            "unit": "ns/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 15681,
            "unit": "ns/op\t    7504 B/op\t       8 allocs/op",
            "extra": "7622 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 15681,
            "unit": "ns/op",
            "extra": "7622 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7504,
            "unit": "B/op",
            "extra": "7622 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/hit/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "7622 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 22729,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5198 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 22729,
            "unit": "ns/op",
            "extra": "5198 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5198 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5198 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 23342,
            "unit": "ns/op\t    7224 B/op\t       4 allocs/op",
            "extra": "5383 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 23342,
            "unit": "ns/op",
            "extra": "5383 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 7224,
            "unit": "B/op",
            "extra": "5383 times\n4 procs"
          },
          {
            "name": "BenchmarkLevelL0OverlapFallback/in_range_miss/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5383 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 18317,
            "unit": "ns/op\t     252 B/op\t       6 allocs/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 18317,
            "unit": "ns/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 252,
            "unit": "B/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 962.7,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "125132 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 962.7,
            "unit": "ns/op",
            "extra": "125132 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "125132 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_50_miss_50/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "125132 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 24322,
            "unit": "ns/op\t     302 B/op\t       7 allocs/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 24322,
            "unit": "ns/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 302,
            "unit": "B/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1133,
            "unit": "ns/op\t     288 B/op\t       5 allocs/op",
            "extra": "104210 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1133,
            "unit": "ns/op",
            "extra": "104210 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "104210 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMixedPointPruning/hit_90_miss_10/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "104210 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 88708,
            "unit": "ns/op\t   30416 B/op\t      30 allocs/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 88708,
            "unit": "ns/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 30416,
            "unit": "B/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2153,
            "unit": "ns/op\t    2008 B/op\t      28 allocs/op",
            "extra": "55893 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2153,
            "unit": "ns/op",
            "extra": "55893 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 2008,
            "unit": "B/op",
            "extra": "55893 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/narrow/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "55893 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 90335,
            "unit": "ns/op\t   33784 B/op\t      73 allocs/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 90335,
            "unit": "ns/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 33784,
            "unit": "B/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "1333 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6335,
            "unit": "ns/op\t    5432 B/op\t      71 allocs/op",
            "extra": "18870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 6335,
            "unit": "ns/op",
            "extra": "18870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 5432,
            "unit": "B/op",
            "extra": "18870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/medium/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "18870 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 121702,
            "unit": "ns/op\t   60217 B/op\t     409 allocs/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 121702,
            "unit": "ns/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 60217,
            "unit": "B/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/linear (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 409,
            "unit": "allocs/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 38204,
            "unit": "ns/op\t   32312 B/op\t     407 allocs/op",
            "extra": "3060 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 38204,
            "unit": "ns/op",
            "extra": "3060 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 32312,
            "unit": "B/op",
            "extra": "3060 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMMultiLevelIteratorBoundsPruning/wide/range_filter (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 407,
            "unit": "allocs/op",
            "extra": "3060 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 30758,
            "unit": "ns/op\t 266.34 MB/s\t   25050 B/op\t      76 allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 30758,
            "unit": "ns/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 266.34,
            "unit": "MB/s",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25050,
            "unit": "B/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 32317,
            "unit": "ns/op\t 253.49 MB/s\t   25059 B/op\t      76 allocs/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 32317,
            "unit": "ns/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 253.49,
            "unit": "MB/s",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25059,
            "unit": "B/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 36108,
            "unit": "ns/op\t 226.87 MB/s\t   25050 B/op\t      76 allocs/op",
            "extra": "2977 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 36108,
            "unit": "ns/op",
            "extra": "2977 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 226.87,
            "unit": "MB/s",
            "extra": "2977 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25050,
            "unit": "B/op",
            "extra": "2977 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "2977 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 32996,
            "unit": "ns/op\t 248.27 MB/s\t   25050 B/op\t      76 allocs/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 32996,
            "unit": "ns/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - MB/s",
            "value": 248.27,
            "unit": "MB/s",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 25050,
            "unit": "B/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedSetBatchByShardCount/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 574.7,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "211611 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 574.7,
            "unit": "ns/op",
            "extra": "211611 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "211611 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_1 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "211611 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 799,
            "unit": "ns/op\t      56 B/op\t       3 allocs/op",
            "extra": "151220 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 799,
            "unit": "ns/op",
            "extra": "151220 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 56,
            "unit": "B/op",
            "extra": "151220 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_2 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "151220 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1115,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "107954 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1115,
            "unit": "ns/op",
            "extra": "107954 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "107954 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_4 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "107954 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1780,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "68364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1780,
            "unit": "ns/op",
            "extra": "68364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "68364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedCrossShardMVCCMerge/shards_8 (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "68364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 264.8,
            "unit": "ns/op\t      72 B/op\t       1 allocs/op",
            "extra": "470383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 264.8,
            "unit": "ns/op",
            "extra": "470383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "470383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/warm_neg (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "470383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1543781,
            "unit": "ns/op\t     190 B/op\t       4 allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedNegativeCache/cold_neg (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1543781,
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
            "value": 2557,
            "unit": "ns/op",
            "extra": "43519 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_2 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 6664,
            "unit": "ns/op",
            "extra": "17788 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_4 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 13452,
            "unit": "ns/op",
            "extra": "8070 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToL0Concurrent/workers_8 (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 29071,
            "unit": "ns/op",
            "extra": "4502 times\n4 procs"
          },
          {
            "name": "BenchmarkPlanForL0ToLbaseUnderL0ToL0Pressure (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 14071,
            "unit": "ns/op",
            "extra": "8602 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 695.4,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "160070 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 695.4,
            "unit": "ns/op",
            "extra": "160070 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "160070 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "160070 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 688.4,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "167580 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 688.4,
            "unit": "ns/op",
            "extra": "167580 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "167580 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_1/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "167580 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 476.6,
            "unit": "ns/op\t      41 B/op\t       2 allocs/op",
            "extra": "218527 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 476.6,
            "unit": "ns/op",
            "extra": "218527 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 41,
            "unit": "B/op",
            "extra": "218527 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "218527 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 1496,
            "unit": "ns/op\t      88 B/op\t       4 allocs/op",
            "extra": "70245 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 1496,
            "unit": "ns/op",
            "extra": "70245 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "70245 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_4/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "70245 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 545,
            "unit": "ns/op\t      43 B/op\t       2 allocs/op",
            "extra": "222056 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 545,
            "unit": "ns/op",
            "extra": "222056 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "222056 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/warm_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "222056 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm)",
            "value": 2452,
            "unit": "ns/op\t     152 B/op\t       5 allocs/op",
            "extra": "47515 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - ns/op",
            "value": 2452,
            "unit": "ns/op",
            "extra": "47515 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "47515 times\n4 procs"
          },
          {
            "name": "BenchmarkShardedGetWithHint/shards_8/cold_hint (github.com/feichai0017/NoKV/engine/lsm) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "47515 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 130671,
            "unit": "ns/op\t  458775 B/op\t    2033 allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 130671,
            "unit": "ns/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 458775,
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
            "value": 2147569,
            "unit": "ns/op\t 5096947 B/op\t   20271 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 2147569,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 5096947,
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
            "value": 25016913,
            "unit": "ns/op\t56256140 B/op\t  202588 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 25016913,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupWarm/entries=100000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 56256140,
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
            "value": 7.386,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15069133 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 7.386,
            "unit": "ns/op",
            "extra": "15069133 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15069133 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageLookupMiss (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15069133 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 299819,
            "unit": "ns/op\t  676817 B/op\t     224 allocs/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 299819,
            "unit": "ns/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 676817,
            "unit": "B/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=1000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 224,
            "unit": "allocs/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 3299294,
            "unit": "ns/op\t 6767144 B/op\t    2074 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 3299294,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 6767144,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageMaterializeAsync/entries=10000 (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 2074,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage)",
            "value": 52.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2252458 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - ns/op",
            "value": 52.87,
            "unit": "ns/op",
            "extra": "2252458 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2252458 times\n4 procs"
          },
          {
            "name": "BenchmarkDirPageInvalidate (github.com/feichai0017/NoKV/engine/slab/dirpage) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2252458 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal)",
            "value": 404.7,
            "unit": "ns/op\t 632.58 MB/s\t      40 B/op\t       3 allocs/op",
            "extra": "308542 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 404.7,
            "unit": "ns/op",
            "extra": "308542 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - MB/s",
            "value": 632.58,
            "unit": "MB/s",
            "extra": "308542 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "308542 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/engine/wal) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "308542 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal)",
            "value": 36180274,
            "unit": "ns/op\t 5991552 B/op\t   83376 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - ns/op",
            "value": 36180274,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/engine/wal) - B/op",
            "value": 5991552,
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
            "value": 6611,
            "unit": "ns/op\t   4.84 MB/s\t     508 B/op\t      14 allocs/op",
            "extra": "18056 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 6611,
            "unit": "ns/op",
            "extra": "18056 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 4.84,
            "unit": "MB/s",
            "extra": "18056 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 508,
            "unit": "B/op",
            "extra": "18056 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "18056 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local)",
            "value": 13486,
            "unit": "ns/op\t 303.71 MB/s\t    5255 B/op\t      14 allocs/op",
            "extra": "8816 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 13486,
            "unit": "ns/op",
            "extra": "8816 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 303.71,
            "unit": "MB/s",
            "extra": "8816 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5255,
            "unit": "B/op",
            "extra": "8816 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "8816 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local)",
            "value": 687.2,
            "unit": "ns/op\t  93.13 MB/s\t     267 B/op\t       5 allocs/op",
            "extra": "172414 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 687.2,
            "unit": "ns/op",
            "extra": "172414 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 93.13,
            "unit": "MB/s",
            "extra": "172414 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - B/op",
            "value": 267,
            "unit": "B/op",
            "extra": "172414 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "172414 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local)",
            "value": 1735,
            "unit": "ns/op\t2361.47 MB/s\t    5051 B/op\t       5 allocs/op",
            "extra": "62162 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 1735,
            "unit": "ns/op",
            "extra": "62162 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 2361.47,
            "unit": "MB/s",
            "extra": "62162 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - B/op",
            "value": 5051,
            "unit": "B/op",
            "extra": "62162 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "62162 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local)",
            "value": 109143,
            "unit": "ns/op\t 150.12 MB/s\t   48458 B/op\t     222 allocs/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 109143,
            "unit": "ns/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 150.12,
            "unit": "MB/s",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48458,
            "unit": "B/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/NoSync (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local)",
            "value": 589752,
            "unit": "ns/op\t  27.78 MB/s\t   49697 B/op\t     260 allocs/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 589752,
            "unit": "ns/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 27.78,
            "unit": "MB/s",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49697,
            "unit": "B/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncInline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local)",
            "value": 558044,
            "unit": "ns/op\t  29.36 MB/s\t   49804 B/op\t     261 allocs/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 558044,
            "unit": "ns/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 29.36,
            "unit": "MB/s",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - B/op",
            "value": 49804,
            "unit": "B/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet/SyncPipeline (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 261,
            "unit": "allocs/op",
            "extra": "207 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local)",
            "value": 91565,
            "unit": "ns/op\t  44.73 MB/s\t   21600 B/op\t     215 allocs/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 91565,
            "unit": "ns/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 44.73,
            "unit": "MB/s",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 21600,
            "unit": "B/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_64B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 215,
            "unit": "allocs/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local)",
            "value": 107221,
            "unit": "ns/op\t 152.81 MB/s\t   48484 B/op\t     222 allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 107221,
            "unit": "ns/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 152.81,
            "unit": "MB/s",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - B/op",
            "value": 48484,
            "unit": "B/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_256B (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local)",
            "value": 153412,
            "unit": "ns/op\t 427.19 MB/s\t  167361 B/op\t     229 allocs/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 153412,
            "unit": "ns/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 427.19,
            "unit": "MB/s",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 167361,
            "unit": "B/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_1KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 229,
            "unit": "allocs/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local)",
            "value": 295570,
            "unit": "ns/op\t 886.91 MB/s\t  658312 B/op\t     249 allocs/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 295570,
            "unit": "ns/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 886.91,
            "unit": "MB/s",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 658312,
            "unit": "B/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_4KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 249,
            "unit": "allocs/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local)",
            "value": 575086,
            "unit": "ns/op\t 911.67 MB/s\t 1313155 B/op\t     261 allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - ns/op",
            "value": 575086,
            "unit": "ns/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - MB/s",
            "value": 911.67,
            "unit": "MB/s",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - B/op",
            "value": 1313155,
            "unit": "B/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkDBCommitInlineValueSizes/Inline_8KB (github.com/feichai0017/NoKV/local) - allocs/op",
            "value": 261,
            "unit": "allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator)",
            "value": 3975523,
            "unit": "ns/op\t      20 B/op\t       0 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 3975523,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 20,
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
            "value": 1098,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "92388 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - ns/op",
            "value": 1098,
            "unit": "ns/op",
            "extra": "92388 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "92388 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV/local/internal/iterator) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "92388 times\n4 procs"
          },
          {
            "name": "BenchmarkTouch (github.com/feichai0017/NoKV/thermos)",
            "value": 27.53,
            "unit": "ns/op",
            "extra": "4343988 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchParallel (github.com/feichai0017/NoKV/thermos)",
            "value": 57.98,
            "unit": "ns/op",
            "extra": "2068317 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchAndClamp (github.com/feichai0017/NoKV/thermos)",
            "value": 20.44,
            "unit": "ns/op",
            "extra": "5882187 times\n4 procs"
          },
          {
            "name": "BenchmarkFrequency (github.com/feichai0017/NoKV/thermos)",
            "value": 16.61,
            "unit": "ns/op",
            "extra": "7153291 times\n4 procs"
          },
          {
            "name": "BenchmarkTopN (github.com/feichai0017/NoKV/thermos)",
            "value": 19155400,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindow (github.com/feichai0017/NoKV/thermos)",
            "value": 78.29,
            "unit": "ns/op",
            "extra": "1560542 times\n4 procs"
          },
          {
            "name": "BenchmarkDecay (github.com/feichai0017/NoKV/thermos)",
            "value": 54212,
            "unit": "ns/op",
            "extra": "1941 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 4531041,
            "unit": "ns/op\t         2.000 apply/op\t   23573 B/op\t     322 allocs/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 4531041,
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
            "value": 23573,
            "unit": "B/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_2 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 322,
            "unit": "allocs/op",
            "extra": "26 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator)",
            "value": 6707556,
            "unit": "ns/op\t         2.000 apply/op\t   34510 B/op\t     453 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_3 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 6707556,
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
            "value": 34510,
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
            "value": 8891233,
            "unit": "ns/op\t         2.000 apply/op\t   55824 B/op\t     704 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - ns/op",
            "value": 8891233,
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
            "value": 55824,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkPercolatorBatchApplyFullTransaction/keys_5 (github.com/feichai0017/NoKV/txn/percolator) - allocs/op",
            "value": 704,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 60.98,
            "unit": "ns/op",
            "extra": "1894076 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 148.9,
            "unit": "ns/op",
            "extra": "850488 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 160.7,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 181.3,
            "unit": "ns/op",
            "extra": "734727 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 39.1,
            "unit": "ns/op",
            "extra": "3187362 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 121.6,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueConsumerSessionPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 150.5,
            "unit": "ns/op",
            "extra": "851496 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 71.98,
            "unit": "ns/op",
            "extra": "1713518 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 161.7,
            "unit": "ns/op",
            "extra": "804852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 174.4,
            "unit": "ns/op",
            "extra": "766626 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePushOnlyContention/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 188,
            "unit": "ns/op",
            "extra": "947744 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueuePopOnlyReady (github.com/feichai0017/NoKV/utils)",
            "value": 25.96,
            "unit": "ns/op",
            "extra": "4551856 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueFullQueueWake (github.com/feichai0017/NoKV/utils)",
            "value": 279.9,
            "unit": "ns/op",
            "extra": "427012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 4627,
            "unit": "ns/op",
            "extra": "25514 times\n4 procs"
          },
          {
            "name": "BenchmarkMPSCQueueCloseDrain/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 7865,
            "unit": "ns/op",
            "extra": "15118 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=1 (github.com/feichai0017/NoKV/utils)",
            "value": 55.78,
            "unit": "ns/op",
            "extra": "2493248 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=4 (github.com/feichai0017/NoKV/utils)",
            "value": 70.96,
            "unit": "ns/op",
            "extra": "1676742 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=8 (github.com/feichai0017/NoKV/utils)",
            "value": 68.88,
            "unit": "ns/op",
            "extra": "1728888 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPushPop/producers=16 (github.com/feichai0017/NoKV/utils)",
            "value": 69.12,
            "unit": "ns/op",
            "extra": "1743841 times\n4 procs"
          },
          {
            "name": "BenchmarkRingPopBurst (github.com/feichai0017/NoKV/utils)",
            "value": 9.893,
            "unit": "ns/op",
            "extra": "12212626 times\n4 procs"
          }
        ]
      }
    ]
  }
}