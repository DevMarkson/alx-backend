const createPushNotificationsJobs = require("./8-job");

var kue = require('kue');
var queue = kue.createQueue();

const list = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  }
];
describe("createPushNotificationsJobs", () => {
  before(function() {
    queue.testMode.enter();
  });
  
  afterEach(function() {
    queue.testMode.clear();
  });
  
  after(function() {
    queue.testMode.exit()
  });
  
  it('does something cool', function() {
    createPushNotificationsJobs(list, queue);
    expect(queue.testMode.jobs.length).to.equal(1);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[0].data).to.eql(list[0]);
  });
  it("if jobs is not an array passing Number", () => {
    expect(() => {
      createPushNotificationsJobs(2, queue);
    }).to.throw("Jobs is not an array");
  });
});
