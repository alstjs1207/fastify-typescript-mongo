const TestRunner = require('jest-runner').default;

// XXX: workerIdleMemoryLimit 옵션 사용하면서 순차실행 하기위한 jest 커스텀
class CustomJestRunner extends TestRunner {
  constructor(_globalConfig, _context) {
    super({ ..._globalConfig, maxWorkers: 1 }, _context);
    this.isSerial = false;
  }
}

module.exports = CustomJestRunner;
