import React from "react";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import { addUsers } from "../reducers/userSlice";
import {v4 as uuid} from "uuid"

const CreateUserForm = () => {

    const dispatch = useDispatch()

    const {
        register, handleSubmit, formState:{errors}
    } = useForm()

    const createUser = (user) =>{
        // console.log(user);
        // console.log(uuid())
        if(user){
            user.id = uuid()
        }
        // console.log(user);
        // api.post("/register",user)
        dispatch(addUsers(user));
    }


  return (
    <form className="card" onSubmit={handleSubmit(createUser)}>
        <label>UserName:</label>
        <input placeholder="Username" type="text" {...register("username", {required:"username is required"})} aria-invalid={errors.username ? "true" : "false"} />
        {errors.username && <p>{errors.username?.message}</p>}

        <label>Name:</label>
        <input placeholder="Name" type="text" {...register("name", {required:"name is required"})} aria-invalid={errors.name ? "true" : "false"} />
        {errors.name && <p>{errors.name?.message}</p>}

        <label>Email:</label>
        <input placeholder="Email" type="email" {...register("email", {required:"email is required"})} aria-invalid={errors.email ? "true" : "false"} />
        {errors.email && <p>{errors.email?.message}</p>}

        <label>Website:</label>
        <input placeholder="Website" type="text" {...register("website", {required:"website is required"})} aria-invalid={errors.website ? "true" : "false"} />
        {errors.website && <p>{errors.website?.message}</p>}
        <br/>
        <button type="submit">Add New User</button>
    </form>
  );
};

export default CreateUserForm;
