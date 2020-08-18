import React from 'react';
import PageHeader from '../../components/PageHeader'
import './styles.css';
import TeacherItem from '../../components/TeacherItem';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="These are the available proffys.">
               <form id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Class</label>
                       <input type="text" id="subject" />
                   </div>
                   <div className="input-block">
                       <label htmlFor="weekday">Weekday</label>
                       <input type="text" id="weekday" />
                   </div>
                   <div className="input-block">
                       <label htmlFor="time">Time</label>
                       <input type="text" id="time" />
                   </div>
               </form>
           </PageHeader>
           <main>
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
           </main>
        </div>
    )
}

export default TeacherList