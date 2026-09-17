const trafficChart = document.getElementById("trafficChart");
const sourceChart = document.getElementById("sourceChart");

const trafficChartInstance = new Chart(trafficChart, {
    type: "line",

    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        datasets: [
            {
                label: "Visitors",
                data: [420, 580, 510, 690, 760, 620, 810],
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 3
            },
            {
                label: "Engagement",
                data: [52, 61, 57, 68, 72, 65, 76],
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 3
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true
            }
        },

        scales: {
            y: {
                beginAtZero: true
            },

            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

new Chart(sourceChart, {
    type: "doughnut",

    data: {
        labels: ["Search", "Social", "Email", "Direct"],

        datasets: [
            {
                data: [42, 28, 18, 12],
                borderWidth: 1
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true,
                position: "bottom"
            }
        }
    }
});


const searchInput = document.getElementById("dashboard-search");
const campaignTable = document.getElementById("campaignTable");

const greeting = document.getElementById("greeting");
const lastUpdated = document.getElementById("lastUpdated");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good morning";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon";
} else {
    greeting.textContent = "Good evening";
}

function updateLastUpdated() {
    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    lastUpdated.textContent = "Last updated: " + time;
}

updateLastUpdated();

const campaigns = [
    {
        name: "Summer Sale",
        channel: "Email Campaign",
        visitors: "2,840",
        engagement: "72.4%",
        conversions: "128",
        status: "Active"
    },
    {
        name: "Product Launch",
        channel: "Social Media",
        visitors: "2,156",
        engagement: "64.8%",
        conversions: "96",
        status: "Active"
    },
    {
        name: "Brand Awareness",
        channel: "Display Ads",
        visitors: "1,742",
        engagement: "58.6%",
        conversions: "64",
        status: "Paused"
    }
];

function showCampaigns(list) {
    campaignTable.innerHTML = "";

    if (list.length === 0) {
        campaignTable.innerHTML = `
            <tr>
                <td colspan="5" class="px-6 py-8 text-center text-sm text-slate-500">
                    No campaigns found
                </td>
            </tr>
        `;

        return;
    }

    list.forEach(function (campaign) {
        const statusClass =
            campaign.status === "Active"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700";

        campaignTable.innerHTML += `
            <tr>
                <td class="px-6 py-4">
                    <p class="text-sm font-medium">
                        ${campaign.name}
                    </p>

                    <p class="mt-1 text-xs text-slate-500">
                        ${campaign.channel}
                    </p>
                </td>

                <td class="px-6 py-4 text-sm text-slate-600">
                    ${campaign.visitors}
                </td>

                <td class="px-6 py-4 text-sm text-slate-600">
                    ${campaign.engagement}
                </td>

                <td class="px-6 py-4 text-sm font-medium">
                    ${campaign.conversions}
                </td>

                <td class="px-6 py-4">
                    <span class="rounded-full ${statusClass} px-2.5 py-1 text-xs">
                        ${campaign.status}
                    </span>
                </td>
            </tr>
        `;
    });
}

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredCampaigns = campaigns.filter(function (campaign) {
        return (
            campaign.name.toLowerCase().includes(searchText) ||
            campaign.channel.toLowerCase().includes(searchText) ||
            campaign.status.toLowerCase().includes(searchText)
        );
    });

    showCampaigns(filteredCampaigns);
});

showCampaigns(campaigns);

const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");
const logoutButton = document.getElementById("logoutButton");

profileButton.addEventListener("click", function () {
    profileMenu.classList.toggle("hidden");
});

logoutButton.addEventListener("click", function () {
    profileMenu.classList.add("hidden");
    alert("You have been logged out.");
});

const viewAllButton = document.getElementById("viewAllCampaigns");

viewAllButton.addEventListener("click", function () {
    searchInput.value = "";
    showCampaigns(campaigns);

    document.getElementById("campaigns").scrollIntoView({
        behavior: "smooth"
    });
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light";
    } else {
        themeButton.textContent = "Dark";
    }
});

const dateRangeButton = document.getElementById("dateRangeButton");
const dateRangeMenu = document.getElementById("dateRangeMenu");

dateRangeButton.addEventListener("click", function () {
    dateRangeMenu.classList.toggle("hidden");
});

const dateRangeOptions = dateRangeMenu.querySelectorAll("button");

dateRangeOptions.forEach(function (option) {
    option.addEventListener("click", function () {
        const range = option.dataset.range;

        const activeUsers = document.getElementById("activeUsers");
const sessions = document.getElementById("sessions");
const engagementRate = document.getElementById("engagementRate");
const conversions = document.getElementById("conversions");

        if (range === "7") {
            dateRangeButton.textContent = "Last 7 days";

            activeUsers.textContent = "1,248";
sessions.textContent = "8,426";
engagementRate.textContent = "68.4%";
conversions.textContent = "324";

            trafficChartInstance.data.labels = [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ];

            trafficChartInstance.data.datasets[0].data = [
                420,
                580,
                510,
                690,
                760,
                620,
                810
            ];

            trafficChartInstance.data.datasets[1].data = [
                52,
                61,
                57,
                68,
                72,
                65,
                76
            ];
        }

        if (range === "30") {
            dateRangeButton.textContent = "Last 30 days";
            activeUsers.textContent = "4,862";
sessions.textContent = "24,580";
engagementRate.textContent = "71.2%";
conversions.textContent = "986";

            trafficChartInstance.data.labels = [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4"
            ];

            trafficChartInstance.data.datasets[0].data = [
                2140,
                2860,
                3240,
                3910
            ];

            trafficChartInstance.data.datasets[1].data = [
                54,
                62,
                67,
                73
            ];
            trafficChartInstance.update();
        }
        

        if (range === "90") {
            dateRangeButton.textContent = "Last 90 days";

            activeUsers.textContent = "12,640";
sessions.textContent = "68,420";
engagementRate.textContent = "74.8%";
conversions.textContent = "2,846";

            trafficChartInstance.data.labels = [
                "Month 1",
                "Month 2",
                "Month 3"
            ];

            trafficChartInstance.data.datasets[0].data = [
                8240,
                10350,
                12840
            ];

            trafficChartInstance.data.datasets[1].data = [
                57,
                65,
                74
            ];
        }

        trafficChartInstance.update();

        dateRangeMenu.classList.add("hidden");
    });
});

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
});