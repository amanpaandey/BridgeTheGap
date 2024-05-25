
/* import axios from "axios"; */


export async function login ({username,password}){

  /*  console.log(username,password);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
   
        body: JSON.stringify({ username:username, password:password })
    } 
await axios.post(`/api/users/login`,{
    requestOptions
}).then((response) =>{
    console.log(response.json());
}) */



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
/* myHeaders.append("Cookie", "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmU3ZTMwZmM2ZTQxNTkxNGFjNTRkYiIsImlhdCI6MTcxNjIxNDk3OSwiZXhwIjoxNzE2MzAxMzc5fQ.8hJMmr4oT16PCO2rd61i1i8Dl1JfwiXCs6yp6KrX-Jk; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmU3ZTMwZmM2ZTQxNTkxNGFjNTRkYiIsImlhdCI6MTcxNjIxNDk3OSwiZXhwIjoxNzE3MDc4OTc5fQ.YmrGic-bDSWMFVFj6sj7A9pYfM9u72fLjRkgcGTK0vE"); */

const raw = JSON.stringify({
  "username": username,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const data = await fetch("http://localhost:8000/api/v1/users/login", requestOptions)
  .then((response) => response.json())
  .then((result) => result)
  


return data;

}