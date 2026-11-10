// ==========================================================================
// كود الجافاسكربت الكامل المحدث بالكامل لمتجر DIFFER
// ==========================================================================

const translations = {
    ar: {
        announcement: "خصم 20% على تشكيلة الشتاء الجديدة | الشحن مجاني للطلبات فوق 1000 جنيه",
        ownerTag: "Ahmed",
        searchPlaceholder: "ابحث عن هودي، تيشيرت، بنطال...",
        allProducts: "جميع المنتجات",
        hoodiesSection: "قسم الهوديز",
        tshirtsSection: "قسم التياريتات (T-Shirts)",
        winterCollection: "التشكيلة الشتوية",
        summerCollection: "التشكيلة الصيفية",
        pantsSection: "قسم البناطيل",
        menuTitle: "الأقسام والتشكيلات",
        heroTitle: "NEW WINTER COLLECTION",
        heroDesc: "تشكيلة DIFFER الشتوية الفاخرة لعام 2026",
        heroBtn: "تسوق المجموعة الآن",
        aboutTitle: "عن براند",
        aboutText: "نحن في DIFFER نمزج بين بساطة التصميم وأعلى جودة خامات الشارع العصري (Streetwear). نسعى لتقديم قطع ملابس فريدة تناسب أسلوب حياتك اليومي بتصاميم مريحة ومميزة تعبر عن شخصيتك.",
        filterAll: "الكل",
        filterHoodies: "هوديز",
        filterTshirts: "تيشيرتات",
        filterWinter: "شتوي",
        filterSummer: "صيفي",
        addToCartBtn: "إضافة للسلة",
        modalSize: "اختر المقاس:",
        modalColor: "اختر اللون:",
        cartTitle: "سلة المشتريات",
        emptyCart: "السلة فارغة حالياً.",
        deliveryTitle: "بيانات توصيل الطلب",
        nameLabel: "الاسم بالكامل",
        namePlaceholder: "أدخل اسمك الثلاثي",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "01xxxxxxxx",
        addressLabel: "العنوان بالتفصيل",
        addressPlaceholder: "المحافظة - المنطقة - اسم الشارع",
        totalLabel: "إجمالي المبلغ:",
        confirmWhatsapp: "تأكيد الطلب عبر الواتساب",
        footerDesc: "علامة تجارية مصرية مخصصة للستريت وير والأزياء العصرية.",
        quickLinks: "روابط سريعة",
        devTitle: "Developed With: 𝓑𝓪 𝓼 𝓴𝓸 🥱♥️",
        devName: "البراند الرسمي DIFFER",
        waContactName: "Design via WhatsApp: 01029053373",
        rights: "جميع الحقوق محفوظة لبراند DIFFER."
    },
    en: {
        announcement: "20% OFF on New Winter Collection | Free shipping over 1000 EGP",
        ownerTag: "Ahmed",
        searchPlaceholder: "Search for hoodie, t-shirt, pants...",
        allProducts: "All Products",
        hoodiesSection: "Hoodies Section",
        tshirtsSection: "T-Shirts Section",
        winterCollection: "Winter Collection",
        summerCollection: "Summer Collection",
        pantsSection: "Pants Section",
        menuTitle: "Categories & Collections",
        heroTitle: "NEW WINTER COLLECTION",
        heroDesc: "DIFFER's luxury winter collection for 2026",
        heroBtn: "Shop Collection Now",
        aboutTitle: "About Brand",
        aboutText: "At DIFFER, we blend minimalist design with premium streetwear quality. We strive to provide unique clothing pieces that match your daily lifestyle with comfortable and distinctive designs.",
        filterAll: "All",
        filterHoodies: "Hoodies",
        filterTshirts: "T-Shirts",
        filterWinter: "Winter",
        filterSummer: "Summer",
        addToCartBtn: "Add to Cart",
        modalSize: "Select Size:",
        modalColor: "Select Color:",
        cartTitle: "Shopping Cart",
        emptyCart: "Your cart is currently empty.",
        deliveryTitle: "Delivery Information",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "01xxxxxxxx",
        addressLabel: "Detailed Address",
        addressPlaceholder: "Governorate - Area - Street",
        totalLabel: "Total Amount:",
        confirmWhatsapp: "Confirm Order via WhatsApp",
        footerDesc: "Egyptian brand dedicated to streetwear and modern fashion.",
        quickLinks: "Quick Links",
        devTitle: "Developed With: 𝓑𝓪 𝓼 𝓴𝓸 🥱♥️",
        devName: "Official Brand DIFFER",
        waContactName: "Design via WhatsApp: 01029053373",
        rights: "All rights reserved to DIFFER Brand."
    }
};

let currentLang = 'ar';

const productsData = [
    {
        id: 1,
        title: { ar: "هودي اسود فضفاض DIFFER Boxy Hoodie", en: "DIFFER Black Boxy Oversized Hoodie" },
        category: "hoodies",
        season: "winter",
        priceCurrent: 950,
        priceOld: 1250,
        colors: { ar: ["أسود", "رمادي داكن"], en: ["Black", "Dark Grey"] },
        description: { 
            ar: "قطن ميلتون ثقيل 100% مع طباعة ثنائية عالية الجودة وقصة Over-sized عصري.", 
            en: "100% heavy cotton fleece with high-quality dual print and modern oversized fit." 
        },
        images: [
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 2,
        title: { ar: "تيشيرت اوفرسايز رصاصي Grey Graphic Tee", en: "Grey Graphic Oversized T-Shirt" },
        category: "tshirts",
        season: "summer",
        priceCurrent: 450,
        priceOld: 600,
        colors: { ar: ["رصاصي", "أبيض"], en: ["Grey", "White"] },
        description: { 
            ar: "تيشيرت صيفي بنمط عصري وخامة قطنية ممتازة مريحة للاستخدام اليومي.", 
            en: "Summer t-shirt with modern pattern and premium cotton fabric comfortable for daily use." 
        },
        images: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 3,
        title: { ar: "بنطال واسع Grey Wide-Leg Sweatpants", en: "Grey Wide-Leg Sweatpants" },
        category: "pants",
        season: "winter",
        priceCurrent: 800,
        priceOld: 1050,
        colors: { ar: ["رمادي", "أسود"], en: ["Grey", "Black"] },
        description: { 
            ar: "بنطال رياضي واسع بقصة Barrel Curved مريحة باللون الرمادي العصري.", 
            en: "Comfortable wide-leg sweatpants with modern curved barrel fit in grey." 
        },
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 4,
        title: { ar: "جاكيت بومبر شتوي DIFFER Slate Jacket", en: "DIFFER Slate Winter Bomber Jacket" },
        category: "winter",
        season: "winter",
        priceCurrent: 1400,
        priceOld: 1800,
        colors: { ar: ["زيتي", "أسود"], en: ["Olive", "Black"] },
        description: { 
            ar: "جاكيت شتوي مبطن وعازل للبرودة بتصميم مميز للغاية.", 
            en: "Quilted winter jacket insulated against cold with an extremely distinctive design." 
        },
        images: [
            "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80"
        ]
    }
];

let cart = [];
let selectedProductForModal = null;
let activeSize = "M";
let activeColor = "";

const productsGrid = document.getElementById('productsGrid');
const sideDrawer = document.getElementById('sideDrawer');
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const productModal = document.getElementById('productModal');

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
    setupEventListeners();
    updateCartUI();
    updateStaticTexts();
});

function updateStaticTexts() {
    const t = translations[currentLang];
    
    document.querySelector('.announcement-bar span').textContent = t.announcement;
    document.querySelector('.owner-tag').textContent = t.ownerTag;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.getElementById('currentCategoryTitle').textContent = t.allProducts;
    document.getElementById('menuTitleHeading').textContent = t.menuTitle;
    
    document.getElementById('nav-all').textContent = t.allProducts;
    document.getElementById('nav-hoodies').textContent = t.hoodiesSection;
    document.getElementById('nav-tshirts').textContent = t.tshirtsSection;
    document.getElementById('nav-winter').textContent = t.winterCollection;
    document.getElementById('nav-summer').textContent = t.summerCollection;
    document.getElementById('nav-pants').textContent = t.pantsSection;

    document.querySelector('.hero-content h2').textContent = t.heroTitle;
    document.querySelector('.hero-content p').textContent = t.heroDesc;
    document.querySelector('.hero-content .btn-primary').textContent = t.heroBtn;
    
    document.querySelector('.about-card h2').innerHTML = `${currentLang === 'ar' ? 'عن براند' : 'About Brand'} <span class="highlight">DIFFER</span>`;
    document.querySelector('.about-card p').textContent = t.aboutText;

    const quickBtns = document.querySelectorAll('.quick-filter-btn');
    if(quickBtns.length >= 5) {
        quickBtns[0].textContent = t.filterAll;
        quickBtns[1].textContent = t.filterHoodies;
        quickBtns[2].textContent = t.filterTshirts;
        quickBtns[3].textContent = t.filterWinter;
        quickBtns[4].textContent = t.filterSummer;
    }

    document.querySelector('.cart-header h3').innerHTML = `${t.cartTitle} (<span id="cartHeaderCount">${cart.reduce((s,i)=>s+i.quantity,0)}</span>)`;
    document.querySelector('.checkout-form-container h4').textContent = t.deliveryTitle;
    document.querySelector('label[for="clientName"]').innerHTML = `<i class="fa-solid fa-user"></i> ${t.nameLabel}`;
    document.getElementById('clientName').placeholder = t.namePlaceholder;
    document.querySelector('label[for="clientPhone"]').innerHTML = `<i class="fa-solid fa-phone"></i> ${t.phoneLabel}`;
    document.getElementById('clientPhone').placeholder = t.phonePlaceholder;
    document.querySelector('label[for="clientAddress"]').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.addressLabel}`;
    document.getElementById('clientAddress').placeholder = t.addressPlaceholder;
    document.querySelector('.cart-total-row span:first-child').textContent = t.totalLabel;
    document.getElementById('sendWhatsappBtn').innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${t.confirmWhatsapp}`;

    document.querySelector('.footer-brand p').textContent = t.footerDesc;
    document.getElementById('footerQuickLinksTitle').textContent = t.quickLinks;
    document.getElementById('footerDevTitle').textContent = t.devTitle;
    document.getElementById('footerDevName').textContent = t.devName;
    document.getElementById('footerWaContactName').textContent = t.waContactName;
    document.querySelector('.footer-bottom p').textContent = t.rights;
}

function renderProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #777;">${currentLang === 'ar' ? 'لم يتم العثور على أي منتجات مطابقة.' : 'No matching products found.'}</p>`;
        return;
    }

    products.forEach(product => {
        const discountPercent = Math.round(((product.priceOld - product.priceCurrent) / product.priceOld) * 100);
        const titleText = product.title[currentLang];
        const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';
        const saleBadge = currentLang === 'ar' ? `خصم ${discountPercent}%` : `${discountPercent}% OFF`;
        const addBtnText = translations[currentLang].addToCartBtn;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
                <img src="${product.images[0]}" alt="${titleText}">
                <span class="badge-sale">${saleBadge}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="openProductModal(${product.id})">${titleText}</h3>
                <div class="product-price">
                    <span class="current-price">${product.priceCurrent} ${currency}</span>
                    <span class="old-price">${product.priceOld} ${currency}</span>
                </div>
                <div class="card-actions">
                    <button class="btn-card-add" onclick="quickAddToCart(${product.id})">${addBtnText}</button>
                    <button class="btn-card-view" onclick="openProductModal(${product.id})"><i class="fa-regular fa-eye"></i></button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function openProductModal(productId) {
    selectedProductForModal = productsData.find(p => p.id === productId);
    if (!selectedProductForModal) return;

    const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';

    document.getElementById('modalMainImg').src = selectedProductForModal.images[0];
    document.getElementById('modalTitle').textContent = selectedProductForModal.title[currentLang];
    document.getElementById('modalPriceCurrent').textContent = `${selectedProductForModal.priceCurrent} ${currency}`;
    document.getElementById('modalPriceOld').textContent = `${selectedProductForModal.priceOld} ${currency}`;
    document.getElementById('modalDescription').textContent = selectedProductForModal.description[currentLang];

    document.getElementById('modalSizeLabel').textContent = translations[currentLang].modalSize;
    document.getElementById('modalColorLabel').textContent = translations[currentLang].modalColor;
    document.getElementById('modalAddToCartBtn').innerHTML = `<i class="fa-solid fa-bag-shopping"></i> ${translations[currentLang].addToCartBtn}`;

    const colorContainer = document.getElementById('colorOptions');
    colorContainer.innerHTML = '';
    const availableColors = selectedProductForModal.colors[currentLang];
    activeColor = availableColors[0] || '';

    availableColors.forEach((color, index) => {
        const colorBtn = document.createElement('button');
        colorBtn.className = `color-btn ${index === 0 ? 'active' : ''}`;
        colorBtn.textContent = color;
        colorBtn.onclick = () => {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            colorBtn.classList.add('active');
            activeColor = color;
        };
        colorContainer.appendChild(colorBtn);
    });

    const thumbContainer = document.getElementById('modalThumbnails');
    thumbContainer.innerHTML = '';
    selectedProductForModal.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `thumb-img ${index === 0 ? 'active' : ''}`;
        thumb.onclick = () => {
            document.getElementById('modalMainImg').src = imgSrc;
            document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbContainer.appendChild(thumb);
    });

    productModal.classList.add('active');
}

function quickAddToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const defaultColor = product.colors[currentLang][0] || '';
    addToCartHandler(product, "M", defaultColor);
}

function addToCartHandler(product, size, color) {
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size && item.color === color);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title[currentLang],
            price: product.priceCurrent,
            image: product.images[0],
            size: size,
            color: color,
            quantity: 1
        });
    }

    updateCartUI();
    openCartDrawer();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    const cartHeaderCount = document.getElementById('cartHeaderCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';

    cartCount.textContent = totalCount;
    if(cartHeaderCount) cartHeaderCount.textContent = totalCount;
    cartTotalPrice.textContent = `${totalPrice} ${currency}`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: #888; padding: 30px 0;">${translations[currentLang].emptyCart}</p>`;
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-meta">${currentLang === 'ar' ? 'المقاس' : 'Size'}: ${item.size} | ${currentLang === 'ar' ? 'اللون' : 'Color'}: ${item.color}</div>
                <div class="cart-item-price">${item.price * item.quantity} ${currency}</div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash-can"></i></button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert(currentLang === 'ar' ? "سلة المشتريات فارغة!" : "Shopping cart is empty!");
        return;
    }

    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const address = document.getElementById('clientAddress').value.trim();

    if (!name || !phone || !address) {
        alert(currentLang === 'ar' ? "يرجى ملء كافة بيانات التوصيل قبل تأكيد الطلب." : "Please fill in all delivery details.");
        return;
    }

    let itemsDetailsText = "";
    let totalPrice = 0;
    const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';

    cart.forEach((item, i) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        itemsDetailsText += `${i + 1}. (${item.title}) - ${currentLang === 'ar' ? 'المقاس' : 'Size'}: ${item.size} - ${currentLang === 'ar' ? 'اللون' : 'Color'}: ${item.color} - ${currentLang === 'ar' ? 'الكمية' : 'Qty'}: ${item.quantity} - ${itemTotal} ${currency}\n`;
    });

    const messageText = currentLang === 'ar' ? 
`🛒 *طلب جديد من متجر DIFFER*
----------------------------------
👤 *بيانات العميل:*
• *الاسم:* ${name}
• *الهاتف:* ${phone}
• *العنوان:* ${address}

📦 *تفاصيل الأوردر:*
${itemsDetailsText}
----------------------------------
💰 *إجمالي المبلغ:* ${totalPrice} ${currency}
----------------------------------
شكراً لتسوقك من DIFFER!` :
`🛒 *New Order from DIFFER Store*
----------------------------------
👤 *Customer Details:*
• *Name:* ${name}
• *Phone:* ${phone}
• *Address:* ${address}

📦 *Order Details:*
${itemsDetailsText}
----------------------------------
💰 *Total Amount:* ${totalPrice} ${currency}
----------------------------------
Thank you for shopping with DIFFER!`;

    // الرقم الموحد لبراند DIFFER
    const brandWhatsAppNumber = "201029053373"; 
    const whatsappUrl = `https://wa.me/${brandWhatsAppNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, '_blank');

    // تفريغ السلة فوراً
    cart = [];
    document.getElementById('whatsappCheckoutForm').reset();
    updateCartUI();
    closeCartDrawer();
}

function setupEventListeners() {
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const langText = document.getElementById('langText');

    toggleLangBtn.onclick = () => {
        if (currentLang === 'ar') {
            currentLang = 'en';
            langText.textContent = 'AR';
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
        } else {
            currentLang = 'ar';
            langText.textContent = 'EN';
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        }
        updateStaticTexts();
        renderProducts(productsData);
        updateCartUI();
    };

    document.getElementById('openMenuBtn').onclick = () => { sideDrawer.classList.add('active'); overlay.classList.add('active'); };
    document.getElementById('closeMenuBtn').onclick = closeDrawers;
    document.getElementById('openCartBtn').onclick = openCartDrawer;
    document.getElementById('closeCartBtn').onclick = closeCartDrawer;
    overlay.onclick = closeDrawers;

    document.getElementById('closeModalBtn').onclick = () => productModal.classList.remove('active');

    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeSize = e.target.textContent;
        };
    });

    document.getElementById('modalAddToCartBtn').onclick = () => {
        if (selectedProductForModal) {
            addToCartHandler(selectedProductForModal, activeSize, activeColor);
            productModal.classList.remove('active');
        }
    };

    document.getElementById('sendWhatsappBtn').onclick = sendOrderToWhatsApp;

    const searchToggleBtn = document.getElementById('toggleSearchBtn');
    const searchBarContainer = document.getElementById('searchBarContainer');
    const searchInput = document.getElementById('searchInput');

    searchToggleBtn.onclick = () => {
        searchBarContainer.classList.toggle('active');
        if (searchBarContainer.classList.contains('active')) searchInput.focus();
    };

    searchInput.oninput = (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = productsData.filter(p => p.title.ar.toLowerCase().includes(query) || p.title.en.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        renderProducts(filtered);
    };

    document.getElementById('clearSearchBtn').onclick = () => {
        searchInput.value = '';
        renderProducts(productsData);
    };

    document.querySelectorAll('.filter-category, .quick-filter-btn').forEach(element => {
        element.onclick = (e) => {
            e.preventDefault();
            const category = element.getAttribute('data-category');
            
            document.querySelectorAll('.filter-category, .quick-filter-btn').forEach(el => el.classList.remove('active'));
            element.classList.add('active');

            if (category === 'all') {
                renderProducts(productsData);
                document.getElementById('currentCategoryTitle').textContent = translations[currentLang].allProducts;
            } else {
                const filtered = productsData.filter(p => p.category === category || p.season === category);
                renderProducts(filtered);
                document.getElementById('currentCategoryTitle').textContent = element.textContent.trim();
            }
            closeDrawers();
        };
    });
}

function openCartDrawer() {
    cartDrawer.classList.add('active');
    overlay.classList.add('active');
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    overlay.classList.remove('active');
}

function closeDrawers() {
    sideDrawer.classList.remove('active');
    cartDrawer.classList.remove('active');
    overlay.classList.remove('active');
}