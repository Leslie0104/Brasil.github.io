document.documentElement.classList.add('js');

let slideIndex = 1;
showSlides(slideIndex);

// Siguiente/anterior controles
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//------------------------------------------------------------------
// Data de ingles y español

const lenguages = {
  inlglish: {
    navbar: [
      'Home', 'Corners of Brazil', 'Culture', 'Contact'
    ],
    content1 :{
      title: "Immerse yourself in Brazil's vibrant culture",
      subtitle: [
        "Welcome to our portal dedicated to exploring the beauty and diversity of Brazil. From the golden beaches of Rio de Janeiro to the vibrant Amazon rainforest, here you'll discover everything this fascinating country has to offer.",
        "Join us on a journey through its music, cuisine, traditions, and landscapes that captivate the senses.",
        "Start your adventure and experience the magic of Brazil!"
      ]
    },
    content2: 'FEEL THE BRAZILIAN CULTURE',
    content3: {
      title: 'Brazil, where your adventure comes to life.',
      subtitle: [
        'Explore the magic of Brazil through its cuisine, dazzling parades, and vibrant music. Immerse yourself in the flavors, colors, and rhythms that make this country a unique destination.',
        'Your adventure starts here!'
      ]
    },
    content4: [
      'Gastronomy', 'Parades', 'Music'
    ],
    footer: {
      content1: {
        title: 'Quick Links',
        items: [
          'Home', 'Corners of Brazil', 'culture', 'contact'
        ]
      },
      content2: {
        title: 'Social networks',
        items: [
          'Facebook', 'Instagram', 'Whatsapp'
        ]
      },
      content3: {
        title: 'Contact',
        items: [
          'Email: info@conocebrasil.com', 'Telephone: +52 143 257 689'
        ]
      }
    }
  },
  spanish: {
    navbar: [
      'Inicio', 'Rincones de Brasil', 'Cultura', 'Contacto'
    ],
    content1 :{
      title: "Sumérgete en la cultura vibrante de Brasil",
      subtitle: [
        "Bienvenido a nuestro portal dedicado a explorar la belleza y diversidad de Brasil. Desde las playas doradas de Río de Janeiro hasta la selva amazónica llena de vida, aquí descubrirás todo lo que este país fascinante tiene para ofrecer.",
        "Acompáñanos en un viaje por su música, gastronomía, tradiciones y paisajes que cautivan los sentidos.",
        "¡Empieza tu aventura y vive la magia de Brasil!"
      ]
    },
    content2: 'SIENTE LA CULTURA BRASILEÑA',
    content3: {
      title: 'Brasil, donde tu aventura cobra vida.',
      subtitle: [
        'Explora la magia de Brasil a través de su gastronomía, sus deslumbrantes desfiles y su música vibrante. Déjate envolver por los sabores, colores y ritmos que hacen de este país un destino único.',
        '¡Tu aventura comienza aquí!'
      ]
    },
    content4: [
      'Gastronomia', 'Desfiles', 'Música'
    ],
    footer: {
      content1: {
        title: 'Quick Links',
        items: [
          'Inicio', 'Rincones de Brasil', 'Cultura', 'Contacto'
        ]
      },
      content2: {
        title: 'Social networks',
        items: [
          'Facebook', 'Instagram', 'Whatsapp'
        ]
      },
      content3: {
        title: 'Contact',
        items: [
          'Email: info@conocebrasil.com', 'Teléfono: +52 143 257 689'
        ]
      }
    }
  }
}

const changeLenguage = ( lenguage ) => {
  

  let lenguageSelected;
  
  if ( lenguage === 'en' )
    lenguageSelected = lenguages.inlglish;
  else
    lenguageSelected = lenguages.spanish;

  document.getElementById('menu').innerHTML = `
    <li><a href="#top">${ lenguageSelected.navbar[0] }</a></li>
    <li class="dropdown">
      <a href="#servicios" class="dropdown-toggle">${ lenguageSelected.navbar[1] }</a>
      <div class="dropdown-content">
        <a href="#servicio1">Rio de Janeiro</a>
        <a href="#servicio2">Sao Paulo</a>
        <a href="#servicio3">Brasilia</a>
      </div>
    </li>
    <li><a href="#cultura">${ lenguageSelected.navbar[2] }</a></li>
    <li><a href="#contactanos">${ lenguageSelected.navbar[3] }</a></li>
    <li>
      <div class="idioma">
        <select name="idioma" id="idioma" onChange="changeLenguage(this.value)">
          <option value="es" ${ lenguage === 'es' ? 'selected' : '' }>Español</option>
          <option value="en" ${ lenguage === 'en' ? 'selected' : '' }>Inglés</option>
        </select>
      </div>
    </li>
  `;

  document.getElementById('banner-content').innerHTML = `
    <h1>${ lenguageSelected.content1.title }</h1>
    <p>${ lenguageSelected.content1.subtitle[0] }</p>
    <p>${ lenguageSelected.content1.subtitle[1] }</p>
    <p>${ lenguageSelected.content1.subtitle[2] }</p>
  `;

  document.getElementById('caja-texto').innerHTML = `
    <h3>${ lenguageSelected.content2 }</h3>
  `;

  document.getElementById('caja-texto-2').innerHTML = `
    <h2>${ lenguageSelected.content3.title }</h2>
    <p>${  lenguageSelected.content3.subtitle[0] }</p>
    <p>${  lenguageSelected.content3.subtitle[1] }</p>
  `;

  for (let i = 0; i < document.getElementsByClassName('btn').length; i++) {
    document.getElementsByClassName('btn')[i].innerHTML = lenguageSelected.content4[i];
  }

  document.getElementById('footer-links').innerHTML = `
    <h4>${  lenguageSelected.footer.content1.title }</h4>
    <ul>
      <li><a href="#top">${ lenguageSelected.footer.content1.items[0] }</a></li>
      <li><a href="#servicios">${ lenguageSelected.footer.content1.items[1] }</a></li>
      <li><a href="#cultura">${ lenguageSelected.footer.content1.items[2] }</a></li>
      <li><a href="#contactanos">${ lenguageSelected.footer.content1.items[3] }</a></li>
    </ul>
  `;

  document.getElementById('redes-sociales').innerHTML = `
    <h4>${  lenguageSelected.footer.content2.title }</h4>
    <ul>
      <li><a href="#"><img src="images/Facebook.png" alt="Facebook"></a>${  lenguageSelected.footer.content2.items[0] }</li>
      <li><a href="#"><img src="images/Instagram.png" alt="Facebook"></a>${ lenguageSelected.footer.content2.items[1] }</li>
      <li><a href="#"><img src="images/WhatsApp.png" alt="Facebook"></a>${  lenguageSelected.footer.content2.items[2] }</li>
    </ul>
  `;

  document.getElementById('contacto').innerHTML = `
    <h4>${  lenguageSelected.footer.content3.title }</h4>
    <ul>
      <li><a href="#"><img src="images/email.png" alt="Email"></a>${  lenguageSelected.footer.content3.items[0] }</li>
      <li><a href="#"><img src="images/telefono.png" alt="Teléfono"></a>${  lenguageSelected.footer.content3.items[1] }</li>
    </ul>
  `;

  traducirRincones(lenguage);
}

//-----------------------------------------------------
// Rincones de Brasil: traducción al inglés

const rinconesEn = {
  'r.title': 'CORNERS OF BRAZIL',
  'lugares': 'Featured tourist attractions',
  'cultura': 'Culture and traditions',

  'rio.title': 'Rio de Janeiro – The marvelous city',
  'rio.lead': 'Welcome to Rio de Janeiro, one of the most fascinating cities in Brazil.',
  'rio.p1': 'Rio de Janeiro is world-renowned for its beautiful beaches, mountains, natural landscapes and joyful atmosphere. It is a destination where nature and culture come together to offer unforgettable experiences.',
  'rio.p2': 'Among its most iconic places is Christ the Redeemer, one of the seven wonders of the modern world, located on top of Corcovado mountain. Sugarloaf Mountain also stands out, offering breathtaking views of the city.',
  'rio.l1': 'Christ the Redeemer',
  'rio.l1d': 'A symbol of Brazil and one of its best-known monuments.',
  'rio.l2': 'Copacabana Beach',
  'rio.l2d': 'Famous for its sand, its seaside promenade and its lively tourist atmosphere.',
  'rio.l3': 'Sugarloaf Mountain',
  'rio.l3d': 'A mountain that offers a beautiful panoramic view.',
  'rio.l4': 'Selarón Steps',
  'rio.l4d': 'A colorful work of art decorated with thousands of tiles.',
  'rio.c': 'Rio de Janeiro is famous for its Carnival celebrations, its samba schools and its traditional music. Joy, dance and color are part of the identity of this marvelous city.',
  'rio.lema': 'Rio de Janeiro: a place where nature, music and joy come together.',

  'sp.title': 'São Paulo – Modernity and culture',
  'sp.lead': 'Discover São Paulo, a city where modernity and culture meet.',
  'sp.p1': 'São Paulo is the most populous city in Brazil and one of the most important economic and cultural centers in Latin America. It is known for its huge buildings, cultural spaces, museums and gastronomic diversity.',
  'sp.p2': 'This city represents a mix of cultures and traditions from different parts of the world, making it a place full of contrasts and experiences.',
  'sp.l1': 'Paulista Avenue',
  'sp.l1d': 'One of the most important avenues in the city, surrounded by buildings, museums and cultural centers.',
  'sp.l2': 'Ibirapuera Park',
  'sp.l2d': 'A natural space ideal for enjoying outdoor activities.',
  'sp.l3': 'São Paulo Museum of Art (MASP)',
  'sp.l3d': 'Renowned for its architecture and its important art collections.',
  'sp.l4': 'Beco do Batman',
  'sp.l4d': 'Famous for its colorful murals and street art.',
  'sp.c': 'São Paulo has a great cultural richness. Its cuisine includes dishes from different regions of Brazil and the world. It is also known for its festivals, art exhibitions, theaters and musical expressions.',
  'sp.lema': 'São Paulo: a city where every corner tells a different story.',

  'br.title': 'Brasília – The modern capital',
  'br.lead': 'Get to know Brasília, a modern city that represents the history and development of Brazil.',
  'br.p1': 'Brasília is the capital of Brazil, inaugurated on April 21, 1960. It is known for its modern architecture, wide avenues and unique urban design.',
  'br.p2': 'The city was designed by urban planner Lúcio Costa and features important architectural works by the renowned architect Oscar Niemeyer. Its design is so special that it was declared a UNESCO World Heritage Site in 1987.',
  'br.l1': 'Metropolitan Cathedral of Brasília',
  'br.l1d': 'An impressive building with modern and original architecture.',
  'br.l2': 'National Congress',
  'br.l2d': 'One of the most representative buildings in the country.',
  'br.l3': 'Three Powers Plaza',
  'br.l3d': 'A space that houses important institutions of the Brazilian government.',
  'br.l4': 'Planalto Palace',
  'br.l4d': 'Seat of the Presidency of the Republic.',
  'br.c': 'Brasília brings together people from different regions of the country, so its culture reflects a great diversity of customs, cuisine, music and traditions. It is also an important center of cultural and artistic activities.',
  'br.lema': 'Brasília: a city where architecture and history build the future.',

  'cu.title': 'BRAZILIAN CULTURE',
  'cu.h': 'Flavors, colors and rhythms',
  'cu.p': 'Brazilian culture is the result of a blend of Indigenous, African and European traditions. This diversity is reflected in its food, its colorful celebrations and a music that is lived in every corner of the country.',
  'cu.g': 'Gastronomy',
  'cu.gp': 'Brazilian cuisine is as varied as its people. Feijoada, a black bean stew with pork, is considered the national dish. Other highlights include pão de queijo, moqueca, acarajé and brigadeiros, not to mention the famous caipirinha.',
  'cu.d': 'Parades',
  'cu.dp': "Brazil's Carnival is one of the biggest celebrations in the world. Samba schools parade with floats, dazzling costumes and choreographies that fill the streets with energy, especially at the Sambadrome in Rio de Janeiro.",
  'cu.m': 'Music',
  'cu.mp': 'Music is the soul of Brazil. Samba, bossa nova, forró and axé are some of its best-known rhythms. Artists such as Tom Jobim, João Gilberto and Caetano Veloso took the Brazilian sound all over the world.',

  'co.title': 'CONTACT US',
  'co.h': 'Ready for your adventure?',
  'co.p': 'Write to us if you have questions, suggestions or want more information about destinations in Brazil.',
  'co.nombre': 'Name',
  'co.email': 'Email',
  'co.mensaje': 'Message',
  'co.enviar': 'Send message',
  'co.e': 'Email',
  'co.t': 'Phone'
};

const mensajesForm = {
  es: { error: 'Por favor completa todos los campos con un correo válido.', ok: '¡Gracias, {nombre}! Recibimos tu mensaje y te responderemos pronto.' },
  en: { error: 'Please fill in all fields with a valid email.', ok: 'Thank you, {nombre}! We received your message and will reply soon.' }
};
let idiomaActual = 'es';

const rinconesEs = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
  rinconesEs[el.dataset.i18n] = el.textContent;
});

function traducirRincones(lenguage) {
  idiomaActual = lenguage === 'en' ? 'en' : 'es';
  document.getElementById('form-estado').textContent = '';
  const textos = lenguage === 'en' ? rinconesEn : rinconesEs;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const texto = textos[el.dataset.i18n];
    if (texto) el.textContent = texto;
  });
}

//-----------------------------------------------------
// Formulario de contacto (validación y mensaje de confirmación)

document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  const estado = document.getElementById('form-estado');
  const campos = [this.nombre, this.email, this.mensaje];
  let valido = true;

  campos.forEach(campo => {
    const ok = campo.value.trim() !== '' && campo.checkValidity();
    campo.classList.toggle('invalido', !ok);
    if (!ok) valido = false;
  });

  if (!valido) {
    estado.className = 'form-estado error';
    estado.textContent = mensajesForm[idiomaActual].error;
    return;
  }

  estado.className = 'form-estado ok';
  estado.textContent = mensajesForm[idiomaActual].ok.replace('{nombre}', this.nombre.value.trim());
  this.reset();
});

//-----------------------------------------------------
// Efecto de aparición al hacer scroll

(function () {
  const elementos = document.querySelectorAll('.reveal');

  // Pequeño retraso escalonado para las tarjetas de cada ciudad
  document.querySelectorAll('.lugares').forEach(grupo => {
    grupo.querySelectorAll('.lugar').forEach((tarjeta, i) => {
      tarjeta.style.transitionDelay = `${i * 0.15}s`;
      // Quitar el retraso una vez visible para que el hover responda al instante
      tarjeta.addEventListener('transitionend', () => {
        tarjeta.style.transitionDelay = '0s';
      }, { once: true });
    });
  });

  if (!('IntersectionObserver' in window)) {
    elementos.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach(el => observer.observe(el));
})();

//-----------------------------------------------------
//Mensaje Bienvenida

document.addEventListener("DOMContentLoaded", function () {
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    const textoBienvenida = document.getElementById("texto-bienvenida");
    const cerrarBtn = document.getElementById("cerrar-mensaje");  // ← este es el ID correcto en HTML

    if (!mensajeBienvenida || !textoBienvenida || !cerrarBtn) {
        console.error("No se encontraron los elementos del DOM necesarios.");
        return;
    }

    const lang = navigator.language || navigator.userLanguage;
    const hora = new Date().getHours();

    let saludo = "";

    if (hora < 12) {
        saludo = { es: "¡Buenos días!", en: "Good morning!", fr: "Bonjour !", de: "Guten Morgen!", it: "Buongiorno!" };
    } else if (hora < 18) {
        saludo = { es: "¡Buenas tardes!", en: "Good afternoon!", fr: "Bon après-midi !", de: "Guten Tag!", it: "Buon pomeriggio!" };
    } else {
        saludo = { es: "¡Buenas noches!", en: "Good evening!", fr: "Bonsoir !", de: "Guten Abend!", it: "Buona sera!" };
    }

    let idioma = "es";
    if (lang.startsWith("en")) idioma = "en";
    else if (lang.startsWith("fr")) idioma = "fr";
    else if (lang.startsWith("de")) idioma = "de";
    else if (lang.startsWith("it")) idioma = "it";

    textoBienvenida.textContent = `${saludo[idioma]} Bienvenid@ a tu aventura en Brasil.`;
    mensajeBienvenida.style.display = "block";

    // Cierra el mensaje al hacer clic en la X
    cerrarBtn.addEventListener("click", function () {
        mensajeBienvenida.style.display = "none";
    });
});
