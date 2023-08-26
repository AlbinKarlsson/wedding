
const firebaseConfig = {
    apiKey: "AIzaSyBh3flfZwN5EvKM8e6j47M75blxFPtnk4A",
    authDomain: "karlssonwedding-7ddb1.firebaseapp.com",
    projectId: "karlssonwedding-7ddb1",
    storageBucket: "karlssonwedding-7ddb1.appspot.com",
    messagingSenderId: "136454724621",
    appId: "1:136454724621:web:9f09af68e99fe44aea0944",
    measurementId: "G-DP151CS7W2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
$('#rsvp-form').on('submit', function (e) {
    console.log("Form submitted");
    e.preventDefault();
    
    // Serialize form data
    var formData = $(this).serializeArray();
    
    // Create a new document in Firebase Firestore collection
    db.collection('rsvps').add({
        name: formData[0].value,
        email: formData[1].value,
        song_request: formData[2].value
        // Add other form fields as needed
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#alert-wrapper').html('');
        $('#rsvp-modal').modal('show');
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There was an issue processing your request.'));
    });
});