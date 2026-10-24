'use strict';
(() => {
  const data = window.INVENTORA;
  const main = document.querySelector('main');
  let state = { area: null, selected: null, idea: '', screen: 'home' };
  const paths = {
  'heart-pulse': '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/><path d="M3 12h5l2-4 4 8 2-4h5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  'traffic-cone': '<path d="m10 2-6 18h16L14 2zM8 8h8M6 14h12M2 22h20"/>',
  sprout: '<path d="M7 20h10M12 20v-8"/><path d="M12 12C5 12 3 8 3 3c6 0 9 3 9 9ZM12 15c0-6 3-9 9-9 0 5-2 9-9 9Z"/>',
  'chart-no-axes-combined': '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M15 9h4v4"/>',
  'building-2': '<path d="M6 22V3h12v19M3 22h18M9 7h2M14 7h2M9 11h2M14 11h2M9 15h2M14 15h2M10 22v-3h4v3"/>',
  'dna': ' <path d="m10 16 1.5 1.5" /><path d="m14 8-1.5-1.5" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="m16.5 10.5 1 1" /><path d="m17 6-2.891-2.891" /><path d="M2 15c6.667-6 13.333 0 20-6" /><path d="m20 9 .891.891" /><path d="M3.109 14.109 4 15" /><path d="m6.5 12.5 1 1" /><path d="m7 18 2.891 2.891" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />',
  'flask-conical': '<path d="M9 3h6M10 3v7L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-10V3"/><path d="M7 16h10"/>',
  'paw-print': '<circle cx="7" cy="8" r="2"/><circle cx="17" cy="8" r="2"/><circle cx="4" cy="14" r="2"/><circle cx="20" cy="14" r="2"/><path d="M8 19c0-3 2-5 4-5s4 2 4 5c0 2-2 2-4 1-2 1-4 1-4-1Z"/>',
  'book-open': '<path d="M12 7v14M3 4h5a4 4 0 0 1 4 4v13a4 4 0 0 0-4-4H3zM21 4h-5a4 4 0 0 0-4 4v13a4 4 0 0 1 4-4h5z"/>',
  laptop: '<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20l-2-4H4z"/>',
  handbag: '<path d="M6 7V5a6 6 0 0 1 12 0v2"/><path d="M20 7H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>',
  leaf: '<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-7 10-16Z"/><path d="M3 21c4-6 8-9 13-12"/>',
  scale: '<path d="M12 3v18M5 7h14M4 7l-3 7h6L4 7ZM20 7l-3 7h6l-3-7ZM5 21h14"/>',
  brain: '<path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7 3 3 0 0 0 6 0ZM12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7 3 3 0 0 1-6 0Z"/><path d="M8 8h1M15 8h1M7 14h2M15 14h2"/>',
  sparkles: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"/>',
  apple: '<path d="M12 6.528V3a1 1 0 0 1 1-1h0" /><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />"/>',
  'greek': `<path d="M10 18v-7" /><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M3 22h18" /><path d="M6 18v-7"/>`,
  message: `<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />`
  };

  const icon = name => `<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg></span>`;
  const button = (label, action, primary = false) => `<button type="button" class="btn${primary ? ' primary' : ''}" data-action="${action}">${label}</button>`;
  const art = `<div class="art" aria-hidden="true"><svg viewBox="0 0 420 330"><defs><pattern id="dots" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#d6cdea"/></pattern></defs><circle cx="220" cy="165" r="139" fill="#efeaf9"/><circle cx="220" cy="165" r="155" fill="url(#dots)" opacity=".65"/><path d="M111 257c68 35 163 36 215-12" fill="none" stroke="#c8bce5" stroke-width="2" stroke-dasharray="5 7"/><g transform="rotate(-9 217 163)"><rect x="143" y="85" width="155" height="191" rx="17" fill="#d9cfee"/><rect x="134" y="75" width="155" height="191" rx="17" fill="#fff" stroke="#d1c4e9" stroke-width="2"/><path d="M156 105h40m-40 16h65" stroke="#d9d0ec" stroke-width="5" stroke-linecap="round"/><path d="M171 177a40 40 0 1 1 68 28c-10 9-12 14-12 22h-24c0-9-4-15-12-23-12-10-20-17-20-27" fill="#f3d99c" stroke="#b99b5f" stroke-width="2"/><path d="m201 175 14 16 15-16m-15 16v36m-13 7h26m-23 7h20" fill="none" stroke="#ad8d4e" stroke-width="3" stroke-linecap="round"/><path d="M215 127v-9m-46 23-7-7m99 7 7-7" stroke="#b99b5f" stroke-width="2.5" stroke-linecap="round"/></g><g transform="rotate(12 325 111)"><rect x="290" y="76" width="69" height="69" rx="19" fill="#e1ebfb" stroke="#c1d1ed"/><path d="m310 111 10 10 20-24" fill="none" stroke="#6087c3" stroke-width="5" stroke-linecap="round"/></g><g transform="rotate(-13 105 201)"><rect x="70" y="166" width="69" height="69" rx="19" fill="#e3f1e8" stroke="#bfdeca"/><path d="M89 216c0-22 8-30 30-31-1 22-9 31-30 31Zm0 0 20-21" fill="none" stroke="#689d7c" stroke-width="2.5"/></g><path d="m105 73 4 10 10 4-10 4-4 10-4-10-10-4 10-4Zm230 139 4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="#9c83c9"/><circle cx="309" cy="265" r="6" fill="#dec5dd"/><circle cx="143" cy="42" r="4" fill="#a9bfdf"/></svg></div>`;
  function home() {
    state = { area: null, selected: null, idea: '', screen: 'home' };
    render();
  }
  function progress(step) {
    return `<ol class="progress" aria-label="Etapas da experiência">${['Área', 'Desafio', 'Sua solução', 'Mulher em destaque'].map((label, i) => `<li${i === step ? ' aria-current="step"' : ''}><span class="step">${i + 1}</span>${label}</li>`).join('')}</ol>`;
  }
  const label = a => `<div class="area-label">${icon(a.icon)}${a.name}</div>`;
  function render() {
    const a = state.area;
    main.style.setProperty('--accent', a?.color || '#6554b5');
    main.style.setProperty('--tint', a?.tint || '#eee8fc');
    if (state.screen === 'home') {
      main.innerHTML = `<section class="hero"><div><div class="eyebrow"><span class="dot"></span> A curiosidade é só o começo</div><h1>Você é a <span>inventora!</span></h1><p>Explore desafios, imagine soluções e conheça mulheres que transformaram o mundo.</p><div class="hero-note"><b aria-hidden="true">✦</b> Uma ideia sua pode ser o próximo começo.</div></div>${art}</section><section aria-labelledby="areas-title"><div class="section-title"><div><h2 id="areas-title">Onde sua curiosidade vai te levar?</h2><p>Escolha uma área e entre em uma missão.</p></div><span class="small-tag">6 áreas · infinitas possibilidades</span></div><div class="areas">${data.areas.map(area => `<button class="area" type="button" data-area="${area.id}" style="--accent:${area.color};--tint:${area.tint}">${icon(area.icon)}<span class="arrow" aria-hidden="true">↗</span><h3>${area.name}</h3><p>${area.description}</p></button>`).join('')}</div></section><aside class="invitation"><span aria-hidden="true">✧</span><span><strong>Aqui, não existe uma única resposta.</strong> Escolha, reflita e descubra o que cada ideia pode transformar.</span></aside>`;
    } else if (state.screen === 'mission') {
      main.innerHTML = `${progress(1)}<section class="screen">${label(a)}<h1>${a.mission.title}</h1><p class="intro">${a.mission.context}</p><p class="fiction">Missão fictícia, inspirada em desafios do cotidiano.</p><div class="problem">${a.mission.problem}</div><form id="mission-form" novalidate><fieldset class="choices"><legend>${a.mission.question}</legend>${a.alternatives.map((option, i) => `<label class="choice"><input type="radio" name="solution" value="${i}"${state.selected === String(i) ? ' checked' : ''}><span><strong>${option.title}</strong><small>${option.description}</small></span></label>`).join('')}<label class="choice"><input type="radio" name="solution" value="own"${state.selected === 'own' ? ' checked' : ''}><span><strong>✧ Tenho outra ideia</strong><small>Quero imaginar uma possibilidade diferente.</small></span></label></fieldset><div class="own-box"${state.selected === 'own' ? '' : ' hidden'}><label for="idea">Como sua ideia ajudaria a resolver esse desafio?</label><textarea id="idea" maxlength="800" aria-describedby="counter privacy"></textarea><p class="counter" id="counter"><span id="count">0</span>/800 caracteres</p><p class="privacy" id="privacy">Não inclua dados pessoais. Sua ideia fica somente nesta página e é apagada ao voltar ao início.</p></div><p class="error" id="error" role="alert"></p><div class="actions"><button class="btn primary" type="submit">Ver o resultado <span aria-hidden="true">→</span></button>${button('← Voltar', 'home')}</div></form></section>`;
      const textarea = main.querySelector('textarea');
      textarea.value = state.idea;
      main.querySelector('#count').textContent = String(state.idea.length);
      main.querySelector('form').addEventListener('submit', submit);
      main.querySelectorAll('input').forEach(input => input.addEventListener('change', () => {
        state.selected = input.value;
        main.querySelector('.own-box').hidden = input.value !== 'own';
        main.querySelector('#error').textContent = '';
        textarea.removeAttribute('aria-invalid');
        if (input.value === 'own') textarea.focus();
      }));
      textarea.addEventListener('input', () => {
        state.idea = textarea.value;
        main.querySelector('#count').textContent = String(state.idea.length);
        if (state.idea.trim()) { main.querySelector('#error').textContent = ''; textarea.removeAttribute('aria-invalid'); }
      });
    } else if (state.screen === 'result') {
      const own = state.selected === 'own';
      const option = own ? null : a.alternatives[Number(state.selected)];
      main.innerHTML = `${progress(2)}<section class="screen">${label(a)}<h1>${own ? 'Sua ideia merece ser explorada' : 'Uma possibilidade, novos caminhos'}</h1><p class="intro">${own ? 'Este roteiro ajuda você a desenvolver a proposta. Ele não é uma análise automática nem uma validação de que ela funcionará.' : 'Toda solução envolve escolhas. Veja o que sua proposta pode trazer para este desafio.'}</p><div class="result-head"><div class="eyebrow">${own ? 'Sua proposta' : 'Solução escolhida'}</div>${own ? '<p class="own-text" id="visitor-idea"></p>' : `<h2>${option.title}</h2><p>${option.how}</p>`}</div>${own ? `<div class="result-grid">${data.ownGuide.map(([title, text]) => `<article class="detail"><h2>${title}</h2><p>${text}</p></article>`).join('')}</div><div class="reflection"><strong>Para este desafio</strong>${a.mission.question} Comece com um teste pequeno, seguro e acompanhado.</div>` : `<div class="result-grid"><article class="detail"><h2>↗ Benefícios possíveis</h2><p>${option.benefits}</p></article><article class="detail"><h2>◌ Limitações e dificuldades</h2><p>${option.limits}</p></article><article class="detail"><h2>◇ Cuidados importantes</h2><p>${option.care}</p></article><article class="detail"><h2>↔ Compare as possibilidades</h2><p>Volte ao desafio para explorar outra estratégia. Considere o problema que ela resolve, os recursos disponíveis e quem consegue usá-la.</p></article></div><div class="reflection"><strong>Para pensar um pouco mais</strong>${option.reflection}</div>`}<div class="actions">${button('Conhecer uma mulher que fez a diferença →', 'woman', true)}${button('← Rever minha escolha', 'mission')}</div></section>`;
      if (own) main.querySelector('#visitor-idea').textContent = state.idea;
    } else {
      const w = a.woman;
      const photo = window.PHOTO_CREDITS?.[a.id];
      main.innerHTML = `${progress(3)}<section class="screen">${label(a)}<div class="woman-layout"><figure class="photo-wrap"><img src="assets/images/${w.image}" alt="Fotografia de ${w.name}"><figcaption id="photo-credit"></figcaption></figure><div class="woman-copy"><div class="eyebrow">Mulheres que transformam</div><h1>${w.name}</h1><div class="years">${w.years} · ${w.field}</div><p>${w.bio}</p><h2>Uma contribuição que fez diferença</h2><p>${w.contribution}</p><h2>O impacto vai além da tecnologia</h2><p>${w.impact}</p></div></div><div class="reflection"><strong>A conexão com sua missão</strong>${w.connection}</div><div class="encourage">✦ ${w.encouragement}</div><details><summary>Fontes e créditos da fotografia</summary><ul>${w.sources.map(([name, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a></li>`).join('')}${photo ? `<li><a href="${photo.page}" target="_blank" rel="noopener noreferrer">Origem e licença da fotografia ↗</a></li>` : ''}</ul><p id="full-credit"></p><p>As referências externas precisam de internet. Todo o conteúdo da experiência e as fotografias estão disponíveis localmente.</p></details><div class="actions">${button('Explorar outra área ↗', 'home', true)}${button('← Voltar ao resultado', 'result')}</div></section>`;
      const credit = photo ? `${photo.artist} · ${photo.license === 'Public domain' ? 'Domínio público' : photo.license}. ${photo.note || 'Consulte FONTES.MD para as referências externas.'}` : '';
      main.querySelector('#photo-credit').textContent = credit;
      main.querySelector('#full-credit').textContent = credit;
    }
    main.querySelectorAll('[data-area]').forEach(el => el.addEventListener('click', () => {
      state = { area: data.areas.find(area => area.id === el.dataset.area), selected: null, idea: '', screen: 'mission' };
      render();
    }));
    main.querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', () => {
      if (el.dataset.action === 'home') home();
      else { state.screen = el.dataset.action; render(); }
    }));
    document.title = `${state.screen === 'home' ? 'Você é a inventora!' : state.screen === 'woman' ? a.woman.name : a.mission.title} — Semana da Tecnologia`;
    window.scrollTo(0, 0);
    const heading = main.querySelector('h1');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
  function submit(event) {
    event.preventDefault();
    const error = main.querySelector('#error');
    if (state.selected === null) {
      error.textContent = 'Escolha uma das soluções ou selecione “Tenho outra ideia” para continuar.';
      main.querySelector('input').focus();
      return;
    }
    if (state.selected === 'own' && !state.idea.trim()) {
      error.textContent = 'Conte como sua ideia ajudaria. Digite uma resposta além de espaços em branco.';
      main.querySelector('textarea').setAttribute('aria-invalid', 'true');
      main.querySelector('textarea').focus();
      return;
    }
    state.screen = 'result';
    render();
  }
  document.querySelectorAll('[data-home]').forEach(el => el.addEventListener('click', event => { event.preventDefault(); home(); }));
  window.addEventListener('pageshow', event => { if (event.persisted) home(); });
  render();
})();
