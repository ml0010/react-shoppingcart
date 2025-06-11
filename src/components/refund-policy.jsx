import React from 'react'
import '../styles/refund-policy.css';

export const RefundPolicy = () => {
    return (
        <div className='refund'>
            <p><b>REFUND POLICY</b></p>
            <ul>
                <li>Cancellations more then 3 days in advance: Total amount. </li>
                <li>Cancellation between 48- 24 hours prior to tour date: 50% of the total amount.</li>
                <li>Cancellation less than 24 hours prior to tour date: 100% of the total amount.</li>
            </ul>
        </div>
    )
}
