<template>
    <div class="flex flex-col md:flex-row gap-14">
        <!-- Left Section -->
        <div class="flex flex-col w-full md:w-2/3 gap-8">
            <div
                class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-sm shadow-sm text-center text-[#013C61]">
                <div class="text-lg font-normal">Store Wallet</div>
                <h2 class="text-2xl font-semibold">₦2,500</h2>
                <button class="bg-green-500 text-white py-2 px-4 rounded-lg mt-3 md:mt-0">Top up wallet</button>
            </div>
            <div
                class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-sm shadow-sm text-center text-[#013C61]">
                <div class="text-lg font-normal">Total Disbursed</div>
                <h2 class="text-2xl font-semibold">₦12,000</h2>
                <button class="border-[#013C61] border text-[#013C61] py-2 px-4 rounded-lg mt-3 md:mt-0">
                    View History
                </button>
            </div>
            <div class="pt-6 text-[#013C61]">
                <h3 class="text-xl font-semibold mb-6">Recent Activities</h3>
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
                            <tr class="bg-white h-[50px] rounded-2xl">
                                <td class="px-4 py-2">1</td>
                                <td class="px-4 py-2">Wallet top up</td>
                                <td class="px-4 py-2">06 Aug, 2019</td>
                                <td class="px-4 py-2">12:24 PM</td>
                                <td class="px-4 py-2">Admin</td>
                                <td class="px-4 py-2">NGN2000.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- GetChange Widget -->
        <div class="bg-[#013C61] text-white w-full md:w-1/3 rounded-lg">
            <div class="px-6 py-10">
                <h3 class="text-xl font-semibold mb-4">GETCHANGE WIDGET</h3>
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
            <div class="flex bg-white text-[#013C61] py-4 flex-wrap justify-between text-3xl">
                <button class="w-[25%] rounded-lg m-2">1</button>
                <button class="w-[25%] rounded-lg m-2">2</button>
                <button class="w-[25%] rounded-lg m-2">3</button>
                <button class="w-[25%] rounded-lg m-2">4</button>
                <button class="w-[25%] p-4 text-black rounded-lg m-2">5</button>
                <button class="w-[25%] p-4 text-black rounded-lg m-2">6</button>
                <button class="w-[25%] p-4 text-black rounded-lg m-2">7</button>
                <button class="w-[25%] p-4 text-black rounded-lg m-2">8</button>
                <button class="w-[25%] p-4 text-black rounded-lg m-2">9</button>
            </div>
            <div class="bg-white w-full py-10 border-t-[#013C61] border px-[20%]">
                <div class="flex flex-col gap-4">
                    <button class="bg-white border border-[#013C61] text-[#013C61] py-2 px-4 rounded-lg">Query</button>
                    <button class="bg-green-500 text-white py-2 px-4 rounded-lg">Generate</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
};
</script>
