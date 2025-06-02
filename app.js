<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cemilan Ceria</title>
    <link rel="stylesheet" href="style.css" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap"
      rel="stylesheet"
    />

    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    <!-- APP JS -->
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
    ></script>

    <script src="app.js"></script>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar" x-data>
      <a href="#" class="navbar-logo">Cemilan<span> Ceria</span></a>
      <div class="navbar-nav">
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#products">Produk</a>
        <a href="#contact">Kontak</a>
      </div>
      <div class="navbar-extra">
        <a href="#" id="search"><i data-feather="search"></i></a>
        <a href="#" id="shopping-cart">
          <i data-feather="shopping-cart"></i>
          <span
            class="quantity-badge"
            x-show="$store.cart.quantity"
            x-text="$store.cart.quantity"
          ></span>
        </a>
        <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
      </div>

      <!-- Search Form -->
      <div class="search-form">
        <input type="search" id="search-box" placeholder="Cari di sini..." />
        <label for="search-box"><i data-feather="search"></i></label>
      </div>

      <!-- Shopping Cart -->
<!-- Shopping Cart -->
<div class="shopping-cart">
  <template x-for="(item, index) in $store.cart.items" :key="item.id">
    <div class="cart-item">
      <img :src="item.img" :alt="item.name" />
      <div class="item-detail">
        <h3 x-text="item.name"></h3>
        <div class="item-price">
          <span x-text="rupiah(item.price)"></span> &times;
          <button @click="$store.cart.decrease(item)">−</button>
          <span x-text="item.quantity"></span>
          <button @click="$store.cart.increase(item)">+</button> =
          <span x-text="rupiah(item.total)"></span>
        </div>
      </div>
    </div>
  </template>

  <!-- Cart kosong -->
  <h4 x-show="$store.cart.items.length === 0">Cart Is Empty</h4>

  <!-- Total belanja -->
  <h4 x-show="$store.cart.items.length > 0">
    Total: <span x-text="rupiah($store.cart.total)"></span>
  </h4>
  <div class="form-container" x-show="$store.cart.items.length">
    <form action="" id="checkoutform">
      <h5>Customer Detail</h5>
      <label for="name">
        <span>Nama</span>
        <input type="text" name="name" id="name">
      </label>
      <label for="email">
        <span>Email</span>
        <input type="email" name="email" id="email">
      </label>
    </form>
    <label for="phone">
      <span>No HP</span>
      <input type="number" name="phone" id="phone" autocomplete="off">
    </label>

    <button class="checkout-button" type="submit" id="checkout-button" value="Checkout">Checkout</button>
  </div>
</div>



</nav> <!-- Letakkan penutup nav di sini -->


    
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="kontent">
        <h1>Selamat datang di Cemilan <span>Ceria</span></h1>
        <p>
          Kami Menawarkan berbagai pilihan cemilan lezat yang digemari banyak
          orang.
        </p>
        <a href="https://wa.me/6285692517903" class="cta">Pesan Sekarang</a>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <h2>Tentang <span>Kami</span></h2>
      <div class="row">
        <div class="about-img">
          <img
            src="https://i.pinimg.com/originals/08/b3/b9/08b3b912329d25d195672d3be2a5cdcd.jpg"
            alt="Tentang Kami"
          />
        </div>
        <div class="content">
          <h3>Kenapa memilih Cireng kami?</h3>
          <p>
            Bukan hanya crispy, cireng kami juga punya isian yang melimpah dan
            sambal pedas yang pas di lidah.
          </p>
          <p>
            Kami juga memilih bahan terbaik dan premium untuk memastikan cireng
            kami selalu enak dan memuaskan.
          </p>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section class="menu" id="menu">
      <h2>Menu<span> Kami</span></h2>
      <p>
        Menu cemilan kami menawarkan rasa unik, cocok untuk menemani waktu
        santai Anda!
      </p>
      <div class="row">
        <!-- Menu Card 1 -->
        <div class="menu-card">
          <img src="img/satu.jpg" alt="Basreng" class="menu-card-img" />
          <h3 class="menu-card-title">- Basreng -</h3>
          <p class="menu-card-price">Coming Soon</p>
        </div>

        <!-- Menu Card 2 -->
        <div class="menu-card">
          <img
            src="img/dua.webp"
            alt="Cireng Ayam Suwir"
            class="menu-card-img"
          />
          <h3 class="menu-card-title">- Cireng Ayam Suwir -</h3>
          <p class="menu-card-price">IDR 3K</p>
        </div>

        <!-- Menu Card 3 -->
        <div class="menu-card">
          <img src="img/tiga.jpg" alt="Keripik Pisang" class="menu-card-img" />
          <h3 class="menu-card-title">- Keripik Pisang -</h3>
          <p class="menu-card-price">Coming Soon</p>
        </div>
      </div>
    </section>

    <!-- Produk Section -->
    <section class="product" id="products" x-data="products">
      <h2><span>Produk Unggulan</span> Kami</h2>
      <p>Ini adalah produk andalan kami!</p>
      <div class="row">
        <template
          x-for="(item, index) in items"
          :key="index"
          x-init="$nextTick(() => feather.replace())"
        >
          <div class="product-card">
            <div class="product-icons">
              <a href="#" @click.prevent="$store.cart.add(item)"
                ><i data-feather="shopping-cart"></i
              ></a>
              <a href="#"><i data-feather="eye"></i></a>
            </div>
            <div class="product-image">
              <img :src="item.img" :alt="item.name" />
            </div>
            <div class="product-content">
              <h3 x-text="item.name"></h3>
              <div class="product-stars">
                <i data-feather="star" class="star-full"></i>
                <i data-feather="star" class="star-full"></i>
                <i data-feather="star" class="star-full"></i>
                <i data-feather="star" class="star-full"></i>
                <i data-feather="star" class="star-full"></i>
              </div>
              <div class="product-price">
                <span x-text="`IDR ${item.price / 1000}K`"></span>
                <template x-if="item.discount">
                  <span
                    class="discount"
                    x-text="`IDR ${item.discount / 1000}K`"
                  ></span>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- Kontak -->
    <section class="contact" id="contact">
      <h2>Kontak<span> Kami</span></h2>
      <p>Ada pertanyaan atau saran? Kirimkan pesan melalui kontak ini.</p>
      <div class="row">
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=..."
        ></iframe>
        <form action="">
          <div class="input-group">
            <i data-feather="user"></i>
            <input type="text" placeholder="Nama" />
          </div>
          <div class="input-group">
            <i data-feather="mail"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div class="input-group">
            <i data-feather="phone"></i>
            <input type="tel" placeholder="No HP" />
          </div>
          <button type="submit" class="btn">Kirim Pesan</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="S">
        <a href="https://www.instagram.com/cemilanceeria/"
          ><i data-feather="instagram"></i
        ></a>
        <a href="mailto:cemilanceeria@gmail.com"><i data-feather="mail"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61569962241014"
          ><i data-feather="facebook"></i
        ></a>
        <a href="https://www.youtube.com/@CemilanCeria"
          ><i data-feather="youtube"></i
        ></a>
      </div>
      <div class="links">
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Kontak</a>
      </div>
      <div class="creadit">
        <p>Created by <a href="#">adrianmaulanarahman</a> | &copy; 2025.</p>
      </div>
    </footer>

    <!-- Feather Icons Init -->
    <script>
      feather.replace();
    </script>

    <!-- JS -->
    <script src="script.js"></script>
  </body>
</html>

