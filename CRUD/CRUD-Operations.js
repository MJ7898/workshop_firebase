function saveMessage(messageTect) {
      // Add a new message entry to the Firebase database.
  return firebase.firestore().collection('messages').add({
    name: getUserName(),
    text: messageText,
    profilePicUrl: getProfilePicUrl(),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
}

// TODO: Implement remove message of Firebase.
// Removes a message from the Cloud Firestore.
function removeMessage() {
    var dataToDelete = deleteLabelElement.value;
    var textValueToDelete = firebase.firestore().collection('messages').where('text', '==', dataToDelete).limit(1).get().then((query) => {
      const itemToDelete = query.docs[0];
      itemToDelete.ref.delete();
    })
    console.log('Button was clicked!')
    alert('Item successfully deleted from Database!')
    //firebase.firestore().collection('messages').doc(doc.data().id).delete();
}

// TODO: Implement update message of Firebase. 
// Updates a message from the Cloud Firestore.
function updateSelectedMessage() {
    var textMessage = updateLabelElement.value;
    var textValue = firebase.firestore().collection('messages').where('text', '==', textMessage).limit(1).get().then((query) => {
      const thing = query.docs[0];
      thing.ref.update({text:"newTest"});
      console.log(query.docs[0].value);
    });
          
    //loadMessages();
    alert("Item is successfully modified!");
  
}

function loadMessages() {
    // TODO: Add the Read operation to show all messages in Chat container on web and orderBy -> timestamp
    var query = firebase.firestore().collection('messages').orderBy('timestamp', 'desc'); //.limit(12);
}

function saveImageMessage(file) {
    // TODO: Set the Create operation for the ImageMessage here
    firebase.firestore().collection('messages').add({
      name: getUserName(),
      imageUrl: LOADING_IMAGE_URL,
      profilePicUrl: getProfilePicUrl(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}
