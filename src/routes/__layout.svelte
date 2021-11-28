<script lang="ts">
  import Navbar from '../components/nav/Navbar.svelte';
  import Footer from '../components/nav/Footer.svelte';
  import '../tailwind.css';
</script>

<Navbar />
<slot />
<Footer />
