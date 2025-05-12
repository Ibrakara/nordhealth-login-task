export default defineNuxtRouteMiddleware((to, from) => {
  const formSubmitted = useState<boolean>("formSubmitted");
  if (!formSubmitted.value) {
    alert("Please fill out the form before proceeding.");
    return navigateTo("/");
  }
});
