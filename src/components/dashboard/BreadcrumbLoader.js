import { Breadcrumb } from "antd";
function BreadcrumbLoader(params)
{
    const data=params.pages.map((page)=>
    {
        return <Breadcrumb.Item>{page}</Breadcrumb.Item>
    })

    return(
        <>
        <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {data}
            </Breadcrumb>
        </>
    );
}
export default BreadcrumbLoader;