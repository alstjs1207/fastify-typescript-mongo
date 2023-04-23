// Some `jest` tests are very slow and cause
// timeouts on bitbucket pipeline
console.log(`============ testSetupFile Loaded ===========`);
// eslint-disable-next-line no-undef
jest.setTimeout(10000);
