import {app} from "./../config/firebase";
import { getAuth,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth";
import React,{useState} from 'react';
import "./pages/signup.css";


const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

export const Auth=()=>{
  // const [user,setUser]=useState(null);
    const [email,setEm] =useState("");
    const [password,setPass]= useState("");
    console.log(auth?.currentUser?.email);
  
    const signIn=async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        } catch(err){
            console.log(err);
        }
    };

 const signInWithGoogle=async()=>{
        try{
            await signInWithPopup(auth,googleProvider);
              
              
        }
            
            
            
        catch(err){
            console.log(err);
        }
    };

 const logOut=async()=>{
        try{
        await signOut(auth);
        } catch (err){
            console.error(err);
        }
    };
    return (
        <div className='signup'>
         
            
          <h2>
           Sign in
          </h2>
          <div className='login-page'>
            <div class="form">
              <form className='login-form'>
                <input type='email' placeholder='email' onChange={(e)=> setEm(e.target.value)} />
                  <input type='password' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                    <button class="btn-2" onClick={signIn} >Sign In</button>
              </form>
              <p>OR</p>
              <button className='btn-2' onClick={signInWithGoogle}>Sign In With Google</button>
              <button className='btn-2' onClick={logOut}>Log Out</button>
            </div>
    
          </div>
          
 

        </div>
    ); 

};