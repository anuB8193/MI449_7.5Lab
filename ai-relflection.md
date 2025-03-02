---
title: AI Tool Reflection
layout: layout.liquid
permalink: /ai-reflection/
---

## Reflection on Using AI Tools (Copilot & GPT-4o)

During this lab, I tested **GitHub Copilot** with two different models:
- **GPT-4o**
- **Alternative Copilot Model**

### Effectiveness of AI Assistance
GPT-4o provided accurate and context-aware suggestions, such as:
```js
Alpine.data("apiData", () => ({
  data: [],
  async fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    this.data = await res.json();
  },
  init() { this.fetchData(); },
}));
