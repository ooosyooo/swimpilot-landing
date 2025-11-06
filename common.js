// SwimPilot Common JavaScript

// 섹션별 애니메이션 컨테이너 생성 (초기화)
function initSectionAnimations() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        // 모든 섹션에 물결 효과 추가
        const waveOverlay = document.createElement('div');
        waveOverlay.className = 'wave-overlay';
        section.appendChild(waveOverlay);

        // 애니메이션 컨테이너 생성
        const animationContainer = document.createElement('div');
        animationContainer.className = 'animation-container';
        animationContainer.style.position = 'absolute';
        animationContainer.style.top = '0';
        animationContainer.style.left = '0';
        animationContainer.style.width = '100%';
        animationContainer.style.height = '100%';
        animationContainer.style.pointerEvents = 'none';
        section.appendChild(animationContainer);
    });

    // Intersection Observer로 현재 보이는 섹션 감지
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const container = section.querySelector('.animation-container');

                // 기존 애니메이션 제거
                if (container) {
                    container.innerHTML = '';

                    // 새 애니메이션 생성
                    const sectionId = section.id;
                    createAnimationsForSection(container, sectionId);
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });

    // 모든 섹션 관찰 시작
    sections.forEach(section => sectionObserver.observe(section));
}

// 섹션별 감성적인 애니메이션 생성
function createAnimationsForSection(container, sectionId) {
    // 모든 섹션에 빛 반사 추가
    createLightReflection(container);

    switch(sectionId) {
        case 'hero':
            // 첫 입수 - 가라앉는 빛과 깊이감
            createSinkingLights(container, 15);
            createDepthLayers(container, 5);
            createLightParticles(container, 35);
            break;

        case 'philosophy':
            // 침묵 - 서서히 사라지는 흔적
            createSilenceTrails(container, 12);
            createLightParticles(container, 25);
            createDepthLayers(container, 4);
            break;

        case 'watch':
            // 기록의 흔적 - 물결치는 수직선과 데이터 포인트
            createRecordingLines(container, 8);
            createDataPoints(container, 25);
            createDepthLayers(container, 3);
            break;

        case 'journey':
            // 여정 - 변화의 파장
            createChangeWaves(container, 10);
            createBreathFlows(container, 6);
            createLightParticles(container, 40);
            break;

        case 'classes':
            // 13개의 깊이 - 여러 레이어
            createDepthLayers(container, 8);
            createSilenceTrails(container, 15);
            createLightParticles(container, 45);
            break;

        case 'growth':
            // 성장 - 숨결의 흐름
            createBreathFlows(container, 8);
            createChangeWaves(container, 8);
            createLightParticles(container, 30);
            break;

        case 'manifesto':
            // 강렬한 피날레 - 소용돌이와 빛의 폭발 + 앞 섹션들의 요소
            createVortexRings(container, 8);          // 중심으로 빨려들어가는 소용돌이
            createConvergingLights(container, 30);    // 가장자리에서 중심으로 모이는 빛
            createExplodingLights(container, 20);     // 중심에서 폭발하는 빛
            createSilenceTrails(container, 8);        // 침묵의 흔적 (연속성)
            createBreathFlows(container, 4);          // 숨결의 흐름 (연속성)
            createDepthLayers(container, 6);
            createLightParticles(container, 40);
            break;

        case 'footer':
            // 마무리 - 평온한 깊이
            createDepthLayers(container, 3);
            createLightParticles(container, 20);
            break;

        default:
            createLightParticles(container, 30);
            createDepthLayers(container, 3);
    }
}

// 빛 반사 생성
function createLightReflection(container) {
    const reflection = document.createElement('div');
    reflection.className = 'light-reflection';
    container.appendChild(reflection);
}

// 빛의 입자 생성
function createLightParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'light-particle';

        // 중앙에 더 집중되도록 배치 (상단/하단 25% 제외)
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${25 + Math.random() * 50}%`;

        const x1 = (Math.random() - 0.5) * 30;
        const y1 = (Math.random() - 0.5) * 30;
        const x2 = (Math.random() - 0.5) * 40;
        const y2 = (Math.random() - 0.5) * 40;
        const x3 = (Math.random() - 0.5) * 35;
        const y3 = (Math.random() - 0.5) * 35;

        particle.style.setProperty('--x1', `${x1}px`);
        particle.style.setProperty('--y1', `${y1}px`);
        particle.style.setProperty('--x2', `${x2}px`);
        particle.style.setProperty('--y2', `${y2}px`);
        particle.style.setProperty('--x3', `${x3}px`);
        particle.style.setProperty('--y3', `${y3}px`);

        const duration = Math.random() * 8 + 10;
        particle.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
}

// 깊이감 레이어 생성
function createDepthLayers(container, count) {
    for (let i = 0; i < count; i++) {
        const layer = document.createElement('div');
        layer.className = 'depth-layer';

        // 중앙에 집중 (상단/하단 25% 제외)
        layer.style.setProperty('--pos-x', `${35 + Math.random() * 30}%`);
        layer.style.setProperty('--pos-y', `${35 + Math.random() * 30}%`);

        const duration = Math.random() * 15 + 25;
        layer.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 10;
        layer.style.animationDelay = `${delay}s`;

        container.appendChild(layer);
    }
}

// 침묵의 흔적 생성
function createSilenceTrails(container, count) {
    const positions = [15, 30, 45, 55, 70, 85];
    for (let i = 0; i < count; i++) {
        const trail = document.createElement('div');
        trail.className = 'silence-trail';
        trail.style.left = `${positions[i % positions.length]}%`;

        const duration = Math.random() * 10 + 18;
        trail.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 12;
        trail.style.animationDelay = `${delay}s`;

        container.appendChild(trail);
    }
}

// 가라앉는 빛 생성
function createSinkingLights(container, count) {
    for (let i = 0; i < count; i++) {
        const light = document.createElement('div');
        light.className = 'sinking-light';

        light.style.left = `${Math.random() * 100}%`;

        const duration = Math.random() * 12 + 20;
        light.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 15;
        light.style.animationDelay = `${delay}s`;

        container.appendChild(light);
    }
}

// 숨결의 흐름 생성
function createBreathFlows(container, count) {
    for (let i = 0; i < count; i++) {
        const flow = document.createElement('div');
        flow.className = 'breath-flow';

        // 중앙 영역에 배치 (상단/하단 25% 제외)
        flow.style.top = `${35 + (i * (30 / count))}%`;

        const duration = Math.random() * 10 + 18;
        flow.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 12;
        flow.style.animationDelay = `${delay}s`;

        container.appendChild(flow);
    }
}

// 변화의 파장 생성
function createChangeWaves(container, count) {
    for (let i = 0; i < count; i++) {
        const wave = document.createElement('div');
        wave.className = 'change-wave';

        // 중앙에 집중 (상단/하단 25% 제외)
        wave.style.left = `${35 + Math.random() * 30}%`;
        wave.style.top = `${35 + Math.random() * 30}%`;

        const duration = Math.random() * 8 + 12;
        wave.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 10;
        wave.style.animationDelay = `${delay}s`;

        container.appendChild(wave);
    }
}

// Watch 섹션: 물결치는 수직선 (기록의 흔적)
function createRecordingLines(container, count) {
    for (let i = 0; i < count; i++) {
        const line = document.createElement('div');
        line.className = 'recording-line';

        line.style.left = `${(i + 1) * (100 / (count + 1))}%`;

        const duration = Math.random() * 8 + 12;
        line.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 6;
        line.style.animationDelay = `${delay}s`;

        container.appendChild(line);
    }
}

// Watch 섹션: 데이터 포인트
function createDataPoints(container, count) {
    for (let i = 0; i < count; i++) {
        const point = document.createElement('div');
        point.className = 'data-point';

        // 중앙에 더 집중 (상단/하단 25% 제외)
        point.style.left = `${25 + Math.random() * 50}%`;
        point.style.top = `${30 + Math.random() * 40}%`;

        const dx1 = (Math.random() - 0.5) * 20;
        const dy1 = (Math.random() - 0.5) * 20;
        const dx2 = (Math.random() - 0.5) * 25;
        const dy2 = (Math.random() - 0.5) * 25;

        point.style.setProperty('--dx1', `${dx1}px`);
        point.style.setProperty('--dy1', `${dy1}px`);
        point.style.setProperty('--dx2', `${dx2}px`);
        point.style.setProperty('--dy2', `${dy2}px`);

        const duration = Math.random() * 10 + 15;
        point.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 8;
        point.style.animationDelay = `${delay}s`;

        container.appendChild(point);
    }
}

// Manifesto 전용: 소용돌이 링 (중심으로 빨려들어감)
function createVortexRings(container, count) {
    for (let i = 0; i < count; i++) {
        const ring = document.createElement('div');
        ring.className = 'vortex-ring';

        const duration = Math.random() * 8 + 12;
        ring.style.animationDuration = `${duration}s`;

        const delay = i * 2.5; // 순차적으로 나타남
        ring.style.animationDelay = `${delay}s`;

        container.appendChild(ring);
    }
}

// Manifesto 전용: 중심으로 모이는 빛
function createConvergingLights(container, count) {
    for (let i = 0; i < count; i++) {
        const light = document.createElement('div');
        light.className = 'converging-light';

        // 화면 가장자리에서 시작
        const angle = (i / count) * Math.PI * 2;
        const radius = 50; // vh 단위
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;

        light.style.left = `calc(50% + ${startX}vh)`;
        light.style.top = `calc(50% + ${startY}vh)`;

        // 중심으로 향하는 벡터
        light.style.setProperty('--target-x', `${-startX}vh`);
        light.style.setProperty('--target-y', `${-startY}vh`);

        const duration = Math.random() * 4 + 6;
        light.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 8;
        light.style.animationDelay = `${delay}s`;

        container.appendChild(light);
    }
}

// Manifesto 전용: 폭발하는 빛 (중심에서 방사형으로)
function createExplodingLights(container, count) {
    for (let i = 0; i < count; i++) {
        const light = document.createElement('div');
        light.className = 'exploding-light';

        // 중심에서 시작
        light.style.left = '50%';
        light.style.top = '50%';

        // 방사형 각도
        const angle = (i / count) * 360;
        light.style.transform = `rotate(${angle}deg)`;
        light.style.transformOrigin = 'center bottom';

        const duration = Math.random() * 3 + 5;
        light.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 6;
        light.style.animationDelay = `${delay}s`;

        container.appendChild(light);
    }
}

// 페이지 로드 시 애니메이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    initSectionAnimations();
});

// Intersection Observer for individual lines - 각 줄마다 개별 관찰
const lineObserverOptions = {
    threshold: [0, 0.5, 1],
    rootMargin: '-20% 0px -20% 0px'
};

const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        updateLineOpacity();
    });
}, lineObserverOptions);

// Intersection Observer for hero and footer sections
const sectionObserverOptions = {
    threshold: 0.3,
    rootMargin: '-10% 0px -10% 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, sectionObserverOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe footer section only
    const footer = document.querySelector('#footer');
    if (footer) sectionObserver.observe(footer);

    // Observe all lines individually
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
        lineObserver.observe(line);
        line.setAttribute('data-line-index', index);
    });

    // 페이지 로드 시 최상단에서 시작
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    // 초기 opacity 업데이트
    setTimeout(() => {
        updateLineOpacity();
    }, 100);

    console.log(`총 ${lines.length}개의 라인을 관찰 중입니다.`);
});

// Hide scroll indicator after first scroll
let scrolled = false;
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (!scrolled && window.scrollY > 100) {
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
        }
        scrolled = true;
    }
}, { passive: true });

// 스크롤 기반 opacity 계산
function updateLineOpacity() {
    const windowHeight = window.innerHeight;
    const viewportCenter = windowHeight / 2;

    document.querySelectorAll('.line').forEach(line => {
        const rect = line.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight * 0.35;

        // 거리 기반 opacity 계산
        let opacity = Math.max(0, 1 - (distance / maxDistance));
        opacity = Math.pow(opacity, 2.5);

        // 화면 밖이면 완전히 투명
        if (rect.bottom < 0 || rect.top > windowHeight) {
            opacity = 0;
        }

        line.style.opacity = opacity.toString();

        // transform도 거리에 따라 조정
        const translateY = (1 - opacity) * 40;
        line.style.transform = `translateY(${translateY}px)`;

        // 포커스 효과
        const focusRange = windowHeight * 0.15;
        if (distance < focusRange && opacity > 0.8) {
            line.classList.add('focused');
        } else {
            line.classList.remove('focused');
        }
    });
}

// 스크롤 퍼포먼스 최적화
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateLineOpacity();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// 초기 로드 시에도 실행
window.addEventListener('load', updateLineOpacity);
