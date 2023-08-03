import{db} from "./firebase.mjs"
import { collection, addDoc ,getDocs,onSnapshot,updateDoc,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 



const btn = document.getElementById("add")
btn.addEventListener("click",async()=>{
const text =document.getElementById("text").value;
    try {
        const docRef = await addDoc(collection(db, "list"), {
           text : text
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})

// btn.addEventListener('click',async()=>{

//     const querySnapshot = await getDocs(collection(db, "list"));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// })


// btn.addEventListener("click",async()=>{

    
//     const washingtonRef = doc(db, "list", "DC");
    
//     // Set the "capital" field of the city 'DC'
//     await updateDoc(washingtonRef, {
//         capital: true
//     });
// })


function show(){
var show=document.getElementById("show")
    const q = collection(db, "list");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
     show.innerHTML+=`
     <div>

    <div>
        <p>${change.doc.data().text}</p>
    </div>
    <div>
        <button onclick="edit('${change.doc.id}')">Edit </button>
        <button onclick="del('${change.doc.id}')">Delete </button>
    </div>
</div>
     
     `



      });

    })}

show()

window.del=async(id)=>{
    console.log(id);
    await deleteDoc(doc(db,"list",id));
    window.location.reload();
}

async function edit (id)  {
    const washingtonRef = doc(db, "list", id);
    var text = prompt('enter you edited text')
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      text : text
    });
    window.location.reload();
}
window.edit = edit;