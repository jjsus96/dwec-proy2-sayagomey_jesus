import React from 'react'
import './Contacto.css'
import { Formik, Field, Form } from 'formik';

const Contacto = () => {

    const validateForm = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'El nombre es necesario';
        } else if (values.name.length > 15) {
            errors.name = 'Debe contener menos de 15 caracteres';
        }


        if (!values.email) {
            errors.email = 'El Email es necesario';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Dirección de email no válida';
        }


        if (!values.subject) {
            errors.subject = 'El asunto es necesario';
        }

        return errors;
    };


    return (
        <Formik
            initialValues={{ name: '', email: '', subject: '', content: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
            }}
            validate={validateForm}
        >
            {(formik, isSubmitting) => (
                
                <Form id='contact' className='centrar'>
                    <h1 className='nombre' id='contact'>Contacto</h1>
                    <div className="form-group">
                        <label htmlFor="name" className='textoformulario'>Nombre</label>
                        <Field name="name" className={(formik.touched.name && formik.errors.name) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        
                        {formik.touched.name && formik.errors.name ? (
                            <div className="invalid-feedback">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className='textoformulario'>Email</label>
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                        
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className='textoformulario'>Asunto</label>
                        <Field name="subject" className={(formik.touched.subject && formik.errors.subject) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        
                        {formik.touched.subject && formik.errors.subject ? (
                            <div className="invalid-feedback">{formik.errors.subject}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="content" className='textoformulario'>Mensaje</label>
                        <Field name="content" className="form-control" as="textarea" rows={3} cols={10} />
                    </div>
                    <div className='btnform'>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>

                </Form>
            )
            }
        </Formik >
    );
};

export default Contacto;