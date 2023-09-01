function createPushNotificationsJobs(jobs, queue){
  if (!isArray(job)){
   throw Error(`Jobs is not an array`)
  }
  jobs.forEach((jobs) => {
    var job = queue.create('push_notification_code_3', jobs).save(
      function(err){
        if( !err ) console.log('Notification job created: `${job.id}`');
      }
    ).on('complete', function(result){
      console.log(`Notification job ${job.id} completed`);
    }).on('failed', function(errorMessage){
      console.log(`Notification job ${job.id} failed: ERROR`);
    }).on('progress', function(progress, data){
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
}

module.exports = createPushNotificationsJobs;
