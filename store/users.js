export const useUsersStore = defineStore('users', () => {
    const users = ref('')
    const current = ref('')

    function setUsers(data) {
        users.value = data
    }

    function setCurrent(data) {
        current.value = data
    }

    return { users, current, setUsers, setCurrent }
})