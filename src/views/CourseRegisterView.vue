<script setup>
import { ref } from "vue";
import CourseDAO from "../service/CourseDAO";

const DAO = CourseDAO();
const course = ref({
    name: "",
    acronym: "",
    duration: null,
});

const submitForm = () => {
    console.log("Course:", course.value);
    DAO.insert(course.value)
};
const selectedForm = ref("user")
</script>

<template>

    <div class="flex justify-center py-6">
        <form @submit.prevent="submitForm" class="space-y-6 bg-white shadow-md p-6 rounded-xl w-full max-w-md">
            <h2 class="text-xl font-bold text-gray-700">Cadastrar Curso</h2>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Nome</label>
                <input v-model="course.name" type="text" maxlength="100"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2" required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Sigla</label>
                <input v-model="course.acronym" type="text" maxlength="10"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2" required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Duração (máx. 10)</label>
                <input v-model.number="course.duration" type="number" min="1" max="10"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 p-2" required />
            </div>

            <button type="submit"
                class="w-full bg-[#1C5E27] hover:bg-[#1C5E10] text-white font-semibold px-4 py-2 rounded-lg shadow">
                Salvar
            </button>
        </form>
    </div>
</template>
