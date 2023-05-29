const firebaseConfig = {
    apiKey: "AIzaSyD9RkThcs526zx58qKflACl_QzA0ol-SgE",
    authDomain: "easy-journey-2f8eb.firebaseapp.com",
    projectId: "easy-journey-2f8eb",
    storageBucket: "easy-journey-2f8eb.appspot.com",
    messagingSenderId: "356865243128",
    appId: "1:356865243128:web:ab34f8455c93ece3d3c80d",
    measurementId: "G-MBR0EHCXL8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth =firebase.auth()
  const database =firebase.database()

   function register (){
    email = document.getElementById('email').value 
    password =document.getElementById('password').value



   }
   
   