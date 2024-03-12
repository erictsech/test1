'use client'
import { useState, useEffect } from 'react';

export default function App() {
    const [value, setValue] = useState('');
    const [userId, setUserId] = useState('');
    const [tenantKey, setTenantKey] = useState('');
    return (
        <div >
            <div>userId:{userId}</div>
            <div>tenantKey:{tenantKey}</div>
            <input value={value} onChange={(e) => { setValue(e.target.value) }} />
        </div>
    )
}
