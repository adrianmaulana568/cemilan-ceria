document.addEventListener("alpine:init", () => {
  //  DATA PRODUK
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Cireng Ayam Suwir (Frozen)",
        img: "img/dua.webp",
        price: 10000,
        discount: 13000,
      },
      {
        id: 2,
        name: "Basreng Pedas",
        img: "img/satu.jpg",
        price: 7000,
        discount: 9000,
      },
      {
        id: 3,
        name: "Keripik Pisang Manis",
        img: "img/tiga.jpg",
        price: 5000,
        discount: 7000,
      },
    ],
  }));

  //  KERANJANG BELANJA (STATE GLOBAL)
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    maxQuantity: 30, //  

    add(newItem) {
      if (this.quantity >= this.maxQuantity) return;

      const existingItem = this.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        this.items.push({
          ...newItem,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.price * existingItem.quantity;
      }

      this.quantity++;
      this.total += newItem.price;
    },

    increase(item) {
      if (this.quantity >= this.maxQuantity) return;

      const target = this.items.find(i => i.id === item.id);
      if (target) {
        target.quantity++;
        target.total = target.quantity * target.price;
        this.quantity++;
        this.total += target.price;
      }
    },

    decrease(item) {
      const target = this.items.find(i => i.id === item.id);
      if (target && target.quantity > 0) {
        target.quantity--;
        target.total = target.quantity * target.price;
        this.quantity--;
        this.total -= target.price;

        if (target.quantity === 0) {
          this.items = this.items.filter(i => i.id !== item.id);
        }
      }
    },
  });

  // Format Rupiah 
  window.rupiah = function (value) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };
});
