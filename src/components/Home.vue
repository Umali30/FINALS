<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div class="travel">
        <h3>soar high with</h3>
        <h1>TRAVELBUD</h1>
    </div>
  </body>
  </html>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
   background-image: url("../assets/forest.jpg");
   background-position: center;
   background-size: cover;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
}
.travel {
    width: 930px;
    height: 520px;
    box-shadow: 0 0 8px rgba(255, 255 ,255, 1);
    background-image: url("../assets/forest2.jpg");
    background-position: center;
    background-size: cover;
}

h3{
    color: #fff;
    margin: 80px 110px -25px;
    font-style: italic;
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 1px;
}

h1{
    color: #fff;
    margin: 0 110px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 100px;
    letter-spacing: 10px;
    opacity: 0.6;
    background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000, #fff);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

}
</style>
<script></script>