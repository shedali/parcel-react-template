import {types as t} from "mobx-state-tree";
import "firebase/database";
import "firebase/firestore";

import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBClNiJ9vIpFK3lwUO2OohaMoXvNEvTR_Q",
    authDomain: "ceviche-15d36.firebaseapp.com",
    databaseURL: "https://ceviche-15d36.firebaseio.com",
    projectId: "ceviche-15d36",
    storageBucket: "ceviche-15d36.appspot.com",
    messagingSenderId: "796141637002",
    appId: "1:796141637002:web:3414bc3b9caa6f46478c73",
    measurementId: "G-KMKZ66Z2MF"
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

const database = firebase.database(app);

setTimeout(async () => {
    firebase.database().ref("data").once("value").then((data) => {
        console.log('first time data load', data.val());
        // data && applySnapshot(School, sanitise(data.val()));
        // School.updateLoading(false);
    });
}, 1000);

const firebasedb = firebase.database().ref("data");
firebasedb.on("value", function (snapshot) {
    console.log('changes heard');
    // const newval = sanitise(snapshot.val());
    // const added = difference(newval, School.toJSON());
    // const removed = difference(School.toJSON(), newval);
    // console.log(added, removed);
    // applySnapshot(School, newval);
});

export const Blah = t.model({name: t.string})