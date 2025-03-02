document.addEventListener("alpine:init", () => {
    Alpine.data("apiData", () => ({
      users: [],
      posts: [],
      async fetchUsers() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        this.users = await res.json();
      },
      async fetchPosts() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        this.posts = await res.json();
      },
      init() {
        this.fetchUsers();
        this.fetchPosts();
      }
    }));
  });
  