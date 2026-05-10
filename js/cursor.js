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