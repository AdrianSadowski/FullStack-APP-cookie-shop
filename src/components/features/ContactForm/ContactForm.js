import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './ContactForm.module.scss';
import {error} from './errors';

const ContactForm = () => {
  const [captha, setCaptcha] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    console.log(data);

    if (captha === true) {
      console.log('pozytywnie wysyłamy', captha);

      // jeślli jest wszystko ok to wysyłamy maila :)
    } else {
      //jeśli brak autoryzacji reCAPTCHA
      alert('Brak weryfikacji reCAPTHA');
      console.log('Brak autoryzacji');
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <label>
            <span>name</span>
            <input type="text" {...register('Name', {required: true, maxLength: 80})} />
            {errors.Name && errors.Name.type === 'required' && (
              <p>{error.Name.required}</p>
            )}
            {errors.Name && errors.Name.type === 'maxLength' && (
              <p>{error.Name.maxLength}</p>
            )}
          </label>
          <label>
            <span>E-mail</span>
            <input type="text" {...register('Email', {required: true, pattern: /^\S+@\S+$/i})} />
            {errors.Email && errors.Email.type === 'required' && <p>{error.mail.required}</p>}
            {errors.Email && errors.Email.type === 'pattern' && <p>{error.mail.correct}</p>}
          </label>
          <label>
            <span>Phone number</span>
            <input
              type="tel"
              {...register('Mobile', {required: true, minLength: 6, maxLength: 12})}
            />
            {errors.Mobile && errors.Mobile.type === 'required' && (
              <p>{error.Mobile.required}</p>
            )}
            {errors.Mobile && errors.Mobile.type === 'maxLength' && (
              <p>{error.Mobile.maxLength}</p>
            )}
            {errors.Mobile && errors.Mobile.type === 'minLength' && (
              <p>{error.Mobile.minLength}</p>
            )}
          </label>
          <label>
            <span>message</span>
            <textarea {...register('Message', {required: true, maxLength: 1000})} />
            {errors.Message && errors.Message.type === 'required' && (
              <p>{error.Message.required}</p>
            )}
            {errors.Message && errors.Message.type === 'maxLength' && (
              <p>{error.Message.required}</p>
            )}
          </label>
          <div className={styles.sendForm}>
            <label className={styles.veryfication}>
              <span></span>
              <div className={styles.googlecaptha}>
                <ReCAPTCHA
                  sitekey="6Lf_yKgeAAAAABkoFCKyJO01ietAV531d_9yJdrF"
                  onChange={e => setCaptcha(!captha)}
                  onExpired={e => setCaptcha(false)}
                />
                ,
              </div>
            </label>
            <div className={styles.formButtons}>
              <button type="reset" className={styles.reset}>
                Clear
              </button>
              <button type="submit" className={styles.submit}>
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
