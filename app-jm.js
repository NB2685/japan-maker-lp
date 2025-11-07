// ============================================
// 1. スクロール アニメーション
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============================================
// 2. グラフインスタンス保存（重複生成防止）
// ============================================

window.chartInstances = {
    riskChart: null,
    growthChart: null,
    salaryChart: null
};

// ============================================
// 3. リスク チャート
// ============================================

function initRiskChart() {
    const riskChartElement = document.getElementById('riskChart');
    if (!riskChartElement) return;

    if (window.chartInstances.riskChart) {
        window.chartInstances.riskChart.destroy();
    }

    try {
        const riskCtx = riskChartElement.getContext('2d');
        window.chartInstances.riskChart = new Chart(riskCtx, {
            type: 'bar',
            data: {
                labels: ['コールセンター運用', '事務・経理', '一般営業'],
                datasets: [{
                    label: '失業リスク (%)',
                    data: [72, 68, 65],
                    backgroundColor: ['#E74C3C', '#E67E22', '#F39C12'],
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        console.log('✓ riskChart 初期化成功');
    } catch (error) {
        console.error('✗ riskChart エラー:', error);
    }
}

// ============================================
// 4. 成長 チャート
// ============================================

function initGrowthChart() {
    const growthChartElement = document.getElementById('growthChart');
    if (!growthChartElement) return;

    if (window.chartInstances.growthChart) {
        window.chartInstances.growthChart.destroy();
    }

    try {
        const growthCtx = growthChartElement.getContext('2d');
        window.chartInstances.growthChart = new Chart(growthCtx, {
            type: 'bar',
            data: {
                labels: ['建設技能工', 'インフラ保守', '環境技術者'],
                datasets: [{
                    label: '需要増加率 (%)',
                    data: [34, 41, 28],
                    backgroundColor: ['#27AE60', '#2ECC71', '#52BE80'],
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 50,
                        ticks: {
                            callback: function(value) {
                                return '+' + value + '%';
                            }
                        }
                    }
                }
            }
        });
        console.log('✓ growthChart 初期化成功');
    } catch (error) {
        console.error('✗ growthChart エラー:', error);
    }
}

// ============================================
// 5. 年収 チャート (Builder System)
// ============================================

const salaryChartConfig = {
    type: 'line',
    data: {
        labels: ['0年', '5年', '10年', '15年', '20年+'],
        datasets: [
            {
                label: 'Structure Builder',
                data: [480, 600, 720, 800, 850],
                borderColor: '#1B5E9E',
                backgroundColor: 'rgba(27, 94, 158, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#1B5E9E',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            },
            {
                label: 'Habitat Builder',
                data: [420, 550, 680, 750, 780],
                borderColor: '#27AE60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#27AE60',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            },
            {
                label: 'Product Builder',
                data: [450, 580, 700, 780, 800],
                borderColor: '#E67E22',
                backgroundColor: 'rgba(230, 126, 34, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#E67E22',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            },
            {
                label: 'System Builder',
                data: [500, 650, 800, 900, 950],
                borderColor: '#3498DB',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#3498DB',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            },
            {
                label: 'Sanctuary Builder',
                data: [400, 520, 630, 680, 700],
                borderColor: '#8E44AD',
                backgroundColor: 'rgba(142, 68, 173, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#8E44AD',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: { size: 12, weight: 'bold' },
                    padding: 15,
                    usePointStyle: true
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: { size: 13, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': 年収 ' + context.parsed.y + '万';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 300,
                max: 1100,
                ticks: {
                    font: { size: 12 },
                    callback: function(value) {
                        return value + '万';
                    }
                },
                grid: {
                    drawBorder: false,
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                ticks: { font: { size: 12 } },
                grid: { drawBorder: false, display: false }
            }
        }
    }
};

function initSalaryChart() {
    const salaryChartElement = document.getElementById('salaryChart');
    if (!salaryChartElement) return;

    if (window.chartInstances.salaryChart) {
        window.chartInstances.salaryChart.destroy();
    }

    try {
        const salaryCtx = salaryChartElement.getContext('2d');
        window.chartInstances.salaryChart = new Chart(salaryCtx, salaryChartConfig);
        console.log('✓ salaryChart 初期化成功');
    } catch (error) {
        console.error('✗ salaryChart エラー:', error);
    }
}

// ============================================
// 6. CTA ボタン
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#diagnosis') {
            e.preventDefault();
            alert('診断ページへ遷移します。\n※これはデモです。');
        }
    });
});

// ============================================
// 7. ページロード時にグラフ初期化
// ============================================

function initAllCharts() {
    console.log('グラフ初期化開始...');
    setTimeout(() => {
        initRiskChart();
        initGrowthChart();
        initSalaryChart();
        console.log('✓ すべてのグラフ初期化完了');
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllCharts);
} else {
    initAllCharts();
}

window.addEventListener('load', function() {
    if (!window.chartInstances.salaryChart) {
        initAllCharts();
    }
});

console.log('Japan Maker 診断 LP スクリプト読み込み完了');