<script context="module">
  export async function load({ page }) {
    return {
      props: {
        companyRegistration: page.query.get('type')?.toLowerCase() === 'company'
      }
    };
  }
</script>

<script lang="ts">
  import Checkbox from '../components/ui/Checkbox.svelte';
  import UserRegistration from '../components/registration/UserRegistration.svelte';
  import CompanyRegistration from '../components/registration/CompanyRegistration.svelte';
  export let companyRegistration = false;
</script>

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-5/6 lg:w-1/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">Bei Cityriza registrieren</h1>
    <Checkbox bind:checked={companyRegistration} label="Als Werbekunde oder Standortpartner registrieren" />
    {#if companyRegistration}
      <CompanyRegistration />
    {:else}
      <UserRegistration />
    {/if}
  </div>
</div>
