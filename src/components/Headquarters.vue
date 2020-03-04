<template>
    <article class="headquarters">
        <h2 class="subtitle">Headquarters</h2>
        <div class="headquarterholder">
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.770201198552!2d-118.32906698453804!3d33.92131348064168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5ded9a490b5%3A0x3095ae5795c500b3!2sRocket%20Rd%2C%20Hawthorne%2C%20CA%2090250%2C%20Egyes%C3%BClt%20%C3%81llamok!5e0!3m2!1shu!2shu!4v1583267512614!5m2!1shu!2shu" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <div class="headinfos">
                <p class="contactinfo"><b>Adress:</b> <span class="headinfo">{{ headquarters.address }}</span></p>
                <p class="contactinfo"><b>City:</b> <span class="headinfo">{{ headquarters.city }}</span></p>
                <p class="contactinfo"><b>State:</b> <span class="headinfo">{{ headquarters.state }}</span></p>
                <p class="contactinfo"><b>Launchsites:</b> <span class="headinfo">{{ launch_sites }}</span></p>
                <p class="contactinfo"><b>Elon Musk:</b> <a :href="links.elon_twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a> </p>
                <p class="contactinfo"><b>Space X:</b>
                    <a :href="links.twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                    <a :href="links.flickr" target="_blank" rel="noopener noreferrer"><i class="fab fa-flickr"></i></a>
                    <a :href="links.website" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe-americas"></i></a>
                 </p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: "Headquarterspart",
    props: {
        headquarters: Object,
        links: Object,
        launch_sites: Number
    }
}
</script>

<style scoped>

.headinfo {
    font-family: 'Roboto Mono', monospace;
}

.map, .headinfos {
    display: inline-block;
    vertical-align: top;
}

.map {
    width: 66%;
    margin-right: 4%;
}

.map iframe {
    max-width: 100%;
    border-radius: 15px;
    border: 1px solid #e8eaea;
}


.headinfos {
    width: 30%;
    text-align: left;
    font-size: 1.1em;
}

.headinfos p {
    margin-top: 0;
}

.headinfos a {
    color: #91a1b1;
    padding: 0 0.3em;
}

.headinfos a:hover {
    color: black;
}

@media only screen and (max-width : 768px) {

.map {
    width: 50%;
}

.headinfos {
    width: 40%;
}

/* end 480 */
}

@media (max-width: 480px) {

.map {
    width: 90%;
    margin-right: 0;
}

.headinfos {
    width: 90%;
    margin-top: 1em;
}

/* end 480 */
}


</style>