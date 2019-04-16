<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/">FOOD PLANET</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/"><a class="nav-link">Home</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/menu"><a class="nav-link">Menu</a></router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
header {
    margin-bottom: 20px;
}

.navbar-brand {
    font-size: 1.5em;
}
</style>
