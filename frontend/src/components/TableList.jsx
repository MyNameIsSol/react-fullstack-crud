function TableList({handleOpen}) {
    const clients = [
        {
            id: 1,
            name: "John Mike",
            email: "John.mike@gmail.com",
            job: "Developer",
            rate: "100",
            isactive: true
        },
        {
            id: 2,
            name: "John1 Mike",
            email: "John1.mike@gmail.com",
            job: "Developer1",
            rate: "200",
            isactive: true
        },
        {
            id: 3,
            name: "John Mike",
            email: "John.mike@gmail.com",
            job: "Developer2",
            rate: "300",
            isactive: false
        },

    ]
    return(
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Rate</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody className="hover:bg-base-300">
                    {/* row 1 */}
                    {clients.map((client,index) => (
                        <tr key={index}>
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.job}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${client.isactive ? "btn-primary" : "btn-outline btn-primary"}`}>
                                    {client.isactive ? "Active" : "Inactive"}
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleOpen('edit')} className="btn btn-secondary">
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-accent">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </>
    )
}

export default TableList