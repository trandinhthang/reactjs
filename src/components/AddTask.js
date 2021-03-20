import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const[text, setText] = useState('');
    const[day, setDay] = useState('');
    const[reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert("Vui lòng nhập đầy đủ")
            return
        }

        onAdd( {text, day, reminder} );

        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Công việc</label>
                <input type="text" placeholder="Add Task"
                    value={text}
                    onChange= { (e) => setText(e.target.value) } />
            </div>
            <div className="form-control">
                <label>Thời gian</label>
                <input type="text" placeholder="Add Day and Time"
                    value={day}
                    onChange={ (e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Lời nhắc</label>
                <input type="checkbox" placeholder="Add Reminder" 
                    checked={reminder}
                    value={reminder}
                    onChange={ (e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input style={{backgroundColor:'green'}} type="submit" value="Lưu" className="btn btn-block" />
        </form>
    )
}

export default AddTask;
