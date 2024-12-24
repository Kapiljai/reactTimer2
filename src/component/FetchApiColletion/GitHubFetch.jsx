import React, { useEffect, useState } from 'react'

const GitHubFetch = () => {
    const [user, setUser] = useState([]);
    const [currentperPageUser, setcurrentPerPageUser] = useState(1);
    const perPageUser = 6;
    const getUsers = async () => {

        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUser(data);
        console.log(data, "respone");
    }
    useEffect(() => {
        getUsers();
    }, []);

    const indexLastUser = perPageUser * currentperPageUser;
    const indexFirstUser = indexLastUser - perPageUser;
    const currentUsers = user.slice(indexFirstUser, indexLastUser);
    const paginate = (pageNumber) => setcurrentPerPageUser(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(user.length / perPageUser); i++) {
        pageNumbers.push(i);
    }

    const [date, setDate] = useState();

    useEffect(() => {
        setInterval(() => {
            const updateDate = new Date();
            setDate(updateDate.toLocaleTimeString());
        }, 1000)

    }, []);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    });

    useEffect(()=>{
        const savedName = sessionStorage.getItem('name');
        const savedEmail = sessionStorage.getItem('email');
        const savedPassword = sessionStorage.getItem('password');

        if(savedName) setName(savedName)
        if(savedEmail) setName(savedEmail)
        if(savedPassword) setName(savedPassword)
       
    },[])
    const handleRegister = (e) => {
        e.preventDefault();
        let formErrors = {};
        if (!name) formErrors.name = "Name is required";

        if (!email) formErrors.email = "Email is required";
        const emailExist = sessionStorage.getItem('email');
        if (!email) formErrors.email = "Email is required";
        else if(emailExist ===email) formErrors.email="Email Alreday Exist"

        if (!password) formErrors.password = "Password is required";

        if (!cpassword) formErrors.cpassword = " Confirm Password is required";


        else if (password !== cpassword) formErrors.password = "Your Password Does not match";

        setError(formErrors)

        if(Object.keys(formErrors).length ===0){

            sessionStorage.setItem('name' , name)
            sessionStorage.setItem('email' , email)
            sessionStorage.setItem('password' , password)
            console.log('For Submitted');
        }
    }
    return (

        <>
            <h2 className='p-2 shadow text-center mt-3 text-muted fs-5'>Hello My Git Hub User</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    <div className="date-format">
                        Date : {date}
                    </div>
                    {currentUsers.map((useD, index) => (
                        <div className=" col-10 col-md-4 mt-5" key={useD.id}>
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image">
                                        <img src={useD.avatar_url} width={55} alt="" />
                                    </div>
                                    <div className="ml-3 w-100">
                                        <h4 className=' mb-0 mt-0 textleft text-usd'>{useD.login.toUpperCase()}</h4>
                                        <div className=" p-3 mt-3   d-flex justify-content-between rounded">
                                            <div className="d-flex  text-white fw-bold  btn btn-success flex-column"><span className='article'>Articles</span><span className='number'>300</span></div>
                                            <div className="d-flex   flex-column btn btn-primary text-white fw-bold "><span className='article'>Followers</span><span className='number'>300</span></div>
                                            <div className="d-flex   flex-column btn btn-warning text-white fw-bold"><span className='article'>Rating</span><span className='number'>300</span></div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <nav className="mt-4">
                    <ul className="pagination justify-content-center">
                        {pageNumbers.map((number) => (
                            <li
                                key={number}
                                className={`page-item ${number === currentperPageUser ? 'active' : ''}`}
                            >
                                <button
                                    onClick={() => paginate(number)}
                                    className="page-link"
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="mt-3 shadow p-3 mb-3">
                                <form onSubmit={handleRegister}>
                                    <div className="form-group">
                                        <label htmlFor="">Name:</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        <span className='text-danger'>{error.name}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email:</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                        <span className='text-danger'>{error.email}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password:</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                        <span className='text-danger'>{error.password}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Confirm Password:</label>
                                        <input type="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} className="form-control" />
                                        <span className='text-danger'>{error.cpassword}</span>
                                    </div>
                                    <div className="form-group text-center mt-3 mb-3">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default GitHubFetch
