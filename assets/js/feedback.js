
let feedbackRef = firebase.database().ref('feedback-database');

document.getElementById('feedback_form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var service = getInput('service_feedback');
  var collection = getInput('collection_feedback');

  saveFeedback(service, collection);
}

function getInput(id) {

  return document.getElementById(id).value;
}

function saveFeedback(service, collection) {

  var newFeedback = feedbackRef.push();
  newFeedback.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    service: service,
    collection: collection,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#feedback_form')[0].reset();
    $("#feedback-message").css("display", "block");
    $("#feedback-message").text("Thank you for submitting your feedback.");
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#feedback-message").css("display", "block");
    $("#feedback-message").text("Failed Submission. Try again after reloading.");
  });
}
