import router from './pager/router/router.js';
import './asset/css/layout.less';
import BasicExample from './pager/basicExample/basicExample.js';


ReactDom.render(
    router,
    document.getElementById('app')
);
