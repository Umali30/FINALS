<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand float-left"><span>Travel</span><span>Bud</span></a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/places">Places</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/book">Booking</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Booking</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/aboutus">About Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Router view -->
   
      <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  }
</script>

<style>
span{
  color: #BAB86C;
}


</style>