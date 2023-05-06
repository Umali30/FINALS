<template>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <title>Document</title>
        </head>
        <body>
            <div class="body">
                <div class="heading">
                    <h1>Travel With Us</h1>
                    <br>
                    <p>Welcome to TravelBud! We are a group of enthusiastic travelers who want to assist you in turning your ideal getaway into a reality. We've got you covered whether you're searching for a peaceful beach vacation, 
                        an exciting mountains adventure, or a cultural experience in a new city. Here are the top Places that we could suggest: </p>
                    <br>
                    <br>
                    <router-link to="/book">Book Now</router-link>
                </div>
                <div class="tours">
                    <div class="places">
                        <h2>Singapore</h2>
                        <img src="@/assets/img1.jpg" style="width: 300px; height: 250px; border-radius: 12px;">
                        <br>
                        <br>
                        <a href="https://www.visitsingapore.com/en/?cmp=SEM_STB-DC23-1015-SG-SEM_PH_DC_ENG_NA_NONE_NONE_PM-STBBrand-NA_NA_GOOG_SEA_AO_Cross_XTG&gclid=Cj0KCQjwr82iBhCuARIsAO0EAZyfsEaAsj1EDSrIJAkQJF38uqI-WF7jk8XIaTZEyAIbxd7P3ClmyeIaAv1GEALw_wcB&gclsrc=aw.ds">Want to know more?</a>
                    </div>
                    <div class="places">
                        <h2>Philippines</h2>
                        <img src="@/assets/img2.jpg" style="width: 300px; height: 250px; border-radius: 12px;">
                        <br>
                        <br>
                        <a href="https://philippines.travel/">Want to know more?</a>
                    </div>
                    <div class="places">
                        <h2>Maldives</h2>
                        <img src="@/assets/img3.jpg" style="width: 300px; height: 250px; border-radius: 12px;">
                        <br>
                        <br>
                        <a href="https://visitmaldives.com/en">Want to know more?</a>
                    </div>
		        </div>
	        </div>
        </body>
    </html>
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
        let apiURL = `http://localhost:4000/api/places-travel/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.travel = res.data;
        })
    }
}
</script>

<style>
*{
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
	list-style: none;
	font-family: 'Poppins', sans-serif;

}
.body{
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
    background-image: linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)),url("../assets/img4.jpg");
	background-position: center;
	background-size: cover;
}
.heading{
	width: 30%;
	text-align: center;
	color: #fff;
}
.heading h1{
	font-size: 40px;
}
.heading p{
    text-align: justify;
}
.heading a{
	text-decoration: none;
	color: #000;
	font-size: 25px;
	border-radius: 45px;
	padding: 14px 50px;
	background-color: #fff;
}
.heading a:hover{
	letter-spacing: 3px;
	transition: 0.6s;
}
.tours{
	width: 70%;
	display: flex;
	justify-content: space-around;
}
.places{
	display: inline;
	text-align: center;
	border-radius: 12px;
}
.places h2{
	color: red;
	font-size: 35px;
	letter-spacing: 3px;
	border-radius: 1px;
	padding: 30px 30px;
	background-color: #000;
}
.places a{
	text-decoration: none;
	color: red;
	font-weight: bold;
	font-size: 18px;
	border-radius: 12px;
	padding: 12px 30px;
	background-color: #fff;
}
.places a:hover{
	background-color: #000;
	letter-spacing: 3px;
	transition: 0.6s;
}

</style>