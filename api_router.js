const Router = require('koa-router');
const router = new Router();
const routes = require('./router');

router.get('/routes/:name?', (ctx) => {
    const allRoutes = Array.from(routes.stack);
    allRoutes.shift();
    const result = {};
    let counter = 0;

    allRoutes.forEach((i) => {
        const path = i.path;
        const top = path.split('/')[1];

        if (!ctx.params.name || top === ctx.params.name) {
            if (result[top]) {
                result[top].routes.push(path);
            } else {
                result[top] = { routes: [path] };
            }
            counter++;
        }
    });

    ctx.body = { counter, result };
});

router.get('/list', (ctx) => {
    const result = {"list":[
            {"urlpath":"/bilibili/ranking/0/1","title":"bilibili/排行榜/全站"},
            {"urlpath":"/bilibili/ranking/1/1","title":"bilibili/排行榜/动画"},
            {"urlpath":"/bilibili/ranking/168/1","title":"bilibili/排行榜/国创相关"},
            {"urlpath":"/bilibili/ranking/3/1","title":"bilibili/排行榜/音乐"},
            {"urlpath":"/bilibili/ranking/129/1","title":"bilibili/排行榜/舞蹈"},
            {"urlpath":"/bilibili/ranking/4/1","title":"bilibili/排行榜/游戏"},
            {"urlpath":"/bilibili/ranking/36/1","title":"bilibili/排行榜/科技"},
            {"urlpath":"/bilibili/ranking/160/1","title":"bilibili/排行榜/生活"},
            {"urlpath":"/bilibili/ranking/119/1","title":"bilibili/排行榜/鬼畜"},
            {"urlpath":"/bilibili/ranking/155/1","title":"bilibili/排行榜/时尚"},
            {"urlpath":"/bilibili/ranking/5/1","title":"bilibili/排行榜/娱乐"},
            {"urlpath":"/bilibili/ranking/181/1","title":"bilibili/排行榜/影视"},
            {"urlpath":"/bangumi/calendar/today","title":"Bangumi/每日放送"},
            {"urlpath":"/jianshu/trending/weekly","title":"简书/热门"},
            {"urlpath":"/douban/movie/ustop","title":"豆瓣/北美票房榜"},
            {"urlpath":"/douban/book/latest","title":"豆瓣/新书速递"},
            {"urlpath":"/douban/book/rank/fiction","title":"豆瓣/热门图书/虚构类"},
            {"urlpath":"/douban/book/rank/nonfiction","title":"豆瓣/热门图书/非虚构类"},
            {"urlpath":"/dapenti/tugua","title":"喷嚏/图卦"},
            {"urlpath":"/dockone/weekly","title":"Dockone/周报"},
            {"urlpath":"/dribbble/popular/week","title":" Dribbble/流行"},
            {"urlpath":"/v2ex/topics/hot","title":"V2EX/最热主题"},
            {"urlpath":"/v2ex/topics/latest","title":"V2EX/最新主题"},
            {"urlpath":"/readhub/category/topic","title":"Readhub/热门话题"},
            {"urlpath":"/gcores/category/1","title":"机核网/文章"},
            {"urlpath":"/gcores/category/2","title":"机核网/新闻"},
            {"urlpath":"/gcores/category/9","title":"机核网/电台"},
            {"urlpath":"/one","title":"ONE · 一个"},
            {"urlpath":"/bjnews/realtime","title":"新京报/快讯"},
            {"urlpath":"/bjnews/opinion","title":"新京报/评论"},
            {"urlpath":"/bjnews/inside","title":"新京报/深度"},
            {"urlpath":"/bjnews/finance","title":"新京报/财经"},
            {"urlpath":"/natgeo/news","title":"国家地理/新闻"},
            {"urlpath":"/natgeo/photography","title":"国家地理/摄影"},
            {"urlpath":"/natgeo/reading","title":"国家地理/阅读"},
            {"urlpath":"/namoc/news","title":"中国美术馆/新闻"},
            {"urlpath":"/namoc/specials","title":"中国美术馆/焦点专题"},
            {"urlpath":"/dongqiudi/daily","title":"懂球帝/早报"},
            {"urlpath":"/un/scveto","title":"联合国/被否决决议"},
            {"urlpath":"/oschina/news","title":"开源中国/资讯"},
            {"urlpath":"/dajia","title":"腾讯大家"},
            {"urlpath":"/imuseum/shanghai/all","title":"每日环球展览/上海"},
            {"urlpath":"/imuseum/beijing/all","title":"每日环球展览/北京"},
            {"urlpath":"/imuseum/shenzhen/all","title":"每日环球展览/深圳"},
            {"urlpath":"/imuseum/guangzhou/all","title":"每日环球展览/广州"},
            {"urlpath":"/appstore/xianmian","title":"AppStore/每日精品限免"},
            {"urlpath":"/mafengwo/note/latest","title":"马蜂窝/游记"},
            {"urlpath":"/solidot/www","title":"Solidot"},
            {"urlpath":"/chouti","title":"抽屉新热榜"},
            {"urlpath":"/blogread/newest","title":"技术头条"},
            {"urlpath":"/gnn/gnn","title":"GNN新聞網"},
            {"urlpath":"/a9vg/a9vg","title":"A9VG电玩部落"},
            {"urlpath":"/itjuzi/invest","title":"IT桔子/投融资事件"},
            {"urlpath":"/tanwu/products","title":"探物"},
            {"urlpath":"/weseepro/newest","title":"刷屏"},
            {"urlpath":"/dbmv","title":"不羞涩"},
            {"urlpath":"/jandan/top","title":"煎蛋/无聊图热榜"},
            {"urlpath":"/jandan/top-ooxx","title":"煎蛋/妹子图热榜"}],
    };
    let counter = result["list"].length;
    ctx.body = { counter, result };
});

module.exports = router;
