import axios from "axios";

const base_url = "http://localhost:3000/"


const instance = axios.create({
    baseURL: base_url,
    withCredentials:true
});


// ---------------------------------------------------------------------    auth

export function login(uname, password ) {
    const url = base_url + 'auth/login';

    return axios({
        method: 'post',
        url,
        withCredentials:true,
        data: {
            uname,
            password
        }
    })
}


export async function Logout() {
    const url = base_url+"auth/logout";
    return instance.post(url)
}


export async function register(user){
    const url = base_url+"auth/register";
    return axios({
        method: 'post',
        url,
        withCredentials:true,
        data: user
    })
}


export async function getUser(){
    const url = base_url+'auth/user';

    return axios({
        method:'get',
        url,
        withCredentials:true
    })
}



// ---------------------------------------------------------------------    notes


export async function getTopTags() {
    const url = base_url + "notes/top";
    try {
        return instance.get(url);
    } catch (error) {
        console.log(error);
    }
}

export async function getNotes(skip = 0) {
    const url = base_url + `notes/?skip=${skip}`;

    return axios({
        method:'get',
        url,
        withCredentials:true
    })
}

export async function search(tag){
    const url = base_url+`notes/bytag/?tag=${tag}`;

    return axios({
        method:'get',
        url,
        withCredentials:true
    })

}

export async function insertNote(note){
    const url = base_url+'notes/insert';
    return axios({
        method:'post',
        url,
        withCredentials:true,
        data:note
    })
}

export async function deleteNote(nid){
    const url = base_url+'notes/delete';
    
    return axios({
        method:'post',
        url,
        withCredentials:true,
        data:{ nid }
    })
}