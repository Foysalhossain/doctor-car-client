import React from 'react';

const BookingRow = ({ booking }) => {
    const { img, date, service, price } = booking;
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </td>
                <td>{service}</td>
                <td>{date}</td>
                <td>{"$" + price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;