import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// ===>
function pathoutput({match}){
   console.log(match);

   return  (<div>
    <h3>ID: {match.params.id}</h3>
  </div>);
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
// ===>
module.exports = (
  <Router>
    <div className="container-fluid">
      <div className="left-layout">
          <header className="left-header">React </header>
          <nav className="nav-tabs" id="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
          </nav>
      </div>
      <div className="parting-line"></div>
      <div className="right-layout">
          <div className="silder">
              <ul className="breadcrumb">
                  <li><a href="#">首页</a> <span className="divider">/</span></li>
                  <li><a href="#">表单</a> <span className="divider">/</span></li>
                  <li className="active">安扭</li>
              </ul>
          </div>
          <div id="main">
            <div id="view">
               <Route path="/:id" component={pathoutput}/>
            </div>
            <div id="app"></div>
          </div>
      </div>
    </div>
</Router>
);
