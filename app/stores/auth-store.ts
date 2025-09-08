import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

type SessionType = Awaited<ReturnType<typeof authClient.useSession>> | null;

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = ref<SessionType>(null);
  const isLoading = computed(() => session.value?.isPending);

  const user = computed(() => session.value?.data?.user);

  async function init() {
    session.value = await authClient.useSession(useFetch);
  }
  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    init,
    isLoading,
    signIn,
    signOut,
    user,
  };
});
