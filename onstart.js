
// ------ Favicon Selection ------
function setFavicon() {
  if(def.darkMode) def.favicon.href = 'faviconNRB.ico';
  else def.favicon.href = 'faviconNRB.png';
}
setFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

// ---------- Navigation ----------
const navList = [
  {key: "panel-home", url:"/homepanel.html"},
  {key: "panel-math", url:"/mathpanel.html"},
  {key: "panel-physics", url:"/physicspanel.html"},
  {key: "panel-chemistry", url:"/chemistrypanel.html"},
  {key: "panel-games", url:"/gamespanel.html"},
  {key: "panel-utilities", url:"/utilitiespanel.html"},
  {key: "panel-info", url:"/infopanel.html"},
];
function switchTopPanel(e) {
  const targetPanelId = e.currentTarget.getAttribute("data-target");
  const nav = navList.find(n => n.key === targetPanelId);
  if(nav) {
    window.location.href = nav.url;
    return;
  }
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.menu-btn[data-target="${targetPanelId}"]`);
  if(btn) btn.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.menu-btn').forEach(btn => btn.addEventListener('click', switchTopPanel));
  document.querySelectorAll('.front-btn').forEach(btn => btn.addEventListener('click', switchTopPanel));
  document.querySelectorAll('.top-link').forEach(btn => btn.addEventListener('click', switchTopPanel));
  const sidebars = document.querySelectorAll(".sidebar");
  const toggles = document.querySelectorAll(".sidebar-toggle-responsive");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => sidebars.forEach(sb => sb.classList.toggle("open")));
  });
  document.addEventListener("click", (e) => {
    sidebars.forEach(sb => {
      const clickedToggle = [...toggles].some(t => t === e.target);
      if(sb.classList.contains("open") && !sb.contains(e.target) && !clickedToggle) {
        sb.classList.remove("open");
      }
    });
  });
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("toggleSidebar");
  if(sidebar && toggle) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("collapsed"));
  }
});

// ---------- INTRO SCREEN ----------
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  if(!intro) return;
  setTimeout(() => intro.classList.add('fade-out'), 4000);
  setTimeout(() => {
    intro.remove();
    document.body.style.overflow = 'hidden';
    window.location.href = "homepanel.html";
  }, 5000);
});
