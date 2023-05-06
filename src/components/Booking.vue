<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Booking Form</title>
    </head>
    <body>
        
        <form @submit.prevent="handleSubmitForm">
            <div class="container">
                    <div id="form">
                        <h1 class="text-white text-center">Booking Now</h1>
                        <div id="first-group">
                            <div id="content">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" id="input-group" placeholder="Name" v-model="travel.name">
                            </div>

                            <div id="content">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <input type="number" id="input-group" placeholder="Phone number" v-model="travel.phone">
                            </div>

                        </div>

                        <div id="second-group">

                            <div id="content">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <input type="email" id="input-group" placeholder="Email" v-model="travel.email">
                            </div>

                            <div id="content">
                                <i class="fa fa-plane" aria-hidden="true"></i>
                                <input type="destination" id="input-group" placeholder="Destination" v-model="travel.destination">
                            </div>
                            <label id="luise">Payment Methods</label>
                            <select v-model="travel.payment" id="content" >
                            <option disabled value="">SELECT PAYMENT METHOD</option>
                            <option >Gcash</option>
                            <option >Paymaya</option>
                            <option >PayPal</option>
                            <option >BDO</option>
                            </select>
                        </div>
                        <button type="submit" value="Submit" id="submit-btn">Book Now</button>
                    </div>
  
            </div>
        </form>
    </body>
    </html>
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
                let apiURL = 'http://localhost:4000/api/create-travel';
                
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
*{
    margin: 0;
    padding: 0;
}

body{
    background-image: url("../assets/booking.jpg");  
    background-position: cover;
    background-size: auto; 
}

#form{
    background-color: black;
    height: 400px;
    width: 800px;
    margin: auto;
    margin-top: 100px;
    opacity: 0.7;
}

#first-group{
    border: 2px solid olivedrab;
    width: 400px;
    margin-top: 38px;

}

#first-group{
    border:none;
    width:400px;
    margin-top: 38px;
    position: absolute;
}

#content{
    border: 1px solid #fff;
    margin:10px;
    margin-left: 8px;
    padding:5px;
}

#content #input-group{
    border:none;
    outline:none;
    background: transparent;
    margin-left:8px;
    width:300px;
    color:#fff;
}

::placeholder{
    color:#fff;
}

.fa{
    display:inline-block;
    color:red;
    border-right:1px solid #fff;
    padding:8px;
    margin-left: 8px;
}

#second-group{
    border:none;
    width:400px;
    margin-top: 55px;
    margin-left:400px;
}

#submit-btn{
    margin-top: 30px;
    margin-left: 600px;
    background: transparent;
    color:#fff;
    width:150px;
    border:1px solid red;
    outline:none;
    padding:10px;
    font-size: 20px;
}

#luise {color: white;}

</style>