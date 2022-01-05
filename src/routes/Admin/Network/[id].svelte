<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/admin/network/`${params.id});
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>
