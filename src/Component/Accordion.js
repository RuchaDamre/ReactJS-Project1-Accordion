import React from "react";
import './Accordion.css';
import { Plus, Minus } from 'react-feather';

function AccordianPage() {

    const [count, setCount] = React.useState([]);
    const [condition, setCondition] = React.useState(false);
    const data = [
        {
            id: 1,
            que: 'Do you accept all major credit cards?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi fugiat adipisci ipsum pariatur ea, impedit praesentium asperiores',
        },
        {
            id: 2,
            que: 'Do you support local farmer?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi fugiat adipisci ipsum pariatur ea, impedit praesentium asperiores',
        },
        {
            id: 3,
            que: 'Do you use organic ingredients?',
            ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi fugiat adipisci ipsum pariatur ea, impedit praesentium asperiores',
        },
    ]

    function handle(id) {
        if (condition === true) {
            if (count.includes(id)) {
                setCount(count.filter((item) => item !== id));
            }
            else {
                setCount([...count, id])
            }
        }
        else {
            setCount(count[0] === id ? [] : [id]);
        }
    }

    return (
        <>
            <h1 className="heading">General Questions</h1>
            <main className="data-wrapper">
                <button className="multi-btn" onClick={() => setCondition(!condition)}>Enable Multi Selection :  {condition ? <p className="enable">Enabled</p> : <p className="enable">Disabled</p>}</button>
                {
                    data.map((value, index) => {
                        return (<section className="que-ans-wrapper" key={index}>
                            <div className="que-wrapper" onClick={() => handle(value.id)}>
                                <p>{value.que}</p>
                                {
                                    count.includes(value.id) ? <Minus className="btn" /> : <Plus className="btn" />
                                }
                            </div>
                            {count.includes(value.id) && <div className="ans-wrapper">
                                <p className="ans">{value.ans}</p>
                            </div>}
                        </section>)
                    })
                }
            </main>
        </>
    )
}

export default AccordianPage;
