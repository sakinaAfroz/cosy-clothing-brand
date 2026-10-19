/* Cosy – clothing store website. Products, menus, filters, product details, cart and checkout. */
(function () {
  var LOGO = "images/logo.webp";
  document.querySelectorAll("img[data-logo]").forEach(function (i) {
    i.src = LOGO;
  });

  var shapes = {
    shirt: "M72 24 100 36 128 24 170 50 178 100 154 104 154 214 46 214 46 104 22 100 30 50Z",
    blouse:
      "M72 24 100 38 128 24 164 48 172 96 150 100 146 130 156 214 44 214 54 130 50 100 28 96 36 48Z",
    tee: "M72 28c8 10 18 14 28 14s20-4 28-14l44 22-14 40-22-8v138H64V84l-22 8-14-40Z",
    pant: "M58 24h84l8 190h-38L100 92 88 214H50Z",
    top: "M76 20 84 56c4 12 12 18 16 18s12-6 16-18l8-36 8 2-4 60 10 108H62l10-108-4-60Z",
    gown: "M80 22 100 38 120 22 134 28 126 84 176 226H24l50-142-8-56Z",
    shrug:
      "M88 36 60 44 20 112 38 126 54 100 54 150 90 156 90 80ZM112 36 140 44 180 112 162 126 146 100 146 150 110 156 110 80ZM88 36 100 42 112 36Z",
  };
  var items = [
    {
      n: "Oxford Shirt",
      grp: "Tops",
      sub: "Shirt",
      t: "Men",
      d: "Cotton oxford",
      p: 68,
      c: "men",
      s: "shirt",
      f: "#C9D3DB",
      bg: "#EEE7DE",
      alt: "Man wearing the Oxford Shirt, a cream button-down with thin stripes and rolled sleeves",
      img: "images/oxford-shirt.jpg",
    },
    {
      n: "Straight Pant",
      grp: "Bottoms",
      sub: "Pant",
      t: "Men",
      d: "Stretch twill",
      p: 74,
      c: "men",
      s: "pant",
      f: "#3A3532",
      bg: "#EFE8DF",
      pos: "50% 50%",
      lbls: ["front view", "side view"],
      alts: [
        "Front view of the Straight Pant, black wide-leg pleated trousers with white sneakers",
        "Side view of the Straight Pant, black wide-leg trousers worn with one hand in the pocket",
      ],
      imgs: ["images/straight-pant-front.jpg", "images/straight-pant-side.jpg"],
    },
    {
      n: "Men’s Oversized Cotton T-Shirt",
      grp: "Tops",
      sub: "T-shirt",
      t: "Men",
      d: "Heavy cotton",
      p: 32,
      c: "men",
      s: "tee",
      f: "#E9E0D2",
      bg: "#E9DFD3",
      pos: "50% 25%",
      lbls: ["sand photo", "cream photo"],
      alts: [
        "Man wearing the oversized cotton t-shirt in sand, with a hand in his pocket",
        "Man wearing the oversized cotton t-shirt in cream, looking to the side",
      ],
      imgs: ["images/tshirt-sand.jpg", "images/tshirt-cream.jpg"],
    },
    {
      n: "Poplin Shirt",
      grp: "Tops",
      sub: "Shirt",
      t: "Women",
      d: "Cotton poplin",
      p: 64,
      c: "women",
      s: "blouse",
      f: "#F6F1E8",
      bg: "#E8DDD0",
      alt: "Woman wearing the Poplin Shirt, a white button-up with a fitted waist and a flared hem",
      img: "images/poplin-shirt.jpg",
    },
    {
      n: "Brown Party Lehenga",
      grp: "Sets",
      sub: "Lehenga",
      t: "Women",
      d: "Embroidered organza",
      p: 180,
      c: "women",
      s: "gown",
      f: "#A68A64",
      bg: "#E7DBCE",
      pos: "50% 20%",
      lbls: ["first photo", "second photo"],
      alts: [
        "Woman wearing the brown party lehenga with a draped dupatta and a sequinned border",
        "Woman wearing the brown party lehenga with the dupatta over her shoulders",
      ],
      imgs: ["images/party-lehenga-1.jpg", "images/party-lehenga-2.jpg"],
    },
    {
      n: "Cropped Shrug",
      grp: "Tops",
      sub: "Shrug",
      t: "Women",
      d: "Pointelle knit",
      p: 58,
      c: "women",
      s: "shrug",
      f: "#C8B49A",
      bg: "#EFE6DB",
      pos: "50% 15%",
      lbls: ["front view", "back view"],
      alts: [
        "Woman wearing the knit shrug open at the front over a white ribbed top",
        "Back view of the knit shrug showing the airy open-knit stitch",
      ],
      imgs: ["images/cropped-shrug-front.jpg", "images/cropped-shrug-back.jpg"],
    },
  ];
  function art2(it) {
    if (it.imgs)
      return (
        '<div class="gal"><img class="ph" src="' +
        it.imgs[0] +
        '" alt="' +
        it.alts[0] +
        '" style="object-position:' +
        it.pos +
        '">' +
        '<div class="dots" role="group" aria-label="Photo views"><button type="button" class="dt" data-n="0" aria-pressed="true" aria-label="Show ' +
        it.lbls[0] +
        '"></button><button type="button" class="dt" data-n="1" aria-pressed="false" aria-label="Show ' +
        it.lbls[1] +
        '"></button></div></div>'
      );
    if (it.img) return '<img class="ph" src="' + it.img + '" alt="' + it.alt + '">';
    var g = "g" + it.n.replace(/\W/g, "");
    var extra =
      it.s === "shirt" || it.s === "blouse"
        ? '<path d="M72 24 100 56 128 24M100 56V214" fill="none" stroke="#000" stroke-opacity=".25" stroke-width="2"/>'
        : "";
    if (it.s === "pant")
      extra =
        '<path d="M58 38h84M100 92V38" stroke="#000" stroke-opacity=".2" stroke-width="2.5"/>';
    return (
      '<svg viewBox="0 0 200 240" aria-hidden="true"><defs><linearGradient id="' +
      g +
      '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".16"/><stop offset=".4" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#000" stop-opacity=".14"/></linearGradient></defs>' +
      '<rect width="200" height="240" fill="' +
      it.bg +
      '"/><path d="M0 0h200L120 240H0Z" fill="#fff" fill-opacity=".3"/>' +
      '<path d="' +
      shapes[it.s] +
      '" fill="' +
      it.f +
      '" stroke="#2C221E" stroke-opacity=".12"/><path d="' +
      shapes[it.s] +
      '" fill="url(#' +
      g +
      ')"/>' +
      extra +
      "</svg>"
    );
  }
  var box = document.getElementById("cards"),
    bag = document.getElementById("bag");
  items.forEach(function (it) {
    var d = document.createElement("article");
    d.className = "card";
    d.dataset.c = it.c;
    d.dataset.grp = it.grp;
    d.dataset.sub = it.sub;
    var sz = it.c === "men" && it.s === "pant" ? ["30", "32", "34", "36"] : ["S", "M", "L", "XL"];
    d.innerHTML =
      art2(it) +
      '<div class="meta"><div><b>' +
      it.n +
      "</b><span>" +
      it.t +
      " · " +
      it.d +
      '</span></div><b class="price">$' +
      it.p +
      '</b></div><div class="sizes" role="radiogroup" aria-label="Size for ' +
      it.n +
      '">' +
      sz
        .map(function (s) {
          return (
            '<button type="button" class="sz" role="radio" aria-checked="false" data-z="' +
            s +
            '">' +
            s +
            "</button>"
          );
        })
        .join("") +
      '</div><p class="zerr" role="alert"></p><button type="button" class="dtl" data-i="' +
      items.indexOf(it) +
      '">View details</button><button class="add" data-i="' +
      items.indexOf(it) +
      '">Add to cart</button>';
    box.appendChild(d);
  });
  var cart = {},
    drawer = document.getElementById("drawer"),
    dlist = document.getElementById("dlist"),
    dfoot = document.getElementById("dfoot"),
    dtotal = document.getElementById("dtotal"),
    dnote = document.getElementById("dnote"),
    opener = null;
  try {
    var saved = JSON.parse(localStorage.getItem("cosy-cart-v2") || "{}");
    Object.keys(saved).forEach(function (k) {
      if (k.indexOf("|") > 0 && items[k.split("|")[0]]) cart[k] = saved[k];
    });
  } catch (e) {}
  function save() {
    try {
      localStorage.setItem("cosy-cart-v2", JSON.stringify(cart));
    } catch (e) {}
  }
  function render() {
    var ids = Object.keys(cart),
      n = 0,
      sum = 0,
      h = "";
    ids.forEach(function (k) {
      var it = items[k.split("|")[0]],
        z = k.split("|")[1],
        q = cart[k];
      n += q;
      sum += q * it.p;
      h +=
        '<li class="line"><span class="dot" style="background:' +
        it.f +
        '"></span><div><b>' +
        it.n +
        "</b><small>" +
        it.t +
        " · Size " +
        z +
        " · $" +
        it.p +
        '</small><div class="qty"><button data-q="-1" data-k="' +
        k +
        '" aria-label="Decrease quantity of ' +
        it.n +
        " size " +
        z +
        '">−</button><span>' +
        q +
        '</span><button data-q="1" data-k="' +
        k +
        '" aria-label="Increase quantity of ' +
        it.n +
        " size " +
        z +
        '">+</button></div></div><button class="rm" data-k="' +
        k +
        '" data-rm="1">Remove</button></li>';
    });
    dlist.innerHTML =
      h ||
      '<li class="d-empty">Your cart is empty. Add a piece from the collection to get started.</li>';
    dfoot.hidden = !n;
    dtotal.textContent = "$" + sum;
    document.getElementById("badge").textContent = n;
    bag.setAttribute("aria-label", "Cart, " + n + (n === 1 ? " item" : " items"));
    dnote.textContent = "";
  }
  function openCart() {
    drawer.dataset.v = "cart";
    opener = document.activeElement;
    document.body.classList.add("open");
    drawer.inert = false;
    drawer.setAttribute("aria-hidden", "false");
    document.getElementById("close").focus();
  }
  function closeCart() {
    document.body.classList.remove("open");
    drawer.inert = true;
    drawer.setAttribute("aria-hidden", "true");
    if (opener && opener.focus) opener.focus();
  }
  box.addEventListener("click", function (e) {
    var dt = e.target.closest(".dt");
    if (dt) {
      var c0 = dt.closest(".card"),
        it0 = items[c0.querySelector(".add").dataset.i],
        n0 = +dt.dataset.n,
        im0 = c0.querySelector(".ph");
      im0.src = it0.imgs[n0];
      im0.alt = it0.alts[n0];
      c0.querySelectorAll(".dt").forEach(function (x) {
        x.setAttribute("aria-pressed", x === dt);
      });
      return;
    }
    var dv = e.target.closest(".dtl,.card svg,.card .ph");
    if (dv) {
      openDetails(+dv.closest(".card").querySelector(".add").dataset.i, dv);
      return;
    }
    var z = e.target.closest(".sz");
    if (z) {
      var cd = z.closest(".card");
      cd.querySelectorAll(".sz").forEach(function (x) {
        x.setAttribute("aria-checked", x === z);
      });
      cd.querySelector(".zerr").textContent = "";
      return;
    }
    var b = e.target.closest(".add");
    if (!b) return;
    var card = b.closest(".card"),
      sel = card.querySelector('.sz[aria-checked="true"]');
    if (!sel) {
      card.querySelector(".zerr").textContent = "Choose a size first.";
      return;
    }
    var k = b.dataset.i + "|" + sel.dataset.z;
    cart[k] = (cart[k] || 0) + 1;
    save();
    render();
    b.classList.add("on");
    b.textContent = "Added ✓";
    setTimeout(function () {
      b.classList.remove("on");
      b.textContent = "Add to cart";
    }, 1200);
  });
  dlist.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var k = b.dataset.k;
    if (b.dataset.rm) delete cart[k];
    else {
      cart[k] += +b.dataset.q;
      if (cart[k] < 1) delete cart[k];
    }
    save();
    render();
  });
  bag.addEventListener("click", openCart);
  document.getElementById("close").addEventListener("click", closeCart);
  document.getElementById("scrim").addEventListener("click", closeCart);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("open")) closeCart();
  });
  // Orders are sent to the seller on WhatsApp. Put your number here, digits only with country code.
  var SELLER_WHATSAPP = "";
  var pform = document.getElementById("pform"),
    perr = document.getElementById("perr"),
    psum = document.getElementById("psum");
  document.getElementById("checkout").addEventListener("click", function () {
    var h = "",
      sum = 0;
    Object.keys(cart).forEach(function (k) {
      var it = items[k.split("|")[0]],
        q = cart[k];
      sum += q * it.p;
      h +=
        "<div><span>" +
        q +
        " × " +
        it.n +
        " (" +
        k.split("|")[1] +
        ")</span><span>$" +
        q * it.p +
        "</span></div>";
    });
    psum.innerHTML = h + "<div><b>Total</b><b>$" + sum + "</b></div>";
    perr.textContent = "";
    drawer.dataset.v = "form";
    pform.elements["name"].focus();
  });
  document.getElementById("back").addEventListener("click", function () {
    drawer.dataset.v = "cart";
    render();
  });
  pform.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = pform.elements,
      bad = null,
      min = { name: 2, phone: 7, addr: 10 };
    Object.keys(min).forEach(function (n) {
      var ok = f[n].value.trim().length >= min[n];
      f[n].classList.toggle("bad", !ok);
      if (!ok && !bad) bad = f[n];
    });
    if (bad) {
      perr.textContent = "Fill in your name, a phone number and a full delivery address.";
      bad.focus();
      return;
    }
    var no = "C" + Date.now().toString().slice(-6),
      lines = [],
      sum = 0;
    Object.keys(cart).forEach(function (k) {
      var it = items[k.split("|")[0]],
        q = cart[k];
      sum += q * it.p;
      lines.push(q + " x " + it.n + " size " + k.split("|")[1] + " ($" + q * it.p + ")");
    });
    var text =
      "New Cosy order #" +
      no +
      "\n" +
      lines.join("\n") +
      "\nTotal: $" +
      sum +
      "\nPayment: " +
      f.pay.value +
      "\nName: " +
      f.name.value.trim() +
      "\nPhone: " +
      f.phone.value.trim() +
      "\nAddress: " +
      f.addr.value.trim();
    document.getElementById("ono").textContent = "#" + no;
    document.getElementById("otext").textContent = text;
    document.getElementById("wa").href =
      "https://wa.me/" + SELLER_WHATSAPP + "?text=" + encodeURIComponent(text);
    cart = {};
    save();
    render();
    drawer.dataset.v = "done";
    pform.reset();
    document.getElementById("ddone").focus();
  });
  document.getElementById("cont").addEventListener("click", closeCart);
  drawer.inert = true;
  render();

  // product details
  var info = {
    "Oxford Shirt": {
      about:
        "A relaxed cotton oxford with fine cream stripes. The button-down collar and chest pocket keep it easy to dress up or down.",
      feat: ["Button-down collar", "Chest pocket", "Sleeve tabs for rolling up"],
      fabric: "100% cotton oxford",
      fit: "Regular fit, true to size",
      care: "Machine wash cold, tumble dry low, iron on medium",
    },
    "Straight Pant": {
      about:
        "Black trousers with front pleats and a wide, easy leg. They sit at the waist and fall straight to the shoe.",
      feat: ["Front pleats", "Side pockets", "Zip fly with button closure"],
      fabric: "98% cotton, 2% elastane twill",
      fit: "Relaxed through the leg. Choose your usual waist size.",
      care: "Machine wash cold, hang to dry, iron on medium",
    },
    "Men’s Oversized Cotton T-Shirt": {
      about:
        "An oversized cotton t-shirt with a relaxed, roomy cut and a clean crew neck. It keeps its shape wash after wash.",
      feat: ["Crew neck", "Dropped shoulders", "Heavyweight cotton"],
      fabric: "100% combed cotton, 220 gsm",
      fit: "Oversized fit. Size down for a regular fit.",
      care: "Machine wash cold, tumble dry low",
    },
    "Poplin Shirt": {
      about:
        "A crisp white cotton poplin shirt with a classic collar, a fitted waist and a soft flared hem. Dress it up with a skirt or down with trousers.",
      feat: ["Classic collar", "Full button front", "Flared peplum hem"],
      fabric: "100% cotton poplin",
      fit: "Fitted at the waist, flared at the hem. True to size.",
      care: "Machine wash cold, iron on medium",
    },
    "Brown Party Lehenga": {
      about:
        "A warm brown party lehenga with a fitted blouse, a flared skirt with a sequinned border, and a matching embroidered dupatta. Made for weddings and festive evenings.",
      feat: ["Flared skirt with embroidered border", "Fitted blouse", "Matching dupatta"],
      fabric: "Organza with embroidery and sequin detail",
      fit: "Fitted blouse, skirt flared from the waist",
      care: "Dry clean only",
    },
    "Cropped Shrug": {
      about:
        "A soft open-front knit in warm beige with an airy pointelle stitch and long sleeves. Wear it over a top, shirt or lehenga for extra warmth.",
      feat: ["Open front", "Long sleeves", "Airy pointelle knit"],
      fabric: "Soft knit blend of wool and acrylic",
      fit: "Relaxed fit with a longer length",
      care: "Hand wash cold, lay flat to dry",
    },
  };
  var charts = {
    men: {
      h: ["Size", "Chest (in)"],
      r: [
        ["S", "36–38"],
        ["M", "38–40"],
        ["L", "40–42"],
        ["XL", "42–44"],
      ],
    },
    pant: {
      h: ["Waist size", "Waist (in)", "Inseam (in)"],
      r: [
        ["30", "30", "32"],
        ["32", "32", "32"],
        ["34", "34", "32"],
        ["36", "36", "32"],
      ],
    },
    women: {
      h: ["Size", "Bust (in)", "Waist (in)"],
      r: [
        ["S", "34", "27"],
        ["M", "36", "29"],
        ["L", "38", "31"],
        ["XL", "40", "33"],
      ],
    },
  };
  var dlg = document.getElementById("pdlg"),
    pdMedia = document.getElementById("pd-media"),
    pdInfo = document.getElementById("pd-info"),
    pdI = 0;
  function sizesFor(it) {
    return it.c === "men" && it.s === "pant" ? ["30", "32", "34", "36"] : ["S", "M", "L", "XL"];
  }
  function media(it) {
    if (it.imgs)
      return (
        '<img class="pd-img" id="pd-main" src="' +
        it.imgs[0] +
        '" alt="' +
        it.alts[0] +
        '"><div class="pd-th">' +
        it.imgs
          .map(function (s, n) {
            return (
              '<button type="button" class="th" data-n="' +
              n +
              '" aria-pressed="' +
              (n === 0) +
              '" aria-label="Show ' +
              it.lbls[n] +
              '"><img src="' +
              s +
              '" alt=""></button>'
            );
          })
          .join("") +
        "</div>"
      );
    if (it.img) return '<img class="pd-img" src="' + it.img + '" alt="' + it.alt + '">';
    return art2(it);
  }
  function openDetails(i) {
    var it = items[i],
      d = info[it.n],
      ch = charts[it.c === "men" ? (it.s === "pant" ? "pant" : "men") : "women"];
    pdI = i;
    pdMedia.innerHTML = media(it);
    pdInfo.innerHTML =
      '<h3 id="pd-title">' +
      it.n +
      '</h3><p class="pd-price">$' +
      it.p +
      " <span>· " +
      it.t +
      "</span></p><p>" +
      d.about +
      "</p>" +
      '<ul class="pd-feat">' +
      d.feat
        .map(function (f) {
          return "<li>" + f + "</li>";
        })
        .join("") +
      "</ul>" +
      '<dl class="pd-dl"><dt>Fabric</dt><dd>' +
      d.fabric +
      "</dd><dt>Fit</dt><dd>" +
      d.fit +
      "</dd><dt>Care</dt><dd>" +
      d.care +
      "</dd></dl>" +
      '<h4>Choose a size</h4><div class="sizes pd-sizes" role="radiogroup" aria-label="Size for ' +
      it.n +
      '">' +
      sizesFor(it)
        .map(function (s) {
          return (
            '<button type="button" class="sz" role="radio" aria-checked="false" data-z="' +
            s +
            '">' +
            s +
            "</button>"
          );
        })
        .join("") +
      '</div><p class="zerr" role="alert"></p>' +
      '<div class="pd-act"><button class="btn" id="pd-add" type="button">Add to cart</button><button class="btn ghost" id="pd-cart" type="button">View cart</button></div>' +
      '<details class="chart"><summary>Size guide</summary><table><thead><tr>' +
      ch.h
        .map(function (x) {
          return "<th>" + x + "</th>";
        })
        .join("") +
      "</tr></thead><tbody>" +
      ch.r
        .map(function (r) {
          return (
            "<tr>" +
            r
              .map(function (c) {
                return "<td>" + c + "</td>";
              })
              .join("") +
            "</tr>"
          );
        })
        .join("") +
      "</tbody></table><small>Body measurements in inches. Between sizes, choose the larger one.</small></details>";
    dlg.scrollTop = 0;
    dlg.showModal();
  }
  dlg.addEventListener("click", function (e) {
    var t = e.target;
    if (t === dlg || t.closest("#pd-close")) {
      dlg.close();
      return;
    }
    var z = t.closest(".sz");
    if (z) {
      dlg.querySelectorAll(".sz").forEach(function (x) {
        x.setAttribute("aria-checked", x === z);
      });
      pdInfo.querySelector(".zerr").textContent = "";
      return;
    }
    var th = t.closest(".th");
    if (th) {
      var it = items[pdI],
        n = +th.dataset.n,
        m = document.getElementById("pd-main");
      m.src = it.imgs[n];
      m.alt = it.alts[n];
      dlg.querySelectorAll(".th").forEach(function (x) {
        x.setAttribute("aria-pressed", x === th);
      });
      return;
    }
    var add = t.closest("#pd-add");
    if (add) {
      var sel = dlg.querySelector('.sz[aria-checked="true"]');
      if (!sel) {
        pdInfo.querySelector(".zerr").textContent = "Choose a size first.";
        return;
      }
      var k = pdI + "|" + sel.dataset.z;
      cart[k] = (cart[k] || 0) + 1;
      save();
      render();
      add.textContent = "Added ✓";
      setTimeout(function () {
        add.textContent = "Add to cart";
      }, 1200);
      return;
    }
    if (t.closest("#pd-cart")) {
      dlg.close();
      openCart();
    }
  });
  // menu panels, built from the products so they always match
  function panel(g) {
    var cols = ["Tops", "Bottoms", "Sets"]
      .map(function (grp) {
        var subs = [];
        items.forEach(function (it) {
          if (it.c === g && it.grp === grp && subs.indexOf(it.sub) < 0) subs.push(it.sub);
        });
        if (!subs.length) return "";
        return (
          '<div class="dd-col"><h3><a href="#collection" data-go="' +
          g +
          '" data-grp="' +
          grp +
          '">' +
          grp +
          "</a></h3><ul>" +
          subs
            .map(function (s) {
              return (
                '<li><a href="#collection" data-go="' +
                g +
                '" data-sub="' +
                s +
                '">' +
                s +
                "</a></li>"
              );
            })
            .join("") +
          "</ul></div>"
        );
      })
      .join("");
    return cols + '<a class="dd-all" href="#collection" data-go="' + g + '">Shop all ' + g + "</a>";
  }
  document.getElementById("m-men").innerHTML = panel("men");
  document.getElementById("m-women").innerHTML = panel("women");

  // filtering by gender, group (Tops / Bottoms / Sets) and type
  var tabs = document.querySelectorAll(".tab[data-f]"),
    subBox = document.getElementById("subtabs"),
    fstat = document.getElementById("fstat"),
    fclear = document.getElementById("fclear"),
    curG = "all",
    curSub = null;
  function filter(f, grp, sub) {
    curG = f || "all";
    curSub = sub || null;
    tabs.forEach(function (x) {
      x.setAttribute("aria-pressed", x.dataset.f === curG);
    });
    var n = 0;
    box.querySelectorAll(".card").forEach(function (c) {
      var ok =
        (curG === "all" || c.dataset.c === curG) &&
        (!grp || c.dataset.grp === grp) &&
        (!sub || c.dataset.sub === sub);
      c.hidden = !ok;
      if (ok) n++;
    });
    var subs = [];
    items.forEach(function (it) {
      if ((curG === "all" || it.c === curG) && subs.indexOf(it.sub) < 0) subs.push(it.sub);
    });
    var had = subBox.contains(document.activeElement);
    subBox.innerHTML =
      '<button type="button" class="tab" aria-pressed="' +
      !sub +
      '">All types</button>' +
      subs
        .map(function (s) {
          return (
            '<button type="button" class="tab" data-s="' +
            s +
            '" aria-pressed="' +
            (s === sub) +
            '">' +
            s +
            "</button>"
          );
        })
        .join("");
    if (had) {
      var t = subBox.querySelector('[aria-pressed="true"]');
      if (t) t.focus();
    }
    var lab = [curG === "all" ? "All" : curG === "men" ? "Men" : "Women"];
    if (grp) lab.push(grp);
    if (sub) lab.push(sub);
    fstat.textContent = lab.join(" \u00b7 ") + " \u2014 " + n + (n === 1 ? " piece" : " pieces");
    fclear.hidden = !(grp || sub);
  }
  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      filter(t.dataset.f);
    });
  });
  subBox.addEventListener("click", function (e) {
    var b = e.target.closest(".tab");
    if (!b) return;
    var s = b.dataset.s || null;
    filter(curG, null, s && s === curSub ? null : s);
  });
  fclear.addEventListener("click", function () {
    filter(curG);
  });
  document.querySelectorAll("[data-go]").forEach(function (a) {
    a.addEventListener("click", function () {
      filter(a.dataset.go, a.dataset.grp, a.dataset.sub);
    });
  });
  filter("all");

  // drop-down menus
  var dds = document.querySelectorAll(".dd");
  function canHover() {
    return !!(window.matchMedia && window.matchMedia("(hover:hover)").matches);
  }
  function closeDD(except) {
    dds.forEach(function (d) {
      if (d !== except) {
        d.classList.remove("open");
        d.querySelector(".dd-btn").setAttribute("aria-expanded", "false");
        d.querySelector(".dd-panel").hidden = true;
      }
    });
  }
  function openDD(d) {
    closeDD(d);
    d.classList.add("open");
    d.querySelector(".dd-btn").setAttribute("aria-expanded", "true");
    d.querySelector(".dd-panel").hidden = false;
  }
  dds.forEach(function (d) {
    d.querySelector(".dd-btn").addEventListener("click", function () {
      if (canHover() || !d.classList.contains("open")) openDD(d);
      else closeDD();
    });
    d.addEventListener("mouseenter", function () {
      if (canHover()) openDD(d);
    });
    d.addEventListener("mouseleave", function () {
      if (canHover()) closeDD();
    });
    d.addEventListener("focusout", function (e) {
      if (e.relatedTarget && !d.contains(e.relatedTarget)) closeDD();
    });
    d.querySelector(".dd-panel").addEventListener("click", function (e) {
      if (e.target.closest("a")) closeDD();
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDD();
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dd")) closeDD();
  });

  // cover video: pause button, and no autoplay for people who prefer reduced motion
  var cv = document.getElementById("coverVideo"),
    vb = document.getElementById("vbtn");
  var ICON_PAUSE =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
  var ICON_PLAY =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/></svg>';
  function vState(playing) {
    vb.setAttribute("aria-label", playing ? "Pause background video" : "Play background video");
    vb.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
  }
  function vPlay() {
    var r = cv.play();
    if (r && r.catch)
      r.catch(function () {
        vState(false);
      });
  }
  vb.addEventListener("click", function () {
    if (cv.paused) {
      vPlay();
      vState(true);
    } else {
      cv.pause();
      vState(false);
    }
  });
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cv.removeAttribute("autoplay");
    cv.pause();
    vState(false);
  } else {
    vPlay();
  }

  var form = document.getElementById("sub"),
    msg = document.getElementById("msg"),
    em = document.getElementById("email");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim())) {
      msg.textContent = "You’re on the list. Check your inbox for a welcome note.";
      em.value = "";
    } else {
      msg.textContent = "Enter a valid email address, like name@example.com.";
      em.focus();
    }
  });
})();
