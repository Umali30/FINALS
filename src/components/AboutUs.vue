<template>
<div class="container">
    <div class="has-text-centered">
        <h1 class="">About our Team</h1>
        
    </div>
        <div class="row">
            <div class="column">
                <div class="umali">
                <img src="@/assets/Umali.jpg" alt="umali" width="300" height="300">
            </div>
        </div>
            <div class="text">
                <p>Rafael Umali is responsible in doing the over all front end content of the website.</p>
            </div>
        <div class="row">
            <div class="column">
                <div class="peyt">
                <img src="@/assets/peyt.jpg" alt="peyt" width="300" height="300">
                </div>    
            </div>
        </div>
        <div class="text2">
                <p>Arielle Faith is resposible for the design/mock up and paper of our website.</p>
        </div>
        <div class="row">
            <div class="column">
                <div class="martin">
                <img src="@/assets/martin.jpg" alt="martin" width="300" height="300">
                </div>
            </div>
        </div>
        <div class="text3">
                <p>Joaquin Carlos is in charge in doing the contents of the paper and the flowchart.</p>
        </div>
        <div class="row">
            <div class="column">
                <div class="matts">
                <img src="@/assets/bembem.jpg" alt="matts" width="300" height="300">
                </div>    
            </div>
        </div>
        <div class="text4">
                <p>Matthew Ariel is responsible for doing the back end of the website and contibuted for the design of the website.</p>
        </div>
    </div>
        <section class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>Contact Us Via</h3>
                    <p> <i class="fas fa-phone"></i> +123-456-7890 </p>
                    <p> <i class="fas fa-phone"></i> +111-222-3333 </p>
                    <p> <i class="fas fa-envelope"></i> TravelBud@gmail.com </p>
                    <p> <i class="fas fa-map"></i> Pampanga, Philippines - 24838 </p>
                </div>
            </div>
        </section>
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
        let apiURL = `http://localhost:4000/api/aboutus-travel/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.travel = res.data;
        })
    }
}
</script>

<style>
* {
    font-family: Fantasy;
    box-sizing: border-box;
}
body {
    background: #BAB86C;
}
.column {
    float: left;
    width: 50%;
    padding: 10px;
    height: 500px; 
}
.row:after {
    content: "";
    display: table;
    clear: both;
}

.umali {
    margin-top: 80px;
    margin-left: 150px;
}

.text {
    margin-top: -30%;
    width: 50%;
    padding: 50px;
    height: 500px; 
    margin-left: 600px;
    font-family: Fantasy;
}

.peyt {
    margin-top:-140px;
    margin-left: 700px;
}

.text2 {
    margin-left: 100px;
    margin-top: -50%;
    float: left;
    width: 50%;
    padding: 50px;
    height: 500px; 
    font-family: Fantasy;
}

.martin {
    margin-top: -40%;
    margin-left: 150px;
}

.text3 {
    margin-top: -55%;
    margin-left: 600px;
    width: 50%;
    padding: 50px;
    height: 500px; 
    font-family: Fantasy;
}

.matts {
    margin-top:-50%;
    margin-left: 700px;
}

.text4 {
    margin-left: 100px;
    margin-top: -61%;
    float: left;
    width: 50%;
    padding: 50px;
    height: 500px; 
    font-family: Fantasy;
}

.footer .box-container {
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
}

.footer .box-container .box h3 {
  font-size: 2.2rem;
  color: black;
  padding: 1rem 0;
}

.footer .box-container .box .links {
  font-size: 1.5rem;
  display: block;
  color: black;
  padding: 1rem 0;
}

.footer .box-container .box .links:hover {
  color: white;
}

.footer .box-container .box p {
  font-size: 1.5rem;
  color: white;
  padding: 1rem 0;
}

.footer .box-container .box p i {
  padding-right: .5rem;
  color: white;
}

.footer .box-container .box .share {
  padding: 1rem 0;
}

.footer .box-container .box .share a {
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  font-size: 1.7rem;
  color: red;
  background: #111;
  border-radius: 50%;
  margin-right: .5rem;
  text-align: center;
}


.footer .box-container .box form .email {
  margin-bottom: 1rem;
  width: 100%;
  background: #111;
  padding: 1.2rem;
  font-size: 1.5rem;
  color: #fff;
  text-transform: none;
}

</style>
