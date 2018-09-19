# `withRouter`   
高阶组件，可以包装任何自定义的组件，通过`withRouter`可以将`props`、`match`、`location`三个对象传给被包装的组件，通过`this.props`可以获取这三个对象，进而进行操作  

正常情况下 只有Router 的component组件能够自动带有三个属性  
            
            <Route exact path="/Home" component={Home}/>
            var Home = ( {history,location,match})=>   <div>{location.pathname}</div>  
        
因为reportHost下的index.js定义了pieChart路由，所以，pieChart中不需要使用withRouter来引入history 

            <Route path={`${match.url}/pieReport`} component={PieChartReport} />

dashBoard中的模块没有定义Route，所以需要使用withRouter才能获得history对象

使用：  

        import { withRouter } from 'react-router-dom';
        class MyComponent extends React.component{
            render(){
                const { history, match, location} = this.props;
                return(
                    ...
                )
            }
        }
        export default withRouter(MyComponent);

或者 

        import { withRouter } from 'react-router-dom';
        @withRouter
        class MyComponent extends React.component{

        }
        export default MyComponent;