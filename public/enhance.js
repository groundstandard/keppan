/*
 * Keppan static-port enhancement layer.
 * The pages are the real site's rendered HTML with React's event handlers
 * stripped, so this restores the interactive behavior in plain JS:
 *   1. FAQ / accordions (button[aria-expanded] + collapsible panel)
 *   2. Lead forms (demo / founding / homepage) -> POST to our API routes
 *   3. CTA buttons that used to navigate in React
 */
(function () {
  "use strict";

  /* ---------- 1. Accordions ---------- */
  function wireAccordions() {
    document.querySelectorAll("button[aria-expanded]").forEach(function (btn) {
      if (btn.dataset.kEnhanced) return;
      var panel = btn.nextElementSibling;
      if (!panel) return;
      btn.dataset.kEnhanced = "1";
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        var svg = btn.querySelector("svg");
        if (open) {
          panel.style.maxHeight = "0px";
          panel.style.opacity = "0";
          if (svg) svg.style.transform = "";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.opacity = "1";
          if (svg) svg.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  /* ---------- 2. Lead forms ---------- */
  function endpointFor(form) {
    var src = (form.getAttribute("data-source") || "").toLowerCase();
    var ids = Array.prototype.map.call(form.querySelectorAll("[id]"), function (el) {
      return el.id;
    }).join(" ");
    if (src.indexOf("founding") !== -1 || /founding/.test(ids)) return "/api/founding-seat";
    if (src.indexOf("demo") !== -1 || /demo-/.test(ids)) return "/api/demo-request";
    return "/api/landing-lead";
  }

  function wireForms() {
    document.querySelectorAll("form").forEach(function (form) {
      if (form.dataset.kEnhanced) return;
      form.dataset.kEnhanced = "1";
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        var endpoint = endpointFor(form);
        var payload = {};
        form.querySelectorAll("input, textarea, select").forEach(function (el) {
          var key = (el.id || el.name || "").replace(/^(demo|founding|lead|hero)[-_]?/i, "");
          if (key) payload[key] = el.value;
        });
        var btn = form.querySelector('[type="submit"], button');
        var original = btn ? btn.innerHTML : "";
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Sending…";
        }
        try {
          var res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          var json = await res.json().catch(function () { return { ok: false }; });
          if (!res.ok || !json.ok) throw new Error(json.error || "Please try again.");
          var note = document.createElement("div");
          note.style.cssText = "padding:16px;border:1px solid var(--border,#333);text-align:center;font:500 14px/1.5 Inter,sans-serif;";
          note.textContent = "Thanks — we'll be in touch shortly.";
          form.replaceWith(note);
        } catch (err) {
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = original;
          }
          alert((err && err.message) || "Something went wrong. Please try again.");
        }
      });
    });
  }

  /* ---------- 3. CTA buttons ----------
   * On the original site these smooth-scroll to a section on the same page.
   * We replicate that; if the target isn't on the current page, we fall back
   * to navigating to the matching route. */
  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return true; }
    return false;
  }
  function scrollToHeading(re) {
    var hs = document.querySelectorAll("h1,h2,h3");
    for (var i = 0; i < hs.length; i++) {
      if (re.test(hs[i].textContent || "")) {
        (hs[i].closest("section") || hs[i]).scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
    }
    return false;
  }

  function wireCtas() {
    var CTA = [
      { re: /claim your founding spot|reserve/i, act: function () { return scrollToId("reserve") || scrollToHeading(/reserve|founding spot/i); }, fb: "/founding-100" },
      { re: /get early access|early access/i, act: function () { return scrollToHeading(/founding price|one hundred businesses|locked for life/i) || scrollToId("reserve"); }, fb: "/founding-100" },
      { re: /learn more|explore/i, act: function () { return scrollToHeading(/every tool|runs on|one system/i); }, fb: "/features" },
      { re: /book a demo|request a demo|see a demo/i, act: function () { return scrollToHeading(/book.*demo|see a demo/i); }, fb: "/demo" },
    ];
    // A standalone <button> with no type attribute reports type "submit" by
    // default, so only skip buttons that actually live inside a <form>.
    document.querySelectorAll("button").forEach(function (btn) {
      if (btn.dataset.kEnhanced || btn.closest("form")) return;
      if (btn.hasAttribute("aria-expanded")) return; // accordion, handled above
      var text = (btn.textContent || "").trim();
      for (var i = 0; i < CTA.length; i++) {
        if (CTA[i].re.test(text)) {
          btn.dataset.kEnhanced = "1";
          btn.style.cursor = "pointer";
          btn.addEventListener("click", function (cfg) {
            return function () { if (!cfg.act()) window.location.href = cfg.fb; };
          }(CTA[i]));
          break;
        }
      }
    });
  }

  /* ---------- 4. Header nav dropdowns + mobile menu ----------
   * The real SiteNav renders its dropdown/mobile panels via React on
   * interaction, so they aren't in the captured HTML. We rebuild them from the
   * real menu data and wire the existing trigger buttons + "Open menu" button. */
  var NAV = {
    "Features": [
      { t: "Class Scheduling", h: "/features/scheduling" },
      { t: "Billing & Payments", h: "/features/billing" },
      { t: "Attendance & Check-In", h: "/features/attendance" },
      { t: "Belt Ranks", h: "/features/ranks" },
      { t: "Member Management", h: "/features/members" },
      { t: "Communication", h: "/features/communication" },
      { t: "See all platform features", h: "/features" },
    ],
    "Martial Arts": [
      { t: "All Martial Arts", h: "/martial-arts" },
      { t: "Brazilian Jiu-Jitsu", h: "/martial-arts/bjj" },
      { t: "Mixed Martial Arts", h: "/martial-arts/mma" },
      { t: "Karate", h: "/martial-arts/karate" },
      { t: "Taekwondo", h: "/martial-arts/taekwondo" },
      { t: "Muay Thai", h: "/martial-arts/muay-thai" },
      { t: "Boxing", h: "/martial-arts/boxing" },
      { t: "Judo", h: "/martial-arts/judo" },
    ],
    "Compare": [
      { t: "All 20 comparisons", h: "/compare" },
      { t: "vs GymDesk", h: "/compare/keppan-vs-gymdesk" },
      { t: "vs Zen Planner", h: "/compare/keppan-vs-zen-planner" },
      { t: "vs Mindbody", h: "/compare/keppan-vs-mindbody" },
      { t: "vs Kicksite", h: "/compare/keppan-vs-kicksite" },
      { t: "vs PushPress", h: "/compare/keppan-vs-pushpress" },
      { t: "vs Wodify", h: "/compare/keppan-vs-wodify" },
      { t: "vs Glofox", h: "/compare/keppan-vs-glofox" },
      { t: "vs Spark Membership", h: "/compare/keppan-vs-spark-membership" },
      { t: "vs Martialytics", h: "/compare/keppan-vs-martialytics" },
      { t: "vs WellnessLiving", h: "/compare/keppan-vs-wellnessliving" },
      { t: "vs MyStudio", h: "/compare/keppan-vs-mystudio" },
      { t: "vs TeamUp", h: "/compare/keppan-vs-teamup" },
      { t: "vs GymMaster", h: "/compare/keppan-vs-gymmaster" },
      { t: "vs RhinoFit", h: "/compare/keppan-vs-rhinofit" },
      { t: "vs ClubWise", h: "/compare/keppan-vs-clubwise" },
      { t: "vs BJJ Link", h: "/compare/keppan-vs-bjj-link" },
      { t: "vs WOD.guru", h: "/compare/keppan-vs-wod-guru" },
      { t: "vs Exercise.com", h: "/compare/keppan-vs-exercise-com" },
      { t: "vs ABC Fitness", h: "/compare/keppan-vs-abc-fitness" },
      { t: "vs Kombat Evolve", h: "/compare/keppan-vs-kombat-evolve" },
    ],
    "Company": [
      { t: "Why Keppan", h: "/why-keppan" },
      { t: "Our Story", h: "/story" },
      { t: "How to Switch", h: "/switch" },
      { t: "Book a Demo", h: "/demo" },
    ],
  };
  var EXTRA_LINKS = [
    { t: "Pricing", h: "/pricing" },
    { t: "Book a demo", h: "/demo" },
    { t: "Sign in", h: "/login" },
    { t: "Get started", h: "/founding-100" },
  ];

  function panelLink(item) {
    var a = document.createElement("a");
    a.href = item.h;
    a.textContent = item.t;
    a.style.cssText = "display:block;padding:8px 14px;color:#e7e2da;font:500 14px/1.4 Inter,sans-serif;text-decoration:none;white-space:nowrap;";
    a.addEventListener("mouseenter", function () { a.style.background = "#ffffff10"; });
    a.addEventListener("mouseleave", function () { a.style.background = "transparent"; });
    return a;
  }

  function wireNav() {
    var header = document.querySelector("header");
    if (!header) return;

    // Desktop dropdowns
    var openPanel = null;
    function closePanel() { if (openPanel) { openPanel.remove(); openPanel = null; } }
    document.addEventListener("click", function (e) {
      if (openPanel && !openPanel.contains(e.target)) closePanel();
    });

    // Desktop dropdowns: inject the real captured mega-menu panels (full-width
    // bar under the header) so they match the original exactly.
    var PANEL = { "Features": "features", "Martial Arts": "martial-arts", "Compare": "compare", "Company": "company" };
    var cache = {};
    header.querySelectorAll("nav button").forEach(function (btn) {
      var label = (btn.textContent || "").trim();
      var key = Object.keys(PANEL).find(function (k) { return label.indexOf(k) === 0; });
      if (!key || btn.dataset.kEnhanced) return;
      btn.dataset.kEnhanced = "1";
      btn.style.cursor = "pointer";
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var wasOpen = openPanel && openPanel.dataset.key === key;
        closePanel();
        if (wasOpen) return;
        var slug = PANEL[key];
        var inject = function (htmlStr) {
          var tmp = document.createElement("div");
          tmp.innerHTML = htmlStr;
          var panel = tmp.firstElementChild;
          if (!panel) return;
          panel.dataset.key = key;
          panel.classList.remove("hidden"); // show regardless of breakpoint
          header.appendChild(panel);        // absolute top-full left-0 right-0 -> under header
          openPanel = panel;
        };
        if (cache[slug]) { inject(cache[slug]); return; }
        fetch("/nav/" + slug + ".html").then(function (r) { return r.text(); }).then(function (h) {
          cache[slug] = h; inject(h);
        }).catch(function () {});
      });
    });

    // Mobile "Open menu"
    var menuBtn = Array.prototype.slice.call(header.querySelectorAll("button")).filter(function (b) {
      var lbl = (b.getAttribute("aria-label") || b.textContent || "").toLowerCase();
      return lbl.indexOf("menu") !== -1;
    })[0] || header.querySelector("button:last-of-type");
    if (menuBtn && !menuBtn.dataset.kNav) {
      menuBtn.dataset.kNav = "1";
      menuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var existing = document.getElementById("k-mobile-menu");
        if (existing) { existing.remove(); return; }
        var overlay = document.createElement("div");
        overlay.id = "k-mobile-menu";
        overlay.style.cssText =
          "position:fixed;inset:0;z-index:200;background:#0d0d0d;overflow:auto;padding:24px 20px 60px;";
        var close = document.createElement("button");
        close.textContent = "✕ Close";
        close.style.cssText = "color:#e7e2da;background:none;border:none;font:600 15px Inter,sans-serif;margin-bottom:18px;cursor:pointer;";
        close.addEventListener("click", function () { overlay.remove(); });
        overlay.appendChild(close);
        EXTRA_LINKS.forEach(function (it) { overlay.appendChild(panelLink(it)); });
        Object.keys(NAV).forEach(function (k) {
          var h = document.createElement("div");
          h.textContent = k;
          h.style.cssText = "color:#8a8a8a;font:700 11px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:16px 14px 6px;";
          overlay.appendChild(h);
          NAV[k].forEach(function (it) { overlay.appendChild(panelLink(it)); });
        });
        document.body.appendChild(overlay);
      });
    }
  }

  function init() {
    wireAccordions();
    wireForms();
    wireCtas();
    wireNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
