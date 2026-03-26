// ── CURSOR ──
const curDot = document.getElementById("cur-dot");
const curRing = document.getElementById("cur-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  curDot.style.left = mx + "px";
  curDot.style.top = my + "px";
});

(function loop() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  curRing.style.left = rx + "px";
  curRing.style.top = ry + "px";
  requestAnimationFrame(loop);
})();

document.querySelectorAll("a,button,.sk,.pj,.kpi,.cc").forEach((el) => {
  el.addEventListener("mouseenter", () =>
    document.body.classList.add("cur-hovering"),
  );
  el.addEventListener("mouseleave", () =>
    document.body.classList.remove("cur-hovering"),
  );
});

// ── NAV SCROLL ──
const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("stuck", scrollY > 50),
);

// ── MOBILE NAV ──
document.getElementById("burger").onclick = () =>
  document.getElementById("mobNav").classList.add("open");
document.getElementById("mobClose").onclick = () =>
  document.getElementById("mobNav").classList.remove("open");
document
  .querySelectorAll(".mob-link")
  .forEach((l) =>
    l.addEventListener("click", () =>
      document.getElementById("mobNav").classList.remove("open"),
    ),
  );

// ── SKILLS ──
const skills = [
  { name: "HTML5", cat: "Markup", icon: "ph-file-html", lvl: 100 },
  { name: "CSS3", cat: "Style", icon: "ph-paint-brush", lvl: 92 },
  { name: "JavaScript", cat: "Langage", icon: "ph-file-js", lvl: 88 },
  { name: "TypeScript", cat: "Langage", icon: "ph-file-ts", lvl: 78 },
  { name: "Vue.js", cat: "Framework", icon: "ph-layout", lvl: 85 },
  { name: "ReactJS", cat: "Framework", icon: "ph-atom", lvl: 68 },
  { name: "TailwindCSS", cat: "Style", icon: "ph-wind", lvl: 90 },
  { name: "Bootstrap", cat: "Framework", icon: "ph-squares-four", lvl: 88 },
  { name: "Node.js", cat: "Backend", icon: "ph-tree-structure", lvl: 55 },
  { name: "PHP", cat: "Backend", icon: "ph-code", lvl: 72 },
  { name: "Java", cat: "Langage", icon: "ph-coffee", lvl: 65 },
  { name: "C / C++", cat: "Langage", icon: "ph-terminal-window", lvl: 60 },
  { name: "MySQL", cat: "BDD", icon: "ph-database", lvl: 78 },
  { name: "PostgreSQL", cat: "BDD", icon: "ph-database", lvl: 72 },
  { name: "MongoDB", cat: "BDD", icon: "ph-cylinder", lvl: 70 },
  { name: "Git/GitHub", cat: "Outils", icon: "ph-git-branch", lvl: 88 },
  { name: "GitLab", cat: "Outils", icon: "ph-gitlab-logo", lvl: 80 },
];
const sg = document.getElementById("skGrid");
skills.forEach((s, i) => {
  sg.innerHTML += `<div class="sk rv" style="transition-delay:${i * 0.03}s">
    <div class="sk-icon"><i class="ph ${s.icon}"></i></div>
    <div class="sk-name">${s.name}</div>
    <div class="sk-cat">${s.cat}</div>
    <div class="sk-lvl"><div class="sk-lvl-fill" data-l="${s.lvl}"></div></div>
  </div>`;
});

// ── PROJECTS ──
const projs = [
  {
    n: "01",
    title: "CamerTalents (en cours)",
    featured: true,
    desc: "Application web dédiée à la valorisation et la mise en visibilité des talents camerounais dans divers secteurs d'activité. Une plateforme de découverte et de mise en réseau des compétences locales.",
    tags: ["Vue.js", "TailwindCSS", "Node.js", "MongoDB", "REST API"],
    gh: "https://github.com/Denours/CamerTalents.git",
  },
  {
    n: "02",
    title: "LeCoride",
    desc: "Application frontend de réservation de trajets au Cameroun. Interface moderne et intuitive conçue pour faciliter la mise en relation entre conducteurs et passagers sur les routes camerounaises.",
    tags: ["HTML5", "CSS3", "Angular", "TailwindCSS"],
    gh: "https://github.com/Denours/lecoride.git",
  },
  {
    n: "03",
    title: "LUMINA Travel",
    desc: "Landing page responsive d'un site de réservation de voyages touristiques. Design immersif avec animations fluides pour inspirer l'aventure et la découverte.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    gh: "https://github.com/Denours/Responsive-LUMINA-Travel.git",
  },
];
const pl = document.getElementById("projList");
projs.forEach((p) => {
  if (p.featured) {
    pl.innerHTML += `<div class="pj featured rv">
      <div class="pj-num">${p.n}</div>
      <div class="pj-head">
        <div>
          <div class="pj-title">${p.title}</div>
          <div class="pj-tags">${p.tags.map((t) => `<span class="pj-tag">${t}</span>`).join("")}</div>
        </div>
        <div class="pj-actions">
          <a href="${p.gh}" target="_blank" class="pj-btn" title="GitHub"><i class="ph ph-github-logo"></i></a>
          <a href="${p.gh}" target="_blank" class="pj-btn" title="Voir"><i class="ph ph-arrow-square-out"></i></a>
        </div>
      </div>
      <div class="pj-desc" style="margin-top:1rem">${p.desc}</div>
    </div>`;
  } else {
    pl.innerHTML += `<div class="pj rv">
      <div class="pj-num">${p.n}</div>
      <div class="pj-body">
        <div class="pj-title">${p.title}</div>
        <div class="pj-desc">${p.desc}</div>
        <div class="pj-tags">${p.tags.map((t) => `<span class="pj-tag">${t}</span>`).join("")}</div>
      </div>
      <div class="pj-actions">
        <a href="${p.gh}" target="_blank" class="pj-btn" title="GitHub"><i class="ph ph-github-logo"></i></a>
        <a href="${p.gh}" target="_blank" class="pj-btn" title="Voir"><i class="ph ph-arrow-square-out"></i></a>
      </div>
    </div>`;
  }
});

// ── SCROLL REVEAL + BARS + COUNTERS ──
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("vis");
      e.target.querySelectorAll(".sk-lvl-fill[data-l]").forEach((b) => {
        b.style.width = b.dataset.l + "%";
      });
      e.target.querySelectorAll("[data-count]").forEach((el) => {
        let c = 0,
          t = +el.dataset.count;
        const inc = t / 50;
        const tm = setInterval(() => {
          c += inc;
          if (c >= t) {
            el.textContent = t + (t === 100 ? "%" : "+");
            clearInterval(tm);
          } else el.textContent = Math.floor(c);
        }, 18);
      });
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

// ── CONTACT FORM — Formspree (envoi réel) ──
async function sendForm(btn) {
  // Récupération des valeurs
  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("em").value.trim();
  const messageVal = document.getElementById("speech-proj").value.trim();

  // ── Validation basique ──
  if (!nameVal || !emailVal || !messageVal) {
    showToast("Veuillez remplir tous les champs.", "error");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    showToast("Adresse email invalide.", "error");
    return;
  }

  // ── État : chargement ──
  const orig = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<i class="ph ph-circle-notch ph-spin"></i><span>Envoi en cours...</span>`;
  btn.style.opacity = "0.75";

  try {
    // ── Envoi vers Formspree ──
    // IMPORTANT : remplace "YOUR_FORM_ID" par ton ID Formspree
    // (voir instructions ci-dessous dans le README commenté)
    const response = await fetch("https://formspree.io/f/mvzvodav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameVal,
        email: emailVal,
        message: messageVal,
        _subject: `[Portfolio] Nouveau message de ${nameVal}`,
      }),
    });

    if (response.ok) {
      // ── Succès ──
      btn.innerHTML = `<i class="ph ph-check-circle"></i><span>Message envoyé !</span>`;
      btn.style.opacity = "1";
      btn.style.background = "linear-gradient(135deg,#00c896,#007a5c)";
      showToast(
        "✅ Message bien reçu ! Denis vous répondra très vite.",
        "success",
      );

      // Réinitialiser les champs
      document.getElementById("name").value = "";
      document.getElementById("em").value = "";
      document.getElementById("speech-proj").value = "";

      // Remettre le bouton à son état initial après 4s
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = "";
        btn.disabled = false;
      }, 4000);
    } else {
      const data = await response.json();
      throw new Error(data?.errors?.[0]?.message || "Erreur serveur");
    }
  } catch (err) {
    // ── Erreur ──
    btn.innerHTML = orig;
    btn.style.opacity = "1";
    btn.disabled = false;
    showToast(
      "❌ Échec de l'envoi. Réessayez ou contactez via WhatsApp.",
      "error",
    );
    console.error("Formspree error:", err);
  }
}

// ── Toast de notification ──
function showToast(message, type = "success") {
  // Supprimer un toast existant
  const existing = document.getElementById("toast-notif");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notif";
  toast.textContent = message;

  const isSuccess = type === "success";
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: "99999",
    padding: "1rem 1.6rem",
    background: isSuccess
      ? "linear-gradient(135deg,#00c896,#007a5c)"
      : "linear-gradient(135deg,#e05252,#a03030)",
    color: "#fff",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.88rem",
    letterSpacing: "0.03em",
    borderLeft: isSuccess ? "3px solid #00e5c8" : "3px solid #ff6b6b",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    transform: "translateY(20px)",
    opacity: "0",
    transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
    maxWidth: "360px",
    lineHeight: "1.5",
  });

  document.body.appendChild(toast);

  // Apparition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.transform = "translateY(0)";
      toast.style.opacity = "1";
    });
  });

  // Disparition après 5s
  setTimeout(() => {
    toast.style.transform = "translateY(20px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

// ── SMOOTH MOBILE SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth" });
    }
  });
});
