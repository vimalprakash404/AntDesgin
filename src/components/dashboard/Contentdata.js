
import {Layout} from "antd";
import BreadcrumbLoader from "./BreadcrumbLoader";

function Contentdata(params)
{
    return(
        <>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
        <BreadcrumbLoader pages={params.path} />
          <Layout.Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              
            }}
          >
           
            {params.content}
            
          </Layout.Content>
          </Layout>
        </>
    );
}
export default Contentdata;