(() => {
  // electron/mdpress/core/event-binder.ts
  var EventBinder = class {
    actions;
    config;
    constructor(actions2, config2) {
      this.actions = actions2;
      this.config = config2;
    }
    /**
     * Scan root element and bind events
     * @param root The root element to scan (default: document.body)
     */
    bind(root = document.body) {
      const elements = root.querySelectorAll("[data-action]");
      elements.forEach((el) => {
        const raw = el.getAttribute("data-action");
        if (!raw) return;
        const parts = raw.split(":");
        if (parts.length < 2) {
          console.warn(`[EventBinder] Invalid data-action format: "${raw}". Expected "event:method"`);
          return;
        }
        const eventType = parts[0];
        const methodName = parts[1];
        const handler = this.actions[methodName];
        if (handler) {
          el.addEventListener(eventType, (e) => {
            handler(e, this.config);
          });
          console.debug(`[EventBinder] Bound ${eventType} on`, el, `to ${methodName}`);
        } else {
          console.warn(`[EventBinder] Action method "${methodName}" not found.`);
        }
      });
    }
  };

  // electron/mdpress/templates/official/client.ts
  var actions = {
    scrollTo: (e, config2) => {
      e.preventDefault();
      const targetId = config2.target;
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    openDownloadModal: (e) => {
      e.preventDefault();
      const modal2 = document.getElementById("download-modal");
      if (modal2) {
        modal2.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    },
    closeDownloadModal: (e) => {
      e.preventDefault();
      const modal2 = document.getElementById("download-modal");
      if (modal2) {
        modal2.style.display = "none";
        document.body.style.overflow = "";
      }
    }
  };
  var config = window.__SITE_CONFIG__ || {};
  var binder = new EventBinder(actions, config);
  binder.bind();
  var modal = document.getElementById("download-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
  console.log("Official Theme Client Loaded");
})();
