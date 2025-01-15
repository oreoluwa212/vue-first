<template>
    <div class="flex flex-col md:flex-row gap-14">
        <!-- Left Section -->
        <div class="flex flex-col w-full md:w-2/3 gap-8">
            <!-- Store Wallet Section -->
            <div
                class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-sm shadow-sm text-center text-navy">
                <div class="text-lg font-normal">{{ dashboardData.storeWallet.title }}</div>
                <h2 class="text-2xl font-semibold">{{ dashboardData.storeWallet.amount }}</h2>
                <button class="bg-green text-white py-2 px-4 rounded-lg mt-3 md:mt-0">
                    {{ dashboardData.storeWallet.buttonText }}
                </button>
            </div>

            <!-- Total Disbursed Section -->
            <div
                class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-sm shadow-sm text-center text-navy">
                <div class="text-lg font-normal">{{ dashboardData.totalDisbursed.title }}</div>
                <h2 class="text-2xl font-semibold">{{ dashboardData.totalDisbursed.amount }}</h2>
                <button class="border-navy border text-navy py-2 px-4 rounded-lg mt-3 md:mt-0">
                    {{ dashboardData.totalDisbursed.buttonText }}
                </button>
            </div>

            <!-- Recent Activities Section -->
            <div class="pt-6 text-navy">
                <h3 class="text-xl font-semibold mb-6">{{ dashboardData.recentActivities.title }}</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full table-auto border-collapse">
                        <thead>
                            <tr class="uppercase font-extralight">
                                <th class="px-4 py-2 text-left">#</th>
                                <th class="px-4 py-2 text-left">Description</th>
                                <th class="px-4 py-2 text-left">Date</th>
                                <th class="px-4 py-2 text-left">Time</th>
                                <th class="px-4 py-2 text-left">Staff</th>
                                <th class="px-4 py-2 text-left">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="activity in dashboardData.recentActivities.list" :key="activity.id"
                                class="bg-white h-[50px] rounded-2xl">
                                <td class="px-4 py-2">{{ activity.id }}</td>
                                <td class="px-4 py-2">{{ activity.description }}</td>
                                <td class="px-4 py-2">{{ activity.date }}</td>
                                <td class="px-4 py-2">{{ activity.time }}</td>
                                <td class="px-4 py-2">{{ activity.staff }}</td>
                                <td class="px-4 py-2">{{ activity.amount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- GetChange Widget Section -->
        <div class="bg-navy text-white w-full md:w-1/3 rounded-lg">
            <div class="px-6 py-10">
                <h3 class="text-xl font-semibold mb-4">{{ dashboardData.getChangeWidget.title }}</h3>
                <div class="flex justify-center items-center gap-4 my-4">
                    <label class="font-thin" for="amount">Amount</label>
                    <input type="text" class="w-full mb-4 border-b-[1px] bg-transparent" />
                </div>
                <div class="mb-4 pl-[20%]">
                    <label class="inline-block mr-4">
                        <input type="radio" name="option" value="airtime" /> Airtime
                    </label>
                    <label class="inline-block">
                        <input type="radio" name="option" value="iou" /> IOU Voucher
                    </label>
                </div>
                <input type="text" class="w-full rounded-lg border-none bg-transparent text-3xl mt-2"
                    placeholder="08012345678" />
            </div>
            <div class="flex bg-white text-navy py-4 flex-wrap justify-between text-3xl">
                <button v-for="button in dashboardData.getChangeWidget.numpad" :key="button"
                    class="w-[25%] rounded-lg m-2">
                    {{ button }}
                </button>
            </div>
            <div class="bg-white w-full py-10 border-t-navy border px-[20%]">
                <div class="flex flex-col gap-4">
                    <button class="bg-white border border-navy text-navy py-2 px-4 rounded-lg">
                        {{ dashboardData.getChangeWidget.queryButtonText }}
                    </button>
                    <button class="bg-green text-white py-2 px-4 rounded-lg">
                        {{ dashboardData.getChangeWidget.generateButtonText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            dashboardData: {
                storeWallet: {
                    title: "Store Wallet",
                    amount: "₦2,500",
                    buttonText: "Top up wallet",
                },
                totalDisbursed: {
                    title: "Total Disbursed",
                    amount: "₦12,000",
                    buttonText: "View History",
                },
                recentActivities: {
                    title: "Recent Activities",
                    list: [
                        {
                            id: 1,
                            description: "Wallet top up",
                            date: "06 Aug, 2019",
                            time: "12:24 PM",
                            staff: "Admin",
                            amount: "NGN2000.00",
                        },
                        {
                            id: 2,
                            description: "Airtime purchase",
                            date: "07 Aug, 2019",
                            time: "02:30 PM",
                            staff: "John Doe",
                            amount: "NGN1000.00",
                        },
                        {
                            id: 3,
                            description: "IOU Voucher issued",
                            date: "08 Aug, 2019",
                            time: "09:10 AM",
                            staff: "Jane Smith",
                            amount: "NGN500.00",
                        },
                        {
                            id: 4,
                            description: "Wallet top up",
                            date: "09 Aug, 2019",
                            time: "05:45 PM",
                            staff: "Admin",
                            amount: "NGN3000.00",
                        },
                        {
                            id: 5,
                            description: "Airtime purchase",
                            date: "10 Aug, 2019",
                            time: "11:00 AM",
                            staff: "John Doe",
                            amount: "NGN1500.00",
                        },
                        {
                            id: 6,
                            description: "IOU Voucher issued",
                            date: "11 Aug, 2019",
                            time: "04:15 PM",
                            staff: "Jane Smith",
                            amount: "NGN700.00",
                        },
                        {
                            id: 7,
                            description: "Wallet top up",
                            date: "12 Aug, 2019",
                            time: "10:30 AM",
                            staff: "Admin",
                            amount: "NGN2500.00",
                        },
                        {
                            id: 8,
                            description: "Airtime purchase",
                            date: "13 Aug, 2019",
                            time: "01:00 PM",
                            staff: "John Doe",
                            amount: "NGN2000.00",
                        },
                    ],
                },
                getChangeWidget: {
                    title: "GETCHANGE WIDGET",
                    numpad: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    queryButtonText: "Query",
                    generateButtonText: "Generate",
                },
            }
        };
    },
};
</script>