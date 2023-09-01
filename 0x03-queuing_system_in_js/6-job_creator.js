const kue = require("kue");
const queue = kue.createQueue();

obj = {
  phoneNumber: '08090296689',
  message: 'this is to test the object',
}

var job = queue.create('push_notification_code', obj).save(
  function(err){
    if( !err ) console.log('Notification job created: `${job.id}`');
  }
)

job.on('complete', function(result){
  console.log('Notification job completed');
});.on('failed', function(errorMessage){
  console.log('Notification job failed');
});
