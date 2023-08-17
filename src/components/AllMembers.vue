<template>
    <div class="container-fluid p-0">
        <div class="heading">
            <div class="title">New Members</div>
            <div class="subTitle">Please find your perfect match</div>
        </div>
        <div>
            <div class="membersBar row">
                <div class="col-sm-6 col-12">
                    <img src="../assets/members.svg" alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="newMembers">New members</span>
                </div>
                <div class="col-sm-6 col-12">
                    <input type="text" placeholder="Search here...." v-model="searchInput" @input="searchByName" />
                    <img class="magnifyGlass" src="../assets/magnifyGlass.svg" alt="" />
                    <img src="../assets/filter.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="memberCards" v-if="userStore.users.length">
            <template v-for="member in userStore.users" :key="member.id">
                <SingleMember :member="member" />
            </template>
        </div>
        <h1 class="text-center" v-else>
            No Users Found!!
        </h1>
        <div class="mt-5 viewAllMemberSection" ref="viewAllMemberSection">
            <button class="allMembersBtn" @click="loadAllMembers">
                View All Members
                <div class="aerrowIcon">
                    <img src="../assets/rightAerrow.svg" alt="" />
                </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import SingleMember from './SingleMember.vue';
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/firebase.js"
import { ref } from 'vue';
import { useToggleAllMembersBtn } from '../composables/useToggleAllMembersBtn';

const userStore = useUserStore()
const { displayBtn, hideBtn } = useToggleAllMembersBtn()
const viewAllMemberSection = ref(null)
const searchInput = ref("");
let startingMembers;

const loadStartingMembers = async () => {
    userStore.users = [];
    let q = query(collection(db, "users"), limit(5));
    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        userStore.users.push({ uid: doc.id, ...doc.data() })
    });
    startingMembers = userStore.users;
}

loadStartingMembers()

const searchByName = async () => {
    if (searchInput.value) {
        console.log("call");
        const q = query(collection(db, "users"), where("name", ">=", searchInput.value), where("name", "<=", searchInput.value + "\uf8ff"));
        const querySnapshot = await getDocs(q);
        userStore.users = [];
        querySnapshot.forEach((doc) => {
            userStore.users.push({ uid: doc.id, ...doc.data() })
        });
        hideBtn(viewAllMemberSection)
    } else {
        userStore.users = startingMembers;
        displayBtn(viewAllMemberSection)
    }
}

const loadAllMembers = async () => {
    userStore.users = [];
    let querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        userStore.users.push({ uid: doc.id, ...doc.data() })
    });
    hideBtn(viewAllMemberSection)
}
</script>

<style lang="scss" scoped>
.heading {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.title {
    color: #400179;
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 700;
}

.subTitle {
    color: #000;
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 500;
}

.membersBar {
    margin: 3.13rem 2.5rem 3.5rem;
}

.membersBar>div {
    display: flex;
    align-items: center;
}

.membersBar>:last-child {
    justify-content: end;
}

.newMembers {
    color: #000;
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 500;
}

input {
    padding: 0.6875rem 0.75rem 0.625rem 1rem;
    align-items: center;
    border-radius: 1.875rem;
    border: 1px solid #BBB;
}

.magnifyGlass {
    position: relative;
    right: 2.5rem;
}


.viewAllMemberSection {
    display: flex;
    justify-content: center;
}

.memberCards {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    row-gap: 1rem;
}

.allMembersBtn {
    border-radius: 3.125rem;
    background: #A25CE1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 1rem 0.44rem 1rem 0.87rem;
    color: #FFF;
    font-family: Poppins;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.125rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.aerrowIcon {
    border-radius: 3.125rem;
    border: 1px solid #A25CE1;
    background: #400179;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media(max-width:1300px) {
    .memberCards {
        grid-template-columns: auto auto auto auto;
    }
}

@media(max-width:1080px) {
    .memberCards {
        grid-template-columns: auto auto auto;
    }
}

@media(max-width:790px) {
    .memberCards {
        grid-template-columns: auto auto;
    }
}

@media(max-width:670px) {
    .membersBar>div {
        justify-content: center;
        width: 100%;
    }

    .membersBar>:last-child {
        margin-top: 1rem;
        justify-content: center;
    }

    .membersBar>:first-child {
        display: none;
    }

    .membersBar>:last-child>input {
        width: 100%;
    }
}

@media(max-width:560px) {
    .memberCards {
        grid-template-columns: auto;
    }
}
</style>