// ===== EDIT YOUR CONTENT HERE =====
// video: "videos/file.mp4" (local) OR a YouTube link like "https://youtu.be/xxxx". Leave "" if not ready.
// link: your GitHub repo URL (optional)
const projects = {
  fintech: [
    { title: "Integrated Digital Banking Platform", video: "", link: "",
      points: ["Cloud-based banking system with secure onboarding, authentication, RBAC and SSO.", "Fixed Deposit module and simulator with accurate maturity calculations.", "Product, pricing and reporting APIs with encryption and validation."],
      tags: ["Java","Spring Boot","React/Vite","MySQL","OAuth/OIDC","Docker","Kubernetes"] },
    { title: "Hierarchical Account Management: Automated Rate Propagation", video: "", link: "",
      points: ["Hierarchical rate-propagation system with automated updates across branches.", "OOP design that removes manual inconsistencies in rate management."],
      tags: ["Java","JavaScript","OOP"] },
    { title: "Financial Literacy App for Teens", video: "", link: "",
      points: ["Gamified financial education with quizzes and budget simulators.", "User-centric UX that simplifies core financial concepts."],
      tags: ["Figma","UI/UX"] },
    { title: "Financial Dashboard Design", video: "", link: "",
      points: ["Interactive dashboard for revenue and expense analysis.", "Focus on clarity and decision-focused visualization."],
      tags: ["Figma","Data Visualization"] }
  ],
  aiml: [
    { title: "Deep Learning Kidney Tumor Identification", video: "", link: "",
      points: ["VGG16 transfer learning on CT scans: 97.56% accuracy, 0.9968 AUC-ROC on 7,360 images.", "CLAHE preprocessing, GradCAM heatmaps, Otsu tumor extraction.", "Flask REST API, ~142 ms/image, Dockerized with CI/CD."],
      tags: ["Python","TensorFlow/Keras","OpenCV","Flask","MLflow","Docker"] },
    { title: "Face-Based Smoker Detection", video: "", link: "",
      points: ["Real-time computer vision system classifying smokers vs non-smokers.", "Custom ML models; uses in public surveillance and insurance risk assessment."],
      tags: ["Python","OpenCV","Machine Learning"] },
    { title: "Pothole Detection and Driver Alert System", video: "", link: "",
      points: ["Real-time pothole detection from roadside cameras using CV models.", "OCR-based vehicle recognition with distance-triggered mobile alerts."],
      tags: ["React.js","Node.js","MongoDB","Computer Vision","OCR"] }
  ],
  other: [
    { title: "Osteo-Nova: Smart Surgical Drill", video: "", link: "",
      points: ["EIS sensing to tell cortical bone, cancellous bone and nerve tissue apart in real time.", "Automatic motor cutoff in under 100 ms on nerve detection, with audio and vibration alerts.", "ML feature extraction, adaptive thresholding and debounce logic."],
      tags: ["Embedded Systems","Signal Processing","ML"] },
    { title: "Live Attendance Network Application", video: "", link: "",
      points: ["Real-time attendance with secure authentication.", "Network-level validation and admin dashboards to reduce proxy attendance."],
      tags: ["Python","Java","Networking"] },
    { title: "Emergency Security Alert App", video: "", link: "",
      points: ["One-click alert that notifies trusted contacts in real time.", "Secure frontend-backend communication."],
      tags: ["Python","Java","REST APIs"] },
    { title: "Disease Transmission Network Analysis", video: "", link: "",
      points: ["Graph model to find high-risk, high-centrality nodes (transferable to fraud analysis)."],
      tags: ["TigerGraph","Graph Analytics"] }
  ]
};

const skills = {
  "Languages & Backend": ["Python","Java","C","JavaScript","Spring Boot","REST APIs","MySQL","TigerGraph"],
  "Tools & Platforms": ["Git","Postman","VS Code","Docker","Kubernetes","Oracle","Eclipse","Microsoft 365"],
  "Domain": ["Core Banking Systems","Digital Payments","Bancassurance","OAuth/OIDC","RBAC/SSO","Financial Data Analysis","Cybersecurity"],
  "Design": ["Figma","Canva"]
};

const certs = {
  "Microsoft": ["Cybersecurity Threat Vectors & Mitigation","Identity & Access Solutions (Azure AD)","Microsoft Defender & Cloud Security","Networking & Cloud Computing","Cybersecurity Management & Compliance"],
  "Cybersecurity": ["NSD Certified Penetration Tester","Cyber Crime Intervention Officer (ISAC & AICTE NEAT 2.0)"],
  "TCS iON": ["Career Edge: Young Professional"],
  "Data Science": ["Finlatics Data Science with Python (AICTE NEAT 2.0)"]
};
// ===== END OF CONTENT =====

function mediaHTML(v){
  if(!v) return `<div class="media">Video demo coming soon</div>`;
  const yt = v.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  if(yt) return `<div class="media"><iframe src="https://www.youtube.com/embed/${yt[1]}" allowfullscreen loading="lazy" title="Demo"></iframe></div>`;
  return `<div class="media"><video controls preload="metadata" src="${v}"></video></div>`;
}
function card(p){
  return `<article class="card">${mediaHTML(p.video)}<h3>${p.title}</h3>
  <ul>${p.points.map(x=>`<li>${x}</li>`).join("")}</ul>
  <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
  ${p.link?`<a class="btn" href="${p.link}" target="_blank" rel="noopener">View code</a>`:""}</article>`;
}
for(const k in projects) document.getElementById(k+"-grid").innerHTML = projects[k].map(card).join("");

const groupHTML = o => Object.entries(o).map(([g,items])=>
  `<div class="group"><h3>${g}</h3><div class="chips">${items.map(i=>`<span class="chip">${i}</span>`).join("")}</div></div>`).join("");
document.getElementById("skills-box").innerHTML = groupHTML(skills);
document.getElementById("certs-box").innerHTML = groupHTML(certs);

// ===== AVATAR: head turns + eyes follow the cursor (desktop only) =====
// EASIEST WAY TO ALIGN: press the D key on the page. The eyes get a red outline and become draggable.
// Drag each one onto your painted eyes, use + / - to resize both, then copy the numbers shown
// at the bottom-left into the EYES list below.
const EYES = [
  { x: 40.5, y: 35.0, w: 11, h: 3.6 },   // left eye
  { x: 65.6, y: 36.3, w: 11, h: 3.6 }    // right eye
];
const av = document.getElementById("avatar");
const readout = document.createElement("pre");
readout.style.cssText = "position:fixed;left:10px;bottom:10px;z-index:99;background:#fff;color:#4a1f3d;padding:8px 12px;border-radius:10px;font-size:13px;display:none";
document.body.appendChild(readout);

const place = (el, e) => { el.style.cssText = `left:${e.x}%;top:${e.y}%;width:${e.w}%;height:${e.h}%`; };
const showNumbers = () => {
  readout.textContent = "const EYES = [\n" + EYES.map(e =>
    `  { x: ${e.x.toFixed(1)}, y: ${e.y.toFixed(1)}, w: ${e.w.toFixed(1)}, h: ${e.h.toFixed(1)} }`).join(",\n") + "\n];";
};
const eyeEls = EYES.map(e => {
  const el = document.createElement("div");
  el.className = "eye";
  place(el, e);
  el.innerHTML = '<div class="iris"></div>';
  av.appendChild(el);
  el.addEventListener("pointerdown", ev => {
    if (!av.classList.contains("debug")) return;
    ev.preventDefault();
    const box = av.getBoundingClientRect();
    const move = m => {
      e.x = Math.min(100, Math.max(0, (m.clientX - box.left) / box.width * 100));
      e.y = Math.min(100, Math.max(0, (m.clientY - box.top) / box.height * 100));
      place(el, e); showNumbers();
    };
    const up = () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); };
    addEventListener("pointermove", move); addEventListener("pointerup", up);
  });
  return el;
});

addEventListener("keydown", k => {
  const key = k.key.toLowerCase();
  if (key === "d") {
    const on = av.classList.toggle("debug");
    readout.style.display = on ? "block" : "none";
    av.style.transform = "none";
    showNumbers();
  }
  if (av.classList.contains("debug") && (key === "+" || key === "=" || key === "-")) {
    const f = key === "-" ? 0.95 : 1.05;
    EYES.forEach((e, i) => { e.w *= f; e.h *= f; place(eyeEls[i], e); });
    showNumbers();
  }
});

if (matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addEventListener("mousemove", e => {
    if (av.classList.contains("debug")) return;
    const x = (e.clientX / innerWidth - .5) * 2, y = (e.clientY / innerHeight - .5) * 2;
    av.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 8}deg) rotateZ(${x * 2}deg) translate(${x * 8}px, ${y * 6}px)`;
    eyeEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 300);
      el.firstChild.style.transform = `translate(calc(-50% + ${dx / d * k * r.width * .22}px), calc(-50% + ${dy / d * k * r.height * .2}px))`;
    });
  });
}
