<script lang="ts" setup>
import type { TableColumn } from "@nuxt/ui";
const UBadge = resolveComponent("UBadge");

interface Email {
  id: number;
  date: string;
  subject: string;
  sender: string;
  status: "unread" | "read" | "flagged" | "archived";
  hasAttachment: boolean;
  size: string;
}

// Sample email data
const data = ref<Email[]>([
  {
    id: 1,
    date: "2025-04-17T09:30:00Z",
    subject: "Project Update - Q2 Goals",
    sender: "manager@company.com",
    status: "unread",
    hasAttachment: true,
    size: "2.4MB",
  },
  {
    id: 2,
    date: "2025-04-16T16:45:00Z",
    subject: "Meeting Notes - Product Team",
    sender: "pm@company.com",
    status: "read",
    hasAttachment: true,
    size: "1.1MB",
  },
  {
    id: 3,
    date: "2025-04-16T11:15:00Z",
    subject: "New Design Assets Available",
    sender: "design@company.com",
    status: "flagged",
    hasAttachment: true,
    size: "8.7MB",
  },
  {
    id: 4,
    date: "2025-04-15T08:20:00Z",
    subject: "Weekly Newsletter",
    sender: "newsletter@company.com",
    status: "read",
    hasAttachment: false,
    size: "0.3MB",
  },
  {
    id: 5,
    date: "2025-04-14T17:05:00Z",
    subject: "Your Invoice #INV-2023",
    sender: "billing@service.com",
    status: "archived",
    hasAttachment: true,
    size: "0.5MB",
  },
  {
    id: 6,
    date: "2025-04-14T09:10:00Z",
    subject: "Security Alert: Password Changed",
    sender: "security@service.com",
    status: "read",
    hasAttachment: false,
    size: "0.1MB",
  },
  {
    id: 7,
    date: "2025-04-13T14:30:00Z",
    subject: "Invitation: Team Building Event",
    sender: "hr@company.com",
    status: "unread",
    hasAttachment: false,
    size: "0.2MB",
  },
  {
    id: 8,
    date: "2025-04-12T10:45:00Z",
    subject: "API Documentation Updates",
    sender: "dev@company.com",
    status: "flagged",
    hasAttachment: true,
    size: "3.5MB",
  },
]);

const searchQuery = ref("");

const statusColorMap = {
  unread: "blue",
  read: "gray",
  flagged: "red",
  archived: "green",
};

const columns: TableColumn<Email>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return new Date(row.getValue("date")).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "sender",
    header: "From",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const color = statusColorMap[status] || "gray";
      return h(UBadge, { color, variant: "subtle" }, { default: () => status });
    },
  },
  {
    accessorKey: "hasAttachment",
    header: "Attachment",
    cell: ({ row }) => {
      const hasAttachment = row.getValue("hasAttachment");
      return hasAttachment
        ? h("UIcon", { name: "i-lucide-paperclip", class: "text-gray-500" })
        : "";
    },
  },
  {
    accessorKey: "size",
    header: () => h("div", { class: "text-right" }, "Size"),
    cell: ({ row }) => {
      const size = row.getValue("size");
      return h("div", { class: "text-right font-medium" }, size);
    },
  },
];
</script>

<template>
  <div class="space-y-6">
    <div>
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Inbox</h2>
        <UInput
          v-model="searchQuery"
          placeholder="Search emails..."
          icon="i-lucide-search"
          class="w-full hidden lg:block"
        />
      </div>
      <p class="text-(--ui-text-muted)">Manage your email messages</p>
    </div>
    <UCard variant="subtle">
      <div class="flex items-center gap-2 mb-4">
        <UButton size="sm" color="gray" icon="i-lucide-archive"
          >Archive</UButton
        >
        <UButton size="sm" color="gray" icon="i-lucide-flag">Flag</UButton>
        <UButton size="sm" color="gray" icon="i-lucide-trash-2">Delete</UButton>
        <UButton size="sm" color="gray" icon="i-lucide-mail-check"
          >Mark as Read</UButton
        >
        <div class="flex-1"></div>
        <UButton size="sm" color="primary" icon="i-lucide-mail-plus"
          >Compose</UButton
        >
      </div>
      <DataTable :data="data" :columns="columns" :page-size="20" />
    </UCard>
  </div>
</template>
