'use client'
import { useState, useEffect } from 'react';
import { bitable } from '@base-open/connector-api';

export default function App() {
    const [value, setValue] = useState('');
    const [userId, setUserId] = useState('');
    const [tenantKey, setTenantKey] = useState('');
    useEffect(() => {
        bitable.getConfig().then(config => {
            console.log('srcTablePath client', config);
            setValue(config?.value || '');
        });
        bitable.getUserId().then(id => {
            setUserId(id);
        });
        bitable.getTenantKey().then(key => {
            setTenantKey(key);
        })
    }, [])
    return (
        <div >
            <div>userId:{userId}</div>
            <div>tenantKey:{tenantKey}</div>
            <input value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={() => {
                bitable.saveConfigAndGoNext({ value, key: userId })
            }}>下一步</button>
        </div>
    )
}