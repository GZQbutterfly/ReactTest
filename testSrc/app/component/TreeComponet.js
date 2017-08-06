class TreeView extends React.Component{
  constructor(props){
    super(props);
  }

  init(){
    let list = this.props['view-data'];
    let ulClass = 'nav nav-pills nav-stacked';
    return <div><ul className={ulClass}>{this.complier(list)}</ul></div>;
  }
  //先查出根节点
  findRoot(treeData) {
    let ulClass = 'nav nav-pills nav-stacked';
    let nodeDom= treeData.map((node)=>{
      return (<li>
                  <a><i></i>{node.text}</a>
                  {this.findChild(node.nodes)}
                </li>);
    });
    return nodeDom;
  }
  //循环递归展开树
  findChild(nodes){
    let ulClass = 'nav nav-pills nav-stacked';
      if(nodes!=null && nodes.length){
          let nodeDom = nodes.map((node)=>{
              return (<ul className={ulClass}>
                         <li>
                            <a><i></i>{node.text}</a>
                         </li>
                      </ul>);
          });
          return nodeDom;
      }
  }
  complier(nodes){
       return this.findRoot(nodes);
  }

  render(){
       return  <div>{this.init()}</div>;
  }
}


module.exports = TreeView;
