import {initializeApp} from 'fire_base/app'
import {getFirestore, Collection, getDocs, deleteDoc, doc} from 'fire_base/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDE9h3sg8jY4qwzKzmhzDKlA9Az49jQ0cY",
    authDomain: "awtlab-7cada.firebaseapp.com",
    projectId: "awtlab-7cada",
    storageBucket: "awtlab-7cada.appspot.com",
    messagingSenderId: "168812392879",
    appId: "1:168812392879:web:9a0b8451748f4bdd833f5a"
  };
  
initializeApp(firebaseConfig);
const db=getFirestore()
const CollRef = Collection(db,'users')
getDocs(CollRef)
.then((snapshot)=>{
    let users1=[]
    snapshot.docs.forEach((doc)=>
    {
        users1.push({...doc.data(),id:doc.id})
    })
    console.log(users1)
})
.catch(err=>{
    console.log(err.message)

})
const addUser=documnet.querySelector('.add')

addUser.addEventListener('submit',(e)=>{
    e.preventDefault()
    addDoc(CollRef,{
        name:addUser.name.value,rollno:addUser.rollno.value})
        .then(()=>{
            addUser.reset()})
        })
// remove user
const removeUser=document.querySelector('.delete')
removeUser.addEventListener('submit',(e)=>{
    e.preventDefault()
    const docRef=doc(db,'users', removeUser.id.value)
    deleteDoc(docRef)
    then(()=>
    {
      removeUser.reset()
    })
})