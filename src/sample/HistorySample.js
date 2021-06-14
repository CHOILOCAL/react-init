import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';


function HistorySample({ history }) {

    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            unblock();
        };
    }, [history]);

    return (
        <div>
            <Button variant="success" onClick={goBack}>뒤로가기</Button>
            <Button variant="success" onClick={goHome}>홈으로</Button>
        </div>
    );
}

export default HistorySample;