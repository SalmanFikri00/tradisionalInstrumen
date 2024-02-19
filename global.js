const source = ""


const boxJs = document.createElement('div')
const navpage = document.querySelector('.navpage')
const title = document.querySelector('.title')
const progress = document.getElementById("progress")
boxJs.id = 'box'
boxJs.className = 'b1'
if(window.innerWidth > 1000){
    document.body.appendChild(boxJs)
}
const box = document.getElementById('box')
const tirai = document.querySelector('.tirai')
const nav = document.querySelector('.n')
const a = document.querySelectorAll('a')
const footer =document.querySelector('#footer')
const tim =document.querySelector('#tim')



AOS.init();





        const locomotiveScroll = new LocomotiveScroll({
            autoStart: false,
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 0.2,
                duration: 2.5,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: true,
                wheelMultiplier: 1,
                touchMultiplier: 1,
                normalizeWheel: true,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            },
        });


        tim.addEventListener('click',() => {
            locomotiveScroll.scrollTo(footer , {})
        })


        if(document.body.id == 'home') {
            const playit = document.querySelector('#playit')
            const playitsection = document.querySelector('#playitsection')
            playit.addEventListener('click',() => {
                locomotiveScroll.scrollTo(playitsection , {})
            })
        }


const scrollTim = () => {
    console.log('s')
    locomotiveScroll.scrollTo(footer)
}


    const openNavPage = () => {
        
        navpage.style.top = '0px'
        locomotiveScroll.stop()
    }


    const closeNavPage = () => {
        navpage.style.top = '-100vh'
        locomotiveScroll.start()

    }

    const hoverBox = () => {
    
        box.style.transform = 'translate( -50% , -50% ) scale(1.7)';
        box.style.opacity = '.5';
        box.style.borderRadius = '50%'
    }

    const resetBox = () => {
        box.style.transform = 'translate( -50% , -50% ) scale(1.2)';
        box.style.opacity = '1';
        box.style.borderRadius = '50%'
        
        
    }
    
    
    
    document.addEventListener('mousemove', function(event) {
        setTimeout(() => {

            let x = event.clientX;
            let y = event.clientY;
            box.style.left = x + 'px';
            box.style.top = y + 'px';
        }, 20);
    });

    window.addEventListener('scroll', (event) => {
        // title.style.left = window.scrollY + 'px';

        if( window.scrollY > 200 ) {
            nav.classList.add('nav');
        }else {
            nav.classList.remove('nav');
        }
    })




    const bukaTirai = () => {
        tirai.style.top = '-100vh'
        locomotiveScroll.start()

    }
    const tutupTirai = () => {
        tirai.style.top = '0'
        locomotiveScroll.start()

    }


    a.forEach( items => {
        items.addEventListener('click' , e => {
            e.preventDefault()
            tutupTirai()
            setTimeout(() => {
                window.location.href = items.href
            }, 1000);
        })
    })



    document.addEventListener('DOMContentLoaded', () => {

        setTimeout(() => {
            backsound.play()
            progress.textContent ='sebentar lagi'
        }, 1000);
        setTimeout(() => {
            progress.textContent ='selamat menikmati'
        }, 2000);        
        setTimeout(() => {
            bukaTirai()
        }, 3000);  
    })
