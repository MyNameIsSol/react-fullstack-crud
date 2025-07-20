import { useState } from "react"

function ModalForm({isOpen, onClose, mode, OnSubmit}) {
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handelStatusChange = (e) => {
        setStatus(e.target.value === "Active");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return(
        <>
        {/* Every modal has an attribute called open that resolve to true or false value inorder to open and close */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                    {/* if there is a button in form, it will close the modal */}
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input w-full my-4" />
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input w-full my-4" />
                    <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} className="input w-full my-4" />

                    <div className="flex my-4 gap-2 justify-between">
                        <input type="number" placeholder="Rate" className="input" value={rate} onChange={(e) => setRate(e.target.value)} />

                        <select value={status ? "Active" : "Inactive"} defaultValue="Pick a color" className="select" onChange={handelStatusChange}>
                            <option>Active</option>
                            <option>Inactive</option> 
                        </select>
                    </div>

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>

                    <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client' }</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default ModalForm