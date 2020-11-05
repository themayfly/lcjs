
const workers = [
  {
    email: 'alice@example.com',
    trades: ['brickwork', 'drywall'],
    cost: 100
  },
  {
    email: 'bob@brickwork.com',
    trades: ['brickwork'],
    cost: 90
  },
  {
    email: 'charlie@cement.com',
    trades: ['cement'],
    cost: 80
  },
  {
    email: 'wally@walls.com',
    trades: ['cement', 'drywall'],
    cost: 95
  }
];


class WorkScheduler {
  workers;

  constructor(workers) {
    this.workers = workers;
  }


  // Input: String representing a trade
  // Output: Array of worker's emails sorted alphabetically
  suitableWorkers(trade) {
    return this.workers.filter(worker => {
      return worker.trades.includes(trade);
    }).sort((a, b) => (a.email > b.email))
      .map(worker => worker.email);
  }

  // Input: An array of trades.  Each trade represents 1 unit of work
  // Output: Array of workers that can be scheduled for a day, using the cheapest labor.
  scheduleOneDay(trades) { // [cement, cement]
    const cloneWorkers = [...this.workers];
    const pickedMap = {};
    const suitableWorker = [];

    trades.forEach(trade => {
      // filter for only matching workers with input trades
      let workers = this.workers.filter(worker => {
        if (pickedMap[worker.email]) {
          return false;
        } else {
          return worker.trades.includes(trade);
        }
      });
      // console.log('#### trade = %s, workers = ', trade, JSON.stringify(workers, null, 2));
      // console.log('#### suitableWorker = ', suitableWorker);
      // order by cheapest labor
      workers.sort((a, b) => {
        if (a.cost > b.cost) {
          return 1;
        } else if (a.cost < b.cost) {
          return -1;
        } else {
          return 0;
        }
      });
      const workerEmail = workers.map(worker => worker.email).slice(0, 1)[0];
      if (workerEmail) {
        pickedMap[workerEmail] = workerEmail;
        suitableWorker.push({
          trade,
          email: workerEmail
        });
      }

    });
    // console.log('#### suitableWorker = ', pickedMap,  suitableWorker);
    return suitableWorker.map(worker => worker.email);
  }

  // Input: An array of trades.  Each trade represents 1 unit of work
  // Output: An Array of days.  Each day is an array of workers scheduled for that day
  // Example Input: ['brickwork', 'brickwork', 'brickwork']
  // Example Output:  [['bob@brickwork.com', 'alice@example.com'], ['bob@brickwork.com']]
  scheduleAllTasks(trades) {
    const numOfTrades = trades.length;
    const getTradeLen = (fullSchedule) => {
      return fullSchedule.reduce((sum, inc) => {
        return inc.length + sum;
      }, 0);
    }
    let fullSchedule = [];
    while (trades.length > getTradeLen(fullSchedule)) {
      let oneDaySchedule = this.scheduleOneDay(trades);
      let diff = trades.length - getTradeLen(fullSchedule);
      fullSchedule.push(oneDaySchedule.slice(0, diff));
    }
    return fullSchedule;
  }
}


var ws = new WorkScheduler(workers);
console.log(ws.scheduleAllTasks(['cement', 'cement', 'brickwork', 'brickwork', 'cement', 'brickwork']));

