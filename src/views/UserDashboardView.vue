<script setup>
import { RouterLink } from 'vue-router'
import Actions from '../components/Actions.vue'
import { TextAlignJustify, Cog, NotepadText } from "lucide-vue-next"
import { onMounted, ref } from 'vue'
import UserDao from "../service/UserDAO"

const users = ref([])

const getAllUsers = async () =>{
    try {
        users.value = await UserDao.getAll()
        console.log(users.value)
    } catch (error) {
        console.log("Erro ao carregar os Usuarios" , error)
    }
}

onMounted ( async () =>{
    await getAllUsers()
})
const actions = [
    {
        icon: NotepadText,
        title: "Cadastrar Usuario",
        description: "Adicionar novos usuarios",
        color: "text-green-800",
        to: "/registerUser",
    },
    {
        icon: Cog,
        title: "Tipos de Itens",
        description: "Gerenciar e cadastrar tipos de itens",
        color: "text-green-800",
        to: "/userDashboard",
    },
    {
        icon: TextAlignJustify,
        title: "Todos os Usuarios",
        description: "Visualizar e gerenciar chamados",
        color: "text-green-800",
        to: "/allUsers",
    },
]
</script>

<template>
    <div class="space-y-8">
        <header>
            <h1 class="text-2xl font-bold text-ponto-if-green">User Dashboard</h1>
        </header>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <RouterLink v-for="action in actions" :key="action.title" :to="action.to">
                <Actions>
                    <template #logo>
                        <component :is="action.icon" :class="`${action.color} w-10 h-10`" />
                    </template>
                    <template #title>{{ action.title }}</template>
                    <template #description>{{ action.description }}</template>
                </Actions>
            </RouterLink>
        </div>

        <section class="bg-white p-5 rounded-md shadow-sm">
            <div class="flex items-center mb-3">
                <h2 class="text-lg font-semibold">Ultimos Usuarios Cadastrados</h2>
                <RouterLink to="/allUsers" class="ml-auto text-green-800 hover:underline">Ver todos</RouterLink>
            </div>
            <div class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-700">
                        <thead class="bg-[#1C5E27]">
                            <tr>
                                <th scope="col" class="px-6 py-3 font-semibold tracking-wider uppercase text-white">
                                    Nome
                                </th>
                                <th scope="col" class="px-6 py-3 font-semibold tracking-wider uppercase text-white">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 font-semibold tracking-wider uppercase text-white">
                                    Matrícula
                                </th>

                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="user in users" :key="user.id"
                                class="hover:bg-gray-50 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 flex items-center gap-2">
                                    <div
                                        class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-800 font-semibold">
                                        {{ user.name.charAt(0).toUpperCase() }}
                                    </div>
                                    <div>
                                        <p class="font-semibold">{{ user.name }}</p>
                                        <p class="text-xs text-gray-500">ID: {{ user.id }}...</p>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="text-gray-700">{{ user.email }}</span>
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="bg-green-50 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                        {{ user.registration }}
                                    </span>
                                </td>

            
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>



    </div>
</template>