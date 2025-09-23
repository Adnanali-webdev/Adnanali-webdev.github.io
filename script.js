
// let Open = document.getElementsByClassName('open');
// let Close = document.getElementsByClassName('close');
// let cardReveal = document.getElementsByClassName('card-reveal');
// let logo = document.getElementsByClassName('logo')[0];
// let boldAnchor = document.querySelectorAll('.logo a,.bold a');

// for(let i=0; i< Open.length; i++){
//     Open[i].addEventListener('click', () => {
//         cardReveal[i].style.transform = "translateY(-100%)";
//     })
//     Close[i].addEventListener('click', () => {
//         cardReveal[i].style.transform = "translateY(100%)";
//     })
// }

// const sections = [
//     {id:'logo', element:document.getElementById('logo-container')},
//   { id: 'about', element: document.getElementById('about') },
//   { id: 'experience', element: document.getElementById('experience') },
//   { id: 'project', element: document.getElementById('project') },
//   { id: 'skills', element: document.getElementById('skills') },
//   { id: 'education', element: document.getElementById('education') },
//   {id:'contact', element: document.getElementById('contact'),
// }
// ];

// window.addEventListener('scroll', () =>{
//     let scrollY = window.scrollY;

//     sections.forEach((section, index) => {
//         const sectionTop = section.element.offsetTop;
//     const nextSectionTop = sections[index + 1]?.element.offsetTop || Infinity;

// if (scrollY >= sectionTop - 50 && scrollY < nextSectionTop - 50) {
//       // Remove active from all links
//       boldAnchor.forEach(a => a.classList.remove('active'));
//       // Add active to current section link
//       boldAnchor[index].classList.add('active');
//     }
//     })
// })