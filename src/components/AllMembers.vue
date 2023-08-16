<template>
    <div class="container-fluid p-0">
        <div class="heading">
            <div class="title">New Members</div>
            <div class="subTitle">Please find your perfect match</div>
        </div>
        <div>
            <div class="membersBar">
                <div>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_12_3845)">
                            <path
                                d="M23.3333 27.9333H22.3667C21.0475 27.8856 19.7326 28.1096 18.5036 28.5912C17.2746 29.0729 16.1577 29.802 15.2222 30.7333L14.9556 31.0444V40.2444H19.4889V35.0222L20.1 34.3333L20.3778 34.0111C21.8244 32.525 23.6253 31.4314 25.6111 30.8333C24.6169 30.0768 23.8328 29.0784 23.3333 27.9333Z"
                                fill="#400179" />
                            <path
                                d="M44.8222 30.7001C43.8867 29.7688 42.7698 29.0397 41.5408 28.558C40.3118 28.0764 38.9969 27.8524 37.6778 27.9001C37.2732 27.9012 36.8689 27.9235 36.4667 27.9668C35.9579 29.0411 35.1952 29.9754 34.2444 30.689C36.3644 31.2755 38.2849 32.4277 39.8 34.0223L40.0778 34.3334L40.6778 35.0223V40.2556H45.0556V31.0112L44.8222 30.7001Z"
                                fill="#400179" />
                            <path
                                d="M22.3334 25.7666H22.6778C22.5178 24.3924 22.7589 23.0013 23.3721 21.7612C23.9852 20.521 24.9443 19.4848 26.1334 18.7777C25.7023 18.1192 25.1076 17.584 24.4076 17.2243C23.7075 16.8647 22.9261 16.6931 22.1397 16.7262C21.3534 16.7593 20.5891 16.9961 19.9218 17.4134C19.2545 17.8306 18.707 18.414 18.3329 19.1064C17.9588 19.7989 17.7709 20.5766 17.7877 21.3634C17.8044 22.1503 18.0253 22.9193 18.4285 23.5952C18.8318 24.271 19.4037 24.8306 20.0882 25.219C20.7727 25.6074 21.5463 25.8115 22.3334 25.8111V25.7666Z"
                                fill="#400179" />
                            <path
                                d="M37.1444 24.9333C37.1579 25.1887 37.1579 25.4446 37.1444 25.7C37.3576 25.7338 37.573 25.7524 37.7889 25.7555H38C38.7835 25.7138 39.5429 25.4698 40.2042 25.0474C40.8655 24.625 41.4062 24.0386 41.7736 23.3452C42.141 22.6519 42.3226 21.8752 42.3007 21.0908C42.2788 20.3064 42.0542 19.5411 41.6487 18.8693C41.2432 18.1975 40.6707 17.6421 39.9869 17.2572C39.3031 16.8724 38.5313 16.6711 37.7466 16.6731C36.9619 16.6751 36.1911 16.8802 35.5092 17.2685C34.8273 17.6568 34.2576 18.215 33.8555 18.8889C34.8612 19.5455 35.6881 20.4414 36.2621 21.4964C36.8361 22.5514 37.1393 23.7323 37.1444 24.9333Z"
                                fill="#400179" />
                            <path
                                d="M29.8556 29.9111C32.5986 29.9111 34.8223 27.6875 34.8223 24.9445C34.8223 22.2014 32.5986 19.9778 29.8556 19.9778C27.1126 19.9778 24.8889 22.2014 24.8889 24.9445C24.8889 27.6875 27.1126 29.9111 29.8556 29.9111Z"
                                fill="#400179" />
                            <path
                                d="M30.1222 32.5556C28.6712 32.497 27.2233 32.7326 25.8656 33.2482C24.508 33.7637 23.2686 34.5486 22.2222 35.5556L21.9445 35.8667V42.9001C21.9488 43.1292 21.9982 43.3552 22.0899 43.5651C22.1816 43.7751 22.3138 43.965 22.4789 44.1239C22.644 44.2828 22.8387 44.4076 23.0521 44.4912C23.2654 44.5748 23.4931 44.6156 23.7222 44.6112H36.4889C36.718 44.6156 36.9457 44.5748 37.1591 44.4912C37.3724 44.4076 37.5672 44.2828 37.7323 44.1239C37.8974 43.965 38.0295 43.7751 38.1212 43.5651C38.2129 43.3552 38.2623 43.1292 38.2667 42.9001V35.8889L38 35.5556C36.9604 34.5455 35.7254 33.7584 34.3708 33.2426C33.0161 32.7267 31.5704 32.4929 30.1222 32.5556Z"
                                fill="#400179" />
                        </g>
                        <circle opacity="0.1" cx="30" cy="30" r="30" fill="#400179" />
                        <defs>
                            <clipPath id="clip0_12_3845">
                                <rect width="40" height="40" fill="white" transform="translate(10 10)" />
                            </clipPath>
                        </defs>
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="newMembers">New members</span>
                </div>
                <div>
                    <input type="text" placeholder="Search here...." v-model="searchInput" @input="searchByName" />
                    <svg class="magnifyGlass" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                        fill="none">
                        <path
                            d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                            stroke="#400179" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.9999 21.4999L16.6499 17.1499" stroke="#400179" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#400179" />
                        <path
                            d="M34.125 19.875H13.875C13.5766 19.875 13.2905 19.7565 13.0795 19.5455C12.8685 19.3345 12.75 19.0484 12.75 18.75C12.75 18.4516 12.8685 18.1655 13.0795 17.9545C13.2905 17.7435 13.5766 17.625 13.875 17.625H34.125C34.4234 17.625 34.7095 17.7435 34.9205 17.9545C35.1315 18.1655 35.25 18.4516 35.25 18.75C35.25 19.0484 35.1315 19.3345 34.9205 19.5455C34.7095 19.7565 34.4234 19.875 34.125 19.875ZM30.375 25.125H17.625C17.3266 25.125 17.0405 25.0065 16.8295 24.7955C16.6185 24.5845 16.5 24.2984 16.5 24C16.5 23.7016 16.6185 23.4155 16.8295 23.2045C17.0405 22.9935 17.3266 22.875 17.625 22.875H30.375C30.6734 22.875 30.9595 22.9935 31.1705 23.2045C31.3815 23.4155 31.5 23.7016 31.5 24C31.5 24.2984 31.3815 24.5845 31.1705 24.7955C30.9595 25.0065 30.6734 25.125 30.375 25.125ZM25.875 30.375H22.125C21.8266 30.375 21.5405 30.2565 21.3295 30.0455C21.1185 29.8345 21 29.5484 21 29.25C21 28.9516 21.1185 28.6655 21.3295 28.4545C21.5405 28.2435 21.8266 28.125 22.125 28.125H25.875C26.1734 28.125 26.4595 28.2435 26.6705 28.4545C26.8815 28.6655 27 28.9516 27 29.25C27 29.5484 26.8815 29.8345 26.6705 30.0455C26.4595 30.2565 26.1734 30.375 25.875 30.375Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="memberCards" v-if="userStore.users.length > 0">
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
                <span class="aerrowIcon">
                    <svg class="aerrowInner" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path d="M5 12H19" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
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
    let q = query(collection(db, "users"), limit(5));
    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        userStore.users.push(doc.data())
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
            userStore.users.push(doc.data())
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
        userStore.users.push(doc.data())
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
    display: flex;
    justify-content: space-between;
    margin: 3.13rem 2.5rem 3.5rem;
    align-items: center;
}

.membersBar>div:first-child {
    display: flex;
    align-items: center;
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
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    padding: 0 2.7rem;
    row-gap: 3.7rem;
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
</style>