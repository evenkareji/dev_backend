<script setup lang="ts">
const { logout, login, user } = useUserState();
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Auth from './auth.vue';
import Post from './post.vue';

let auth: any;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (authUser) => {
    console.log(authUser, 'auth');

    if (authUser) {
      const loginUser: any = {
        uid: authUser.uid,
        displayName: authUser.displayName,
      };
      login(loginUser);
    } else {
      logout();
    }
  });
});
</script>
<template>
  <div v-if="user.uid">
    <Post />
  </div>
  <div v-else>
    <Auth />
  </div>
</template>
