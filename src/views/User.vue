<template>
    <div class="userSection">
        <div class="pathBar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="#5C5C5C" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 22V12H15V22" stroke="#5C5C5C" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#934E00" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Members Details
        </div>
        <div class="row justify-content-between userProfile">
            <div class="col-md-6 userDetails justify-content-center pt-3">
                <div class="nameId">
                    <div class="name">{{ userStore.currUser.name }}</div>
                    <div class="id">@{{ userStore.currUser.id }}</div>
                </div>
                <div class="about">
                    <div class="heading">About</div>
                    <div class="content">{{ userStore.currUser.about }}</div>
                </div>
                <div class="interest">
                    <div class="heading">Interest</div>
                    <div class="hobbies">
                        <div class="outerHobby">
                            <img src="../assets/nature.svg" alt="" />
                            Nature
                        </div>
                        <div class="outerHobby">
                            <img src="../assets/travel.svg" alt="" />
                            Travel
                        </div>
                        <div class="outerHobby">
                            <img src="../assets/writing.svg" alt="" />
                            Writing
                        </div>
                        <div class="outerHobby">
                            <img src="../assets/movie.svg" alt="" />
                            Movie
                        </div>
                        <div class="outerHobby">
                            <img src="../assets/gymAndFitness.svg" alt="" />
                            Gym & Fitness
                        </div>
                        <div class="outerHobby">
                            <img src="../assets/football.svg" alt="" />
                            Football
                        </div>
                        <div class="outerHobby">
                            <img src="../assets/music.svg" alt="" />
                            Music
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="heading">Info</div>
                    <div class="infoCards">
                        <div class="genderCard">
                            <img src="../assets/gender.svg" alt="" />
                            <div class="infoHeader">Gender</div>
                            <div class="infoContent">{{ userStore.currUser.gender }}</div>
                        </div>
                        <div class="ageCard">
                            <img src="../assets/age.svg" alt="" />
                            <div class="infoHeader">Age</div>
                            <div class="infoContent">{{ userStore.currUser.age }} years old</div>
                        </div>
                        <div class="heightCard">
                            <img src="../assets/height.svg" alt="" />
                            <div class="infoHeader">Height</div>
                            <div class="infoContent">{{ userStore.currUser.height }} cm</div>
                        </div>
                        <div class="relationCard">
                            <img src="../assets/relation.svg" alt="" />
                            <div class="infoHeader">Relationship</div>
                            <div class="infoContent">{{ userStore.currUser.relationship }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 p-0">
                <div class="imgActions">
                    <img class="userImg w-100" :src=userStore.currUser.image alt="" />
                    <div class="actions">
                        <button class="star">
                            <img src="../assets/star.svg" alt="" />
                        </button>
                        <button class="favorite" @click="toggleFavoriteBtn">
                            <template v-if="isFavorite">
                                <img src="../assets/favoriteTrue.svg" alt="" />
                            </template>
                            <template v-else>
                                <img src="../assets/favoriteFalse.svg" alt="" />
                            </template>
                        </button>
                        <button class="cancel">
                            <img src="../assets/cancel.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="message largeScreen">
                    <div class="msgHeading">Message</div>
                    <textarea class="msgContent" rows="5" placeholder="enter message"></textarea>
                    <button class="sendBtn">Send</button>
                </div>
            </div>
        </div>
        <div class="smallScreen d-none">
            <div class="message">
                <div class="msgHeading">Message</div>
                <textarea class="msgContent" rows="5" placeholder="enter message"></textarea>
                <button class="sendBtn">Send</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import { doc, updateDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useRoute } from "vue-router"
import { db } from "@/firebase.js"
import { ref } from 'vue';
import { useToggleFavorite } from "../composables/useToggleFavorite"

const userStore = useUserStore()
const route = useRoute()
const { toggleFavorite } = useToggleFavorite()

const q = query(collection(db, "users"), where("id", "==", route.params.id));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    userStore.currUser = { uid: doc.id, ...doc.data() }
});

const userRef = doc(db, "users", userStore.currUser.uid)
const user = await getDoc(userRef)
let isFavorite = ref(user.data().favorite)

const toggleFavoriteBtn = async () => {
    isFavorite.value = await toggleFavorite(userRef)
}
</script>

<style lang="scss" scoped>
.userSection {
    margin: 1.88rem 2.5rem;
}

.pathBar {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #400179;
    font-size: 1rem;
    font-weight: 500;
}

.userDetails {
    display: flex;
    flex-direction: column;
    gap: 3.12rem;
}

.nameId {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.name {
    color: #A25CE1;
    font-size: 2rem;
    font-weight: 600;
}

.id {
    color: rgba(0, 0, 0, 0.40);
    font-size: 1rem;
    font-weight: 400;
}

.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.heading {
    color: #808080;
    font-size: 1.25rem;
    font-weight: 600;
}

.content {
    color: #000;
    font-size: 1.25rem;
    font-weight: 500;
}

.interest {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.hobbies {
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
}

.outerHobby {
    display: inline-flex;
    padding: 0.3125rem 0.625rem;
    align-items: center;
    gap: 0.8125rem;
    border-radius: 1.6875rem;
    border: 1px solid #400179;
}

.infoHeading {
    margin-bottom: 1rem;
}

.infoCards {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
}

.genderCard {
    border-radius: 0.875rem;
    background: #400179;
    width: 8.125rem;
    height: 10.5625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ageCard {
    border-radius: 0.875rem;
    background: #8530D1;
    width: 8.125rem;
    height: 10.5625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.heightCard {
    border-radius: 0.875rem;
    background: #A25CE1;
    width: 8.125rem;
    height: 10.5625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.relationCard {
    border-radius: 0.875rem;
    background: #A473CE;
    width: 8.125rem;
    height: 10.5625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.infoHeader {
    color: #FFF;
    font-size: 1rem;
    font-weight: 400;
}

.infoContent {
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;
}

.imgActions {
    display: flex;
    justify-content: center;
    gap: 1.94rem;
}

.userImg {
    max-width: 32.3125rem;
    max-height: 37.625rem;
    width: 100%;
    height: 100%;
    border-radius: 1.125rem;
    border: 2px solid #400179;
    box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.25);
}

.actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.star,
.cancel {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.star {
    background: #A25CE1;
}

.favorite {
    border: none;
    background: none;
}

.cancel {
    background: #666;
}

.message {
    margin-top: 2.31rem;
    max-width: 32.3125rem;
}

.msgHeading {
    color: #8530D1;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.msgContent {
    width: 100%;
    height: 7.3125rem;
    border-radius: 1.125rem;
    border: 1px solid #E4E4E4;
    background: #FFF;
    resize: none;
    padding: 0.81rem 1.19rem;
    outline: none;
}

.msgContent::placeholder {
    color: #ddd;
}

.sendBtn {
    float: right;
    border-radius: 1.6875rem;
    background: #400179;
    color: #FFF;
    text-align: center;
    font-family: Rubik;
    font-size: 0.875rem;
    padding: 0.56rem 2.13rem;
    margin-top: 0.94rem;
    border: none;
}

@media(max-width:768px) {
    .userProfile {
        flex-direction: column-reverse;
    }

    .imgActions {
        margin-top: 2rem;
    }

    .largeScreen {
        display: none !important;
    }

    .smallScreen {
        display: flex !important;
        flex-direction: column;
        justify-content: center;

        & .message {
            max-width: 100% !important;
        }
    }
}
</style>