let re = /x/,
    website = window.location.protocol + '//' + window.location.hostname + '/',
    model_p = 22;
console.log(re);
re.toString = function () {
    showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000);
    return '';
};
let author = 'https://gleehub.com/';
console.log("\n %c Cnguu %c " + author + " ", "color:#444;background:#eee;padding:5px 0;", "color:#eee;background:#444;padding:5px 0;");
$(document).on('copy', function () {
    showMessage('你都复制了些什么呀，转载要记得加上出处哦', 8000);
});
$('.waifu-tool .fa-home').click(function () {
    window.location = author;
});
$('.waifu-tool .fa-drivers-license-o').click(function () {
    loadlive2d('live2d', randFile(model_p, 'rand'));
    if (model_p === 22) {
        model_p = 33;
        showMessage('33 援交有点累了，现在该我上场了', 4000);
    } else {
        model_p = 22;
        showMessage('我又回来了！', 4000);
    }
});
$('.waifu-tool .fa-comments').click(function () {
    showHitokoto();
});
$('.waifu-tool .fa-street-view').click(function () {
    if (model_p === 22) {
        loadlive2d('live2d', randFile(33, 'rand'));
    } else {
        loadlive2d('live2d', randFile(22, 'rand'));
    }
    showMessage('我的新衣服好看嘛', 4000);
});
$('.waifu-tool .fa-info-circle').click(function () {
    window.location = author + 'about';
});
$('.waifu-tool .fa-close').click(function () {
    sessionStorage.setItem('waifu-dsiplay', 'none');
    showMessage('愿你有一天能与重要的人重逢', 2000);
    window.setTimeout(function () {
        $('.waifu').hide();
    }, 1500);
});
$('.waifu-tool .fa-camera').click(function () {
    showMessage('照好了嘛，是不是很可爱呢？', 8000);
    window.Live2D.captureName = model_p + '-pic.png';
    window.Live2D.captureFrame = true;
});
loadlive2d('live2d', randFile(33, 'default'));

function showHitokoto() {
    $.getJSON(website + 'hexo-live2d-2233/js/hitokoto.json', function (result) {
        let len = result.length - 1;
        showMessage(result[Math.floor(Math.random() * len)].hitokoto)
    });
}

function showMessage(a, b) {
    if (b == null) {
        b = 10000;
    }
    let waifuTips = $('.waifu-tips');
    waifuTips.hide().stop();
    waifuTips.html(a);
    waifuTips.fadeTo('10', 1);
    waifuTips.fadeOut(b);
}

function randFile(p, model) {
    let ra1 = 1,
        ra2 = 1;
    if (model === 'rand') {
        ra1 = Math.floor(Math.random() * 11) + 1;
        ra2 = Math.floor(Math.random() * 10) + 1;
    }
    return website + 'hexo-live2d-2233/model/' + p + '/json/' + ra1 + '-' + ra1 + '-' + ra2 + '.json';
}

(function () {
    let text;
    if (window.location.href === website) {
        let now = (new Date()).getHours();
        if (now > 23 || now <= 5) {
            text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
        } else if (now > 5 && now <= 7) {
            text = '早上好！一日之计在于晨，美好的一天就要开始了';
        } else if (now > 7 && now <= 11) {
            text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
        } else if (now > 11 && now <= 14) {
            text = '中午了，工作了一个上午，现在是午餐时间！';
        } else if (now > 14 && now <= 17) {
            text = '午后很容易犯困呢，今天的运动目标完成了吗？';
        } else if (now > 17 && now <= 19) {
            text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
        } else if (now > 19 && now <= 21) {
            text = '晚上好，今天过得怎么样？';
        } else if (now > 21 && now <= 23) {
            text = '已经这么晚了呀，早点休息吧，晚安~';
        } else {
            text = '嗨~ 快来逗我玩吧！';
        }
    } else {
        if (document.referrer !== '') {
            let referrer = document.createElement('a');
            referrer.href = document.referrer;
            let domain = referrer.hostname.split('.')[1];
            if (window.location.hostname === referrer.hostname) {
                text = '欢迎阅读 <span style="color:#39c5bb">『' + document.title.split(' - ')[0] + '』</span>';
            } else if (domain === 'baidu') {
                text = 'Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#39c5bb">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？';
            } else if (domain === 'so') {
                text = 'Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#39c5bb">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？';
            } else if (domain === 'google') {
                text = 'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#39c5bb">『' + document.title.split(' - ')[0] + '』</span>';
            } else {
                text = 'Hello! 来自 <span style="color:#39c5bb">' + referrer.hostname + '</span> 的朋友';
            }
        } else {
            text = '欢迎阅读 <span style="color:#39c5bb">『' + document.title.split(' - ')[0] + '』</span>';
        }
    }
    $('.waifu').animate({top: $(window).height() - 250}, 800);
    let offTop = $('.waifu').offset().top;
    $(window).scroll(function () {
        $('.waifu').animate({top: $(window).scrollTop() + offTop + 360}, {duration: 1000, queue: false});
    });
    showMessage(text, 8000);
})();
$('#live2d').mouseover(function () {
    let msg = ['你要干嘛呀？', '鼠…鼠标放错地方了！', '喵喵喵？', '萝莉控是什么呀？', '怕怕', '你看到我的小熊了吗'],
        i = Math.floor(Math.random() * msg.length);
    showMessage(msg[i]);
});
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {
        showMessage('加载 <span style="color:#39c5bb">' + $(this).text() + '</span> 中...请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看 <span style="color:#39c5bb">' + $(this).text() + '</span> 么？');
    });
    $('.post-nav-next').mouseover(function () {
        showMessage('要翻到上一篇吗?');
    });
    $('.post-nav-prev').mouseover(function () {
        showMessage('要翻到下一篇吗?');
    });
    $('.links-of-blogroll-list li a').mouseover(function () {
        showMessage('去 <span style="color:#39c5bb">' + $(this).text() + '</span> 逛逛吧');
    });
    $('#guest-write-btn').mouseover(function () {
        showMessage('呐 首次评论需要审核，请耐心等待哦~');
    });
    $('.menu-item-search').mouseover(function () {
        showMessage('找不到想要的？试试搜索吧！');
    });
    $('#local-search-input').focus(function () {
        showMessage('输入你想搜索的关键词再按Enter键就可以搜索啦!');
    });
    $('.desc a h2,.desc a span,.color-logo a,.back-index,.waifu-tool .fa-home').mouseover(function () {
        showMessage('点它就可以回到首页啦！');
    });
    $('.links-of-author-item a i.fa-envelope').mouseover(function () {
        showMessage('邮件我会及时回复的！');
    });
    $('.links-of-author-item a i.fa-github').mouseover(function () {
        showMessage('GayHub！我是新手！');
    });
    $('.waifu-tool .fa-comments').mouseover(function () {
        showMessage('猜猜我要说些什么？');
    });
    $('.waifu-tool .fa-drivers-license-o').mouseover(function () {
        if (model_p === 22) {
            showMessage('要见见我的姐姐嘛');
        } else {
            showMessage('什么？我的服务不好，要33回来？');
        }
    });
    $('.waifu-tool .fa-street-view').mouseover(function () {
        showMessage('喜欢换装play吗？');
    });
    $('.waifu-tool .fa-camera').mouseover(function () {
        showMessage('你要给我拍照呀？一二三～茄子～');
    });
    $('.waifu-tool .fa-info-circle').mouseover(function () {
        showMessage('想知道更多关于我的事么？');
    });
    $('.waifu-tool .fa-close').mouseover(function () {
        showMessage('到了要说再见的时候了吗？');
    });
});
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        let temp = Math.random();
        if (temp > 0.35) {
            showMessage(showHitokoto());
        } else {
            let msg = ['乾坤大挪移！', '我飘过来了！~', '我飘过去了', '我得意地飘！~飘！~'],
                i = Math.floor(Math.random() * msg.length),
                s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75],
                i1 = Math.floor(Math.random() * s.length),
                i2 = Math.floor(Math.random() * s.length);
            $('.waifu').animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: (window.innerHeight + $(window).scrollTop() - 300) - (window.innerHeight - 270) / 2 * (1 + s[i2])
            }, {duration: 2000, complete: showMessage(msg[i])});
        }
    }, 12000);
    let stat_click = 0;
    $('#live2d').click(function () {
        if (!ismove) {
            stat_click++;
            let msg = ['是…是不小心碰到了吧', '我跑呀跑呀跑！~~', '再摸的话我可要报警了！⌇●﹏●⌇', '别摸我，有什么好摸的！', '惹不起你，我还躲不起你么？', '不要摸我了，我会告诉老婆来打你的！', '干嘛动我呀！小心我咬你！'];
            if (stat_click > 6) {
                msg = ['你有完没完呀？', '你已经摸我' + stat_click + '次了', '非礼呀！救命！', 'OH，My ladygaga', '110吗，这里有个变态一直在摸我(ó﹏ò｡)'];
            }
            let i = Math.floor(Math.random() * msg.length),
                s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75],
                i1 = Math.floor(Math.random() * s.length),
                i2 = Math.floor(Math.random() * s.length);
            $('.waifu').animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: (window.innerHeight + $(window).scrollTop() - 300) - (window.innerHeight - 270) / 2 * (1 - s[i2])
            }, {duration: 500, complete: showMessage(msg[i])});
        } else {
            ismove = false;
        }
    });
});
let _move = false,
    ismove = false,
    _x,
    _y;
jQuery(document).ready(function ($) {
    $('.waifu').mousedown(function (e) {
        let that = this;
        _move = true;
        _x = e.pageX - parseInt($(that).css('left'));
        _y = e.pageY - parseInt($(that).css('top'));
    });
    $(document).mousemove(function (e) {
        if (_move) {
            let x = e.pageX - _x,
                y = e.pageY - _y,
                wx = $(window).width() - $('.waifu').width(),
                dy = $(document).height() - $('.waifu').height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $('.waifu').css({
                    top: y,
                    left: x
                });
                ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});