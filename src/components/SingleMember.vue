<template>
    <div class="outerDiv">
        <img class="photo" :src="props.member.image" alt="" />
        <div class="actionsBtn">
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
        <div class="bottomSection">
            <div class="nameId">
                <div class="name">{{ props.member.name }}</div>
                <div class="id">@{{ props.member.id }}</div>
            </div>
            <button class="goToProfileBtn" @click="() => router.push({ name: 'user', params: { id: props.member.id } })">
                <img src="../assets/rightAerrow.svg" alt="">
            </button>
        </div>
    </div>
</template>

<script setup>
import { doc, getDoc } from 'firebase/firestore';
import { db } from "@/firebase.js"
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useToggleFavorite } from "../composables/useToggleFavorite"

const props = defineProps(["member"])
const router = useRouter()
const { toggleFavorite } = useToggleFavorite()

const userRef = doc(db, "users", props.member.uid)
const user = await getDoc(userRef)
let isFavorite = ref(user.data().favorite)

const toggleFavoriteBtn = async () => {
    isFavorite.value = await toggleFavorite(userRef)
}
</script>

<style lang="scss" scoped>
.outerDiv {
    border-radius: 1.125rem;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
    width: 16rem;
    height: 23.5625rem;
    padding: 0.37rem 0.31rem;
    display: inline-block;
    margin: auto;
}

.photo {
    width: 15.375rem;
    height: 16.875rem;
    border-radius: 1.125rem;
    border: 2px solid #400179;
    box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.25);
}

.actionsBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: 1.7rem;
    gap: 1.25rem;
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

.goToProfileBtn {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 3.125rem;
    border: 1px solid #A25CE1;
    background: #400179;
}

.bottomSection {
    display: flex;
    justify-content: space-between;
    padding-left: 0.31rem;
    padding-right: 0.31rem;
    position: relative;
    bottom: 1rem;
    align-items: center;
}

.name {
    color: #000;
    font-family: Poppins;
    font-size: 1.375rem;
    font-weight: 600;
}

.id {
    color: rgba(0, 0, 0, 0.40);
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
}
</style>