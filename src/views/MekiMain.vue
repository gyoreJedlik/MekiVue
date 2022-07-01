<template>
  <div class="szin container-fluid">
    ok
    <div class="header"></div>
  </div>

  <div class="vagas szin"></div>

  <nav class="navbar szin sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../img/just_M_logo.png" alt="" width="40" height="40" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.szin {
  background-color: #e30000;
  border: 1px solid black;
}

.vagas {
  clip-path: polygon(0 100%, 100% 25%, 100% 100%, 0% 100%);
  height: 60px;
}
</style>