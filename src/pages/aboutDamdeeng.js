import React from 'react';
import qs from 'qs';

const AboutDamdeeng = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    const detail = query.detail === 'true';

    console.log(detail)

    return (
        <div>
            <h1>담딩투어 소개</h1>
            {detail && <p>상세 소개</p>}
        </div>
    );
};

export default AboutDamdeeng;