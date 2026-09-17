// Application Logic for Yuki Sato Portfolio

document.addEventListener("DOMContentLoaded", () => {
  renderCounts();
  renderFeaturedProjects("all");
  renderOtherProjects("all");
  setupFilters();
  setupModal();
});

// Calculate and render badge counts
function renderCounts() {
  const countAll = allProjects.length;
  const countFeatured = featuredProjects.length;

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
  updateBadge("cpp", getTagCount("cpp"));
  updateBadge("ai", getTagCount("ai"));
  updateBadge("rnbo", getTagCount("rnbo"));
  updateBadge("python", getTagCount("python"));
  updateBadge("hardware", getTagCount("hardware"));

  // Update view all link text
  const viewAllLink = document.querySelector(".view-all-link");
  if (viewAllLink) {
    viewAllLink.textContent = `View all ${countAll} projects →`;
  }
}

// Render Featured Projects
function renderFeaturedProjects(filterTag = "all") {
  const container = document.getElementById("featured-container");
  if (!container) return;

  const filtered = featuredProjects.filter(p => {
    if (filterTag === "all" || filterTag === "featured") return true;
    return p.tags.some(t => matchTag(t, filterTag));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); color: var(--text-dim);">
        <p style="margin-bottom: 8px;">該当する代表作プロジェクトはありません。</p>
        <button class="btn btn-sm btn-secondary" onclick="filterByTag('all')">すべてのプロジェクトを表示</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((project, idx) => {
    const tagsHtml = project.tags
      .map(t => `<button type="button" class="tag-badge" onclick="filterByTag('${t}')">[ ${t} ]</button>`)
      .join("");

    const highlightsHtml = project.highlights
      .map(h => `<li>${h}</li>`)
      .join("");

    const youtubeBtn = project.youtube
      ? `<button class="btn btn-youtube" onclick="openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Demo Video
        </button>`
      : "";

    const imageHtml = project.image
      ? `<img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />`
      : `<div style="color: var(--text-dim); font-size: 0.9rem;">No preview image</div>`;

    const playOverlay = project.youtube
      ? `<button class="youtube-play-btn" onclick="openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')" aria-label="Play Demo Video">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>`
      : "";

    return `
      <article class="featured-card">
        <div class="featured-media">
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
            <div class="featured-subtitle">${project.subtitle}</div>
            <div class="tag-list">${tagsHtml}</div>
            
            <p class="featured-desc"><strong>【概要】</strong> ${project.whatIsIt}</p>
            <div class="featured-why">
              <strong>【実装のポイント &amp; 解決した課題】</strong><br />
              ${project.whySpecial}
            </div>
            
            <div class="featured-highlights-box">
              <div class="highlights-title">Technical Highlights</div>
              <ul class="highlights-list">
                ${highlightsHtml}
              </ul>
            </div>
          </div>
          
          <div class="featured-actions">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub Repo
            </a>
            ${youtubeBtn}
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

  const filtered = otherProjects.filter(p => {
    if (filterTag === "all") return true;
    if (filterTag === "featured") return false;
    return p.tags.some(t => matchTag(t, filterTag));
  });

  if (filtered.length === 0) {
    if (filterTag === "featured") {
      container.innerHTML = `<div style="text-align: center; grid-column: 1/-1; padding: 30px; color: var(--text-dim);">代表作のみを表示しています</div>`;
    } else {
      container.innerHTML = `<div style="text-align: center; grid-column: 1/-1; padding: 30px; color: var(--text-dim);">該当するプロジェクトはありません</div>`;
    }
    return;
  }

  container.innerHTML = filtered.map(project => {
    const tagsHtml = project.tags
      .map(t => `<button type="button" class="tag-badge" onclick="filterByTag('${t}')">[ ${t} ]</button>`)
      .join("");

    const youtubeBtn = project.youtube
      ? `<button class="btn btn-sm btn-youtube" onclick="openVideoModal('${project.youtube}', '${escapeHtml(project.title)}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Demo
        </button>`
      : "";

    const colabBtn = project.colab
      ? `<a href="${project.colab}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3);">
          Colab
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
            <div class="other-subtitle">${project.subtitle}</div>
            <div class="tag-list">${tagsHtml}</div>
            <p class="other-summary">${project.summary}</p>
          </div>
          
          <div class="other-actions">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
              GitHub
            </a>
            ${youtubeBtn}
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
    const f = btn.getAttribute("data-filter").toLowerCase();
    if (f === tag.toLowerCase() || matchTag(tag, f)) {
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
  const t = tagInItem.toLowerCase();
  const s = searchTag.toLowerCase();
  
  if (s === "all") return true;
  if (s === "cpp" && (t === "c++" || t === "cpp")) return true;
  if (s === "c++" && (t === "c++" || t === "cpp")) return true;
  if (s === "juce" && t === "juce") return true;
  if (s === "dsp" && (t.includes("dsp") || t.includes("fft") || t.includes("reverb") || t.includes("synth") || t.includes("acoustics") || t.includes("additive") || t.includes("pitch"))) return true;
  if (s === "ai" && (t.includes("deep learning") || t.includes("ai") || t.includes("lstm") || t.includes("gan") || t.includes("cnn") || t.includes("torch") || t.includes("onnx") || t.includes("rave") || t.includes("music ai"))) return true;
  if (s === "rnbo" && (t.includes("rnbo") || t.includes("max/msp"))) return true;
  if (s === "python" && t === "python") return true;
  if (s === "hardware" && (t.includes("hardware") || t.includes("pico") || t.includes("sysex"))) return true;

  return t === s || t.includes(s) || s.includes(t);
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

  if (videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    titleEl.textContent = title ? `${title} (Demo)` : "Demonstration Video";
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
