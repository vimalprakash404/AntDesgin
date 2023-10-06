import Contentdata from "../../components/dashboard/Contentdata";
import WorkShopCard from "../../components/content/WorkShopCard";
import { Row } from "antd";

const content = ()=>{
    const dataList = [
        {
          id: 1,
          title: 'WorkShop 1',
          description: 'Description for Card 1.',
        },
        {
          id: 2,
          title: 'WorkShop 2',
          description: 'Description for Card 2.',
        },
        {
          id: 3,
          title: 'WorkShop 3',
          description: 'Description for Card 3.',
        },
        {
          id: 2,
          title: 'WorkShop 2',
          description: 'Description for Card 2.',
        },
        {
          id: 3,
          title: 'WorkShop 3',
          description: 'Description for Card 3.',
        },
        // Add more data as needed
      ];
    
    return(
        <>
        <Row>
           <WorkShopCard dataList={dataList}/>
        </Row>
        </>
    )
}
const WorkShop  = ()=> {
    return (
        <>
            <Contentdata title="workShop" path={["Dashboard","WorkShop"]} content={content()}></Contentdata>
        </>
    );
}
export default WorkShop;