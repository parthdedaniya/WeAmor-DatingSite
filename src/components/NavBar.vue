<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/" exact-active-class="no-active">
                <img src="../assets/brandLogo.svg" alt="" />
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-items">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link " to="/features">Features</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/pricing">Pricing</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/blogs">Blog</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/howtouse">How to Use?</RouterLink>
                    </li>
                    <li class="nav-item" exact-active-class="no-active">
                        <button class="nav-btn">Create account</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
    background: #EBD6FF;
}

.navbar {
    padding: 40px;
}

.nav-items {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3.125rem;
}

.nav-item {
    font-size: 1.125rem;
}

.nav-link {
    color: #2b2b2b;
}

.nav-btn {
    color: #fff;
    border-radius: 3.125rem;
    background: #A25CE1;
    padding: 1rem 2.44rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    border: none;
}

.router-link-exact-active {
    font-weight: 700;
    color: #400179 !important;
    stroke-width: 3px;
    stroke: #400179;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
}
</style>