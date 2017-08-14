class TreeView extends React.Component{
  constructor(props){
    super(props);
  }
  init(){
    let list = this.props['view-data'];
    let ulClass = 'nav nav-pills nav-stacked';
    return <div><ul className={ulClass}>{this.complier(list)}</ul></div>;
  }
  findRoot(nodes) {
    let ulClass = 'nav nav-pills nav-stacked';
    let nodeDom= nodes.map((node)=>{
      return (<li>
                <a onClick={this.onItemClick(node)} href={node.href}>
                    <i></i>
                    {node.text}
                </a>
                {this.findChild(node.nodes)}
             </li>);
    });
    return nodeDom;
  }
  findChild(nodes){
    let ulClass = 'nav nav-pills nav-stacked';
      if(nodes && nodes.length){
          let nodeDom = nodes.map((node)=>{
              return (<ul className={ulClass} className="layout-hide">
                         <li>
                            <a onClick={this.onItemClick(node)} href={node.href}>
                               <i></i>
                               {node.text}
                            </a>
                         </li>
                      </ul>);
          });
          return nodeDom;
      }
  }
  onItemClick(node){
      return (proxy, e)=>{
        let target  = proxy.target;
        let clickEvent = this.props['view-click'];
        if(node.hidden){
          node.hidden = false;
          commons.show(target.nextElementSibling);
        }else{
          node.hidden = true;
          commons.hide(target.nextElementSibling);
        }
        if(_.isFunction(clickEvent)){
           clickEvent.apply(target, [target, node]);
        }
      };
  }
  complier(nodes){
       return this.findRoot(nodes);
  }
  render(){
       return  <div>{this.init()}</div>;
  }
};
module.exports = TreeView;
