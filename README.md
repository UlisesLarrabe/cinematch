<div align="center">
  <img src="public/cinematch-logo.webp" alt="CineMatch Logo" width="100%" />

  <br />
  <br />

  <h1>🍿 CineMatch</h1>

  <p>
    <strong>El "Tinder de las películas". Haz match y decide qué ver esta noche sin pelear.</strong>
  </p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" /></a>
    <a href="https://www.themoviedb.org/"><img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB" /></a>
  </p>
  
  <p>
    <em>Proyecto creado para la <b>Hackathon de Midudev</b> 🚀</em>
  </p>

  <br />

  <a href="https://cinematch.fun">
    <img src="https://img.shields.io/badge/🚀_Probar_App_en_Vivo-FF4500?style=for-the-badge" alt="Probar App" />
  </a>
</div>

<hr />

## 🎯 El Problema

Elegir una película con tu pareja o amigos suele terminar en un scroll infinito de 40 minutos por Netflix, para terminar viendo _The Office_ por quinta vez o yéndose a dormir sin ver nada. Hay demasiadas opciones, catálogos distintos y poner a todos de acuerdo es un drama.

## 💡 La Solución

**CineMatch** elimina la fricción de elegir qué ver convirtiéndolo en un juego colaborativo:

1. Creas una sala compartida en 2 clics.
2. Filtras por las plataformas que realmente pagan (Netflix, Prime, Disney+), el país y el género.
3. Compartes el link.
4. Deslizan películas estilo Tinder (♥️ o ❌).
5. **¡MATCH!** Cuando ambos le dan like a la misma película, la app les avisa en tiempo real.

---

## ✨ Experiencia de Usuario (UX/UI)

- **⚡ Cero Fricción:** No hay formularios de registro, ni logins pesados. Entras, creas y compartes.
- **📱 Mobile First:** Diseñado para sentirse como una app nativa en tu celular, con animaciones fluidas y gestos de _swipe_ intuitivos.
- **🌍 Catálogo Real:** Alimentado por **TMDB**, muestra exactamente lo que está disponible en tu región hoy mismo.
- **🔗 Compartir Nativo:** Integración con la _Web Share API_ para invitar por WhatsApp con un solo toque.

---

## 🛠️ Stack Tecnológico

El proyecto está construido priorizando la velocidad, el tiempo real y el diseño:

- **Frontend:** Next.js (App Router), React, Tailwind CSS.
- **Base de Datos & Realtime:** Supabase (PostgreSQL, Realtime WebSockets para la sincronización de los Matches).
- **Consumo de Datos:** The Movie Database (TMDB) API.
- **Optimización:** Uso estratégico de caché (`sessionStorage`) para minimizar peticiones a la API y acelerar la carga de la interfaz.

---

## 📸 Demo en Acción

<video src="public/cinematch-demo.mov" autoplay muted loop width="100%" alt="Demo de CineMatch">
</video>

---

<div align="center">
  <i>Diseñado y desarrollado para resolver peleas de fin de semana. 🍿</i>
</div>
