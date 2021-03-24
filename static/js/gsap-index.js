function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        var ele = document.getElementsByClassName('c1_line')
    } else {
        //跳转pc端页面
        console.log('PC')
        var ele = document.getElementsByClassName('c1_line')
        var eleSolid = document.getElementsByClassName('c1_solid')
        for (var i = 0; i < ele.length; i++) {
            var width = ele[i].getAttribute("r")
            ele[i].setAttribute("r", width * 2)
        }
        for (var i = 0; i < eleSolid.length; i++) {
            var width = eleSolid[i].getAttribute("r")
            eleSolid[i].setAttribute("r", width * 2)
        }
    }
}
browserRedirect();

window.onresize = window.onload = function() {
    gsap.set('.m1_stage', {
        // x: '50%'
    })
}

gsap.timeline({
        defaults: {
            duration: 45
        }
    })
    .from('.main1', {
        duration: 1,
        autoAlpha: 0,
        ease: 'power1.inOut'
    }, 0)
    .fromTo('.m1_cGroup', {
        opacity: 0
    }, {
        duration: 0.3,
        opacity: 1,
        stagger: -0.1
    }, 0)
    .from('.m1_cGroup', {
        duration: 2.5,
        scale: -0.3,
        transformOrigin: '50% 50%',
        stagger: -0.05,
        ease: 'elastic'
    }, 0)
    .fromTo('.m1Bg', {
        opacity: 0
    }, {
        duration: 1,
        opacity: 1,
        ease: 'power2.inOut'
    }, 0.2)

.add('orbs', 1.2)
    .add(function() {
        // $('.main1').on('mousemove', function(e) {
        //     gsap.to('.m1_cGroup', {
        //         duration: 1,
        //         x: function(i) {
        //             return (e.clientX / window.innerWidth) / (i + 1) * 150
        //         },
        //         y: function(i) {
        //             return i * -20 * (e.clientY / window.innerHeight)
        //         },
        //         rotation: Math.random() * 0.1,
        //         overwrite: 'auto'
        //     });
        //     gsap.to('.c1_solid, .c1_line', {
        //         duration: 1,
        //         attr: {
        //             opacity: 1.1 - 0.75 * (e.clientY / window.innerHeight)
        //         }
        //     })
        //     gsap.to('.m1OrbBlank', {
        //         duration: 1,
        //         opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight)
        //     })
        // });

        $('.main1').on('click', function(e) {
            if (gsap.getProperty('.m1_cGroup', 'scale') != 1) return; //prevent overlapping bouncy tweens
            for (var i = 0; i < $('.m1_cGroup').length; i++) {
                gsap.fromTo($('.m1_cGroup')[i], {
                    transformOrigin: '50% 50%',
                    scale: 1
                }, {
                    duration: 0.7 - i / 25,
                    scale: 0.9,
                    ease: 'back.in(10)',
                    yoyo: true,
                    repeat: 1
                })
            }
        });
    }, 'orbs+=0.5')


.fromTo('.orb1', {
    xPercent: -35,
    yPercent: -5
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line1', false)[0]
        },
        start: 1.06,
        end: 1.3
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.orb2', {
    xPercent: -45,
    yPercent: -10
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line2', false)[0]
        },
        start: 0.98,
        end: 1.2
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.orb3', {
    xPercent: -50,
    yPercent: -15
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line3', false)[0]
        },
        start: 1.06,
        end: 1.31
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.orb3b', {
    xPercent: -50,
    yPercent: -25
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line3', false)[0]
        },
        start: 1.3,
        end: 1.6
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.orb3c', {
    xPercent: -45,
    yPercent: -15
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line3', false)[0]
        },
        start: 0.95,
        end: 1.2
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.orb4', {
    xPercent: -60,
    yPercent: -140
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line2', false)[0]
        },
        start: 1.2,
        end: 1.4
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.orb4b', {
    xPercent: -50,
    yPercent: -25
}, {
    motionPath: {
        path: function() {
            return MotionPathPlugin.convertToPath('.c1_line4', false)[0]
        },
        start: 1.41,
        end: 1.6
    },
    ease: 'none',
    yoyo: true,
    repeat: -1
}, 'orbs')

.fromTo('.m1Orb', {
        scale: 0,
        transformOrigin: '50% 50%'
    }, {
        duration: 0.8,
        scale: 1.5,
        ease: 'back.out(3)',
        stagger: 0.15,
        overwrite: 'auto'
    }, 'orbs')
    .fromTo('.m1OrbBlank', {
        opacity: 0
    }, {
        duration: 0.8,
        opacity: function(i) {
            return 0.2 + i / 7
        },
        stagger: 0.1,
        overwrite: 'auto'
    }, 'orbs')
    .fromTo('.m1OrbBlank', {
        x: function(i) {
            return 620 - i / 4 * 380
        },
        transformOrigin: function(i) {
            return -(620 - i / 4 * 380) + 'px 0px'
        },
        rotation: function(i) {
            return [99, -10, 55, 110, 120][i]
        }
    }, {
        rotation: '+=75',
        yoyo: true,
        repeat: -1
    }, 'orbs')