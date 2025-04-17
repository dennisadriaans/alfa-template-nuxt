<script setup lang="ts">
const colorMode = useColorMode();
const theme = ref(colorMode.preference);

const notifications = ref({
  email: true,
  push: false,
});

const userInfo = ref({
  email: "user@example.com",
  twoFactorEnabled: false,
});

const privacySettings = ref({
  analyticsConsent: true,
});

const changeTheme = (value: string) => {
  colorMode.preference = value;
};

const saveSettings = () => {
  // TODO: Implement settings save functionality
  useToast().add({
    title: "Settings saved",
    description: "Your preferences have been updated",
    color: "green",
  });
};
</script>

<template>
  <div class="space-y-8">
    <div>
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Settings</h2>
        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass"
          class="w-full sm:w-64 hidden lg:block"
        />
      </div>
      <p class="text-(--ui-text-muted)">Manage your settings</p>
    </div>
    <UCard variant="subtle" class="mb-4">
      <h3 class="font-medium text-lg mb-4">User Preferences</h3>

      <div class="space-y-6 max-w-6xl">
        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Theme</div>
          <div class="flex-1">
            <UButtonGroup v-model="theme" class="w-full sm:w-auto">
              <UButton value="light" color="neutral" variant="subtle" @click="changeTheme('light')">
                <template #leading>
                  <UIcon name="i-lucide-sun" />
                </template>
                Light
              </UButton>
              <UButton value="dark" color="neutral" variant="subtle" @click="changeTheme('dark')">
                <template #leading>
                  <UIcon name="i-lucide-moon" />
                </template>
                Dark
              </UButton>
              <UButton value="system" color="neutral" variant="subtle" @click="changeTheme('system')">
                <template #leading>
                  <UIcon name="i-lucide-computer" />
                </template>
                System
              </UButton>
            </UButtonGroup>
          </div>
        </div>

        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Language</div>
          <div class="flex-1">
            <USelect
              :options="[
                { label: 'English', value: 'en' },
                { label: 'Spanish', value: 'es' },
                { label: 'French', value: 'fr' },
                { label: 'German', value: 'de' },
              ]"
              value="en"
              placeholder="Select a language"
              class="w-full sm:w-64"
            />
          </div>
        </div>

        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Notifications</div>
          <div class="flex-1 space-y-3">
            <UCheckbox
              v-model="notifications.email"
              label="Email Notifications"
            />
            <UCheckbox
              v-model="notifications.push"
              label="Push Notifications"
            />
          </div>
        </div>
      </div>

      <USeparator class="my-6" />

      <h3 class="font-medium text-lg mb-4">Account Settings</h3>

      <div class="space-y-6 max-w-6xl">
        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Email Address</div>
          <div class="flex-1">
            <UFormGroup class="mb-0">
              <UInput
                v-model="userInfo.email"
                placeholder="your@email.com"
                type="email"
                class="w-full sm:w-64"
              />
            </UFormGroup>
          </div>
        </div>

        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Password</div>
          <div class="flex-1">
            <UButton color="gray" size="sm">Change Password</UButton>
          </div>
        </div>

        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Two-Factor Authentication</div>
          <div class="flex-1">
            <UToggle v-model="userInfo.twoFactorEnabled" />
            <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {{ userInfo.twoFactorEnabled ? "Enabled" : "Disabled" }}
            </div>
          </div>
        </div>
      </div>

      <USeparator class="my-6" />

      <h3 class="font-medium text-lg mb-4">Privacy & Data</h3>

      <div class="space-y-6 max-w-6xl">
        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Data Sharing</div>
          <div class="flex-1">
            <UCheckbox
              v-model="privacySettings.analyticsConsent"
              label="Share anonymous usage data"
            />
          </div>
        </div>

        <div class="flex items-start gap-8">
          <div class="w-1/2 pt-2 font-medium">Data Export</div>
          <div class="flex-1">
            <UButton color="neutral" variant="subtle" icon="i-lucide-download"
              >Export All Data</UButton
            >
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
