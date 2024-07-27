import { useForm } from "react-hook-form";
type FormInputs = {
    email: string;
    password: string;
}


export const FormsPage = () => {
    
    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
      defaultValues: {
        email: 'diego@gmail.com',
        password: 'ABC123'
      }
    });

    const onSubmit = ( myForm: FormInputs ) => {
        console.log({ myForm })
    }

    return (
    <>
        <form onSubmit= { handleSubmit( onSubmit ) }>
            <h3>Formularios</h3>
            <div style ={{ display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="Email" { ...register('email', { required: true }) } />
                <br/>
                <input type="text" placeholder="password" { ...register('password')} />
                <br/>
                <button type="submit">Ingresar</button>
            </div>
        </form> 

        {/* <pre>
            { JSON.stringify(formState, null, 2 )}
        </pre> */}


    </> 
  )
}
