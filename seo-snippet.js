// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.girouettebooks.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.girouettebooks.com/","title_tag":"Shahnameh translation & Persian literature | Girouette Books","meta_description":"Complete five-volume modern English translation of Ferdowsi’s epic poem Shahnameh by Josiane Cohanim, preserving Iranian heritage, myths and legends."},{"page_url":"https://www.girouettebooks.com/our-books-complete-shahnameh-translation","title_tag":"Complete Shahnameh translation in English | Girouette Books","meta_description":"Discover the complete five-volume modern English translation of Ferdowsi’s epic poem Shahnameh by Josiane Cohanim, a landmark of Persian literature."},{"page_url":"https://www.girouettebooks.com/shahnameh-translator-josianecohanim","title_tag":"Ferdowsi epic Shahnameh translator Josiane Cohanim | Girouette","meta_description":"Learn about Josiane Cohanim, translator of Ferdowsi’s epic poem Shahnameh, dedicated to preserving Iranian heritage, Khorasan history, myths and legends."},{"page_url":"https://www.girouettebooks.com/about-7","title_tag":"Ferdowsi epic Shahnameh & Persian literature | Girouette","meta_description":"Explore Ferdowsi’s Shahnameh, the Persian epic poem of Iranian heritage, Khorasan history, myths and legends that shaped Persian literature and identity."},{"page_url":"https://www.girouettebooks.com/about-9","title_tag":"Modern English Shahnameh translation | Girouette Books","meta_description":"About the modern English translation of Ferdowsi’s Shahnameh by Josiane Cohanim, a complete five-volume epic poem rooted in Persian literature and culture."},{"page_url":"https://www.girouettebooks.com/contact-us","title_tag":"Contact Girouette Books | Shahnameh translation in English","meta_description":"Contact Girouette Books about the complete five-volume modern English translation of Ferdowsi’s epic poem Shahnameh by Josiane Cohanim."},{"page_url":"https://www.girouettebooks.com/home-archived","title_tag":"Shahnameh translation archive | Girouette Books","meta_description":"Archived Girouette Books page related to the complete modern English translation of Ferdowsi’s epic poem Shahnameh and its Persian literary heritage."}],"keywords":["Shahnameh translation","Persian literature","Ferdowsi epic","Josiane Cohanim","Iranian heritage","Khorasan history","Epic poem","Complete five-volume","Modern English translation","Myths and legends"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://www.girouettebooks.com/#book",
  "url": "https://www.girouettebooks.com/",
  "name": "The Shahnameh – Complete English Translation",
  "alternateName": "The Shahnameh - Complete English Translation by Josiane Cohanim",
  "description": "A complete five-volume modern English translation in non-rhyming verse of Ferdowsi\u2019s epic poem, the Shahnameh, translated by Josiane Cohanim and published by Girouette Books.",
  "author": {
    "@type": "Person",
    "name": "Josiane Cohanim",
    "description": "Translator of the complete five-volume English edition of Ferdowsi\u2019s Shahnameh. Born in Iran, raised in Switzerland, and educated in the United States, with degrees in French and Spanish literature from Wheaton College and a Master\u2019s in French literature from Stanford University.",
    "sameAs": [
      "https://www.girouettebooks.com/shahnameh-translator-josianecohanim"
    ]
  },
  "bookFormat": "https://schema.org/Book",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "BookSeries",
    "name": "The Shahnameh - Complete English Translation",
    "description": "A complete unabridged five-volume English translation of Ferdowsi\u2019s Shahnameh, including a revised Volume I with a comprehensive index.",
    "url": "https://www.girouettebooks.com/our-books-complete-shahnameh-translation"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Girouette Books",
    "url": "https://www.girouettebooks.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/d775e0_548f727f681c42059cc2c2567cd9ced7~mv2.jpg/v1/crop/x_7,y_0,w_1009,h_1009/fill/w_126,h_125,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Girouette%25203_edited.jpg"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-310-968-1975",
      "email": "info@girouettebooks.com"
    }
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/d775e0_f77136931e914f97bd109f1cf9d22d76~mv2.jpg/v1/crop/x_0,y_0,w_1841,h_1500/fill/w_602,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cover%20page%20Shahnameh.jpg"
    }
  ],
  "about": [
    {
      "@type": "Thing",
      "name": "Shahnameh",
      "description": "The Persian Book of Kings, an epic poem by Ferdowsi completed in 1010, chronicling the myths, legends, and history of Iran."
    },
    {
      "@type": "Person",
      "name": "Ferdowsi",
      "description": "Persian poet (c. 940\u20131020) and author of the Shahnameh, one of the great epics of world literature.",
      "sameAs": [
        "https://www.girouettebooks.com/about-7",
        "https://www.girouettebooks.com/about-7#ferdowsi"
      ]
    }
  ],
  "workExample": [
    {
      "@type": "Book",
      "name": "The Shahnameh Volume I",
      "isPartOf": {
        "@id": "https://www.girouettebooks.com/#book"
      }
    },
    {
      "@type": "Book",
      "name": "The Shahnameh Volume II",
      "isPartOf": {
        "@id": "https://www.girouettebooks.com/#book"
      }
    },
    {
      "@type": "Book",
      "name": "The Shahnameh Volume III",
      "isPartOf": {
        "@id": "https://www.girouettebooks.com/#book"
      }
    },
    {
      "@type": "Book",
      "name": "The Shahnameh Volume IV",
      "isPartOf": {
        "@id": "https://www.girouettebooks.com/#book"
      }
    },
    {
      "@type": "Book",
      "name": "The Shahnameh Volume V",
      "isPartOf": {
        "@id": "https://www.girouettebooks.com/#book"
      }
    }
  ],
  "offers": [
    {
      "@type": "Offer",
      "url": "https://www.girouettebooks.com/our-books-complete-shahnameh-translation",
      "availability": "https://schema.org/InStock"
    }
  ],
  "sameAs": [
    "https://www.girouettebooks.com/our-books-complete-shahnameh-translation",
    "https://www.girouettebooks.com/about-7",
    "https://www.girouettebooks.com/about-7",
    "https://www.girouettebooks.com/about-9"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
