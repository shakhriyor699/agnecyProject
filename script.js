// NAVBAR
let links = document.querySelectorAll('.header__nav-link');
let nav = document.querySelector('.header__nav');
    margin = 0;
    
    function scroll() {
        function scrollDistance() {
            let scrollD = window.pageYOffset;
            return scrollD;
         }
        if (scrollDistance() <= 30){
            margin = 30 - scrollDistance();
            nav.style.top = `${margin}px`;
            nav.style.width = `1249px`;
            nav.style.left = `auto`;
            
        }else{
            nav.style.position = `fixed`;
            nav.style.top = `0px`
            nav.style.width = `100%`
            nav.style.left = `0`
        }
    }

    window.addEventListener('scroll', scroll);
    
    
   


    

//  TABS


const tabsBtn = document.querySelectorAll('.main__tabs-btn');
const tabsItems = document.querySelectorAll('.main__tabs-item');


for (let i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItems.length; j++) {
            tabsItems[j].classList.remove('active');
            tabsBtn[j].classList.remove('active');
        }
        tabsItems[i].classList.add('active');
        tabsBtn[i].classList.add('active');
    })

}

// Main__card


const users = {
    1: {
        name: "Mark Waugh",
        username: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template."
    },
    2: {
        name: "Glenna Reichert Delphine",
        username: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template."
    },
    3: {
        name: "Ervin Howell",
        username: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template."
    },
    4: {
        name: "Patricia Lebsack",
        username: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template."
    }
}

let  card = document.querySelector(".main__card"),
    cardItem = document.querySelector(".avatar"),
    cardItems = document.querySelectorAll(".avatars"),
    cardITEMS = [...cardItems],
    name = document.querySelector(".name-info"),
    username = document.querySelector(".user-info")

for (let i = 0; i < cardItems.length; i++) {
    let gets = cardItems[i].getAttribute('src')
    cardItems[i].addEventListener('click', () => {
        cardItem.setAttribute('src', gets);
        name.innerHTML = users[i+1].name;
        username.innerHTML = users[i+1].username;
         
        for (let j = 0; j <  cardItems.length; j++) {
            cardItem.classList.add("active")
            setTimeout(() => {
                cardItem.classList.remove("active") 
            }, 1000);
        }
    })
}


// Scroll


function scrollActive() {
    let content = document.querySelectorAll('.content');
    let contents = {};
    let i =0;

    Array.prototype.forEach.call(content, (e) =>{
        contents[e.id] = e.offsetTop;
    });

    window.addEventListener("scroll", () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollPosition);
        for ( let i in contents) {
           if (contents[i] <= scrollPosition) {
               document.querySelector('.header__nav-link.active').setAttribute('class', 'header__nav-link') ;
               document.querySelector('a[href *= ' + i + ']').setAttribute('class', 'header__nav-link active');        
           }
        }
    }

)}
scrollActive();

window.addEventListener('resize', () => {
    if (window.innerWidth < 769) {
    console.log('asda');
    window.removeEventListener('scroll', scrollActive, false);
}
})
// FORM Bot


const link = document.querySelector('.main__registration-btn');

// link.addEventListener('click', () => {
//     const text = document.querySelector('.main__registration-message');
//     const name = document.querySelector('.main__registration-name');
//     const email = document.querySelector('.main__registration-email');
//     const src = `https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129&parse_mode=html&text= 
//     name: ${name.value}
//     Email: ${email.value}
//     Message: ${text.value}`
//     link.setAttribute('href', src)
//     link.setAttribute('target', '_blank');

// })


link.addEventListener('click', () => {
    const text = document.querySelector('.main__registration-message');
    const name = document.querySelector('.main__registration-name');
    const email = document.querySelector('.main__registration-email');
    fetch(`https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129&parse_mode=html&text= 
       name: ${name.value}
       Email: ${email.value}
       Message: ${text.value}`)
       name.value = '';
       email.value = '';
       text.value = '';
       
     link.innerHTML = `<img class="load" src="img/loading.svg" alt="">`
      
       
       setTimeout(() => { link.innerHTML = 'Send message'}, 1000)
})

// modal start

let headerVideo = document.querySelector('.header__title-video');
let body = document.querySelector('body');
let modalSpan = document.querySelector('.modal__span');
let headerRight = document.querySelector('.header__title-right');


headerVideo.addEventListener('dblclick', (e) => {
    e.preventDefault();
    
    headerRight.style= `z-index: 999;
    width: ${innerWidth}px;
    height: ${innerHeight}px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
headerVideo.style.width = '100%';
headerVideo.style.height = '100%';
modalSpan.classList.add('active');
    
    
    body.classList.add('lock');
})

modalSpan.addEventListener('click', () => {
    modalSpan.classList.remove('active');
    body.classList.remove('lock');
    headerRight.style= `background: var(--lightGrey);
    width: 553px;
    height: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 100px 30px var(--darkGrey);
    position: relative;
`
})



// burger start

let header__menu = document.querySelector('.header__menu');
let headerSpan = document.querySelector('.header__menu span');
let headerList = document.querySelector('.header__nav-list');

header__menu.addEventListener('click', () => {
    headerSpan.classList.toggle('active');
    headerList.classList.toggle('active');
})



