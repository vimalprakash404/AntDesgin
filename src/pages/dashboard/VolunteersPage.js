import Contentdata from "../../components/dashboard/Contentdata";
import DynamicTable from "../../components/content/DynamicTable";


const Content = ()=> {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      const mockData = [
        {
          key: '1',
          name: 'John Doe',
          age: 30,
          address: '123 Main St',
        },
        {
          key: '2',
          name: 'Jane Smith',
          age: 28,
          address: '456 Elm St',
        },
        {
          key: '3',
          name: 'Bob Johnson',
          age: 35,
          address: '789 Oak St',
        },
        // Add more data as needed
      ];
    return (
        <DynamicTable data={mockData} columns={columns} />
    );
}

const VolunteersPage  = ()=> {
    return (
        <>
            <Contentdata title="Volunteers" path={["Volunteers"]} content={<Content/>}></Contentdata>
        </>
    );
}
export default VolunteersPage;