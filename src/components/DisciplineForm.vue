<script setup>
import { ref } from "vue";
import GenericDAO from "../service/GenericDAO"

const DAO = new GenericDAO('discipline');
const discipline = ref({
    name: "",
    classroomId: "",
});

const submitForm = () => {
    console.log("Discipline:", discipline.value);
    DAO.insert(discipline.value)
};
</script>

<template>
    <form @submit.prevent="submitForm" class="space-y-6 bg-white shadow-md p-6 rounded-xl w-full max-w-md">
        <h2 class="text-xl font-bold text-gray-700">Cadastrar Disciplina</h2>

        <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Nome</label>
            <input v-model="discipline.name" type="text" maxlength="50"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 p-2" required />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Sala</label>
            <select v-model="discipline.classroomId"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 p-2" required>
                <option disabled value="">Selecione uma sala</option>
                <option value="1">Sala 01</option>
                <option value="2">Sala 02</option>
            </select>
        </div>

        <button type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow">
            Salvar
        </button>
    </form>
</template>
