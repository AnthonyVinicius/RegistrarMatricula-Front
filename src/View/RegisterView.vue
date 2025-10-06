<script setup>
import BaseLayout from "../components/BaseLayout.vue"
import UserForm from "../components/UserForm.vue"
import CourseForm from "../components/CourseForm.vue"
import DisciplineForm from "../components/DisciplineForm.vue"

import { ref } from "vue"

const selectedForm = ref("user")
</script>

<template>
    <BaseLayout>
        <div class="flex gap-4 justify-center my-6">
            <button @click="selectedForm = 'user'" class="px-4 py-2 rounded bg-indigo-600 text-white">Usuário</button>
            <button @click="selectedForm = 'course'" class="px-4 py-2 rounded bg-blue-600 text-white">Curso</button>
            <button @click="selectedForm = 'discipline'"
                class="px-4 py-2 rounded bg-green-600 text-white">Disciplina</button>
        </div>

        <div class="flex justify-center py-6">
            <UserForm v-if="selectedForm === 'user'" />
            <CourseForm v-if="selectedForm === 'course'" />
            <DisciplineForm v-if="selectedForm === 'discipline'" />
        </div>
    </BaseLayout>
</template>
