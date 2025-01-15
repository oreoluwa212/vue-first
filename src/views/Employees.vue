<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-navy mb-6">Employees</h1>
    <div class="flex justify-between items-center mb-4">
      <span class="text-navy">
        {{ selectedIds.length }} of {{ employees.length }} items selected
      </span>
    </div>
    <table class="table-auto w-full border shadow-md rounded uppercase">
      <thead class="bg-transparent">
        <tr>
          <th class="p-3 text-left text-navy"></th>
          <th class="p-3 text-left text-navy">ID</th>
          <th class="p-3 text-left text-navy">Name</th>
          <th class="p-3 text-left text-navy">Price</th>
          <th class="p-3 text-left text-navy">Location</th>
          <th class="p-3 text-left text-navy">Owner</th>
          <th class="p-3 text-left text-navy">In Stock</th>
        </tr>
      </thead>
      <tbody class="space-y-4"> <!-- Add space between rows -->
        <tr v-for="item in employees" :key="item.id" @click="toggleRowSelection(item.id)"
          :class="isSelected(item.id) ? 'border bg-gray-50 capitalize' : 'hover:bg-gray-50 cursor-pointer bg-white capitalize'">
          <td class="p-3">
            <input type="checkbox" :checked="isSelected(item.id)" @click.stop="toggleRowSelection(item.id)" />
          </td>
          <td class="p-3">{{ item.id }}</td>
          <td class="p-3">{{ item.name }}</td>
          <td class="p-3">${{ item.price ? item.price.toFixed(2) : "0.00" }}</td>
          <td class="p-3">{{ item.location }}</td>
          <td class="p-3">{{ item.owner }}</td>
          <td class="p-3">
            <span :class="item.instock ? 'text-green' : 'text-red-500'">
              {{ item.instock ? "Yes" : "No" }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        { id: 1, name: "Product F", price: 93.32, location: "Los Angeles", owner: "Grace", instock: false },
        { id: 2, name: "Gear H", price: 13.24, location: "New York", owner: "Hank", instock: true },
        { id: 3, name: "Widget A", price: 210.53, location: "San Diego", owner: "Eve", instock: false },
        { id: 4, name: "Gear H", price: 77.53, location: "San Diego", owner: "Frank", instock: true },
        { id: 5, name: "Widget A", price: 171.79, location: "Philadelphia", owner: "Charlie", instock: false },
        { id: 6, name: "Instrument I", price: 56.92, location: "Chicago", owner: "Charlie", instock: false },
        { id: 7, name: "Device C", price: 462.24, location: "Houston", owner: "Alice", instock: true },
        { id: 8, name: "Module J", price: 156.9, location: "Phoenix", owner: "Frank", instock: true },
        { id: 9, name: "Widget A", price: 85.82, location: "San Diego", owner: "Eve", instock: false },
        { id: 10, name: "Accessory G", price: 53.4, location: "New York", owner: "Charlie", instock: true },
        { id: 11, name: "Item E", price: 85.32, location: "Philadelphia", owner: "Frank", instock: false },
        { id: 12, name: "Widget A", price: 62.89, location: "San Diego", owner: "Diana", instock: true },
        { id: 13, name: "Tool D", price: 203.87, location: "Los Angeles", owner: "Jack", instock: false },
        { id: 14, name: "Module J", price: 277.24, location: "Dallas", owner: "Alice", instock: false },
        { id: 15, name: "Tool D", price: 474.94, location: "Dallas", owner: "Ivy", instock: false },
        { id: 16, name: "Product F", price: 192.6, location: "Dallas", owner: "Jack", instock: true },
        { id: 17, name: "Module J", price: 365.97, location: "Houston", owner: "Frank", instock: true },
        { id: 18, name: "Instrument I", price: 463.94, location: "San Antonio", owner: "Charlie", instock: false },
        { id: 19, name: "Tool D", price: 304.27, location: "New York", owner: "Charlie", instock: true },
        { id: 20, name: "Tool D", price: 204.37, location: "Houston", owner: "Charlie", instock: true }
      ],
      selectedIds: [],
    };
  },
  methods: {
    isSelected(id) {
      return this.selectedIds.includes(id);
    },
    toggleRowSelection(id) {
      if (this.isSelected(id)) {
        this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
      } else {
        this.selectedIds.push(id);
      }
      localStorage.setItem('selectedIds', JSON.stringify(this.selectedIds));
    },
  },
  created() {
    const savedSelectedIds = localStorage.getItem('selectedIds');
    if (savedSelectedIds) {
      this.selectedIds = JSON.parse(savedSelectedIds);
    }
  },
};
</script>
