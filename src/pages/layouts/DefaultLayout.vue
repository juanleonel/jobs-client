<template>
  <div>
    <div class="container">
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <router-link to="/" class="navbar-brand">Jobs</router-link>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link to="/add-job" class="nav-link"
                    >Add new job</router-link
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">User settings</a>
                </li>
              </ul>
              <router-link to="/login" class="nav-link">Log in</router-link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <router-view></router-view>
      </main>

      <footer>
        <p>© 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
