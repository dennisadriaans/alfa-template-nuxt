<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
const UBadge = resolveComponent('UBadge')

const allData = ref([
  {
    id: '4600',
    date: '2024-03-11T15:30:00',
    status: 'paid',
    email: 'james.anderson@example.com',
    amount: 594
  },
  {
    id: '4599',
    date: '2024-03-11T10:10:00',
    status: 'failed',
    email: 'mia.white@example.com',
    amount: 276
  },
  {
    id: '4598',
    date: '2024-03-11T08:50:00',
    status: 'refunded',
    email: 'william.brown@example.com',
    amount: 315
  },
  {
    id: '4597',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma.davis@example.com',
    amount: 529
  },
  {
    id: '4596',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan.harris@example.com',
    amount: 639
  },
  {
    id: '4595',
    date: '2024-03-10T12:20:00',
    status: 'processing',
    email: 'olivia.wilson@example.com',
    amount: 184
  },
  {
    id: '4594',
    date: '2024-03-09T16:40:00',
    status: 'refunded',
    email: 'noah.taylor@example.com',
    amount: 432
  },
  {
    id: '4593',
    date: '2024-03-09T09:15:00',
    status: 'paid',
    email: 'sophia.martin@example.com',
    amount: 728
  },
  {
    id: '4592',
    date: '2024-03-08T21:30:00',
    status: 'failed',
    email: 'lucas.clark@example.com',
    amount: 347
  },
  {
    id: '4591',
    date: '2024-03-08T14:05:00',
    status: 'paid',
    email: 'isabella.rodriguez@example.com',
    amount: 519
  },
  {
    id: '4590',
    date: '2024-03-08T11:50:00',
    status: 'processing',
    email: 'mason.lewis@example.com',
    amount: 263
  },
  {
    id: '4589',
    date: '2024-03-07T17:25:00',
    status: 'paid',
    email: 'amelia.walker@example.com',
    amount: 652
  }
])

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status')
      /* Badge type variants */
      // const badgeType = status === 'paid' ? 'success' : status === 'failed' ? 'error' : status === 'refunded' ? 'warning' : 'info'
      return h(UBadge, { color: 'primary', variant: 'subtle' }, { default: () => status })
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    }
  }
]

// Filtering
const searchQuery = ref('')
const statusFilter = ref('')

// Pagination
const page = ref(1)
const pageSize = ref(5)
const pageSizeOptions = [5, 10, 15, 20]

// Get statuses for filter dropdown
const statusOptions = computed(() => {
  return [...new Set(allData.value.map(item => item.status))]
})

// Filter and paginate data
const filteredData = computed(() => {
  let result = [...allData.value]
  
  // Apply search query filter (case insensitive)
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      item.id.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      new Date(item.date).toLocaleString().toLowerCase().includes(query) ||
      item.status.toLowerCase().includes(query) ||
      item.amount.toString().includes(query)
    )
  }
  
  // Apply status filter
  if (statusFilter.value) {
    result = result.filter(item => item.status === statusFilter.value)
  }
  
  return result
})

watchEffect(() => {
  if (searchQuery.value || statusFilter.value) {
    page.value = 1
  }
})

const paginatedData = computed(() => {
  const startIndex = (page.value - 1) * pageSize.value
  const endIndex = startIndex + pageSize.value
  return filteredData.value.slice(startIndex, endIndex)
})

const handlePageChange = (newPage: number) => {
  page.value = newPage
}

const resetFilters = () => {
  searchQuery.value = ''
  statusFilter.value = ''
  page.value = 1
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
      <UInput
        v-model="searchQuery"
        placeholder="Search..."
        icon="i-heroicons-magnifying-glass"
        class="w-full sm:w-64"
      />
      
      <USelect
        v-model="statusFilter"
        :items="statusOptions"
        placeholder="Filter by status"
        class="w-full sm:w-48"
      />
      
      <UButton
        v-if="searchQuery || statusFilter"
        variant="ghost"
        icon="i-heroicons-x-mark"
        @click="resetFilters"
      >
        Clear filters
      </UButton>
    </div> -->
    
    <!-- Results summary -->
    <div class="text-sm text-neutral-500">
      Showing {{ paginatedData.length }} of {{ filteredData.length }} results
    </div>
    <!-- Table -->
    <UTable
      :data="paginatedData"
      :columns="columns"
    />
    
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-500">Rows per page:</span>
        <USelect
          v-model="pageSize"
          :items="pageSizeOptions"
          size="sm"
          class="w-16"
        />
      </div>
      <UPagination
        :default-page="page"
        :total="allData.length"
        :items-per-page="pageSize"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>