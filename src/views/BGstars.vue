<template>

    <!-- <div class="body"> -->
    <div class="body" ref="bodyRef" @scroll="handleScroll">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
    </div>
    
</template>



<style lang="scss" scoped>

// .body {
//     // position: relative;
//     width: 100%;
//     height: 50vh;
//     background: #000;
//     z-index: -1;

// }

@keyframes animStar {
    from {
        transform: translateY(-2000px);
    }

    to {
        transform: translateY(100vh);
    }
}

#stars {
    position: absolute;
    // width: 100%;
    // height: 100%;
    pointer-events: none;
    border-radius: 50%;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 483px 450px #FFF, 1995px 525px #FFF, 755px 1459px #FFF, 610px 1246px #FFF, 764px 1850px #FFF, 1274px 1697px #FFF, 1227px 37px #FFF, 1090px 506px #FFF, 341px 1005px #FFF, 1002px 755px #FFF, 693px 1497px #FFF, 1797px 1626px #FFF, 1838px 793px #FFF, 802px 881px #FFF, 1117px 1983px #FFF, 352px 1465px #FFF, 1526px 852px #FFF, 1559px 526px #FFF, 517px 516px #FFF, 1380px 244px #FFF, 662px 1531px #FFF, 1544px 518px #FFF, 253px 879px #FFF, 774px 1629px #FFF, 752px 994px #FFF, 1129px 726px #FFF, 232px 1050px #FFF, 1766px 290px #FFF, 1976px 842px #FFF, 662px 1535px #FFF, 257px 1016px #FFF, 665px 708px #FFF, 1476px 1772px #FFF, 261px 498px #FFF, 719px 1459px #FFF, 469px 438px #FFF, 994px 474px #FFF, 744px 808px #FFF, 1609px 1741px #FFF, 898px 260px #FFF, 1978px 1436px #FFF, 904px 1244px #FFF, 123px 773px #FFF, 6px 923px #FFF, 1973px 1778px #FFF, 1470px 1861px #FFF, 1037px 156px #FFF, 554px 1905px #FFF, 1508px 849px #FFF, 1213px 1603px #FFF, 87px 1907px #FFF, 492px 527px #FFF, 91px 213px #FFF, 492px 15px #FFF, 1357px 1157px #FFF, 637px 240px #FFF, 1515px 281px #FFF, 1757px 682px #FFF, 1035px 1298px #FFF, 1019px 1233px #FFF, 25px 162px #FFF, 262px 884px #FFF, 1328px 965px #FFF, 984px 879px #FFF, 1213px 689px #FFF, 623px 1091px #FFF, 1227px 422px #FFF, 1977px 1025px #FFF, 620px 474px #FFF, 528px 1525px #FFF;
    animation: animStar 50s linear infinite;
    border-radius: 50%;
}

#stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 483px 450px #FFF, 1995px 525px #FFF, 755px 1459px #FFF, 610px 1246px #FFF, 764px 1850px #FFF, 1274px 1697px #FFF, 1227px 37px #FFF, 1090px 506px #FFF, 341px 1005px #FFF, 1002px 755px #FFF, 693px 1497px #FFF, 1797px 1626px #FFF, 1838px 793px #FFF, 802px 881px #FFF, 1117px 1983px #FFF, 352px 1465px #FFF, 1526px 852px #FFF, 1559px 526px #FFF, 517px 516px #FFF, 1380px 244px #FFF, 662px 1531px #FFF, 1544px 518px #FFF, 253px 879px #FFF, 774px 1629px #FFF, 752px 994px #FFF, 1129px 726px #FFF, 232px 1050px #FFF, 1766px 290px #FFF, 1976px 842px #FFF, 662px 1535px #FFF, 257px 1016px #FFF, 665px 708px #FFF, 1476px 1772px #FFF, 261px 498px #FFF, 719px 1459px #FFF, 469px 438px #FFF, 994px 474px #FFF, 744px 808px #FFF, 1609px 1741px #FFF, 898px 260px #FFF, 1978px 1436px #FFF, 904px 1244px #FFF, 123px 773px #FFF, 6px 923px #FFF, 1973px 1778px #FFF, 1470px 1861px #FFF, 1037px 156px #FFF, 554px 1905px #FFF, 1508px 849px #FFF, 1213px 1603px #FFF, 87px 1907px #FFF, 492px 527px #FFF, 91px 213px #FFF, 492px 15px #FFF, 1357px 1157px #FFF, 637px 240px #FFF, 1515px 281px #FFF, 1757px 682px #FFF, 1035px 1298px #FFF, 1019px 1233px #FFF, 25px 162px #FFF, 262px 884px #FFF, 1328px 965px #FFF, 984px 879px #FFF, 1213px 689px #FFF, 623px 1091px #FFF, 1227px 422px #FFF, 1977px 1025px #FFF, 620px 474px #FFF, 528px 1525px #FFF;
}

#stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1585px 315px #FFF, 1750px 858px #FFF, 502px 1184px #FFF, 1482px 150px #FFF, 870px 93px #FFF, 1401px 1976px #FFF, 494px 1549px #FFF, 1607px 1894px #FFF, 1029px 1466px #FFF, 1931px 1390px #FFF, 819px 1431px #FFF, 521px 1062px #FFF, 1754px 574px #FFF, 577px 943px #FFF, 850px 1377px #FFF, 445px 1835px #FFF, 1658px 1675px #FFF, 521px 1144px #FFF, 560px 1624px #FFF, 1329px 1778px #FFF;
    animation: animStar 100s linear infinite;
    border-radius: 50%;
}

#stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1585px 315px #FFF, 1750px 858px #FFF, 502px 1184px #FFF, 1482px 150px #FFF, 870px 93px #FFF, 1401px 1976px #FFF, 494px 1549px #FFF, 1607px 1894px #FFF, 1029px 1466px #FFF, 1931px 1390px #FFF, 819px 1431px #FFF, 521px 1062px #FFF, 1754px 574px #FFF, 577px 943px #FFF, 850px 1377px #FFF, 445px 1835px #FFF, 1658px 1675px #FFF, 521px 1144px #FFF, 560px 1624px #FFF, 1329px 1778px #FFF;
}

#stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 91px 409px #FFF, 1886px 728px #FFF, 1294px 970px #FFF, 720px 1215px #FFF, 796px 1431px #FFF, 834px 1217px #FFF, 1926px 1164px #FFF, 1803px 310px #FFF, 1532px 1421px #FFF, 1680px 232px #FFF;
    animation: animStar 150s linear infinite;
    border-radius: 50%;
}

#stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 91px 409px #FFF, 1886px 728px #FFF, 1294px 970px #FFF, 720px 1215px #FFF, 796px 1431px #FFF, 834px 1217px #FFF, 1926px 1164px #FFF, 1803px 310px #FFF, 1532px 1421px #FFF, 1680px 232px #FFF;
}


</style>
    
<script>

    export default {

        mounted() {
            this.createStars(200);
            this.createStars('stars', 200);
            this.createStars('stars2', 200); // Adjust the number of stars as needed
            this.createStars('stars3', 200); // Adjust the number of stars as needed

        },

        methods: {
            createStars(starsId, numStars) {
                const starsContainer = document.getElementById(starsId);
                for (let i = 0; i < numStars; i++) {
                    const speed = -1; // Adjust speed range as needed
                    this.drawStar(starsContainer, speed);
                }
            },
            drawStar(container, speed) {
                const tmpStar = document.createElement('figure');
                tmpStar.className = "star";
                tmpStar.setAttribute('data-speed', speed); // Set the speed as a data attribute
                tmpStar.style.top = Math.random() * 100 + '%';
                tmpStar.style.left = Math.random() * 100 + '%';
                container.appendChild(tmpStar);
            },
            handleScroll(event) {
            const scrollY = event.target.scrollTop;
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                const speed = parseFloat(star.getAttribute('data-speed'));
                const starTop = parseFloat(star.style.top.replace('%', ''));
                const newTop = starTop - scrollY * speed;
                star.style.top = newTop + '%';
            });
        }

        }
    }
    
</script>