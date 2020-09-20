<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>

<style lang="scss" scoped>
@import '@/style/__variables.scss';

#nav {
    display: flex;
    padding: 10px 20px;

    a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.2em;
    margin: 10px;
    text-decoration: none;

    &.router-link-exact-active {
        color: $green;
    }
    }
}
</style>