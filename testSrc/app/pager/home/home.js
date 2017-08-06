import './home.less';
import homeHtml from './home.html';
import TreeView from '../../component/TreeComponet.js';
// ===>
let rootDom = $('#root').html(homeHtml);


function tick() {
  const element = (<p>当前时间：{new Date().toLocaleTimeString()}</p>);
  ReactDom.render(
    element,
    document.getElementById('dateDetail')
  );
}
tick();
setInterval(tick, 1000);

let treeList = [{text:'首页'},{text:'表单',nodes:[{text:'按钮'}]}]

ReactDom.render(
  <TreeView view-data={treeList}/>,
  document.getElementById('view')
);

// ===>
export default {
    module: 'home'
};
