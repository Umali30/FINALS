<template>
<div :style="{backgroundImage:'url(./assets/bg.jpg)'}">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Fill up</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="travel.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="travel.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="travel.phone" required>
                </div>
                <div class="form-group">
                    <label>Place</label>
                    <input type="text" class="form-control" v-model="travel.place" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                travel: {
                   name: '',
                   email: '',
                   phone: '',
                   destination: '',
                   payment: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create';
                
                axios.post(apiURL, this.travel).then(() => {
                  this.$router.push('/view')
                  this.travel = {
                    name: '',
                    email: '',
                    phone: '',
                    destination: '',
                    payment: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
<style>
* {
    font-family: Fantasy;
}
body {
    background: lightblue;
}
</style>