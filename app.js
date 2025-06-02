document.addEventListener("alpine:init", () => {
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

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
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

  // Fungsi untuk format mata uang
  window.rupiah = function (value) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };
});



