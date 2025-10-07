<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>

<template>
    <div class="page-container">
        <main class="content">
            <Navbar />
            <slot></slot>
            <Footer />
        </main>
    </div>
</template>
