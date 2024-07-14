import { useState } from 'react';
import './App.css';
import star from './images/icon-star.svg'
// import closedIcon from './images/icon-plus.svg';
// import openIcon from './images/icon-minus.svg';


function App() {
  const [selected, setSelected] = useState(null)

  const ClosedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>;
  const OpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>;

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className='accordian'>

          <div className='faq-heading'>
            <img src={star} alt="" />
            <h1>FAQs</h1>
          </div>

          {data.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? OpenIcon : ClosedIcon }
                </span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}

  const data = [
  {
      question: `What is Frontend Mentor, and how will it help me?`,
      answer:   
            `Frontend Mentor offers realistic coding challenges to
             help developers improve their frontend coding skills with 
             projects in HTML, CSS, and JavaScript. It's suitable for
             all levels and ideal for portfolio building.`,
  },
  {
      question: `Is Frontend Mentor free?`,
      answer: 
            `Yes, Frontend Mentor offers both free and premium coding 
            challenges, with the free option providing access to a 
            range of projects suitable for all skill levels.`,
  },
  {
      question: `Can I use Frontend Mentor projects in my portfolio?`,
      answer: 
            `Yes, you can use projects completed on Frontend Mentor in 
             your portfolio. It's an excellent way to showcase your skills 
             to potential employers!`,
  },
  {
      question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
      answer: 
            `The best place to get help is inside Frontend Mentor's Discord 
            community. There's a help channel where you can ask questions and 
            seek support from other community members.`, 
  },

]


export default App;
