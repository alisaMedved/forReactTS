import React, {useState} from 'react';

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    return (
            <div className="input-field mt2">
                <input id="title" type="text"
                       onChange={}
                       placeholder="Введите назание дела" />
                    <label htmlFor="title" className="active">
                        Введите назание дела
                    </label>
            </div>
    );
};

