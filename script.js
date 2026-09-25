// Application Logic for Yuki Sato Portfolio
// Supports Japanese & English Bilingual Switching

let currentLang = localStorage.getItem("portfolio_lang") || "ja";
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitcher();
  setupFilters();
  setupModal();
  setLanguage(currentLang);
});

// Setup Language Switcher
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang;

  // Update switcher buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Apply text translations
  applyTranslations();

  // Render localized skills
  renderSkills();

  // Re-render project cards
  renderFeaturedProjects(currentFilter);
  renderOtherProjects(currentFilter);
  renderCounts();
}

function applyTranslations() {
  const t = translations[currentLang] || translations.ja;

  // Update document title and meta description
  if (t.page_title) {
    document.title = t.page_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.meta_desc) {
    metaDesc.setAttribute("content", t.meta_desc);
  }

  // Elements with data-i18n (plain text)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Elements with data-i18n-html (HTML content)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

// Render localized Skills items
function renderSkills() {
  const t = translations[currentLang] || translations.ja;

  const langList = document.getElementById("skills-languages-list");
  if (langList && t.skills_languages_items) {
    langList.innerHTML = t.skills_languages_items.map(item => `<li>${item}</li>`).join("");
  }

  const dspList = document.getElementById("skills-dsp-list");
  if (dspList && t.skills_dsp_items) {
    const videoDemoHtml = `
      <li>
        <strong>${t.skills_video_demo_title}</strong>: ${t.skills_video_demo_desc}
        <div class="skill-video-links">
          <button type="button" class="skill-video-btn" onclick="openVideoModal('https://youtu.be/CGfOd3KLMUg', '${t.skills_modal_fir}')">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> ${t.skills_btn_fir}
          </button>
          <button type="button" class="skill-video-btn" onclick="openVideoModal('https://youtu.be/uNid_z_aXJI', '${t.skills_modal_maclaurin}')">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> ${t.skills_btn_maclaurin}
          </button>
        </div>
      </li>
    `;
    dspList.innerHTML = t.skills_dsp_items.map(item => `<li>${item}</li>`).join("") + videoDemoHtml;
  }

  const mlList = document.getElementById("skills-ml-list");
  if (mlList && t.skills_ml_items) {
    mlList.innerHTML = t.skills_ml_items.map(item => `<li>${item}</li>`).join("");
  }
}

// Calculate and render badge counts
function renderCounts() {
  const countAll = allProjects.length;
  const countFeatured = featuredProjects.length;
  const t = translations[currentLang] || translations.ja;

  const getTagCount = (tag) => {
    return allProjects.filter(p => p.tags.some(t => matchTag(t, tag))).length;
  };

  const updateBadge = (filter, count) => {
    const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (btn) {
      let countSpan = btn.querySelector(".count");
      if (!countSpan) {
        countSpan = document.createElement("span");
        countSpan.className = "count";
        btn.appendChild(countSpan);
      }
      countSpan.textContent = count;
    }
  };

  updateBadge("all", countAll);
  updateBadge("featured", countFeatured);
  updateBadge("dsp", getTagCount("dsp"));
  updateBadge("juce", getTagCount("juce"));
  updateBadge("ml", getTagCount("ml"));
  updateBadge("ai", getTagCount("ml"));
  updateBadge("rnbo", getTagCount("rnbo"));
  updateBadge("python", getTagCount("python"));
  updateBadge("hardware", getTagCount("hardware"));

  // Update view all link text
  const viewAllLink = document.querySelector(".view-all-link");
  if (viewAllLink) {
    const template = t.view_all_link || "View all {count} projects →";
    viewAllLink.textContent = template.replace("{count}", countAll);
  }

  // Update total repositories text in All Works header
  const otherTotalCount = document.getElementById("other-total-count");
  if (otherTotalCount) {
    const template = t.other_total || "Total {count} Repositories";
    otherTotalCount.textContent = template.replace("{count}", countAll);
  }
}

// Render Featured Projects
function renderFeaturedProjects(filterTag = "all") {
  const container = document.getElementById("featured-container");
  if (!container) return;

  const t = translations[currentLang] || translations.ja;
  const isEn = currentLang === "en";

  const filtered = featuredProjects.filter(p => {
    if (filterTag === "all" || filterTag === "featured") return true;
    return p.tags.some(t => matchTag(t, filterTag));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); color: var(--text-dim);">
        <p style="margin-bottom: 12px;">${t.no_featured_msg || "該当する代表作プロジェクトはありません。"}</p>
        <button class="btn btn-sm btn-secondary" onclick="filterByTag('all')">${t.show_all_btn || "すべてのプロジェクトを表示"}</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((project) => {
    const subtitle = isEn && project.subtitle_en ? project.subtitle_en : project.subtitle;
    const whatIsIt = isEn && project.whatIsIt_en ? project.whatIsIt_en : project.whatIsIt;
    const whySpecial = isEn && project.whySpecial_en ? project.whySpecial_en : project.whySpecial;
    const highlights = isEn && project.highlights_en ? project.highlights_en : project.highlights;

    const tagsHtml = project.tags
      .map(tag => `<button type="button" class="tag-badge" onclick="filterByTag('${escapeHtml(tag)}')">[ ${escapeHtml(tag)} ]</button>`)
      .join("");

    const highlightsHtml = highlights
      .map(h => `<li>${h}</li>`)
      .join("");

    const youtubeBtn = project.youtube
      ? `<button class="btn btn-youtube" onclick="openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          ${t.btn_demo_video || "Demo Video"}
        </button>`
      : "";

    const downloadBtn = project.download
      ? `<a href="${project.download}" target="_blank" rel="noopener noreferrer" class="btn btn-download">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          ${t.btn_download || "Download"}
        </a>`
      : "";

    const imageHtml = project.image
      ? `<img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />`
      : `<div style="color: var(--text-dim); font-size: 0.9rem;">No preview image</div>`;

    const playOverlay = project.youtube
      ? `<button type="button" class="youtube-play-btn" tabindex="-1" aria-hidden="true" onclick="event.stopPropagation(); openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')" aria-label="Play Demo Video">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>`
      : "";

    const mediaClickAttr = project.youtube
      ? `onclick="openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openVideoModal('${project.youtube}', '${escapeHtml(project.title)}');}" role="button" tabindex="0" title="${t.btn_demo_video || "Demo Video"}: ${escapeHtml(project.title)}"`
      : "";
    const mediaHasVideoClass = project.youtube ? "has-video" : "";

    return `
      <article class="featured-card">
        <div class="featured-media ${mediaHasVideoClass}" ${mediaClickAttr}>
          ${imageHtml}
          ${playOverlay}
          <div class="featured-media-overlay">
            <span class="media-badge">${project.format}</span>
          </div>
        </div>
        <div class="featured-content">
          <div class="featured-top">
            <div class="badge-row">
              <span class="featured-badge">${project.badge}</span>
              <span class="format-pill">${project.format}</span>
            </div>
            <h3 class="featured-title">${project.title}</h3>
            <div class="featured-subtitle">${subtitle}</div>
            <div class="tag-list">${tagsHtml}</div>
            
            <p class="featured-desc"><strong>${t.label_overview || "【概要】"}</strong> ${whatIsIt}</p>
            <div class="featured-why">
              <strong>${t.label_why_special || "【実装のポイント &amp; 解決した課題】"}</strong><br />
              ${whySpecial}
            </div>
            
            <div class="featured-highlights-box">
              <div class="highlights-title">${t.label_tech_highlights || "Technical Highlights"}</div>
              <ul class="highlights-list">
                ${highlightsHtml}
              </ul>
            </div>
          </div>
          
          <div class="featured-actions">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              ${t.btn_github_repo || "GitHub Repo"}
            </a>
            ${youtubeBtn}
            ${downloadBtn}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Render Other Projects
function renderOtherProjects(filterTag = "all") {
  const container = document.getElementById("other-container");
  if (!container) return;

  const t = translations[currentLang] || translations.ja;
  const isEn = currentLang === "en";

  const filtered = otherProjects.filter(p => {
    if (filterTag === "all") return true;
    if (filterTag === "featured") return false;
    return p.tags.some(t => matchTag(t, filterTag));
  });

  if (filtered.length === 0) {
    if (filterTag === "featured") {
      container.innerHTML = `<div style="text-align: center; grid-column: 1/-1; padding: 30px; color: var(--text-dim);">${t.showing_featured_only || "代表作のみを表示しています"}</div>`;
    } else {
      container.innerHTML = `<div style="text-align: center; grid-column: 1/-1; padding: 30px; color: var(--text-dim);">${t.no_other_msg || "該当するプロジェクトはありません"}</div>`;
    }
    return;
  }

  container.innerHTML = filtered.map(project => {
    const subtitle = isEn && project.subtitle_en ? project.subtitle_en : project.subtitle;
    const summary = isEn && project.summary_en ? project.summary_en : project.summary;

    const tagsHtml = project.tags
      .map(tag => `<button type="button" class="tag-badge" onclick="filterByTag('${escapeHtml(tag)}')">[ ${escapeHtml(tag)} ]</button>`)
      .join("");

    const youtubeBtn = project.youtube
      ? `<button class="btn btn-sm btn-youtube" onclick="openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Demo
        </button>`
      : "";

    const downloadBtn = project.download
      ? `<a href="${project.download}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-download">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ${t.btn_download || "Download"}
        </a>`
      : "";

    const colabBtn = project.colab
      ? `<a href="${project.colab}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-colab">
          ${t.btn_colab || "Colab"}
        </a>`
      : "";

    const imageHtml = project.image
      ? `<img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />`
      : `<div style="color: var(--text-dim); font-size: 0.8rem;">No preview</div>`;

    return `
      <article class="other-card">
        <div class="other-media">
          ${imageHtml}
        </div>
        <div class="other-content">
          <div class="other-card-header">
            <div class="other-format">${project.format}</div>
            <h4 class="other-title">${project.title}</h4>
            <div class="other-subtitle">${subtitle}</div>
            <div class="tag-list">${tagsHtml}</div>
            <p class="other-summary">${summary}</p>
          </div>
          
          <div class="other-actions">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
              GitHub
            </a>
            ${youtubeBtn}
            ${downloadBtn}
            ${colabBtn}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Setup Filters
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tag = btn.getAttribute("data-filter");
      applyFilter(tag);
    });
  });
}

function filterByTag(tag) {
  const buttons = document.querySelectorAll(".filter-btn");
  let found = false;

  buttons.forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (matchTag(tag, f)) {
      if (!found) {
        btn.classList.add("active");
        found = true;
      } else {
        btn.classList.remove("active");
      }
    } else {
      btn.classList.remove("active");
    }
  });

  applyFilter(tag);

  // Smooth scroll to featured top if below
  const featured = document.getElementById("featured");
  if (featured) {
    const rect = featured.getBoundingClientRect();
    if (rect.top < -50) {
      featured.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function applyFilter(filterTag) {
  currentFilter = filterTag;
  renderFeaturedProjects(filterTag);
  renderOtherProjects(filterTag);

  const otherSection = document.getElementById("other-projects-section");
  if (otherSection) {
    if (filterTag === "featured") {
      otherSection.style.display = "none";
    } else {
      otherSection.style.display = "block";
    }
  }
}

function scrollToAllProjects() {
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) {
    allBtn.click();
  }
  const otherSection = document.getElementById("other-projects-section");
  if (otherSection) {
    otherSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Tag matcher
function matchTag(tagInItem, searchTag) {
  if (!tagInItem || !searchTag) return false;
  const t = tagInItem.trim().toLowerCase();
  const s = searchTag.trim().toLowerCase();
  
  if (s === "all") return true;
  if (s === "dsp" && t === "dsp") return true;
  if ((s === "juce" || s === "juce(c++)" || s === "c++" || s === "cpp") && (t === "juce(c++)" || t.includes("juce") || t.includes("c++"))) return true;
  if ((s === "ml" || s === "ai" || s === "machine learning" || s === "deep learning / ai") && (t === "machine learning" || t.includes("machine learning") || t.includes("deep learning") || t.includes("ai"))) return true;
  if ((s === "rnbo" || s === "max msp(rnbo)") && (t === "max msp(rnbo)" || t.includes("rnbo") || t.includes("max msp"))) return true;
  if (s === "python" && t === "python") return true;
  if (s === "hardware" && t === "hardware") return true;

  return t === s;
}

// Modal logic for video
function setupModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function openVideoModal(url, title) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-iframe");
  const titleEl = document.getElementById("modal-title");
  if (!modal || !iframe) return;

  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("shorts/")[1].split("?")[0];
  }

  const t = translations[currentLang] || translations.ja;

  if (videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    titleEl.textContent = title ? `${title} (Demo)` : (t.modal_title_default || "Demonstration Video");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    window.open(url, "_blank");
  }
}

function closeModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-iframe");
  if (!modal || !iframe) return;

  iframe.src = "";
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function escapeHtml(str) {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
