import React from "react";
import { useForm } from "react-hook-form";



function Form(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <input placeholder="Company" name="companyname"{...register("Company")} />
    
    {/* include validation with required or other standard HTML validation rules */}
    <input style={{marginLeft:'5px'}} placeholder="Company Type" name="companytype"{...register("Copmany-Type", { required: true })} />
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}
    <br></br>
    <input placeholder="Location" name="location"{...register("Location")} />
    <label style={{marginLeft:'5px'}}>Remote</label>
    <select name = "remote" {...register("Remote", { required: true })}> 
      <option value = "ture" selected> True </option>
      <option value = "false"> False </option>
    </select>
    <br></br>
    <label>Position</label>
    <select name = "position" style={{marginLeft:'5px'}} {...register("Experience level", { required: true })}> 
      <option value = "Back-end Eningeer" selected> Back-end Engineer </option>
      <option value = "Front-end"> Front-end Engineer </option>
      <option value = "FullStack"> FullStack Engineer </option>
    </select>
    <label> Exprience Level</label>
    <select name= "experiencelevel" {...register("Exprience - Level", { required: true })}> 
      <option value = "Jr Engineer" selected> Jr Engineer </option>
      <option value = "Mid-level Engineer"> Mid-level Engineer </option>
      <option value = "Senior-level Engineer"> Senior-level Engineer</option>
    </select>
    <label > Tech stack </label>
    <input style={{marginLeft:'5px'}} placeholder="Tech Stack" name="tachstack"{...register("Tech Stack")} />
    <br></br>
      <label > Interview Stage</label>
    <select name = "stage" {...register("Stage", { required: true })}> 
      <option value = "Researching"> 0 - Researching </option>
      <option value = "Applied"> 1 - Applied </option>
      <option value = "PhoneScreen"> 2 - Phone Screen</option>
      <option value = "OnCampus"> 3 - On Campus</option>
      <option value = "Negotiation"> 4 - Negotiation</option>
      <option value = "Rejected"> 5 - Rejected  </option>
      <option value = "Offer"> 6 - Offer </option>
    </select>
    {/* <input {...register("Stage", { required: true })} /> */}
    <input name="currenttasks" placeholder="Current Tasks" {...register("current tasks", { required: true })} />
    <input placeholder="Contacts Info"{...register("contacts", { required: true })} />
    <br></br>
    <select name = "interest" {...register("Interest", { required: true })}> 
      <option > Interest Level </option>
      <option value = "low"> Not Really Interested </option>
      <option value = "medium"> Interested </option>
      <option value = "high"> Very Interested</option>
    </select>
    <input type="submit" />
  </form>
  )

}


export default Form;