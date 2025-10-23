<script setup>
import { ref } from "vue";
import UserDAO from "../service/UserDAO"

const user = ref({
    name: "",
    email: "",
    password: "",
});

const submitForm = async () => {
    try {
        await UserDAO.insert(user.value);
        alert("Usuário cadastrado com sucesso!");
    } catch (err) {
        console.error(err);
        alert("Erro ao cadastrar usuário: " + err.message);
    }
};


const selectedForm = ref("user")
</script>

<template>
    <div class="flex justify-center py-6">
        <form @submit.prevent="submitForm" class="space-y-6 bg-white shadow-md p-6 rounded-xl w-full max-w-md">
            <h2 class="text-xl font-bold text-gray-700">Cadastrar Usuário</h2>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Nome</label>
                <input v-model="user.name" type="text" maxlength="100"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input v-model="user.email" type="email" maxlength="150"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Matrícula</label>
                <input v-model="user.registration" type="text" maxlength="20"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">Password</label>
                <input v-model="user.password" type="password" maxlength="20"
                    class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                    required />
            </div>

            <button type="submit"
                class="w-full bg-[#1C5E27] text-white hover:bg-[#1C5E10] font-semibold px-4 py-2 rounded-lg shadow">
                Salvar
            </button>
        </form>
    </div>
</template>
