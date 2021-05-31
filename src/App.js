import React from 'react';
// import Users from './User';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main'
import AboutDamdeeng from './pages/aboutDamdeeng';
import Product from './pages/product';
import MakeProduct from './pages/makeProduct';
import Sns from './pages/sns';
import WithMe from './pages/withMe';
import Qna from './pages/qna';
import Review from './pages/review';
import Header from './pages/header';
import Footer from './pages/footer';
import HistorySample from './sample/HistorySample';
import Bootstrap from './sample/BootstrapSample';
import D3 from './sample/D3Sample';
import IconMeterialSample from './sample/IconMeterialSample';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route path="/" component={Main} exact={true} />
      <Route path="/aboutDamdeeng" component={AboutDamdeeng} />
      <Route path="/product" component={Product} />
      <Route path="/makeproduct" component={MakeProduct} />
      <Route path="/review" component={Review} />
      <Route path="/qna" component={Qna} />
      <Route path="/withme" component={WithMe} />
      <Route path="/sns" component={Sns} />
      <Route path="/product/:number" component={Product} />
      <Route path="/history" component={HistorySample} />
      <Route path="/bootstrap" component={Bootstrap} />
      <Route path="/d3" component={D3} />
      <Route path="/icon" component={IconMeterialSample} />
      <Route render={({ location }) => (
        <div>
          <h2>존재하지 않는 페이지입니다. </h2>
          <p>{location.pathname}</p>
        </div>
      )} />
      </Switch>
      {/* <Users /> */}

      <Footer />
    </div>
  );
}

export default App;
