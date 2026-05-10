<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AeroAxis — Engineering the Future of Retail Mobility</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,300&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
–black: #070809;
–off-white: #eef1f5;
–cream: #dde2ea;
–blue: #2563eb;
–blue-bright: #3b82f6;
–blue-glow: rgba(37,99,235,0.18);
–steel: #1a1f2e;
–steel2: #232b3e;
–mid: #64748b;
–border: rgba(238,241,245,0.08);
–border2: rgba(37,99,235,0.22);
}

html { scroll-behavior: smooth; }
body {
background: var(–black);
color: var(–off-white);
font-family: ‘DM Sans’, sans-serif;
overflow-x: hidden;
cursor: none;
}

/* Custom cursor */
.cursor { position:fixed; width:10px; height:10px; background:var(–blue-bright); border-radius:50%; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); transition:width .2s,height .2s; }
.cursor-ring { position:fixed; width:38px; height:38px; border:1.5px solid var(–blue-bright); border-radius:50%; pointer-events:none; z-index:9998; transform:translate(-50%,-50%); transition:all .1s ease; opacity:.5; }

/* NAV */
nav {
position:fixed; top:0; left:0; right:0; z-index:100;
padding:26px 64px;
display:flex; align-items:center; justify-content:space-between;
background:linear-gradient(to bottom,rgba(7,8,9,0.97),transparent);
border-bottom:1px solid transparent;
}
.nav-logo { font-family:‘Bebas Neue’,sans-serif; font-size:26px; letter-spacing:4px; color:var(–off-white); text-decoration:none; display:flex; align-items:center; gap:10px; }
.nav-logo-mark { width:28px; height:28px; background:var(–blue); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; box-shadow:0 0 16px var(–blue); }
.nav-logo span { color:var(–blue-bright); }
.nav-links { display:flex; gap:40px; list-style:none; }
.nav-links a { color:rgba(238,241,245,0.5); text-decoration:none; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; transition:color .2s; }
.nav-links a:hover { color:var(–off-white); }
.nav-cta { background:var(–blue) !important; color:var(–off-white) !important; padding:10px 24px; border-radius:3px; font-weight:600 !important; letter-spacing:1px !important; transition:background .2s !important; }
.nav-cta:hover { background:#1d4ed8 !important; }

/* ───── HERO ───── */
.hero {
min-height:100vh;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
padding:130px 64px 80px;
position:relative;
overflow:hidden;
gap:40px;
}
.hero-bg {
position:absolute; inset:0;
background:
radial-gradient(ellipse 55% 70% at 75% 50%, rgba(37,99,235,0.07) 0%, transparent 65%),
radial-gradient(ellipse 30% 30% at 20% 80%, rgba(59,130,246,0.04) 0%, transparent 60%);
}
/* Subtle grid lines */
.hero-grid {
position:absolute; inset:0;
background-image:
linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
background-size:60px 60px;
mask-image:radial-gradient(ellipse 80% 60% at 70% 50%, black, transparent);
}

.hero-left { position:relative; z-index:2; }
.hero-eyebrow {
display:inline-flex; align-items:center; gap:10px;
background:rgba(37,99,235,0.1);
border:1px solid var(–border2);
padding:8px 18px; border-radius:100px;
font-size:11px; letter-spacing:2.5px; text-transform:uppercase;
color:var(–blue-bright); margin-bottom:32px;
font-family:‘Space Mono’,monospace;
}
.hero-eyebrow::before { content:’’; width:6px; height:6px; background:var(–blue-bright); border-radius:50%; animation:pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

.hero h1 {
font-family:‘Bebas Neue’,sans-serif;
font-size:clamp(70px,7.5vw,126px);
line-height:.9;
letter-spacing:-1px;
margin-bottom:28px;
}
.hero h1 .accent { color:var(–blue-bright); }
.hero h1 .outline { -webkit-text-stroke:1px rgba(238,241,245,0.25); color:transparent; }

.hero-desc {
font-size:17px; line-height:1.75; color:rgba(238,241,245,0.5);
max-width:440px; margin-bottom:20px; font-weight:300;
}
.hero-load-badge {
display:inline-flex; align-items:center; gap:12px;
background:rgba(37,99,235,0.08);
border:1px solid var(–border2);
border-radius:8px;
padding:14px 22px;
margin-bottom:44px;
}
.badge-num {
font-family:‘Bebas Neue’,sans-serif;
font-size:42px; line-height:1;
color:var(–blue-bright);
}
.badge-text { font-size:13px; color:rgba(238,241,245,0.6); line-height:1.5; }
.badge-text strong { color:var(–off-white); display:block; font-size:14px; }

.hero-actions { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
.btn-primary {
background:var(–blue); color:var(–off-white);
padding:17px 38px; border:none; border-radius:3px;
font-family:‘DM Sans’,sans-serif; font-size:14px; font-weight:600;
letter-spacing:.5px; text-decoration:none;
display:inline-flex; align-items:center; gap:10px;
cursor:none; position:relative; overflow:hidden;
transition:transform .2s, background .2s;
box-shadow:0 0 30px rgba(37,99,235,0.3);
}
.btn-primary:hover { transform:translateY(-2px); background:#1d4ed8; }
.btn-outline-hero {
border:1px solid rgba(238,241,245,0.15);
color:rgba(238,241,245,0.55);
padding:16px 32px; border-radius:3px;
text-decoration:none; font-size:14px; cursor:none;
transition:all .2s; letter-spacing:.5px;
}
.btn-outline-hero:hover { border-color:rgba(238,241,245,0.4); color:var(–off-white); }

/* ─── PRODUCT PHOTO SHOWCASE ─── */
.hero-right {
position:relative; z-index:2;
display:flex; align-items:center; justify-content:center;
}
.product-stage {
position:relative;
width:500px; height:500px;
}
.product-glow-ring {
position:absolute; inset:-30px;
border-radius:50%;
background:radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
animation:breathe 4s ease-in-out infinite;
}
@keyframes breathe { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
.product-ring-outer {
position:absolute; inset:0;
border-radius:50%;
border:1px solid rgba(37,99,235,0.2);
animation:spin 25s linear infinite;
}
.product-ring-inner {
position:absolute; inset:40px;
border-radius:50%;
border:1px dashed rgba(37,99,235,0.1);
animation:spin 14s linear infinite reverse;
}
@keyframes spin { to{transform:rotate(360deg)} }
/* Tick marks */
.product-tick {
position:absolute; top:50%; left:50%;
width:49%; height:1px;
background:linear-gradient(to right, transparent 80%, rgba(59,130,246,0.25));
transform-origin:0 50%;
}
.product-photo-wrap {
position:absolute; inset:50px;
border-radius:50%;
overflow:hidden;
background:radial-gradient(circle, #1a2035 0%, #0d1117 100%);
border:1.5px solid rgba(37,99,235,0.25);
display:flex; align-items:center; justify-content:center;
box-shadow:0 0 80px rgba(37,99,235,0.15), inset 0 0 60px rgba(0,0,0,0.6);
}
.product-photo-wrap img {
width:115%;
height:115%;
object-fit:cover;
object-position:center;
filter:brightness(1.05) contrast(1.08);
mix-blend-mode:lighten;
}
/* Floating spec cards */
.spec-float {
position:absolute;
background:rgba(13,17,23,0.96);
border:1px solid var(–border2);
border-radius:10px;
padding:14px 20px;
backdrop-filter:blur(20px);
white-space:nowrap;
box-shadow:0 8px 32px rgba(0,0,0,0.4);
}
.spec-float.f1 { top:10px; left:-40px; animation:f1 4s ease-in-out infinite; }
.spec-float.f2 { bottom:30px; right:-30px; animation:f2 5s ease-in-out infinite; }
.spec-float.f3 { top:50%; left:-70px; transform:translateY(-50%); animation:f3 6s ease-in-out infinite; }
@keyframes f1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes f2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
@keyframes f3 { 0%,100%{transform:translateY(-50%) translateX(0)} 50%{transform:translateY(-50%) translateX(-8px)} }
.spec-val { font-family:‘Bebas Neue’,sans-serif; font-size:28px; color:var(–blue-bright); line-height:1; }
.spec-lbl { font-family:‘Space Mono’,monospace; font-size:10px; color:rgba(238,241,245,0.35); letter-spacing:1.5px; text-transform:uppercase; margin-top:2px; }

/* ─── STATS BAR ─── */
.stats-bar {
border-top:1px solid var(–border);
border-bottom:1px solid var(–border);
padding:44px 64px;
display:grid; grid-template-columns:repeat(5,1fr); gap:0;
}
.stat-item { text-align:center; position:relative; }
.stat-item:not(:last-child)::after {
content:’’; position:absolute; right:0; top:15%; bottom:15%; width:1px; background:var(–border);
}
.stat-number { font-family:‘Bebas Neue’,sans-serif; font-size:52px; color:var(–off-white); line-height:1; }
.stat-number em { color:var(–blue-bright); font-style:normal; }
.stat-desc { font-size:11px; color:var(–mid); letter-spacing:1.5px; text-transform:uppercase; margin-top:6px; font-family:‘Space Mono’,monospace; }

/* ─── SECTION BASE ─── */
.section { padding:110px 64px; }
.section-tag { font-family:‘Space Mono’,monospace; font-size:11px; letter-spacing:3px; text-transform:uppercase; color:var(–blue-bright); margin-bottom:18px; }
.section-title { font-family:‘Bebas Neue’,sans-serif; font-size:clamp(50px,5vw,80px); line-height:.93; }
.section-title em { color:var(–blue-bright); font-style:normal; }

/* ─── PRODUCT GALLERY SECTION ─── */
.gallery-section { background:var(–steel); position:relative; overflow:hidden; }
.gallery-section::before { content:’’; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(to right,transparent,var(–blue),transparent); }
.gallery-header { margin-bottom:60px; }
.gallery-grid {
display:grid;
grid-template-columns:1.4fr 1fr 1fr;
grid-template-rows:320px 200px;
gap:16px;
}
.gallery-cell {
border-radius:10px; overflow:hidden;
background:#0d1117;
border:1px solid var(–border);
position:relative;
transition:border-color .3s;
}
.gallery-cell:hover { border-color:var(–border2); }
.gallery-cell.main { grid-row:1/3; }
.gallery-cell img {
width:100%; height:100%;
object-fit:cover; object-position:center;
filter:brightness(0.95);
transition:transform .5s ease, filter .3s;
}
.gallery-cell:hover img { transform:scale(1.03); filter:brightness(1.05); }
.gallery-cell .cell-label {
position:absolute; bottom:16px; left:16px;
font-family:‘Space Mono’,monospace; font-size:10px;
letter-spacing:2px; text-transform:uppercase;
color:rgba(238,241,245,0.5);
background:rgba(7,8,9,0.7);
padding:6px 12px; border-radius:100px;
backdrop-filter:blur(8px);
}

/* CAD placeholder panels */
.cad-panel {
background:linear-gradient(135deg, #0f1724 0%, #0a0d14 100%);
display:flex; align-items:center; justify-content:center; flex-direction:column; gap:12px;
}
.cad-icon { font-size:48px; opacity:0.4; }
.cad-label { font-family:‘Space Mono’,monospace; font-size:10px; letter-spacing:2px; color:rgba(59,130,246,0.4); text-transform:uppercase; }

/* ─── TECH SPECS ─── */
.specs-section { background:var(–black); }
.specs-layout { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; margin-top:60px; }
.specs-left {}
.spec-intro { font-size:16px; color:rgba(238,241,245,0.5); line-height:1.8; font-weight:300; margin-top:20px; max-width:420px; }

/* Load test callout */
.load-callout {
background:linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.04));
border:1px solid var(–border2);
border-radius:12px;
padding:36px;
margin-top:40px;
position:relative;
overflow:hidden;
}
.load-callout::before {
content:’’;
position:absolute; top:0; left:0;
width:3px; height:100%;
background:var(–blue);
}
.load-callout-title { font-family:‘Bebas Neue’,sans-serif; font-size:14px; letter-spacing:2px; color:var(–blue-bright); margin-bottom:20px; }
.load-row { display:flex; align-items:center; justify-content:space-between; padding:12px 0; border-bottom:1px solid rgba(238,241,245,0.06); }
.load-row:last-child { border-bottom:none; }
.load-row-label { font-size:13px; color:var(–mid); }
.load-row-value { font-family:‘Bebas Neue’,sans-serif; font-size:22px; color:var(–off-white); }
.load-row-value span { color:var(–blue-bright); }

/* Spec cards */
.spec-cards { display:flex; flex-direction:column; gap:16px; }
.spec-card {
background:rgba(255,255,255,0.02);
border:1px solid var(–border);
border-radius:10px;
padding:28px 32px;
display:flex; align-items:flex-start; gap:20px;
transition:border-color .3s, background .3s;
}
.spec-card:hover { border-color:var(–border2); background:rgba(37,99,235,0.03); }
.spec-card-icon { font-size:28px; min-width:40px; }
.spec-card h3 { font-size:15px; font-weight:600; color:var(–off-white); margin-bottom:6px; }
.spec-card p { font-size:13px; color:var(–mid); line-height:1.65; }
.spec-chip { display:inline-block; font-family:‘Space Mono’,monospace; font-size:10px; background:rgba(37,99,235,0.1); border:1px solid var(–border2); color:var(–blue-bright); padding:3px 10px; border-radius:100px; margin-top:8px; letter-spacing:1px; }

/* Safety factor bar */
.safety-bar-wrap { margin-top:32px; }
.safety-bar-label { display:flex; justify-content:space-between; margin-bottom:10px; font-size:12px; color:var(–mid); font-family:‘Space Mono’,monospace; }
.safety-bar-track { height:8px; background:rgba(255,255,255,0.05); border-radius:100px; overflow:hidden; }
.safety-bar-fill { height:100%; border-radius:100px; background:linear-gradient(to right, var(–blue), var(–blue-bright)); width:0; transition:width 1.5s cubic-bezier(.4,0,.2,1); }
.safety-bar-fill.animated { width:83%; }

/* ─── AERO TECH (Debris Deflector) ─── */
.aero-section { background:var(–steel); }
.aero-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; margin-top:60px; }
.aero-right {}
.aero-visual {
background:radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%),
linear-gradient(135deg,#0f1724,#080b12);
border:1px solid var(–border2);
border-radius:16px;
height:340px;
display:flex; align-items:center; justify-content:center;
position:relative; overflow:hidden;
}
/* Animated debris deflection diagram */
.deflect-hub {
width:100px; height:100px;
background:radial-gradient(circle,#1e3a8a,#0d1117);
border-radius:50%;
border:2px solid var(–blue);
position:absolute;
box-shadow:0 0 40px rgba(37,99,235,0.25);
display:flex; align-items:center; justify-content:center;
font-size:32px;
}
.deflect-wing {
position:absolute;
width:70px; height:14px;
background:linear-gradient(to right, rgba(37,99,235,0.6), rgba(37,99,235,0.1));
border-radius:0 100px 100px 0;
transform-origin:0 50%;
}
.debris-particle {
position:absolute;
width:6px; height:6px;
background:#94a3b8;
border-radius:50%;
animation:debris 3s ease-in-out infinite;
}
@keyframes debris {
0% { opacity:0; transform:translate(0,0); }
30% { opacity:1; }
70% { opacity:.8; }
100% { opacity:0; transform:translate(var(–dx), var(–dy)) rotate(360deg); }
}
.aero-points { display:flex; flex-direction:column; gap:20px; }
.aero-point { display:flex; align-items:flex-start; gap:16px; padding:20px; background:rgba(255,255,255,0.02); border:1px solid var(–border); border-radius:10px; transition:border-color .3s; }
.aero-point:hover { border-color:var(–border2); }
.aero-point-icon { font-size:24px; min-width:36px; }
.aero-point h3 { font-size:15px; font-weight:600; margin-bottom:5px; }
.aero-point p { font-size:13px; color:var(–mid); line-height:1.6; }

/* ─── MATERIALS / BOM ─── */
.materials-section { background:var(–black); }
.materials-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:60px; }
.mat-card {
background:rgba(255,255,255,0.015);
border:1px solid var(–border);
border-radius:10px;
padding:32px 28px;
position:relative;
overflow:hidden;
transition:border-color .3s, transform .3s;
}
.mat-card:hover { border-color:var(–border2); transform:translateY(-4px); }
.mat-card::after { content:’’; position:absolute; top:0; left:0; right:0; height:2px; background:var(–blue); transform:scaleX(0); transform-origin:left; transition:transform .4s; }
.mat-card:hover::after { transform:scaleX(1); }
.mat-num { font-family:‘Space Mono’,monospace; font-size:10px; color:rgba(59,130,246,0.4); letter-spacing:2px; margin-bottom:20px; }
.mat-icon { font-size:32px; margin-bottom:18px; display:block; }
.mat-card h3 { font-family:‘Bebas Neue’,sans-serif; font-size:24px; letter-spacing:1px; margin-bottom:10px; }
.mat-card p { font-size:13px; color:var(–mid); line-height:1.65; }
.mat-tag { display:inline-block; font-family:‘Space Mono’,monospace; font-size:10px; background:rgba(37,99,235,0.08); border:1px solid var(–border2); color:var(–blue-bright); padding:4px 10px; border-radius:4px; margin-top:14px; letter-spacing:1px; }

/* ─── COMPARISON ─── */
.compare-section { background:var(–steel); position:relative; }
.compare-table { margin-top:60px; border:1px solid var(–border); border-radius:12px; overflow:hidden; }
.compare-head { display:grid; grid-template-columns:1.5fr 1fr 1fr; }
.compare-col-header { padding:22px 32px; font-family:‘Bebas Neue’,sans-serif; font-size:18px; letter-spacing:2px; }
.compare-col-header.them { background:rgba(255,255,255,0.02); color:var(–mid); }
.compare-col-header.us { background:var(–blue); color:var(–off-white); }
.compare-col-header.label { background:rgba(255,255,255,0.01); font-size:12px; font-family:‘Space Mono’,monospace; letter-spacing:1.5px; color:rgba(238,241,245,0.25); display:flex; align-items:center; }
.compare-row-item { display:grid; grid-template-columns:1.5fr 1fr 1fr; border-top:1px solid var(–border); }
.compare-row-item:hover { background:rgba(255,255,255,0.01); }
.compare-cell { padding:18px 32px; font-size:14px; color:rgba(238,241,245,0.65); display:flex; align-items:center; gap:10px; }
.compare-cell.feature { color:var(–off-white); font-weight:500; }
.compare-cell.them-val { color:var(–mid); }
.compare-cell.our-val { color:var(–off-white); font-weight:500; }
.dot-good { color:#4ade80; font-size:18px; }
.dot-bad { color:#f87171; font-size:18px; }

/* ─── BUSINESS CASE ─── */
.biz-section { background:var(–black); }
.biz-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:60px; }
.biz-card {
background:rgba(255,255,255,0.02);
border:1px solid var(–border);
border-radius:12px;
padding:40px 32px;
transition:border-color .3s, background .3s;
}
.biz-card:hover { border-color:var(–border2); background:rgba(37,99,235,0.03); }
.biz-card-num { font-family:‘Bebas Neue’,sans-serif; font-size:54px; color:var(–blue-bright); line-height:1; margin-bottom:8px; }
.biz-card h3 { font-size:16px; font-weight:600; margin-bottom:10px; }
.biz-card p { font-size:13px; color:var(–mid); line-height:1.7; }

/* ─── CTA ─── */
.cta-section {
padding:120px 64px;
text-align:center;
position:relative;
overflow:hidden;
}
.cta-section::before {
content:’’;
position:absolute; inset:0;
background:radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%);
}
.cta-section::after { content:’’; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(to right,transparent,var(–blue),transparent); }
.cta-section h2 { font-family:‘Bebas Neue’,sans-serif; font-size:clamp(56px,7vw,110px); line-height:.93; margin-bottom:24px; position:relative; }
.cta-section h2 em { color:var(–blue-bright); font-style:normal; }
.cta-section p { font-size:17px; color:var(–mid); max-width:460px; margin:0 auto 48px; font-weight:300; line-height:1.7; position:relative; }
.cta-actions { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; position:relative; }
.btn-lg { padding:20px 52px; font-size:16px; }
.btn-outline2 { border:1.5px solid rgba(238,241,245,0.15); color:rgba(238,241,245,0.6); padding:19px 36px; border-radius:3px; text-decoration:none; font-size:14px; cursor:none; transition:all .2s; }
.btn-outline2:hover { border-color:rgba(238,241,245,0.4); color:var(–off-white); }

/* ─── FOOTER ─── */
footer { border-top:1px solid var(–border); padding:56px 64px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:20px; }
.footer-logo { font-family:‘Bebas Neue’,sans-serif; font-size:22px; letter-spacing:4px; text-decoration:none; color:var(–off-white); display:flex; align-items:center; gap:10px; }
.footer-logo span { color:var(–blue-bright); }
.footer-links { display:flex; gap:32px; list-style:none; }
.footer-links a { color:var(–mid); text-decoration:none; font-size:13px; transition:color .2s; }
.footer-links a:hover { color:var(–off-white); }
.footer-copy { font-family:‘Space Mono’,monospace; font-size:11px; color:rgba(100,116,139,0.5); }

/* ─── SCROLL REVEAL ─── */
.reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
.reveal.visible { opacity:1; transform:translateY(0); }
.reveal-delay-1 { transition-delay:.1s; }
.reveal-delay-2 { transition-delay:.2s; }
.reveal-delay-3 { transition-delay:.3s; }
.reveal-delay-4 { transition-delay:.4s; }

/* Noise overlay */
body::after {
content:’’; position:fixed; inset:0;
background-image:url(“data:image/svg+xml,%3Csvg viewBox=‘0 0 256 256’ xmlns=‘http://www.w3.org/2000/svg’%3E%3Cfilter id=‘n’%3E%3CfeTurbulence type=‘fractalNoise’ baseFrequency=’.9’ numOctaves=‘4’ stitchTiles=‘stitch’/%3E%3C/filter%3E%3Crect width=‘100%25’ height=‘100%25’ filter=‘url(%23n)’ opacity=‘1’/%3E%3C/svg%3E”);
opacity:.022; pointer-events:none; z-index:9997;
}

@media (max-width:960px) {
nav { padding:20px 24px; }
.nav-links { display:none; }
.hero { grid-template-columns:1fr; padding:120px 24px 60px; }
.hero-right { display:none; }
.stats-bar { grid-template-columns:repeat(3,1fr); padding:36px 24px; }
.section { padding:80px 24px; }
.gallery-grid { grid-template-columns:1fr 1fr; grid-template-rows:auto; }
.gallery-cell.main { grid-row:auto; }
.specs-layout, .aero-grid, .compare-head, .compare-row-item { grid-template-columns:1fr; }
.compare-table { overflow-x:auto; }
.materials-grid, .biz-grid { grid-template-columns:1fr; }
.cta-section { padding:80px 24px; }
footer { padding:40px 24px; flex-direction:column; align-items:flex-start; }
body { cursor:auto; }
.cursor, .cursor-ring { display:none; }
}
</style>

</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursor-ring"></div>

<!-- NAV -->

<nav>
<a href="#" class="nav-logo">
<div class="nav-logo-mark">⚙</div>
AERO<span>AXIS</span>
</a>
<ul class="nav-links">
<li><a href="#gallery">Product</a></li>
<li><a href="#specs">Specs</a></li>
<li><a href="#compare">Compare</a></li>
<li><a href="#contact" class="nav-cta">Get a Quote</a></li>
</ul>
</nav>

<!-- ═══ HERO ═══ -->

<section class="hero">
<div class="hero-bg"></div>
<div class="hero-grid"></div>

<div class="hero-left">
<div class="hero-eyebrow">Precision-Engineered Retail Mobility</div>
<h1>
THE WHEEL<br>
<span class="accent">THAT NEVER</span><br>
<span class="outline">QUITS.</span>
</h1>
<p class="hero-desc">
AeroAxis reengineered the shopping cart wheel from the ground up — lighter, stronger, and quieter than anything Costco or Superstore has ever rolled.
</p>
<div class="hero-load-badge">
<div class="badge-num">500<span style="font-size:22px;color:rgba(59,130,246,0.7)">LBS</span></div>
<div class="badge-text">
<strong>Load-Tested &amp; Certified</strong>
Simulated at 2,224N — with a 3×–6× safety factor built in
</div>
</div>
<div class="hero-actions">
<a href="#contact" class="btn-primary btn-lg">
Request Demo
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</a>
<a href="#specs" class="btn-outline-hero">View Specs →</a>
</div>
</div>

<div class="hero-right">
<div class="product-stage">
<div class="product-glow-ring"></div>
<div class="product-ring-outer"></div>
<div class="product-ring-inner"></div>
<!-- Tick marks -->
<div class="product-tick" style="transform:rotate(0deg)"></div>
<div class="product-tick" style="transform:rotate(30deg)"></div>
<div class="product-tick" style="transform:rotate(60deg)"></div>
<div class="product-tick" style="transform:rotate(90deg)"></div>
<div class="product-tick" style="transform:rotate(120deg)"></div>
<div class="product-tick" style="transform:rotate(150deg)"></div>
<div class="product-tick" style="transform:rotate(180deg)"></div>
<div class="product-tick" style="transform:rotate(210deg)"></div>
<div class="product-tick" style="transform:rotate(240deg)"></div>
<div class="product-tick" style="transform:rotate(270deg)"></div>
<div class="product-tick" style="transform:rotate(300deg)"></div>
<div class="product-tick" style="transform:rotate(330deg)"></div>

```
<div class="product-photo-wrap">
<img src="https://imgur.com/a/5zYuV8W" alt="AeroAxis wheel CAD render — top view" />
</div>

<!-- Floating spec bubbles -->
<div class="spec-float f1">
<div class="spec-val">0.95<span style="font-size:14px;color:rgba(59,130,246,.6)">lbs</span></div>
<div class="spec-lbl">Assembly Weight</div>
</div>
<div class="spec-float f2">
<div class="spec-val">500<span style="font-size:14px;color:rgba(59,130,246,.6)">lb</span></div>
<div class="spec-lbl">Load Tested</div>
</div>
<div class="spec-float f3">
<div class="spec-val">24<span style="font-size:14px;color:rgba(59,130,246,.6)">%</span></div>
<div class="spec-lbl">Lighter</div>
</div>
</div>
```

</div>
</section>

<!-- ═══ STATS BAR ═══ -->

<div class="stats-bar">
<div class="stat-item reveal">
<div class="stat-number"><em>500</em>lb</div>
<div class="stat-desc">Load Capacity</div>
</div>
<div class="stat-item reveal reveal-delay-1">
<div class="stat-number"><em>24</em>%</div>
<div class="stat-desc">Lighter Than Standard</div>
</div>
<div class="stat-item reveal reveal-delay-2">
<div class="stat-number">6<em>×</em></div>
<div class="stat-desc">Safety Factor</div>
</div>
<div class="stat-item reveal reveal-delay-3">
<div class="stat-number">440<em>C</em></div>
<div class="stat-desc">Stainless Bearings</div>
</div>
<div class="stat-item reveal reveal-delay-4">
<div class="stat-number"><em>0</em>dB</div>
<div class="stat-desc">Near-Silent Roll</div>
</div>
</div>

<!-- ═══ GALLERY ═══ -->

<section class="section gallery-section" id="gallery">
<div class="gallery-header">
<div class="section-tag">// The product</div>
<h2 class="section-title reveal">MEET <em>AEROAXIS</em></h2>
<p style="color:var(--mid);font-size:15px;margin-top:16px;font-weight:300;max-width:500px;" class="reveal reveal-delay-1">Every millimeter engineered with purpose. From the debris-deflecting Aero wings to the 440C stainless bearing core.</p>
</div>
<div class="gallery-grid">
<div class="gallery-cell main reveal">
<img src="https://imgur.com/a/5zYuV8W" alt="AeroAxis — top-down CAD render" />
<div class="cell-label">Top View — CAD Render</div>
</div>
<div class="gallery-cell reveal reveal-delay-1 cad-panel">
<div class="cad-icon">⚙️</div>
<div class="cad-label">Aero Debris Deflectors</div>
</div>
<div class="gallery-cell reveal reveal-delay-2 cad-panel">
<div class="cad-icon">🔩</div>
<div class="cad-label">440C Sealed Bearing Core</div>
</div>
<div class="gallery-cell reveal reveal-delay-1" style="background:linear-gradient(135deg,#0c1220,#060810);">
<img src="https://imgur.com/a/5zYuV8W" alt="AeroAxis — detail" style="filter:brightness(0.6) hue-rotate(200deg) saturate(0.7);mix-blend-mode:normal;" />
<div class="cell-label">Profile Detail</div>
</div>
<div class="gallery-cell reveal reveal-delay-3 cad-panel">
<div class="cad-icon">📐</div>
<div class="cad-label">GF-Nylon Rim — Injection Mold Ready</div>
</div>
</div>
</section>

<!-- ═══ TECH SPECS ═══ -->

<section class="section specs-section" id="specs">
<div class="section-tag">// Engineering specs</div>
<h2 class="section-title reveal">BUILT TO<br><em>OUTLAST</em> THEM ALL.</h2>
<div class="specs-layout">
<div class="specs-left">
<p class="spec-intro">
AeroAxis is the result of rigorous FEA simulation and material science. Every component in the load path is chosen to maximize strength while minimizing weight — 24% lighter than anything on the market today.
</p>

```
<!-- Safety factor bar -->
<div class="safety-bar-wrap reveal" style="margin-top:36px;">
<div class="safety-bar-label">
<span>Standard Grocery Load</span>
<span style="color:var(--blue-bright);">Safety Factor: 3×–6×</span>
</div>
<div class="safety-bar-track">
<div class="safety-bar-fill" id="safetyBar"></div>
</div>
<div style="display:flex;justify-content:space-between;margin-top:8px;font-family:'Space Mono',monospace;font-size:10px;color:var(--mid);">
<span>0 lb</span><span>500 lb ✓</span><span>810–1,350 lb (est. failure)</span>
</div>
</div>

<!-- Load test callout -->
<div class="load-callout reveal">
<div class="load-callout-title">// 500 LB LOAD TEST — SIMULATION RESULTS</div>
<div class="load-row">
<span class="load-row-label">Peak Load Applied</span>
<span class="load-row-value">2,224<span>N</span> / 500 lbs</span>
</div>
<div class="load-row">
<span class="load-row-label">Max Observed Stress</span>
<span class="load-row-value">18.5<span>MPa</span></span>
</div>
<div class="load-row">
<span class="load-row-label">Estimated Failure Point</span>
<span class="load-row-value">810<span>–</span>1,350<span>lbs</span></span>
</div>
<div class="load-row">
<span class="load-row-label">Safety Factor at Grocery Load</span>
<span class="load-row-value">3<span>× – </span>6<span>×</span></span>
</div>
<div class="load-row">
<span class="load-row-label">Result</span>
<span class="load-row-value" style="color:#4ade80;">✓ PASS</span>
</div>
</div>
</div>

<div class="spec-cards">
<div class="spec-card reveal">
<div class="spec-card-icon">⚖️</div>
<div>
<h3>Assembly Weight</h3>
<p>Total wheel assembly weighs just 0.949 lbs — approximately 24% lighter than the industry standard of ~1.25 lbs. Less weight means better fleet maneuverability and less strain on cart frames over time.</p>
<span class="spec-chip">0.949 LBS TOTAL</span>
</div>
</div>
<div class="spec-card reveal reveal-delay-1">
<div class="spec-card-icon">🔩</div>
<div>
<h3>Load Path Architecture</h3>
<p>Engineered load path: Axle → Steel Backstop → 440C Stainless Bearing → GF-Nylon Rim. This isolates the structural polymer from direct crush forces, dramatically extending service life.</p>
<span class="spec-chip">440C STAINLESS STEEL</span>
</div>
</div>
<div class="spec-card reveal reveal-delay-2">
<div class="spec-card-icon">📐</div>
<div>
<h3>Material: GF-Nylon Rim</h3>
<p>Glass-fiber reinforced nylon rim provides the strength of metal with the corrosion-resistance and weight reduction of engineered plastics. Survives parking lots, chemicals, and daily abuse.</p>
<span class="spec-chip">GLASS-FIBER REINFORCED</span>
</div>
</div>
<div class="spec-card reveal reveal-delay-3">
<div class="spec-card-icon">🏭</div>
<div>
<h3>DFM Ready — Injection Mold Scale</h3>
<p>AeroAxis is already optimized for Design for Manufacturing review — ready to transition from precision 3D printing to high-volume injection molding at scale without redesign.</p>
<span class="spec-chip">INJECTION MOLD READY</span>
</div>
</div>
</div>
```

</div>
</section>

<!-- ═══ AERO DEBRIS DEFLECTOR ═══ -->

<section class="section aero-section">
<div class="section-tag">// Aero technology</div>
<h2 class="section-title reveal">THE <em>AERO</em><br>DIFFERENCE.</h2>
<div class="aero-grid">
<div class="aero-points">
<div class="aero-point reveal">
<div class="aero-point-icon">🌀</div>
<div>
<h3>Integrated Debris Deflectors</h3>
<p>The patented "Aero" wing geometry actively deflects hair, grit, and debris away from the hub bearing — eliminating the #1 cause of the "wonky wheel" syndrome in retail environments.</p>
</div>
</div>
<div class="aero-point reveal reveal-delay-1">
<div class="aero-point-icon">💈</div>
<div>
<h3>Kills the Wonky Wheel Problem</h3>
<p>Hair wrapping around axles causes 70% of wheel replacements in grocery chains. AeroAxis's deflector geometry physically blocks ingestion before it starts.</p>
</div>
</div>
<div class="aero-point reveal reveal-delay-2">
<div class="aero-point-icon">🏪</div>
<div>
<h3>Designed for Burnaby Parking Lots</h3>
<p>Engineered and validated for the real-world abuse of Canadian retail: wet surfaces, rough asphalt, cart corrals, heavy loads — tested to survive it all without maintenance.</p>
</div>
</div>
<div class="aero-point reveal reveal-delay-3">
<div class="aero-point-icon">📉</div>
<div>
<h3>Lowers Retailer Labor Costs</h3>
<p>Debris deflection means fewer carts pulled from service. Less maintenance labor. Less downtime. An operational savings that compounds across every cart in your fleet.</p>
</div>
</div>
</div>
<div class="aero-right reveal reveal-delay-1">
<div class="aero-visual">
<!-- Animated deflector diagram -->
<div class="deflect-hub">⚙</div>
<div class="deflect-wing" style="top:50%;left:50%;transform:rotate(-40deg) translateY(-50%)"></div>
<div class="deflect-wing" style="top:50%;left:50%;transform:rotate(-140deg) translateY(-50%)"></div>
<div class="deflect-wing" style="top:50%;left:50%;transform:rotate(40deg) translateY(-50%)"></div>
<div class="deflect-wing" style="top:50%;left:50%;transform:rotate(140deg) translateY(-50%)"></div>
<!-- Debris particles -->
<div class="debris-particle" style="top:20%;left:10%;--dx:120px;--dy:30px;animation-delay:0s;animation-duration:2.8s;"></div>
<div class="debris-particle" style="top:70%;left:15%;--dx:110px;--dy:-50px;animation-delay:0.8s;animation-duration:3.2s;"></div>
<div class="debris-particle" style="top:15%;right:10%;--dx:-100px;--dy:60px;animation-delay:1.4s;animation-duration:2.5s;"></div>
<div class="debris-particle" style="top:75%;right:12%;--dx:-90px;--dy:-40px;animation-delay:2s;animation-duration:3s;"></div>
<div class="debris-particle" style="top:50%;left:5%;--dx:130px;--dy:0px;animation-delay:0.4s;animation-duration:3.5s;width:4px;height:4px;"></div>
<!-- Labels -->
<div style="position:absolute;top:16px;left:50%;transform:translateX(-50%);font-family:'Space Mono',monospace;font-size:10px;color:rgba(59,130,246,0.5);letter-spacing:2px;text-transform:uppercase;">Aero Deflection Diagram</div>
<div style="position:absolute;bottom:16px;right:20px;font-family:'Space Mono',monospace;font-size:9px;color:rgba(238,241,245,0.2);letter-spacing:1px;">Hair &amp; grit → deflected outward</div>
</div>
</div>
</div>
</section>

<!-- ═══ MATERIALS ═══ -->

<section class="section materials-section">
<div class="section-tag">// Bill of materials</div>
<h2 class="section-title reveal">EVERY PART<br>HAS A <em>PURPOSE.</em></h2>
<div class="materials-grid">
<div class="mat-card reveal">
<div class="mat-num">01 — BEARING</div>
<span class="mat-icon">🔵</span>
<h3>440C Stainless Steel</h3>
<p>Marine-grade stainless bearing race. Resists corrosion from water, cleaning chemicals, salt, and the full range of grocery store environments.</p>
<span class="mat-tag">SEALED & RATED</span>
</div>
<div class="mat-card reveal reveal-delay-1">
<div class="mat-num">02 — RIM</div>
<span class="mat-icon">⚫</span>
<h3>GF-Nylon Composite</h3>
<p>Glass-fiber reinforced nylon rim. Delivers structural rigidity under load while remaining 24% lighter than cast alternatives. Injection-mold compatible.</p>
<span class="mat-tag">INJECTION MOLD READY</span>
</div>
<div class="mat-card reveal reveal-delay-2">
<div class="mat-num">03 — AXLE</div>
<span class="mat-icon">⚙️</span>
<h3>Hardened Steel Axle + Backstop</h3>
<p>A steel backstop transfers load directly into the bearing race — not the plastic housing — protecting the polymer from being crushed under 500+ lb loads.</p>
<span class="mat-tag">CRUSH-RESISTANT</span>
</div>
</div>
</section>

<!-- ═══ COMPARISON ═══ -->

<section class="section compare-section" id="compare">
<div class="section-tag">// Head-to-head</div>
<h2 class="section-title reveal">AEROAXIS VS<br><em>EVERYONE ELSE.</em></h2>
<div class="compare-table reveal">
<div class="compare-head">
<div class="compare-col-header label">Specification</div>
<div class="compare-col-header them">Standard Retail Wheel</div>
<div class="compare-col-header us">⚙ AeroAxis</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Assembly Weight</div>
<div class="compare-cell them-val"><span class="dot-bad">—</span> ~1.25 lbs</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> 0.949 lbs (-24%)</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Load Capacity</div>
<div class="compare-cell them-val"><span class="dot-bad">—</span> ~200–300 lbs</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> 500 lb tested</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Safety Factor</div>
<div class="compare-cell them-val"><span class="dot-bad">—</span> ~1.5×–2×</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> 3×–6× grocery load</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Debris / Hair Protection</div>
<div class="compare-cell them-val"><span class="dot-bad">✕</span> None</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> Aero deflectors</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Bearing Material</div>
<div class="compare-cell them-val"><span class="dot-bad">—</span> Standard steel</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> 440C stainless</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Corrosion Resistance</div>
<div class="compare-cell them-val"><span class="dot-bad">✕</span> Rusts in wet conditions</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> Fully sealed core</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Noise Level</div>
<div class="compare-cell them-val"><span class="dot-bad">—</span> Squeals over time</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> Near-silent operation</div>
</div>
<div class="compare-row-item">
<div class="compare-cell feature">Manufacturing Scalability</div>
<div class="compare-cell them-val"><span class="dot-bad">—</span> Already commoditized</div>
<div class="compare-cell our-val"><span class="dot-good">✓</span> DFM / Injection mold ready</div>
</div>
</div>
</section>

<!-- ═══ BUSINESS CASE ═══ -->

<section class="section biz-section">
<div class="section-tag">// Business case</div>
<h2 class="section-title reveal">THE ROI IS<br><em>CLEAR.</em></h2>
<div class="biz-grid">
<div class="biz-card reveal">
<div class="biz-card-num">24%</div>
<h3>Lighter Fleet = Lower Fuel & Labor Costs</h3>
<p>At fleet scale, a 24% reduction in wheel weight measurably improves cart maneuverability — reducing customer effort and cart-related worker injuries.</p>
</div>
<div class="biz-card reveal reveal-delay-1">
<div class="biz-card-num">↓70%</div>
<h3>Fewer Wheels Pulled for Maintenance</h3>
<p>Aero debris deflection is the single biggest driver of reduced maintenance calls. Less labor, fewer replacement orders, less cart downtime across your fleet.</p>
</div>
<div class="biz-card reveal reveal-delay-2">
<div class="biz-card-num">6×</div>
<h3>Safety Factor You Can Stand Behind</h3>
<p>With an estimated failure point between 810 and 1,350 lbs — triple to 6× a standard grocery load — AeroAxis eliminates liability concerns and warranty calls entirely.</p>
</div>
</div>
</section>

<!-- ═══ CTA ═══ -->

<section class="cta-section" id="contact">
<h2>READY TO<br><em>UPGRADE</em> YOUR FLEET?</h2>
<p>Whether you're running 50 carts or 50,000, AeroAxis scales with you. Let's talk about a free pilot program for your location.</p>
<div class="cta-actions">
<a href="mailto:hello@aeroaxis.ca" class="btn-primary btn-lg">
Get a Free Quote
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</a>
<a href="tel:+18005551234" class="btn-outline2">📞 Book a Demo</a>
</div>
</section>

<!-- FOOTER -->

<footer>
<a href="#" class="footer-logo">
<div class="nav-logo-mark" style="width:22px;height:22px;font-size:11px;">⚙</div>
AERO<span>AXIS</span>
</a>
<ul class="footer-links">
<li><a href="#">Product</a></li>
<li><a href="#">Engineering</a></li>
<li><a href="#">Case Studies</a></li>
<li><a href="#">Contact</a></li>
</ul>
<div class="footer-copy">© 2026 AeroAxis. Engineered in Canada.</div>
</footer>

<script>
// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function animCursor(){
if(cursor){ cursor.style.left=mx+'px'; cursor.style.top=my+'px'; }
rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
if(ring){ ring.style.left=rx+'px'; ring.style.top=ry+'px'; }
requestAnimationFrame(animCursor);
})();

// Scroll reveals
const obs = new IntersectionObserver(entries => {
entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Safety bar animation
const barObs = new IntersectionObserver(entries => {
entries.forEach(e => { if(e.isIntersecting){ document.getElementById('safetyBar').classList.add('animated'); barObs.disconnect(); } });
}, { threshold: 0.5 });
const bar = document.getElementById('safetyBar');
if(bar) barObs.observe(bar);
</script>

</body>
</html>
