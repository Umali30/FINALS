<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Booking</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <label>Destination</label>
                    <input type="text" class="form-control" v-model="travel.destination" required>
                </div>
                <div class="form-group">
                    <label>Payment</label>
                    <input type="text" class="form-control" v-model="travel.payment" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            travel: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-travel/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.travel = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-travel/${this.$route.params.id}`;
            axios.put(apiURL, this.travel).then((res) => {
                console.log(res)
                this.$router.push('/view')
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
    background: #BAB86C;
}
</style>