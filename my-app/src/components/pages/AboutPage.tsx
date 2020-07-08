import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    const clickLink = (): void => {
        history.push('/')
    };
    return (
   <>
       <h1>Страница информации</h1>
       <p>Lorem ghjkldcvfbgnhmjnbvc</p>
       <button onClick={clickLink}>Обратно к списку дел</button>
   </>
    );
};

