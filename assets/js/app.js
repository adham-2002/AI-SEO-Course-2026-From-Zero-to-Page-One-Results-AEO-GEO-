/* ==========================================================================
   AI SEO Course 2026 — Interactive Editorial Reading Application
   Supports: Bilingual EN/AR (LTR/RTL), Light/Dark/Sepia Themes,
   Progress Tracking, Content Filtering, ScrollSpy TOC, Instant Search (⌘K)
   ========================================================================== */

(function () {
  'use strict';

  const UI_STRINGS = {
    en: {
      brandTitle: 'AI SEO 2026',
      brandSubtitle: 'SEO · AEO · GEO Master Guide',
      searchPlaceholder: 'Search 26 sections, 244 lectures, prompts & 2026 audits...',
      filterAll: 'All',
      filterCourse: 'Lectures',
      filterAudit: '2026 Audit',
      themeLabel: 'Reading Theme',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeSepia: 'Sepia',
      fontStyleLabel: 'Typeface',
      fontSans: 'Modern Sans',
      fontSerif: 'Book Serif',
      fontSizeLabel: 'Font Size',
      lineWidthLabel: 'Column Width',
      widthFocused: 'Focused',
      widthWide: 'Wide',
      widthFull: 'Full',
      curriculumHeading: 'Course Curriculum',
      filterSectionsPlaceholder: 'Filter sections...',
      viewAllSections: '📖 Read Full Continuous Book',
      viewPaginated: '📑 Back to Chapter View',
      resetProgress: 'Reset Reading Progress',
      resetConfirm: 'Reset all completed lecture checkmarks?',
      resumeBtn: 'Resume',
      resumePrefix: 'Resume reading:',
      onThisPage: 'On This Page',
      legendTitle: 'Callout Key',
      legLecture: 'Lecture',
      legTip: 'Tip',
      legWarn: 'Warning',
      legAnalogy: 'Analogy',
      legAction: 'Do This',
      legAudit: '2026 Audit',
      searchScopeAll: 'All Results',
      searchScopeLectures: '🎬 Lectures',
      searchScopeAudits: '🔄 2026 Audits',
      searchScopePrompts: '🧪 Prompts & Tools',
      searchNavHint: 'to navigate',
      searchSelectHint: 'to jump',
      searchCloseHint: 'to close',
      searchInputPlaceholder: 'Search lectures, keywords, tools, prompts, or 2026 fact-checks...',
      noResults: 'No matching lectures or sections found. Try another keyword.',
      markComplete: 'Mark Complete',
      completed: '✓ Completed',
      markSectionComplete: 'Mark Entire Section Complete',
      sectionCompleted: '✓ Section Completed',
      lecturesCount: 'lectures',
      minRead: 'min read',
      prevChapter: '← Previous Section',
      nextChapter: 'Next Section →',
      copyCode: 'Copy',
      copied: '✓ Copied',
      copyLinkTitle: 'Copy link to lecture',
      auditBadgeText: '2026 Senior Audit & Fact-Check',
      footerNote: '🏎️ AI SEO Course 2026: From Zero to Page-One Results (SEO, AEO & GEO) — Complete 26-Section Watch-Along & Primary-Source Fact-Check.',
      backToTop: '↑ Back to top',
      overviewBadge: 'Course Overview',
      allBookBadge: 'Complete 26-Section Book'
    },
    ar: {
      brandTitle: 'السيو والذكاء الاصطناعي 2026',
      brandSubtitle: 'الدليل الشامل لـ SEO و AEO و GEO',
      searchPlaceholder: 'ابحث في 26 قسماً، 244 محاضرة، الأوامر، وتدقيق 2026...',
      filterAll: 'الكل',
      filterCourse: 'المحاضرات',
      filterAudit: 'تدقيق 2026',
      themeLabel: 'مظهر القراءة',
      themeLight: 'نهاري',
      themeDark: 'ليلي',
      themeSepia: 'ورقي مريح',
      fontStyleLabel: 'نوع الخط',
      fontSans: 'نسخ حديث',
      fontSerif: 'خط كتاب كلاسيكي',
      fontSizeLabel: 'حجم الخط',
      lineWidthLabel: 'عرض الصفحة',
      widthFocused: 'مركّز',
      widthWide: 'واسع',
      widthFull: 'كامل',
      curriculumHeading: 'منهج الدورة الكامل',
      filterSectionsPlaceholder: 'تصفية الأقسام...',
      viewAllSections: '📖 قراءة الكتاب بالكامل في صفحة واحدة',
      viewPaginated: '📑 العودة لنظام الفصول',
      resetProgress: 'إعادة ضبط تقدم القراءة',
      resetConfirm: 'هل تريد مسح جميع علامات إكمال المحاضرات؟',
      resumeBtn: 'متابعة القراءة',
      resumePrefix: 'تابع من حيث توقفت:',
      onThisPage: 'في هذا الفصل',
      legendTitle: 'دليل الرموز',
      legLecture: 'محاضرة',
      legTip: 'نصيحة',
      legWarn: 'تحذير',
      legAnalogy: 'تشبيه',
      legAction: 'تطبيق عملي',
      legAudit: 'تدقيق 2026',
      searchScopeAll: 'كل النتائج',
      searchScopeLectures: '🎬 المحاضرات',
      searchScopeAudits: '🔄 مراجعات 2026',
      searchScopePrompts: '🧪 الأوامر والأدوات',
      searchNavHint: 'للتنقل',
      searchSelectHint: 'للانتقال',
      searchCloseHint: 'للإغلاق',
      searchInputPlaceholder: 'ابحث عن محاضرة، كلمة مفتاحية، أداة، أمر ذكاء اصطناعي، أو تدقيق...',
      noResults: 'لم يتم العثور على نتائج مطابقة. جرّب كلمة بحث أخرى.',
      markComplete: 'تحديد كمكتمل',
      completed: '✓ مكتمل',
      markSectionComplete: 'تحديد القسم بالكامل كمكتمل',
      sectionCompleted: '✓ تم إكمال القسم',
      lecturesCount: 'محاضرات',
      minRead: 'دقيقة قراءة',
      prevChapter: '→ القسم السابق',
      nextChapter: 'القسم التالي ←',
      copyCode: 'نسخ',
      copied: '✓ تم النسخ',
      copyLinkTitle: 'نسخ رابط المحاضرة',
      auditBadgeText: 'مراجعة الخبراء وتدقيق المصادر 2026',
      footerNote: '🏎️ دورة السيو والذكاء الاصطناعي 2026 (SEO, AEO & GEO) — الدليل الكامل لـ 26 قسماً مع التدقيق التقني لعام 2026.',
      backToTop: '↑ العودة للأعلى',
      overviewBadge: 'نظرة عامة وخريطة الدورة',
      allBookBadge: 'الكتاب الكامل (26 قسماً)'
    }
  };

  // Application State
  const state = {
    lang: localStorage.getItem('aiseo_lang') || 'en',
    theme: localStorage.getItem('aiseo_theme') || 'dark',
    fontSize: localStorage.getItem('aiseo_font_size') || 'md',
    fontStyle: localStorage.getItem('aiseo_font_style') || 'sans',
    lineWidth: localStorage.getItem('aiseo_line_width') || 'standard',
    filterMode: 'all', // 'all' | 'course' | 'audit'
    currentSectionId: 'overview',
    viewAllMode: false,
    completedLectures: new Set(JSON.parse(localStorage.getItem('aiseo_completed_lectures') || '[]')),
    searchScope: 'all',
    searchSelectedIdx: 0,
    searchResults: []
  };

  // DOM References
  const htmlEl = document.documentElement;
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const sectionNavList = document.getElementById('sectionNavList');
  const sectionFilterInput = document.getElementById('sectionFilterInput');
  const articleContainer = document.getElementById('articleContainer');
  const chapterPagination = document.getElementById('chapterPagination');
  const pageTocList = document.getElementById('pageTocList');
  const sectionLectureCounter = document.getElementById('sectionLectureCounter');
  const sectionProgressBarFill = document.getElementById('sectionProgressBarFill');
  const headerProgressText = document.getElementById('headerProgressText');
  const headerProgressCircle = document.getElementById('headerProgressCircle');
  const sidebarCompletionBadge = document.getElementById('sidebarCompletionBadge');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langFlag = document.getElementById('langFlag');
  const langLabel = document.getElementById('langLabel');
  const quickThemeBtn = document.getElementById('quickThemeBtn');
  const quickThemeIcon = document.getElementById('quickThemeIcon');
  const appearanceBtn = document.getElementById('appearanceBtn');
  const appearancePopover = document.getElementById('appearancePopover');
  const viewAllSectionsBtn = document.getElementById('viewAllSectionsBtn');
  const resetProgressBtn = document.getElementById('resetProgressBtn');
  const leftSidebar = document.getElementById('leftSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const openSearchBtn = document.getElementById('openSearchBtn');
  const searchModal = document.getElementById('searchModal');
  const searchModalInput = document.getElementById('searchModalInput');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  const resumeBanner = document.getElementById('resumeBanner');
  const resumeBannerLabel = document.getElementById('resumeBannerLabel');
  const resumeJumpBtn = document.getElementById('resumeJumpBtn');
  const resumeDismissBtn = document.getElementById('resumeDismissBtn');

  // Helper: Get current dataset
  function getCourseData() {
    if (state.lang === 'ar' && window.COURSE_DATA_AR && window.COURSE_DATA_AR.sections) {
      return window.COURSE_DATA_AR;
    }
    return window.COURSE_DATA_EN || { sections: [], totalLectures: 244 };
  }

  function t(key) {
    return (UI_STRINGS[state.lang] && UI_STRINGS[state.lang][key]) || UI_STRINGS.en[key] || key;
  }

  // ==========================================================================
  // Preferences & Theme Management
  // ==========================================================================

  function applyPreferences() {
    htmlEl.setAttribute('lang', state.lang);
    htmlEl.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
    htmlEl.setAttribute('data-theme', state.theme);
    htmlEl.setAttribute('data-font-size', state.fontSize);
    htmlEl.setAttribute('data-font-style', state.fontStyle);
    htmlEl.setAttribute('data-line-width', state.lineWidth);

    // Update theme icon
    const themeIcons = { light: '☀️', dark: '🌙', sepia: '📜' };
    quickThemeIcon.textContent = themeIcons[state.theme] || '🌙';

    // Update language toggle button (shows the target language to switch to)
    if (state.lang === 'en') {
      langFlag.textContent = '🇸🇦';
      langLabel.textContent = 'العربية';
    } else {
      langFlag.textContent = '🇺🇸';
      langLabel.textContent = 'English';
    }

    // Update active states in appearance popover
    document.querySelectorAll('[data-set-theme]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-theme') === state.theme);
    });
    document.querySelectorAll('[data-set-font-style]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-font-style') === state.fontStyle);
    });
    document.querySelectorAll('[data-set-font-size]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-font-size') === state.fontSize);
    });
    document.querySelectorAll('[data-set-line-width]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-line-width') === state.lineWidth);
    });

    // Update static i18n strings
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });
    if (searchModalInput) {
      searchModalInput.setAttribute('placeholder', t('searchInputPlaceholder'));
    }
    if (viewAllSectionsBtn) {
      viewAllSectionsBtn.textContent = state.viewAllMode ? t('viewPaginated') : t('viewAllSections');
    }
  }

  // ==========================================================================
  // Markdown to Semantic Editorial HTML Parser
  // ==========================================================================

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatInline(text) {
    if (!text) return '';
    // Protect inline code first
    const codeTokens = [];
    let processed = text.replace(/`([^`]+)`/g, (_, code) => {
      const idx = codeTokens.length;
      codeTokens.push(`<code>${escapeHtml(code)}</code>`);
      return `@@CODE_${idx}@@`;
    });

    // Links: [label](url)
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
      // Check if internal section anchor
      if (url.startsWith('#section-')) {
        const secMatch = url.match(/^#section-(\d+)/);
        if (secMatch) {
          return `<a href="#section-${secMatch[1]}" data-jump-section="section-${secMatch[1]}">${label}</a>`;
        }
      }
      if (url.startsWith('#')) {
        return `<a href="${url}">${label}</a>`;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });

    // Bare URLs not already inside href="" or >...</a>
    processed = processed.replace(/(^|[\s(])((https?:\/\/)[^\s<)]+)/g, (match, prefix, url) => {
      // Strip trailing punctuation like . or , or )
      let cleanUrl = url;
      let trailing = '';
      while (/[.,;:]$/.test(cleanUrl)) {
        trailing = cleanUrl.slice(-1) + trailing;
        cleanUrl = cleanUrl.slice(0, -1);
      }
      return `${prefix}<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer">${cleanUrl}</a>${trailing}`;
    });

    // Bold & Italic
    processed = processed.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');

    // Highlight Verdict Badges inside Audits
    processed = processed.replace(/✅/g, '<span class="verdict-icon">✅</span>');

    // Restore inline code
    processed = processed.replace(/@@CODE_(\d+)@@/g, (_, idx) => codeTokens[Number(idx)]);
    return processed;
  }

  function detectCalloutClass(text) {
    const trimmed = text.trim();
    if (/^(?:💡|>\s*💡)/.test(trimmed)) return 'callout-tip';
    if (/^(?:⚠️|❌|>\s*⚠️)/.test(trimmed)) return 'callout-warn';
    if (/^(?:🧠|>\s*🧠)/.test(trimmed)) return 'callout-analogy';
    if (/^(?:🛠️|🧪|>\s*🛠️)/.test(trimmed)) return 'callout-action';
    if (/^(?:🔗|>\s*🔗)/.test(trimmed)) return 'callout-resource';
    if (/^(?:🔬|🧐|📝|>\s*🔬|>\s*🧐|>\s*📝)/.test(trimmed)) return 'callout-fact';
    return null;
  }

  function renderSectionMarkdown(section) {
    const lines = section.content.split(/\r?\n/);
    let html = '';
    let i = 0;
    let currentZone = 'course'; // 'course' | 'audit'
    let zoneBuffer = [];

    function flushZone(zoneHtml, zoneType) {
      if (!zoneHtml.trim()) return '';
      return `<div class="content-zone zone-${zoneType}" data-zone="${zoneType}">${zoneHtml}</div>`;
    }

    let currentZoneHtml = '';

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      // Skip top H1 (already rendered in section hero card) or raw HTML center divs
      if (i === 0 && /^#\s+/.test(trimmed)) {
        i++;
        continue;
      }
      if (/^<\/?div/i.test(trimmed) || /^\[!\[/.test(trimmed)) {
        i++;
        continue;
      }

      // Empty line
      if (!trimmed) {
        i++;
        continue;
      }

      // Horizontal rule
      if (/^---+$/.test(trimmed)) {
        currentZoneHtml += '<hr />';
        i++;
        continue;
      }

      // Fenced Code Block
      if (trimmed.startsWith('```')) {
        const lang = trimmed.slice(3).trim() || 'text';
        i++;
        const codeLines = [];
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const rawCode = codeLines.join('\n');
        currentZoneHtml += `
          <div class="code-block-wrapper">
            <div class="code-block-header">
              <span>${escapeHtml(lang.toUpperCase())}</span>
              <button class="copy-code-btn" data-copy-code="${encodeURIComponent(rawCode)}">${t('copyCode')}</button>
            </div>
            <pre><code>${escapeHtml(rawCode)}</code></pre>
          </div>
        `;
        continue;
      }

      // H2 Headings: Lecture, Recap, Objector's Review, or Generic H2
      if (/^##\s+/.test(trimmed)) {
        const h2Text = trimmed.replace(/^##\s+/, '');

        // Check if switching into Objector's Review (2026 Audit)
        if (h2Text.includes('🔄')) {
          html += flushZone(currentZoneHtml, currentZone);
          currentZone = 'audit';
          currentZoneHtml = '';
          const anchorId = `${section.id}-audit`;
          currentZoneHtml += `
            <div id="${anchorId}" class="audit-section-header scroll-target">
              <h2>${formatInline(h2Text)}</h2>
              <span class="audit-badge">${t('auditBadgeText')}</span>
            </div>
          `;
          i++;
          continue;
        }

        // Check if Section Recap
        if (h2Text.includes('✅')) {
          const anchorId = `${section.id}-recap`;
          currentZoneHtml += `
            <div id="${anchorId}" class="recap-section-header scroll-target">
              <h2>${formatInline(h2Text)}</h2>
            </div>
          `;
          i++;
          continue;
        }

        // Check if Lecture Heading (🎬)
        if (h2Text.includes('🎬')) {
          // Extract lecture number if present
          const numMatch = h2Text.match(/(?:Lecture|المحاضرة)\s+(\d+[a-z]?)/i);
          const lecNum = numMatch ? numMatch[1] : String(i);
          const lectureId = `${section.id}-lec-${lecNum}`;
          const isDone = state.completedLectures.has(lectureId);

          // Split kicker & title
          const parts = h2Text.split(/\s+—\s+|\s+-\s+/);
          const kicker = parts.length > 1 ? parts[0] : '🎬';
          const mainTitle = parts.length > 1 ? parts.slice(1).join(' — ') : h2Text;

          currentZoneHtml += `
            <div id="${lectureId}" class="lecture-header-card scroll-target" data-lecture-id="${lectureId}">
              <div class="lecture-header-main">
                <span class="lecture-kicker">${formatInline(kicker)}</span>
                <h2 class="lecture-title">${formatInline(mainTitle)}</h2>
              </div>
              <div class="lecture-actions">
                <button class="lecture-check-btn ${isDone ? 'done' : ''}" data-toggle-lecture="${lectureId}">
                  ${isDone ? t('completed') : t('markComplete')}
                </button>
                <button class="anchor-copy-btn" data-copy-anchor="${lectureId}" title="${t('copyLinkTitle')}">🔗</button>
              </div>
            </div>
          `;
          i++;
          continue;
        }

        // Standard H2
        const slug = `${section.id}-h2-${i}`;
        currentZoneHtml += `<h2 id="${slug}" class="scroll-target">${formatInline(h2Text)}</h2>`;
        i++;
        continue;
      }

      // H3 & H4 Headings
      if (/^###\s+/.test(trimmed)) {
        const h3Text = trimmed.replace(/^###\s+/, '');
        const slug = `${section.id}-h3-${i}`;
        currentZoneHtml += `<h3 id="${slug}">${formatInline(h3Text)}</h3>`;
        i++;
        continue;
      }
      if (/^####\s+/.test(trimmed)) {
        const h4Text = trimmed.replace(/^####\s+/, '');
        currentZoneHtml += `<h4>${formatInline(h4Text)}</h4>`;
        i++;
        continue;
      }

      // Markdown Table
      if (trimmed.startsWith('|') && i + 1 < lines.length && /^\s*\|[\s\-:|]+\|\s*$/.test(lines[i + 1])) {
        const headerCells = trimmed
          .replace(/^\||\|$/g, '')
          .split('|')
          .map(c => c.trim());
        i += 2; // skip header & separator row
        const bodyRows = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          const rowCells = lines[i]
            .trim()
            .replace(/^\||\|$/g, '')
            .split('|')
            .map(c => c.trim());
          bodyRows.push(rowCells);
          i++;
        }

        let tableHtml = '<div class="table-scroll-wrap"><table><thead><tr>';
        headerCells.forEach(cell => {
          tableHtml += `<th>${formatInline(cell)}</th>`;
        });
        tableHtml += '</tr></thead><tbody>';
        bodyRows.forEach(row => {
          tableHtml += '<tr>';
          row.forEach(cell => {
            tableHtml += `<td>${formatInline(cell)}</td>`;
          });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>';
        currentZoneHtml += tableHtml;
        continue;
      }

      // Blockquote (>)
      if (trimmed.startsWith('>')) {
        const quoteLines = [];
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
          i++;
        }
        const joinedQuote = quoteLines.join('\n');
        // If switching into Objector's Review intro note, put it in audit zone
        if (joinedQuote.includes('🔄') && currentZone === 'course') {
          html += flushZone(currentZoneHtml, currentZone);
          currentZone = 'audit';
          currentZoneHtml = '';
        }
        const calloutType = detectCalloutClass(joinedQuote) || 'callout-fact';
        const paragraphs = joinedQuote
          .split(/\n{2,}/)
          .map(p => `<p>${formatInline(p.replace(/\n/g, '<br/>'))}</p>`)
          .join('');
        currentZoneHtml += `<div class="semantic-callout ${calloutType}">${paragraphs}</div>`;
        continue;
      }

      // Unordered or Ordered Lists
      if (/^(\s*)([-*+]|\d+\.)\s+/.test(line)) {
        const listLines = [];
        while (
          i < lines.length &&
          (/^(\s*)([-*+]|\d+\.)\s+/.test(lines[i]) || (lines[i].trim() && /^\s{2,}/.test(lines[i])))
        ) {
          listLines.push(lines[i]);
          i++;
        }
        currentZoneHtml += renderListBlock(listLines);
        continue;
      }

      // Paragraph (or Semantic Callout Paragraph)
      const paraLines = [];
      while (
        i < lines.length &&
        lines[i].trim() &&
        !/^(#{1,4}\s|```|---|\||>\s?|(\s*)([-*+]|\d+\.)\s+)/.test(lines[i].trim())
      ) {
        paraLines.push(lines[i].trim());
        i++;
      }
      const paraText = paraLines.join(' ');
      const calloutClass = detectCalloutClass(paraText);
      if (calloutClass) {
        currentZoneHtml += `<div class="semantic-callout ${calloutClass}"><p>${formatInline(paraText)}</p></div>`;
      } else {
        currentZoneHtml += `<p>${formatInline(paraText)}</p>`;
      }
    }

    html += flushZone(currentZoneHtml, currentZone);
    return html;
  }

  function renderListBlock(listLines) {
    const isOrdered = /^\s*\d+\.\s+/.test(listLines[0]);
    const tag = isOrdered ? 'ol' : 'ul';
    let html = `<${tag}>`;
    let currentItem = '';

    listLines.forEach(rawLine => {
      const topMatch = rawLine.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
      if (topMatch) {
        const indent = topMatch[1].length;
        const content = topMatch[3];
        if (indent >= 2 && currentItem) {
          currentItem += `<br/><span style="display:inline-block;padding-inline-start:1rem;">• ${formatInline(content)}</span>`;
        } else {
          if (currentItem) {
            html += `<li>${currentItem}</li>`;
          }
          currentItem = formatInline(content);
        }
      } else if (currentItem) {
        currentItem += ' ' + formatInline(rawLine.trim());
      }
    });
    if (currentItem) {
      html += `<li>${currentItem}</li>`;
    }
    html += `</${tag}>`;
    return html;
  }

  // ==========================================================================
  // Section & Sidebar Rendering
  // ==========================================================================

  function isSectionCompleted(section) {
    if (!section.lectures || section.lectures.length === 0) return false;
    return section.lectures.every(lec => state.completedLectures.has(lec.id));
  }

  function renderLeftSidebar(filterQuery = '') {
    const data = getCourseData();
    const q = filterQuery.trim().toLowerCase();
    let navHtml = '';

    data.sections.forEach(sec => {
      if (q && !sec.title.toLowerCase().includes(q) && !sec.badge.toLowerCase().includes(q)) {
        return;
      }
      const isActive = !state.viewAllMode && state.currentSectionId === sec.id;
      const isDone = isSectionCompleted(sec);
      const doneCount = (sec.lectures || []).filter(l => state.completedLectures.has(l.id)).length;
      const totalLec = (sec.lectures || []).length;
      const metaText = totalLec > 0
        ? `${doneCount}/${totalLec} ${t('lecturesCount')} · ${sec.readingMinutes} ${t('minRead')}`
        : `${sec.readingMinutes} ${t('minRead')}`;

      navHtml += `
        <button class="nav-section-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" data-section-id="${sec.id}">
          <span class="nav-sec-num">${isDone ? '✓' : escapeHtml(sec.shortNum)}</span>
          <span class="nav-sec-info">
            <span class="nav-sec-title">${escapeHtml(sec.title)}</span>
            <span class="nav-sec-meta">${escapeHtml(metaText)}</span>
          </span>
        </button>
      `;
    });

    sectionNavList.innerHTML = navHtml;
  }

  function renderSectionHero(section) {
    const totalLec = (section.lectures || []).length;
    const isDone = isSectionCompleted(section);

    let actionBtnHtml = '';
    if (totalLec > 0) {
      actionBtnHtml = `
        <div class="section-hero-actions">
          <button class="mark-section-btn ${isDone ? 'completed' : ''}" data-mark-all-section="${section.id}">
            ${isDone ? t('sectionCompleted') : t('markSectionComplete')}
          </button>
          <span class="section-meta-pills">
            🎬 ${totalLec} ${t('lecturesCount')} · ⏱️ ~${section.readingMinutes} ${t('minRead')}
          </span>
        </div>
      `;
    }

    return `
      <header class="section-hero-card">
        <div class="section-hero-top">
          <span class="section-badge-pill">${escapeHtml(section.badge)}</span>
          ${totalLec === 0 ? `<span class="section-meta-pills">⏱️ ~${section.readingMinutes} ${t('minRead')}</span>` : ''}
        </div>
        <h1 class="section-hero-title">${escapeHtml(section.title)}</h1>
        ${section.subtitle ? `<p class="section-hero-subtitle">${escapeHtml(section.subtitle)}</p>` : ''}
        ${actionBtnHtml}
      </header>
    `;
  }

  function renderOverviewGrid() {
    const data = getCourseData();
    const numberedSections = data.sections.filter(s => s.id.startsWith('section-'));
    let gridHtml = '<div class="overview-grid">';
    numberedSections.forEach(sec => {
      const doneCount = (sec.lectures || []).filter(l => state.completedLectures.has(l.id)).length;
      const totalLec = (sec.lectures || []).length;
      gridHtml += `
        <div class="overview-sec-card" data-jump-section="${sec.id}">
          <div>
            <div class="overview-sec-card-top">
              <span class="overview-sec-num">${escapeHtml(sec.badge)}</span>
              <span>${doneCount === totalLec && totalLec > 0 ? '✅' : '→'}</span>
            </div>
            <h3 class="overview-sec-title">${escapeHtml(sec.title)}</h3>
          </div>
          <div class="overview-sec-meta">
            <span>🎬 ${totalLec} ${t('lecturesCount')}</span>
            <span>⏱️ ${sec.readingMinutes} ${t('minRead')}</span>
          </div>
        </div>
      `;
    });
    gridHtml += '</div>';
    return gridHtml;
  }

  function renderMainContent(scrollToTop = true) {
    const data = getCourseData();
    if (!data.sections || data.sections.length === 0) return;

    if (state.viewAllMode) {
      // Continuous Full Book Mode
      let fullHtml = '';
      data.sections.forEach(sec => {
        fullHtml += `<section id="book-${sec.id}" class="book-chapter-block">`;
        fullHtml += renderSectionHero(sec);
        fullHtml += renderSectionMarkdown(sec);
        fullHtml += `</section><hr/>`;
      });
      articleContainer.innerHTML = fullHtml;
      chapterPagination.innerHTML = '';
      renderRightTocForBook(data.sections);
    } else {
      const currentIdx = data.sections.findIndex(s => s.id === state.currentSectionId);
      const section = currentIdx >= 0 ? data.sections[currentIdx] : data.sections[0];
      state.currentSectionId = section.id;

      let contentHtml = renderSectionHero(section);
      contentHtml += renderSectionMarkdown(section);

      // If overview tab, also append interactive section cards grid
      if (section.id === 'overview') {
        contentHtml += renderOverviewGrid();
      }

      articleContainer.innerHTML = contentHtml;

      // Render Bottom Pagination (Prev / Next)
      const prevSec = currentIdx > 0 ? data.sections[currentIdx - 1] : null;
      const nextSec = currentIdx < data.sections.length - 1 ? data.sections[currentIdx + 1] : null;

      let pagHtml = '';
      if (prevSec) {
        pagHtml += `
          <a href="#${prevSec.id}" class="page-nav-card prev" data-jump-section="${prevSec.id}">
            <span class="page-nav-dir">${t('prevChapter')}</span>
            <span class="page-nav-title">${escapeHtml(prevSec.badge)}: ${escapeHtml(prevSec.title)}</span>
          </a>
        `;
      } else {
        pagHtml += '<div></div>';
      }
      if (nextSec) {
        pagHtml += `
          <a href="#${nextSec.id}" class="page-nav-card next" data-jump-section="${nextSec.id}">
            <span class="page-nav-dir">${t('nextChapter')}</span>
            <span class="page-nav-title">${escapeHtml(nextSec.badge)}: ${escapeHtml(nextSec.title)}</span>
          </a>
        `;
      }
      chapterPagination.innerHTML = pagHtml;

      renderRightToc(section);
    }

    applyFilterModeToDOM();
    updateGlobalProgressUI();
    renderLeftSidebar(sectionFilterInput ? sectionFilterInput.value : '');

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function renderRightToc(section) {
    const lectures = section.lectures || [];
    const doneCount = lectures.filter(l => state.completedLectures.has(l.id)).length;

    if (lectures.length > 0) {
      sectionLectureCounter.textContent = `${doneCount}/${lectures.length}`;
      const pct = Math.round((doneCount / lectures.length) * 100);
      sectionProgressBarFill.style.width = `${pct}%`;
    } else {
      sectionLectureCounter.textContent = '';
      sectionProgressBarFill.style.width = '100%';
    }

    let tocHtml = '';
    lectures.forEach(lec => {
      const isDone = state.completedLectures.has(lec.id);
      tocHtml += `
        <li>
          <a href="#${lec.id}" class="toc-link ${isDone ? 'done' : ''}" data-toc-target="${lec.id}">
            <span class="toc-status-dot">${isDone ? '✓' : '🎬'}</span>
            <span>${escapeHtml(lec.shortTitle)}</span>
          </a>
        </li>
      `;
    });

    if (section.hasRecap) {
      tocHtml += `
        <li>
          <a href="#${section.id}-recap" class="toc-link" data-toc-target="${section.id}-recap">
            <span>✅</span>
            <span>${state.lang === 'ar' ? 'ملخص القسم' : 'Section Recap'}</span>
          </a>
        </li>
      `;
    }

    if (section.hasAudit) {
      tocHtml += `
        <li>
          <a href="#${section.id}-audit" class="toc-link" data-toc-target="${section.id}-audit">
            <span>🔄</span>
            <span>${state.lang === 'ar' ? 'مراجعة وتدقيق 2026' : '2026 Practitioner Audit'}</span>
          </a>
        </li>
      `;
    }

    pageTocList.innerHTML = tocHtml;
  }

  function renderRightTocForBook(sections) {
    sectionLectureCounter.textContent = '26';
    let tocHtml = '';
    sections.forEach(sec => {
      tocHtml += `
        <li>
          <a href="#book-${sec.id}" class="toc-link" data-toc-target="book-${sec.id}">
            <span>${escapeHtml(sec.shortNum)}</span>
            <span>${escapeHtml(sec.title)}</span>
          </a>
        </li>
      `;
    });
    pageTocList.innerHTML = tocHtml;
  }

  function applyFilterModeToDOM() {
    document.querySelectorAll('.filter-mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === state.filterMode);
    });

    document.querySelectorAll('.content-zone').forEach(zone => {
      const zType = zone.getAttribute('data-zone');
      if (state.filterMode === 'all') {
        zone.classList.remove('hidden');
      } else if (state.filterMode === 'course') {
        zone.classList.toggle('hidden', zType !== 'course');
      } else if (state.filterMode === 'audit') {
        zone.classList.toggle('hidden', zType !== 'audit');
      }
    });
  }

  function updateGlobalProgressUI() {
    const data = getCourseData();
    const total = data.totalLectures || 244;
    const completedCount = state.completedLectures.size;
    const pct = Math.min(100, Math.round((completedCount / total) * 100));

    headerProgressText.textContent = `${completedCount} / ${total}`;
    sidebarCompletionBadge.textContent = `${pct}%`;

    // SVG circle circumference for r=9 is 2 * PI * 9 = 56.55
    const circumference = 56.55;
    const offset = circumference - (pct / 100) * circumference;
    if (headerProgressCircle) {
      headerProgressCircle.style.strokeDashoffset = String(offset);
    }
  }

  function saveCompletedLectures() {
    localStorage.setItem('aiseo_completed_lectures', JSON.stringify(Array.from(state.completedLectures)));
  }

  // ==========================================================================
  // Instant Search Engine (⌘K / Ctrl+K)
  // ==========================================================================

  function runSearch(query) {
    const data = getCourseData();
    const q = query.trim().toLowerCase();
    const results = [];

    data.sections.forEach(sec => {
      const lines = sec.content.split(/\r?\n/);
      let currentHeadingTitle = sec.title;
      let currentAnchorId = sec.id;
      let currentBlockType = 'section'; // 'lecture' | 'audit' | 'prompt' | 'section'

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        if (/^##\s+/.test(line)) {
          const h2 = line.replace(/^##\s+/, '');
          currentHeadingTitle = h2;
          if (h2.includes('🎬')) {
            const numMatch = h2.match(/(?:Lecture|المحاضرة)\s+(\d+[a-z]?)/i);
            const lecNum = numMatch ? numMatch[1] : String(i);
            currentAnchorId = `${sec.id}-lec-${lecNum}`;
            currentBlockType = 'lecture';
          } else if (h2.includes('🔄')) {
            currentAnchorId = `${sec.id}-audit`;
            currentBlockType = 'audit';
          } else if (h2.includes('✅')) {
            currentAnchorId = `${sec.id}-recap`;
            currentBlockType = 'lecture';
          }
        }

        // Scope filter check
        if (state.searchScope === 'lecture' && currentBlockType !== 'lecture') continue;
        if (state.searchScope === 'audit' && currentBlockType !== 'audit') continue;
        if (state.searchScope === 'prompt' && !/(prompt|أمر|🛠️|🧪|tool|أداة)/i.test(line)) continue;

        if (!q) {
          // When query is empty, show major lectures/audits as quick links
          if (/^##\s+/.test(line) && results.length < 25) {
            results.push({
              sectionId: sec.id,
              sectionBadge: sec.badge,
              title: currentHeadingTitle,
              anchorId: currentAnchorId,
              snippet: sec.title
            });
          }
          continue;
        }

        const idx = line.toLowerCase().indexOf(q);
        if (idx !== -1) {
          const start = Math.max(0, idx - 55);
          const end = Math.min(line.length, idx + q.length + 85);
          let rawSnippet = (start > 0 ? '...' : '') + line.slice(start, end) + (end < line.length ? '...' : '');
          const safeSnippet = escapeHtml(rawSnippet).replace(
            new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'),
            '<mark>$1</mark>'
          );

          results.push({
            sectionId: sec.id,
            sectionBadge: sec.badge,
            title: currentHeadingTitle,
            anchorId: currentAnchorId,
            snippet: safeSnippet
          });

          if (results.length >= 45) break;
        }
      }
    });

    state.searchResults = results;
    state.searchSelectedIdx = 0;
    renderSearchResults();
  }

  function renderSearchResults() {
    if (state.searchResults.length === 0) {
      searchResultsContainer.innerHTML = `<div style="padding:2rem;text-align:center;color:var(--text-muted);">${t('noResults')}</div>`;
      return;
    }

    let html = '';
    state.searchResults.forEach((res, idx) => {
      html += `
        <div class="search-result-item ${idx === state.searchSelectedIdx ? 'selected' : ''}" data-search-idx="${idx}">
          <div class="search-res-top">
            <span class="search-res-sec">${escapeHtml(res.sectionBadge)}</span>
          </div>
          <div class="search-res-title">${escapeHtml(res.title)}</div>
          <div class="search-res-snippet">${res.snippet}</div>
        </div>
      `;
    });
    searchResultsContainer.innerHTML = html;
  }

  function jumpToSearchResult(idx) {
    const res = state.searchResults[idx];
    if (!res) return;
    closeSearchModal();
    state.viewAllMode = false;
    state.currentSectionId = res.sectionId;
    renderMainContent(false);

    setTimeout(() => {
      const targetEl = document.getElementById(res.anchorId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  }

  function openSearchModal() {
    searchModal.classList.remove('hidden');
    searchModalInput.value = '';
    runSearch('');
    setTimeout(() => searchModalInput.focus(), 30);
  }

  function closeSearchModal() {
    searchModal.classList.add('hidden');
  }

  // ==========================================================================
  // Event Listeners & ScrollSpy
  // ==========================================================================

  function setupEventListeners() {
    // Language Switcher
    langToggleBtn.addEventListener('click', () => {
      state.lang = state.lang === 'en' ? 'ar' : 'en';
      localStorage.setItem('aiseo_lang', state.lang);
      applyPreferences();
      renderMainContent(false);
    });

    // Quick Theme Cycle
    quickThemeBtn.addEventListener('click', () => {
      const order = ['dark', 'light', 'sepia'];
      const nextIdx = (order.indexOf(state.theme) + 1) % order.length;
      state.theme = order[nextIdx];
      localStorage.setItem('aiseo_theme', state.theme);
      applyPreferences();
    });

    // Appearance Popover Toggle
    appearanceBtn.addEventListener('click', e => {
      e.stopPropagation();
      appearancePopover.classList.toggle('hidden');
    });

    document.addEventListener('click', e => {
      if (!appearancePopover.contains(e.target) && e.target !== appearanceBtn) {
        appearancePopover.classList.add('hidden');
      }
    });

    // Theme, Font Style, Font Size, Line Width buttons inside Popover
    document.querySelectorAll('[data-set-theme]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.theme = btn.getAttribute('data-set-theme');
        localStorage.setItem('aiseo_theme', state.theme);
        applyPreferences();
      });
    });

    document.querySelectorAll('[data-set-font-style]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.fontStyle = btn.getAttribute('data-set-font-style');
        localStorage.setItem('aiseo_font_style', state.fontStyle);
        applyPreferences();
      });
    });

    document.querySelectorAll('[data-set-font-size]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.fontSize = btn.getAttribute('data-set-font-size');
        localStorage.setItem('aiseo_font_size', state.fontSize);
        applyPreferences();
      });
    });

    document.querySelectorAll('[data-set-line-width]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lineWidth = btn.getAttribute('data-set-line-width');
        localStorage.setItem('aiseo_line_width', state.lineWidth);
        applyPreferences();
      });
    });

    // Filter Mode Buttons (All | Course | 2026 Audit)
    document.querySelectorAll('.filter-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.filterMode = btn.getAttribute('data-filter');
        applyFilterModeToDOM();
      });
    });

    // Left Sidebar Section Click
    sectionNavList.addEventListener('click', e => {
      const btn = e.target.closest('[data-section-id]');
      if (!btn) return;
      state.viewAllMode = false;
      state.currentSectionId = btn.getAttribute('data-section-id');
      localStorage.setItem('aiseo_last_section', state.currentSectionId);
      closeMobileSidebar();
      renderMainContent(true);
    });

    // Section Filter Input
    sectionFilterInput.addEventListener('input', () => {
      renderLeftSidebar(sectionFilterInput.value);
    });

    // View All Continuous Book Toggle
    viewAllSectionsBtn.addEventListener('click', () => {
      state.viewAllMode = !state.viewAllMode;
      applyPreferences();
      closeMobileSidebar();
      renderMainContent(true);
    });

    // Reset Progress Button
    resetProgressBtn.addEventListener('click', () => {
      if (confirm(t('resetConfirm'))) {
        state.completedLectures.clear();
        saveCompletedLectures();
        renderMainContent(false);
      }
    });

    // Mobile Sidebar Drawer
    mobileMenuBtn.addEventListener('click', () => {
      leftSidebar.classList.toggle('open');
      sidebarBackdrop.classList.toggle('hidden', !leftSidebar.classList.contains('open'));
    });

    sidebarBackdrop.addEventListener('click', closeMobileSidebar);

    // Delegated Clicks inside Main Content Area (Lecture Checkboxes, Copy Code, Jump Links)
    document.getElementById('mainContentArea').addEventListener('click', e => {
      // Toggle single lecture completion
      const lecBtn = e.target.closest('[data-toggle-lecture]');
      if (lecBtn) {
        const lecId = lecBtn.getAttribute('data-toggle-lecture');
        if (state.completedLectures.has(lecId)) {
          state.completedLectures.delete(lecId);
        } else {
          state.completedLectures.add(lecId);
        }
        saveCompletedLectures();
        const isDone = state.completedLectures.has(lecId);
        lecBtn.classList.toggle('done', isDone);
        lecBtn.textContent = isDone ? t('completed') : t('markComplete');

        const data = getCourseData();
        const currentSec = data.sections.find(s => s.id === state.currentSectionId);
        if (currentSec) renderRightToc(currentSec);
        updateGlobalProgressUI();
        renderLeftSidebar(sectionFilterInput.value);
        return;
      }

      // Mark entire section complete
      const secAllBtn = e.target.closest('[data-mark-all-section]');
      if (secAllBtn) {
        const secId = secAllBtn.getAttribute('data-mark-all-section');
        const data = getCourseData();
        const sec = data.sections.find(s => s.id === secId);
        if (sec && sec.lectures) {
          const allDone = isSectionCompleted(sec);
          sec.lectures.forEach(l => {
            if (allDone) state.completedLectures.delete(l.id);
            else state.completedLectures.add(l.id);
          });
          saveCompletedLectures();
          renderMainContent(false);
        }
        return;
      }

      // Copy Code / Prompt
      const copyBtn = e.target.closest('[data-copy-code]');
      if (copyBtn) {
        const raw = decodeURIComponent(copyBtn.getAttribute('data-copy-code'));
        navigator.clipboard.writeText(raw).then(() => {
          copyBtn.textContent = t('copied');
          setTimeout(() => {
            copyBtn.textContent = t('copyCode');
          }, 1600);
        });
        return;
      }

      // Copy Lecture Anchor Link
      const anchorBtn = e.target.closest('[data-copy-anchor]');
      if (anchorBtn) {
        const anchor = anchorBtn.getAttribute('data-copy-anchor');
        const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
        navigator.clipboard.writeText(url);
        anchorBtn.textContent = '✓';
        setTimeout(() => {
          anchorBtn.textContent = '🔗';
        }, 1400);
        return;
      }

      // Jump to Section Card / Link
      const jumpEl = e.target.closest('[data-jump-section]');
      if (jumpEl) {
        e.preventDefault();
        const targetSec = jumpEl.getAttribute('data-jump-section');
        state.viewAllMode = false;
        state.currentSectionId = targetSec;
        localStorage.setItem('aiseo_last_section', state.currentSectionId);
        renderMainContent(true);
      }
    });

    // Brand Link -> Overview
    document.getElementById('brandLink').addEventListener('click', e => {
      e.preventDefault();
      state.viewAllMode = false;
      state.currentSectionId = 'overview';
      renderMainContent(true);
    });

    // Back to Top
    document.getElementById('backToTopLink').addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search Modal Triggers
    openSearchBtn.addEventListener('click', openSearchModal);
    closeSearchModalBtn.addEventListener('click', closeSearchModal);
    searchModal.addEventListener('click', e => {
      if (e.target === searchModal) closeSearchModal();
    });

    searchModalInput.addEventListener('input', () => {
      runSearch(searchModalInput.value);
    });

    document.querySelectorAll('.search-scope-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.search-scope-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.searchScope = btn.getAttribute('data-scope');
        runSearch(searchModalInput.value);
      });
    });

    searchResultsContainer.addEventListener('click', e => {
      const item = e.target.closest('[data-search-idx]');
      if (item) {
        jumpToSearchResult(Number(item.getAttribute('data-search-idx')));
      }
    });

    // Global Keyboard Shortcuts (Ctrl+K / ⌘K, Arrows in Search)
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchModal.classList.contains('hidden')) openSearchModal();
        else closeSearchModal();
        return;
      }

      if (!searchModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
          closeSearchModal();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          state.searchSelectedIdx = Math.min(state.searchResults.length - 1, state.searchSelectedIdx + 1);
          renderSearchResults();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          state.searchSelectedIdx = Math.max(0, state.searchSelectedIdx - 1);
          renderSearchResults();
        } else if (e.key === 'Enter' && state.searchResults.length > 0) {
          e.preventDefault();
          jumpToSearchResult(state.searchSelectedIdx);
        }
      }
    });

    // Scroll Progress & Right TOC ScrollSpy
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      scrollProgressBar.style.width = `${progress}%`;

      // Highlight active heading in Right TOC
      const targets = document.querySelectorAll('.scroll-target, .book-chapter-block');
      let currentActiveId = null;
      targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          currentActiveId = el.id;
        }
      });

      if (currentActiveId) {
        document.querySelectorAll('.toc-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-toc-target') === currentActiveId);
        });
      }
    }, { passive: true });
  }

  function closeMobileSidebar() {
    leftSidebar.classList.remove('open');
    sidebarBackdrop.classList.add('hidden');
  }

  // Check if user has a saved section to resume
  function checkResumeReading() {
    const savedSec = localStorage.getItem('aiseo_last_section');
    if (savedSec && savedSec !== 'overview') {
      const data = getCourseData();
      const found = data.sections.find(s => s.id === savedSec);
      if (found) {
        resumeBanner.classList.remove('hidden');
        resumeBannerLabel.textContent = `${t('resumePrefix')} ${found.badge} — ${found.title}`;
        resumeJumpBtn.onclick = () => {
          state.currentSectionId = savedSec;
          resumeBanner.classList.add('hidden');
          renderMainContent(true);
        };
        resumeDismissBtn.onclick = () => {
          resumeBanner.classList.add('hidden');
        };
      }
    }
  }

  // Initialize App
  function init() {
    applyPreferences();
    setupEventListeners();
    renderMainContent(true);
    checkResumeReading();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
