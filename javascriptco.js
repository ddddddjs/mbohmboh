        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyDpMQfr4w40AdaaPyxlLjMqAdxPq5cmHJ8",
  authDomain: "chatlopyu.firebaseapp.com",
  databaseURL: "https://chatlopyu-default-rtdb.firebaseio.com",
  projectId: "chatlopyu",
  storageBucket: "chatlopyu.appspot.com",
  messagingSenderId: "193251654391",
  appId: "1:193251654391:web:0cd95928a71fdcff2ab1f2"
        };
        firebase.initializeApp(firebaseConfig);

        const basedata = firebase.database();
        const messageList = document.getElementById('message-list');

        // Fetch and display messages from Firebase
        basedata.ref('messages').on('value', function(snapshot) {
            messageList.innerHTML = ''; // Clear previous messages
            snapshot.forEach(function(childSnapshot) {
                const message = childSnapshot.val();
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${message.name}, Email: ${message.email}, Message: ${message.message}`;
                messageList.appendChild(listItem);
            });
        });
        
        //YHAHAHA WAHYU
        