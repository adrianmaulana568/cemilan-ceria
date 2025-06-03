add(newItem) {
  if (this.quantity >= this.maxQuantity) {
    alert("Maksimal pembelian adalah 30 item.");
    return;
  }

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
  if (this.quantity >= this.maxQuantity) {
    alert("Maksimal pembelian adalah 30 item.");
    return;
  }

  const target = this.items.find(i => i.id === item.id);
  if (target) {
    target.quantity++;
    target.total = target.quantity * target.price;
    this.quantity++;
    this.total += target.price;
  }
},
