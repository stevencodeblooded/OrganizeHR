//Code for SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { collection, getDoc, doc, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC8bKwhQuMKUnJCHvnQouH695qFEw3CFOI",
  authDomain: "organizehr-1f0b3.firebaseapp.com",
  projectId: "organizehr-1f0b3",
  storageBucket: "organizehr-1f0b3.appspot.com",
  messagingSenderId: "389095562844",
  appId: "1:389095562844:web:554a11cece3f7444619099"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
//collection is the name of the table
const applicantsCollectionRef = collection(db, 'applicants') 
const employeesCollectionRef = collection(db, 'employees')


//--------------REFACTOR THE CODE THAT FETCHES DATA TO USE FIRESTORE SYNTAX----------------//
//all the fetching will be done here
//Applicants Tracking
export async function getApplicants() {
    const querySnapshot = await getDocs(applicantsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    })) 

    console.log('APplicnat', dataArr);
    return dataArr
}

//Employee List
export async function getEmployees() {
   const querySnapshot = await getDocs(employeesCollectionRef)
   const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
   })) 
   console.log('Employees', dataArr);
   return dataArr
}

//Single Employee 
export async function getEmployee(id) {
    const docRef = doc(db, 'employees', id)
    const employeeSnapshot = await getDoc(docRef)
    const employeeData = {
        ...employeeSnapshot.data(),
        id: employeeSnapshot.id
    }
    console.log('One Employee', employeeData);
    return employeeData
}
