<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/Bitmap.png" alt="Logo" />
        </div>
        <div class="user-section">
            <span>Hi, {{ username }}</span>
            <img :src="userAvatar" alt="User Avatar" class="avatar" />
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            username: "Joshua",
            userAvatar: "@/assets/avatar.png",
        };
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    margin-right: 10px;
}

.user-section {
    display: flex;
    align-items: center;
}

.user-section span {
    margin-right: 15px;
    font-size: 16px;
    color: #333333;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
</style>