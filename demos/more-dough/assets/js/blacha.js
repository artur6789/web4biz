(() => {
  // more-dough-export/bundle-src/menu.ts
  var menu = [
    {
      id: "pomidor",
      slug: "pomidor-mordo",
      name: "Pomidor, mordo",
      price: 14,
      caption: "Pomidor, mozzarella i bazylia.",
      details: "Kwas pomidor\xF3w, ci\u0105gn\u0105cy si\u0119 ser i \u015Bwie\u017Ca bazylia. Ten r\xF3g znika pierwszy, cho\u0107 nikt si\u0119 do tego nie przyznaje.",
      kind: "Bez mi\u0119sa",
      color: "tomato"
    },
    {
      id: "pepperoni",
      slug: "pepperoni-po-uszy",
      name: "Pepperoni po uszy",
      price: 18,
      caption: "Pepperoni, mozzarella i sos pomidorowy.",
      details: "Pepperoni zawija si\u0119 w miseczki, ser skwierczy przy brzegu. Uwa\u017Caj na pierwszego gryza. Drugi ju\u017C bierzesz na w\u0142asn\u0105 odpowiedzialno\u015B\u0107.",
      kind: "Z mi\u0119sem",
      color: "yellow"
    },
    {
      id: "ziemniak",
      slug: "ziemniak-w-mundurku",
      name: "Ziemniak w mundurku",
      price: 16,
      caption: "Ziemniaki, rozmaryn i bia\u0142y sos.",
      details: "Cienkie plastry ziemniaka, rozmaryn i kremowy sos. Chrupi\u0119 na brzegach, mi\u0119kn\u0119 w \u015Brodku. Tak, dalej jestem pizz\u0105.",
      kind: "Bez mi\u0119sa",
      color: "green"
    }
  ];
  function formatPrice(price) {
    return `${price} z\u0142`;
  }

  // more-dough-export/bundle-src/scripts/tray-state.mjs
  var traySize = 4;
  function readTray(url, validIds2) {
    const values = url.searchParams.get("blacha")?.split(",") ?? [];
    return Array.from(
      { length: traySize },
      (_, index) => validIds2.has(values[index]) ? values[index] : null
    );
  }
  function trayUrl(current, slots2) {
    const url = new URL(current);
    if (slots2.some(Boolean)) url.searchParams.set("blacha", slots2.join(",").replace(/,+$/, ""));
    else url.searchParams.delete("blacha");
    url.hash = "blacha";
    return url;
  }

  // more-dough-export/bundle-src/scripts/tray.ts
  var root = document.querySelector("#blacha");
  var items = new Map(menu.map((item) => [item.id, item]));
  var validIds = new Set(items.keys());
  var addButtons = [...root.querySelectorAll("[data-add]")];
  var slotButtons = [...root.querySelectorAll("[data-slot]")];
  var share = root.querySelector("[data-share]");
  var isLocalFile = location.protocol === "file:";
  share.hidden = isLocalFile;
  var clear = root.querySelector("[data-clear]");
  var shareUrl = root.querySelector("[data-share-url]");
  var fallback = shareUrl.closest("label");
  var status = root.querySelector(".tray-status");
  var countLabel = root.querySelector("[data-count]");
  var totalLabel = root.querySelector("[data-total]");
  var removeHint = root.querySelector("figcaption");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var slots = readTray(new URL(location.href), validIds);
  function render(addedIndex) {
    slotButtons.forEach((button, index) => {
      const id = slots[index] ?? "";
      if ((button.dataset.item ?? "") === id) return;
      button.dataset.item = id;
      const item = items.get(id);
      button.hidden = !item;
      if (!item) return;
      const image = button.querySelector("img");
      const asset = "./assets/img/blacha/" + item.id;
      image.srcset = asset + "-384.webp 384w, " + asset + ".webp 627w";
      image.src = asset + ".webp";
      button.setAttribute("aria-label", "Zdejmij: " + item.name + ", miejsce " + (index + 1));
      if (index === addedIndex && !reduceMotion.matches) {
        image.decode().then(() => {
          if (button.dataset.item !== id || reduceMotion.matches) return;
          image.animate(
            [
              { transform: "translateY(19%) rotate(-4deg) scale(1.04)", opacity: 0 },
              { transform: "translateY(0) scale(.98)", opacity: 1, offset: 0.8 },
              { transform: "none", opacity: 1 }
            ],
            { duration: 360, easing: "ease-out" }
          );
        }).catch(() => {
        });
      }
    });
    const count = slots.filter(Boolean).length;
    const total = slots.reduce((sum, id) => sum + (items.get(id ?? "")?.price ?? 0), 0);
    countLabel.textContent = count + " z " + traySize;
    totalLabel.textContent = formatPrice(total);
    addButtons.forEach((button) => button.setAttribute("aria-disabled", String(count === slots.length)));
    share.disabled = clear.disabled = count === 0;
    removeHint.toggleAttribute("data-empty", count === 0);
  }
  function update(message, addedIndex) {
    const url = trayUrl(location.href, slots);
    url.hash = location.hash;
    if (!isLocalFile) history.replaceState(null, "", url);
    fallback.hidden = true;
    render(addedIndex);
    status.textContent = message + " Razem " + totalLabel.textContent + ".";
  }
  addButtons.forEach((button) => button.addEventListener("click", () => {
    const index = slots.indexOf(null);
    if (index < 0) {
      status.textContent = "Blacha pe\u0142na. Usu\u0144 kawa\u0142ek, \u017Ceby zrobi\u0107 miejsce.";
      return;
    }
    const item = items.get(button.dataset.add);
    slots[index] = item.id;
    update("Na blasze: " + item.name + ".", index);
  }));
  slotButtons.forEach((button, index) => button.addEventListener("click", () => {
    const previous = slots[index];
    slots[index] = null;
    update("Kawa\u0142ek zdj\u0119ty.");
    addButtons.find((control) => control.dataset.add === previous)?.focus({ preventScroll: true });
  }));
  clear.addEventListener("click", () => {
    slots.fill(null);
    update("Blacha pusta.");
    addButtons[0].focus();
  });
  share.addEventListener("click", async () => {
    const link = trayUrl(location.href, slots).href;
    try {
      await navigator.clipboard.writeText(link);
      status.textContent = "Link skopiowany. Teraz pi\u0142ka po stronie ekipy.";
    } catch {
      shareUrl.value = link;
      fallback.hidden = false;
      shareUrl.focus();
      shareUrl.select();
      status.textContent = "Skopiuj zaznaczony link.";
    }
  });
  window.addEventListener("popstate", () => {
    slots = readTray(new URL(location.href), validIds);
    fallback.hidden = true;
    status.textContent = "";
    render();
  });
  render();
  root.querySelector(".tray-controls").hidden = false;
})();
