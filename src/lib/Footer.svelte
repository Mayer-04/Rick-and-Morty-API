<script lang="ts">
  import NavApi from "./NavApi.svelte";
  import { fetchCounts } from "../data/fetch-counts";
  // Icons
  import GitHub from "./icons/GitHub.svelte";
  import Favorite from "./icons/Favorite.svelte";
  import Netlify from "./icons/Netlify.svelte";
  import Stellate from "./icons/Stellate.svelte";
  import X from "./icons/X.svelte";

  let currentYear = new Date().getFullYear();
  const countPromises = fetchCounts();
</script>

<footer class="footer">
  <NavApi {countPromises}></NavApi>

  <div class="server-status">
    <p>SERVER STATUS</p>
    <span class="icon"></span>
  </div>

  <figure class="deploy">
    <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
      <Netlify></Netlify>
    </a>
    <a
      href="https://stellate.co/?ref=powered-by"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stellate></Stellate>
    </a>
  </figure>

  <nav class="social-networks">
    <a
      href="https://github.com/afuh/rick-and-morty-api"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
    >
      <GitHub></GitHub>
    </a>
    <a
      href="https://twitter.com/rickandmortyapi"
      target="_blank"
      rel="noopener noreferrer"
      title="X"
    >
      <X></X>
    </a>
    <a
      href="https://rickandmortyapi.com/support-us"
      target="_blank"
      rel="noopener noreferrer"
      title="Favorite"
    >
      <Favorite class="favorite"></Favorite>
    </a>
  </nav>

  <div>
    <p>
      ❮❯ by <a
        class="creator"
        href="https://github.com/afuh"
        target="_blank"
        rel="noopener noreferrer">Axel Fuhrmann</a
      >
      {currentYear}
    </p>
  </div>
</footer>

<style>
  .footer {
    --transition-color: color 0.2s;
    --gap: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    background-color: var(--footer);
    color: var(--unknown);
    row-gap: 1.25rem;
    padding: 4.5rem 0;
  }

  .server-status {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 700;
  }

  .icon {
    --width: 9px;
    --height: 9px;

    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: 50%;
    background-color: var(--alive);
  }

  .deploy {
    display: flex;
    gap: var(--gap);
  }

  .deploy a {
    cursor: pointer;
  }

  .social-networks {
    display: flex;
    gap: var(--gap);
  }

  .social-networks a {
    color: var(--unknown);
    text-decoration: none;
    transition: var(--transition-color);
  }

  .social-networks a:hover {
    color: var(--orange);
  }

  .creator {
    color: var(--white);
    text-decoration: none;
    border-bottom: 1px solid var(--orange);
    transition: var(--transition-color);
  }

  .creator:hover {
    color: var(--orange);
    border: 0;
  }
</style>
