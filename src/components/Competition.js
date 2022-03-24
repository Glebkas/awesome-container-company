import React from 'react';
import { motion } from 'framer-motion';

function Competition(props) {
    return (
        <section className='competition'>
            <h2 className='competition__title'>The competition is no match</h2>
            <div className='competition__table-container'>
                <table className='table'>
                    <thead className='table__header'>
                        <tr className='table__row'>
                            <th className='table__header-cell'></th>
                            <th className='table__header-cell'>
                                Awesome Container Company
                            </th>
                            <th className='table__header-cell'>Deliver Zero</th>
                            <th className='table__header-cell'>
                                Logistics Company
                            </th>
                            <th className='table__header-cell'>
                                Washing Facility
                            </th>
                            <th className='table__header-cell'>
                                Single-use plastics
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Save over 50% on supply costs
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Save real estate storage costs
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Inventory management
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Never reorder supplies
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Easy pickup and delivery
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'>&nbsp;</td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                Sustainable products
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'></td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__cell'>
                                App for tracking and reporting
                            </td>
                            <td className='table__cell'>
                                <div className='table__cell-point table__cell-point_type_orange' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'>
                                <div className='table__cell-point' />
                            </td>
                            <td className='table__cell'></td>
                            <td className='table__cell'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Competition;
