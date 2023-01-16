import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ 
            background:`url(${appointment})`
        }} className="flex justify-center items-center">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className="text-xl text-primary my-10">Appointment</h3>
                <h2 className="text-3xl text-white py-4">Make an Appointment</h2>
                <p className="text-white pb-5">We offer a range of appointment types to choose from, and we will do our best to arrange a same-day appointment. For your first appointment with us, or a complex medical issue or more than one issue, we recommend booking a 30-minute appointment. For repeat appointments or simple issues, a 15-minute appointment may be ideal for you.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;