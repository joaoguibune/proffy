import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState(
        [
            { week_day: 0, from: '', to: '' }
        ]
    );

    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Deu good!')
            history.push('/')
        }).catch(() => {
            alert('Deu merda!')
        })
      
    }


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' },
        ]);
    }
    function setScheduleItemValue(position:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]: value};
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="You want to teach, this is awesome!"
                description="The first step is fill out the form below"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Personal information</legend>
                        <Input
                            name="name"
                            label="Full Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar (URL)"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="whatsapp"
                            type="phone" label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea
                            name="bio"
                            label="Your bio"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Classes information</legend>
                        <Select
                            name="subject"
                            label="Subject"
                            options={[
                                { value: 'Art', label: 'Art' },
                                { value: 'Algebra', label: 'Algebra' },
                                { value: 'Biology', label: 'Biology' },
                                { value: 'Chemistry', label: 'Chemistry' },
                                { value: 'English', label: 'English' },
                                { value: 'Geography', label: 'Geography' },
                                { value: 'History', label: 'History' },
                                { value: 'Math', label: 'Math' },
                                { value: 'Physical Education', label: 'Physical Education' }
                            ]}
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                        />
                        <Input
                            name="cost"
                            label="Cost per hour (Usd)"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Schedule
                        <button type="button" onClick={addNewScheduleItem}>
                                + Add Day
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Weekday"
                                        value={scheduleItem.week_day}
                                        onChange={(e) => { setScheduleItemValue(index, 'week_day', e.target.value) }}
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' }
                                        ]}
                                    />
                                    <Input 
                                    name="from" 
                                    label="From"
                                    value={scheduleItem.from} 
                                    type="time" 
                                    onChange={(e) => { setScheduleItemValue(index, 'from', e.target.value) }}
                                    />
                                    <Input 
                                    name="from" 
                                    label="To" 
                                    value={scheduleItem.to}
                                    type="time"
                                    onChange={(e) => { setScheduleItemValue(index, 'to', e.target.value) }}    
                                    />
                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning" />
                        Important! <br />
                        Fill all fields
                    </p>
                        <button type="submit">
                            Save Information
                    </button>
                    </footer>
                </form>
            </main>
        </div>

    )
}

export default TeacherForm