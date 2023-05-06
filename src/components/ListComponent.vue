<template>
     <div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Destination</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="travel in Travels" :key="travel._id">
                        <td>{{ travel.name }}</td>
                        <td>{{ travel.email }}</td>
                        <td>{{ travel.phone }}</td>
                        <td>{{ travel.destination }}</td>
                        <td>{{ travel.payment }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: travel._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteTravel(travel._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Travels: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Travels = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteTravel(id){
                let apiURL = `http://localhost:4000/api/delete-travel/${id}`;
                let indexOfArrayItem = this.Travels.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Travels.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
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