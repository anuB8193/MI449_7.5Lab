---
title: AI Tool Reflection
layout: layout.liquid
permalink: /ai-reflection/
---

<div class="reflection-container">
  <h1>Reflection on Using AI Tools (Copilot & GPT-4o)</h1>
  
  <p>During this lab, I tested <strong>GitHub Copilot</strong> with two different models: <strong>GPT-4o</strong> and an <strong>alternative Copilot model</strong>. My goal was to compare their ability to assist with implementing <strong>Alpine.js, fetching API data, and formatting a website</strong>.</p>

  <p>GPT-4o provided more accurate and context-aware suggestions. For example, when I asked for a way to fetch data using Alpine.js, I prompted:</p>

  <code>
  "How do I fetch and display user data using Alpine.js and an external API?"
  </code>

  <p>GPT-4o responded with a structured approach using <code>Alpine.data()</code>

    and an async function:</p>
  <code>
  Alpine.data("apiData", () => ({
      data: [],
      async fetchData() {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          this.data = await res.json();
      },
      init() { this.fetchData(); },
  }));
  </code>

  <p>However, the alternative Copilot model struggled with this request. Instead of integrating Alpine.js, it suggested:</p>

  <code>
  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => console.log(data));
  </code>

  <p>While functional, this approach did not align with Alpine.js’s reactivity model, requiring me to manually adjust it. Another issue I faced was CSS formatting. When I asked GPT-4o:</p>

  <code>
  "How can I center my AI Reflection page while keeping my styles unchanged?"
  </code>

  <p>GPT-4o provided this solution:</p>

  <code>
  .reflection-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
  }
  </code>

  <p>Meanwhile, the alternative model suggested margin-based centering, which did not fully resolve the issue.</p>

  
  
  <p>Overall, GPT-4o provided better responses for Alpine.js and CSS styling. However, both AI tools were useful in reducing development time. The alternative model provided correct general JavaScript solutions but lacked framework-specific guidance. This experience reinforced the idea that AI assistance is helpful but still requires human validation and refinement.</p>
</div>
