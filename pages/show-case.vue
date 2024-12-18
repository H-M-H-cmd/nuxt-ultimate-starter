<template>
    <div class="container py-10 space-y-8 max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold">{{ t('welcome') }}</h1>
        <h2 class="text-2xl font-bold">{{ t('showcase.title') }}</h2>
        <p class="text-lg text-gray-500">{{ t('showcase.description') }}</p>
        <!-- Button Examples -->
        <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Buttons</h2>
            <div class="flex gap-4 flex-wrap">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </div>
        </div>

        <!-- Input Example -->
        <div class="space-y-4 max-w-sm">
            <h2 class="text-2xl font-semibold">Input</h2>
            <div class="space-y-2">
                <Label for="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
            </div>
        </div>

        <!-- Card Example -->
        <div class="max-w-sm">
            <h2 class="text-2xl font-semibold mb-4">Card</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button>Action</Button>
                </CardFooter>
            </Card>
        </div>

        <!-- Dialog Example -->
        <div>
            <h2 class="text-2xl font-semibold mb-4">Dialog</h2>
            <Dialog>
                <DialogTrigger as-child>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            This is a dialog description.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="py-4">
                        Dialog content goes here
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>

        <!-- Select Example -->
        <div class='py-4'>
            Select
        </div>
        <Select >
            <SelectTrigger size="lg" icon-name="mdi:chevron-down" icon-size="20"  class="min-w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                        Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                        Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                        Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">
                        New Zealand Standard Time (NZST)
                    </SelectItem>
                    <SelectItem value="fjt">
                        Fiji Time (FJT)
                    </SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">
                        Argentina Time (ART)
                    </SelectItem>
                    <SelectItem value="bot">
                        Bolivia Time (BOT)
                    </SelectItem>
                    <SelectItem value="brt">
                        Brasilia Time (BRT)
                    </SelectItem>
                    <SelectItem value="clt">
                        Chile Standard Time (CLT)
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <!-- Dropdown Menu Example -->
        <div>
            <h2 class="text-2xl font-semibold mb-4">Dropdown Menu</h2>
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div class="max-w-3xl mx-auto">
            <div class="space-y-2 text-center mb-8">
                <h1 class="text-3xl font-bold">Multi-Step Form</h1>
                <p class="text-muted-foreground">Complete all steps to submit your information.</p>
            </div>

            <div>
                <Steps />
            </div>
        </div>
        <div class="space-y-8">
            <div class="space-y-4">
                <h2 class="text-2xl font-bold">Select Variants</h2>
                
                <!-- Default Select -->
                <Select  v-model="selectedFruit">
                    <SelectTrigger class="w-full h-16 flex items-center justify-between">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple" class="flex items-center gap-2">
                            Apple
                            <Icon name="mdi:apple" />
                        </SelectItem>
                        <SelectItem value="grapes" class="flex items-center gap-2">
                            Grapes
                            <Icon name="mdi:fruit-grapes" />
                        </SelectItem>
                        <SelectItem value="cherries" class="flex items-center gap-2">
                            Cherries
                            <Icon name="mdi:fruit-cherries" />
                        </SelectItem>
                    </SelectContent>
                </Select>

                <!-- Error Select -->
                <Select v-model="selectedFruit">
                    <SelectTrigger variant="error">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                </Select>

                <!-- Success Select -->
                <Select v-model="selectedFruit">
                    <SelectTrigger variant="success">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                </Select>

                <!-- Size Variants -->
                <Select v-model="selectedFruit">
                    <SelectTrigger size="sm">
                        <SelectValue placeholder="Small Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                </Select>

                <Select v-model="selectedFruit">
                    <SelectTrigger size="lg">
                        <SelectValue placeholder="Large Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                </Select>

                <!-- Icon Variants -->
                <h3 class="text-xl font-semibold">Icon Variants</h3>
                
                <!-- Default Icon -->
                <Select v-model="selectedFruit">
                    <SelectTrigger icon-name="mdi:chevron-down" icon-size="20">
                        <SelectValue placeholder="Default Icon" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                    </SelectContent>
                </Select>

                <!-- Large Icon -->
                <Select v-model="selectedFruit">
                    <SelectTrigger icon-name="mdi:chevron-down" icon-size="20" size="lg">
                        <SelectValue placeholder="Large Icon" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                    </SelectContent>
                </Select>

                <!-- Small Icon -->
                <Select v-model="selectedFruit">
                    <SelectTrigger icon-name="mdi:chevron-down" icon-size="20" size="sm">
                        <SelectValue placeholder="Small Icon" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const selectedFruit = ref('')
const { t } = useI18n()

definePageMeta({
    title: 'Home',
    layout: 'default'
})
</script>