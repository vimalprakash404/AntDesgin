import Contentdata from "../../components/dashboard/Contentdata";
import { Col,Row, Statistic,Card,Divider } from "antd";
import { TeamOutlined } from '@ant-design/icons';
import { Area,Line} from '@ant-design/charts';
const {Meta}= Card
const HomePage = ()=> {
    const myData = [
        { x: 0, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 11 },
        { x: 4, y: 9 },
        { x: 5, y: 14 },
        { x: 6, y: 19 },
        { x: 7, y: 17 },
        { x: 8, y: 22 },
        { x: 9, y: 24 },
        { x: 10, y: 23 },
        { x: 11, y: 27 },
        { x: 12, y: 32 },
        { x: 13, y: 30 },
        { x: 14, y: 35 },
        { x: 15, y: 37 },
        { x: 16, y: 40 },
      ];

      const graph=()=>{
        return(
            <>
             <Area
                data={myData}
                height={500}
                xField="x"
                yField="y"
                point={{ size: 5, shape: 'diamon' }}
                color='blue'
            />
            </>
        );
      }
    
      const graph1=()=>{
        return(
            <>
             <Line
                data={myData}
                height={500}
                xField="x"
                yField="y"
                point={{ size: 5, shape: 'diamon' }}
                color='blue'
            />
            </>
        );
      }
    const content  = ()=> {
        return (
            <>
            <Row gutter={16}>
                <Col span={6}>
                    <Card>
                        <Statistic title="Registered User" value={1128} prefix={<TeamOutlined color="blue" />} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Work Shop 1" value={93} suffix="/ 100" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Work Shop 2" value={62} suffix="/ 100" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Work Shop 3" value={45} suffix="/ 100" />
                    </Card>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col span={12} >
                    <Card description={"User data"}>
                        {graph()}
                        <Meta title="User Data" />
                    </Card >
                </Col>
                <Col span={12} >
                    <Card description={"data Base"}>
                        {graph1()}
                        <Meta title="Work Shop" />
                    </Card>
                </Col>
            </Row>
            
            </>
        );
    }
    return (
        <>
            <Contentdata title="Home" path={["DashBoard","Home"]} content={content()}></Contentdata>  
               
        </>
    );
}
export default HomePage;