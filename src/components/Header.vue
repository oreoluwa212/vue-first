<template>
    <header class="flex justify-between items-center py-5 px-[5%] bg-white shadow-md z-10 max-h-[100px] w-full relative">
        <div class="flex items-center">
            <img :src="logoSrc" alt="Logo" class="h-10 mr-2" />
        </div>

        <div class="relative flex items-center">
            <div
                class="flex items-center gap-4 cursor-pointer"
                @click="toggleDropdown"
            >
                <img :src="userAvatarSrc" alt="User Avatar" class="w-10 h-10 rounded-full object-cover" />
                <span class="text-gray-800 text-base">Hi, {{ username }}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-5 h-5 text-gray-800"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            <div
                v-if="dropdownOpen"
                class="absolute right-0 flex flex-col py-3 top-10 mt-2 w-[200px] bg-white rounded-lg shadow-md border z-20"
                @mouseleave="hideDropdown"
            >
                <ul class="py-2">
                    <li class="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        <router-link
                            to="/wallet"
                            class="flex items-center gap-2 w-full text-gray-700"
                        >
                            <img :src="walletIconSrc" alt="Wallet Icon" class="w-5 h-5" />
                            Wallet History
                        </router-link>
                    </li>
                    <li class="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        <router-link
                            to="/history"
                            class="flex items-center gap-2 w-full text-gray-700"
                        >
                            <img :src="settingsIconSrc" alt="Settings Icon" class="w-5 h-5" />
                            Settings
                        </router-link>
                    </li>
                    <li class="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        <router-link
                            to="/logout"
                            class="flex items-center gap-2 w-full text-gray-700"
                        >
                            <img :src="logoutIconSrc" alt="Logout Icon" class="w-5 h-5" />
                            Logout
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import logoSrc from "@/assets/Bitmap.png";
import userAvatarSrc from "@/assets/avatar.png";
import walletIconSrc from "@/assets/images/clock.svg";
import settingsIconSrc from "@/assets/images/settings.svg";
import logoutIconSrc from "@/assets/images/log-out.svg";

export default {
    data() {
        return {
            username: "Joshua",
            logoSrc,
            userAvatarSrc,
            walletIconSrc,
            settingsIconSrc,
            logoutIconSrc,
            dropdownOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        hideDropdown() {
            // Add a slight delay to allow the user to move their mouse to the dropdown.
            setTimeout(() => {
                this.dropdownOpen = false;
            }, 200);
        },
    },
};
</script>

<style scoped>
</style>
